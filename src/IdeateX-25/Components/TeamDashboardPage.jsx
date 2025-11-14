import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"
import TeamDetailsPage from "./TeamDetailsPage"

const DUMMY_TEAM = {
  id: "DUMMY123",
  name: "Team Example",
  code: "ABCDEF",
  leader: "Vaibhav",
  createdAt: new Date().toISOString(),
  members: [
    { id: "m1", name: "Vaibhav", year: "3rd", role: "Team Lead", contact: "+91-90000-00001" },
    { id: "m2", name: "Anant", year: "2nd", role: "Member", contact: "+91-90000-00002" },
    { id: "m3", name: "Arpit", year: "4th", role: "Member", contact: "+91-90000-00003" }
  ]
}

export default function TeamDashboardPage() {
  const navigate = useNavigate()
  const location = useLocation()
  // Use passed teamData (if navigated with state) otherwise use dummy data for now
  const [teamData, setTeamData] = useState(location.state?.teamData || DUMMY_TEAM)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const teamId = localStorage.getItem('ideatex_teamID')
      if (!teamId) {
        setError("Team ID not found in localStorage")
        return
      }

      setLoading(true)
      try {
        const response = await axios.post('https://p9kq5k4g-3003.inc1.devtunnels.ms/api/v1/team/members', {
          teamId: teamId
        }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('ideatex_token')}`,
            'Content-Type': 'application/json'
          }
        })

        console.log(response.data)
        if (response.data.success) {
          // Transform API response to match expected format
          const apiMembers = response.data.data.members || []
          const leaderMember = apiMembers.find(member => member.role === 'LEADER') || apiMembers[0]
          
          const membersWithDetails = await Promise.all(
            apiMembers.map(async (member) => {
              try {
                const userResponse = await axios.get(`https://p9kq5k4g-3003.inc1.devtunnels.ms/api/v1/user/${member.userId}`, {
                  headers: {
                    'Authorization': `Bearer ${localStorage.getItem('ideatex_token')}`,
                  }
                })
                
                console.log(userResponse.data)

                const userData = userResponse.data.data.user
                return {
                  id: member._id,
                  name: userData.name || 'Unknown',
                  year: 'N/A', // User API doesn't provide year field
                  role: member.role,
                  contact: userData.phone ? `+91-${userData.phone}` : 'N/A',
                  libraryId: userData.libId || 'N/A',
                  gender: userData.gender || 'N/A',
                  email: userData.email || 'N/A',
                  rollNo: userData.rollNo || 'N/A',
                  college: userData.college || 'N/A'
                }
              } catch (error) {
                console.error(`Failed to fetch user details for ${member.userId}:`, error)
                // Return member with placeholder data if user details fetch fails
                return {
                  id: member._id,
                  name: member.role === 'LEADER' ? 'Team Leader' : `Member ${member._id.slice(-4)}`,
                  year: 'N/A',
                  role: member.role,
                  contact: 'N/A',
                  libraryId: 'N/A',
                  gender: 'N/A',
                  email: 'N/A',
                  rollNo: 'N/A',
                  college: 'N/A'
                }
              }
            })
          )
          
          // Find leader details
          const leaderDetails = membersWithDetails.find(member => member.role === 'LEADER') || membersWithDetails[0]
          
          const transformedTeamData = {
            id: leaderMember?.teamId || 'unknown',
            name: leaderMember?.teamName || 'Unknown Team',
            code: leaderMember?.teamCode || 'XXXXXX',
            leader: {
              name: leaderDetails?.name || 'Team Leader',
              year: leaderDetails?.year || 'N/A',
              libraryId: leaderDetails?.libraryId || 'N/A',
              gender: leaderDetails?.gender || 'N/A'
            },
            createdAt: new Date().toISOString(),
            members: membersWithDetails
          }
          
          setTeamData(transformedTeamData)
        } else {
          setError("Failed to fetch team data")
        }
      } catch (err) {
        console.error("Error fetching team members:", err)
        setError(err.response?.data?.message || "Failed to fetch team data")
      } finally {
        setLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  const handleRemoveMember = (memberId) => {
    setTeamData(prev => ({
      ...prev,
      members: prev.members.filter(member => member.id !== memberId)
    }))
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  // teamData will always be available (either real or dummy) so we don't redirect

  return (
    <TeamDetailsPage
      teamData={teamData}
      onBackToHome={handleBackToHome}
      onRemoveMember={handleRemoveMember}
      loading={loading}
      error={error}
    />
  )
}