import { useNavigate, useLocation } from "react-router-dom"
import PaymentDialog from "./PaymentDialog"

export default function PaymentPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const formData = location.state?.formData || {}
  
  const handlePaymentSubmit = (paymentData) => {
    console.log('Payment submitted:', paymentData)
    
    // Generate team code and create team data
    const generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase()
    
    // Create team data with form user as leader and 3 dummy members
    const teamData = {
      code: generatedCode,
      name: formData.teamName,
      leader: {
        name: formData.name,
        year: formData.year,
        libraryId: formData.libraryId,
        gender: formData.gender
      },
      members: [
        {
          id: 1,
          name: 'Anurag',
          year: '2nd Year',
          libraryId: 'LIB2023456',
          gender: 'Male'
        },
        {
          id: 2,
          name: 'Vanshika',
          year: '3rd Year',
          libraryId: 'LIB2022789',
          gender: 'Female'
        },
        {
          id: 3,
          name: 'Jatin',
          year: '2nd Year',
          libraryId: 'LIB2023012',
          gender: 'Male'
        }
      ]
    }
    
    // Navigate to team dashboard with team data
    navigate('/team-dashboard', { state: { teamData } })
  }

  return (
    <div className="relative bg-black min-h-screen">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 2px, transparent 2px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.3) 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Purple gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900/30 via-purple-950/10 to-transparent pointer-events-none"></div>
      

      <PaymentDialog
        isOpen={true}
        onClose={() => navigate('/register')}
        onSubmit={handlePaymentSubmit}
        formData={formData}
      />
    </div>
  )
}