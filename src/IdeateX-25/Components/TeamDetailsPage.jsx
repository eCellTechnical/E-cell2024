import { X, Copy, UserCircle2, Crown, Hash } from "lucide-react";
import { useState } from "react";
import Header from "./Header";

export default function TeamDetailsPage({
  teamData,
  onBackToHome,
  onRemoveMember,
}) {
  const [copied, setCopied] = useState(false);
  const [memberToRemove, setMemberToRemove] = useState(null);

  const handleCopyTeamCode = () => {
    // Using document.execCommand as a fallback for potential iframe restrictions
    try {
      const el = document.createElement("textarea");
      el.value = teamData.code;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // You could show an error message here
    }
  };

  const handleRemoveClick = (member) => {
    setMemberToRemove(member);
  };

  const confirmRemove = () => {
    if (memberToRemove) {
      onRemoveMember(memberToRemove.id);
      setMemberToRemove(null);
    }
  };

  const cancelRemove = () => {
    setMemberToRemove(null);
  };

  return (
    <div className="relative bg-black overflow-hidden min-h-screen">
      {/* Grid pattern background */}
      <Header />
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 2px, transparent 2px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.3) 2px, transparent 2px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      {/* Gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900/30 via-purple-950/10 to-transparent pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Dashboard Header */}
          <div className="text-center space-y-3 mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Team Dashboard
            </h1>
            <p className="text-gray-400 text-lg">
              Your team details and management
            </p>
          </div>

          {/* Team Name & Code Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team Name Card */}
            <div className="bg-[#1a1a1a] border-2 border-purple-500/30 text-gray-100 rounded-xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-800">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <Hash className="h-5 w-5 text-purple-400" />
                  Team Name
                </h3>
              </div>
              <div className="p-6">
                <div className="px-4 py-4 bg-[#232323] border-2 border-gray-700 rounded-lg">
                  <p className="text-gray-100 font-medium text-2xl">
                    {teamData.name || "TeamTulls"}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-3">Your team name</p>
              </div>
            </div>

            {/* Team Code Card */}
            <div className="bg-gradient-to-br from-purple-900/40 to-violet-900/20 border-2 border-purple-500/50 text-gray-100 rounded-xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-purple-500/30">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <Copy className="h-5 w-5 text-purple-400" />
                  Team Code
                </h3>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between bg-black/40 px-6 py-4 rounded-lg border border-purple-500/30">
                  <span className="text-3xl font-bold text-purple-400 tracking-widest">
                    {teamData.code}
                  </span>
                  <button
                    onClick={handleCopyTeamCode}
                    aria-label="Copy team code"
                    className="flex items-center justify-center h-10 w-10 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-full transition-colors"
                  >
                    {copied ? (
                      <span className="text-lg">✓</span>
                    ) : (
                      <Copy className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  {copied
                    ? "Code copied to clipboard!"
                    : "Share this code to invite members"}
                </p>
              </div>
            </div>
          </div>

          {/* Team Details Section */}
          <div className="bg-[#1a1a1a] border-2 border-purple-500/30 text-gray-100 rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold text-gray-100">Team Details</h3>
            </div>
            <div className="p-6 space-y-6">
              {/* Team Leader */}
              <div className="p-6 bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-xl border-2 border-purple-500/50">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-yellow-400" />
                  <h3 className="text-lg font-bold text-gray-200">
                    Team Leader
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500">Name</p>
                    <p className="text-sm font-semibold text-gray-200">
                      {teamData.leader.name}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500">Year</p>
                    <p className="text-sm font-semibold text-gray-200">
                      {teamData.leader.year}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500">Library ID</p>
                    <p className="text-sm font-semibold text-gray-200">
                      {teamData.leader.libraryId}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500">Gender</p>
                    <p className="text-sm font-semibold text-gray-200">
                      {teamData.leader.gender}
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <UserCircle2 className="h-6 w-6 text-purple-400" />
                  <h3 className="text-lg font-bold text-gray-200">
                    Team Members ({teamData.members?.length || 0}/4)
                  </h3>
                </div>

                {!teamData.members || teamData.members.length === 0 ? (
                  <div className="text-center py-8 bg-[#232323] rounded-xl border border-gray-800">
                    <UserCircle2 className="h-12 w-12 text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-400">No members yet</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Share your team code to invite members
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {teamData.members.map((member) => (
                      <div
                        key={member.id}
                        className="relative p-5 bg-[#232323] rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all group"
                      >
                        <button
                          onClick={() => handleRemoveClick(member)}
                          aria-label={`Remove ${member.name}`}
                          className="absolute top-3 right-3 flex items-center justify-center h-8 w-8 text-gray-600 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all rounded-full"
                        >
                          <X className="h-4 w-4" />
                        </button>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="space-y-1">
                            <p className="text-xs text-gray-500">Name</p>
                            <p className="font-semibold text-gray-200">
                              {member.name}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-gray-500">Year</p>
                            <p className="font-semibold text-gray-200">
                              {member.year}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-gray-500">Library ID</p>
                            <p className="font-semibold text-gray-200">
                              {member.libraryId}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-gray-500">Gender</p>
                            <p className="font-semibold text-gray-200">
                              {member.gender}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {memberToRemove && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border-2 border-purple-500/50 rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-100">
                Remove Team Member?
              </h3>
              <p className="text-gray-400">
                Are you sure you want to remove{" "}
                <span className="font-semibold text-purple-400">
                  {memberToRemove.name}
                </span>{" "}
                from the team?
              </p>
              <p className="text-sm text-gray-500">
                This action cannot be undone.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={cancelRemove}
                className="flex-1 px-4 py-2 bg-transparent border border-gray-700 hover:bg-gray-800 text-gray-300 rounded-md text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemove}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
