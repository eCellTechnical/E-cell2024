import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
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
    />
  )
}