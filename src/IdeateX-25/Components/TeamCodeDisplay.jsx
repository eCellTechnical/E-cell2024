import { Copy, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function TeamCodeDisplay({ isOpen, onClose, teamCode }) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    // Using document.execCommand as a fallback for potential iframe restrictions
    try {
      const el = document.createElement('textarea');
      el.value = teamCode;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // You could show an error message here
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      aria-labelledby="team-code-dialog-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="sm:max-w-[500px] w-full bg-[#1a1a1a] border border-gray-800 rounded-2xl shadow-2xl">
        <div className="pt-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 id="team-code-dialog-title" className="text-2xl text-gray-100 text-center font-semibold">
              Payment Successful!
            </h2>
          </div>
        </div>
        
        <div className="space-y-6 py-6 px-6">
          <p className="text-center text-gray-400">
            Your team has been created successfully. Share this code with your team members.
          </p>

          {/* Team Code Display */}
          <div className="bg-gradient-to-r from-purple-900/40 to-violet-900/40 border-2 border-purple-500/60 rounded-xl p-8">
            <p className="text-sm text-gray-400 text-center mb-3">Your Team Code</p>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-purple-400 tracking-widest mb-4 font-mono">
                {teamCode}
              </p>
              <button
                onClick={handleCopyCode}
                className="inline-flex items-center justify-center px-4 py-2 border border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 text-purple-400 hover:text-purple-300 rounded-md text-sm font-medium transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Code
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-[#232323] border border-gray-700 rounded-xl p-4 space-y-2">
            <h4 className="text-sm font-semibold text-gray-300">Important Notes:</h4>
            <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
              <li>Save this team code securely</li>
              <li>Share with your team members to join</li>
              <li>Team members will need this code to join your team</li>
              <li>Keep this code confidential</li>
            </ul>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}