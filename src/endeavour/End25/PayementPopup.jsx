import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Upload, X } from "lucide-react";

const EventRegistrationPopup = ({
  isOpen,
  onClose,
  eventSlug,
  eventName,
  eventFees,
  qrCode,
}) => {
  const [activeTab, setActiveTab] = useState("create"); // 'create' or 'join'
  const [formData, setFormData] = useState({
    eventSlug: eventSlug || "",
    leaderId: "",
    teamName: "",
    teamCode: "",
    paymentTransactionId: "",
    paymentScreenshot: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(eventFees);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [createdTeamId, setCreatedTeamId] = useState(null);

  useEffect(() => {
    const getEventSlugFromUrl = () => {
      if (typeof window !== "undefined") {
        const path = window.location.pathname;
        const match = path.match(/\/events\/([^/]+)/);
        return match ? match[1] : "";
      }
      return "";
    };
    const slug = eventSlug || getEventSlugFromUrl();
    if (slug) {
      setFormData((prev) => ({ ...prev, eventSlug: slug }));
    }
    const userId = localStorage.getItem("userId");
    if (userId) {
      setFormData((prev) => ({ ...prev, leaderId: userId }));
    }
  }, [eventSlug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handlePaymentGatewayChange = async () => {
    setIsSubmitting(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://two5-backend.onrender.com/api/v1/initiate",
        {
          // amount: discountedPrice,
          userId: localStorage.getItem("userId"),
          // productinfo: eventName,
          teamId: createdTeamId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const paymentLink = response.data.paymentLink;
      if (paymentLink) {
        window.location.href = "https://pay.easebuzz.in/v2/pay/" + paymentLink;
      } else {
        throw new Error("Failed to fetch payment link");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, paymentScreenshot: e.target.files[0] }));
  };

  const uploadImage = async (file) => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "Endver");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dghyx2pvc/image/upload",
      form
    );
    return response.data.secure_url;
  };

  // Step 1: create team without payment
  const handleContinue = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      if (activeTab === "create") {
        if (
          displayEventName !== "Entertainment Eve" &&
          !formData.teamName.trim()
        ) {
          throw new Error("Team name is required");
        }
        const uniqueTeamName =
          displayEventName === "Entertainment Eve"
            ? `eve_team_${Math.random().toString(36).substr(2, 9)}`
            : formData.teamName;

        const resp = await axios.post(
          "https://two5-backend.onrender.com/api/v1/addTeam",
          {
            eventSlug: formData.eventSlug,
            leaderId: formData.leaderId,
            teamName: uniqueTeamName,
            paymentTransactionId:
              formData.paymentTransactionId || "000000000000",
            paymentScreenshot:
              "https://res.cloudinary.com/dyry5jopl/image/upload/v1745475326/Gemini_Generated_Image_8c41ke8c41ke8c41_xqfzuc.jpg" ||
              "",
          }
        );
        if (resp.data.success && resp.data.data.team._id) {
          setShowPaymentModal(true);
          setCreatedTeamId(resp.data.data.team._id);
        } else {
          throw new Error(resp.data.message || "Failed to create team");
        }
      } else {
        // Join team logic
        if (!formData.teamCode.trim()) throw new Error("Team code is required");
        const token = localStorage.getItem("token");

        const data = {
          userId: formData.leaderId,
          teamCode: formData.teamCode,
        };

        const resp = await axios.post(
          `https://two5-backend.onrender.com/api/v1/joinTeam`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (resp.data.success) {
          setSuccess(true);
          setTimeout(
            () => (window.location.href = "/endeavour/profile?events"),
            2000
          );
        } else {
          throw new Error(resp.data.message || "Failed to join team");
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 2: handle payment (for create team only)
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const { paymentTransactionId, paymentScreenshot } = formData;
      if (!paymentTransactionId.trim())
        throw new Error("Transaction ID is required");
      if (paymentTransactionId.trim().length !== 12)
        throw new Error("Transaction ID must be exactly 12 characters long");
      if (!paymentScreenshot) throw new Error("Payment screenshot is required");
      const screenshotUrl = await uploadImage(paymentScreenshot);
      const id = createdTeamId;

      const token = localStorage.getItem("token");

      const res = await axios.put(
        `https://two5-backend.onrender.com/api/v1/teams/${id}/payment`,
        {
          paymentTransactionId,
          paymentScreenshot: screenshotUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.success) {
        setSuccess(true);
        setTimeout(
          () => (window.location.href = "/endeavour/profile?events"),
          2000
        );
      } else {
        throw new Error(res.data.message || "Payment update failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const displayEventName =
    eventName ||
    (formData.eventSlug ? formData.eventSlug.replace(/-/g, " ") : "the event");

  return (
    <>
      {/* Original Registration Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
        <div className="bg-gradient-to-b from-[#1e2a38] to-[#18222D] rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-700">
          <div className="flex justify-between items-center p-5 border-b border-gray-700 bg-[#1c2634]">
            <h2 className="text-2xl font-bold text-white">
              Event Registration
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors hover:bg-gray-700 rounded-full p-1"
            >
              <X size={24} />
            </button>
          </div>
          <div className="p-6 md:p-8">
            <p className="mb-6 text-md text-gray-300">
              Register for{" "}
              <span className="text-[#00fcb8] font-medium capitalize">
                {displayEventName}
              </span>
            </p>
            {displayEventName != "Entertainment Eve" && (
              <div className="flex mb-8 bg-[#111920] rounded-lg p-1.5 max-w-sm mx-auto">
                {displayEventName != "Entertainment Eve" && (
                  <button
                    className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "create"
                        ? "bg-[#00fcb8] text-black shadow-lg"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setActiveTab("create")}
                  >
                    Create Team
                  </button>
                )}
                {displayEventName != "Entertainment Eve" && (
                  <button
                    className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "join"
                        ? "bg-[#00fcb8] text-black shadow-lg"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setActiveTab("join")}
                  >
                    Join Team
                  </button>
                )}
              </div>
            )}
            {!success ? (
              <form
                onSubmit={handleContinue}
                className="space-y-6 md:space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="eventSlug"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Event
                    </label>
                    <input
                      id="eventSlug"
                      name="eventSlug"
                      type="text"
                      value={displayEventName}
                      disabled
                      className="bg-[#111920] block w-full px-4 py-3 border border-gray-700 rounded-md text-gray-300 sm:text-sm"
                    />
                  </div>
                  {displayEventName != "Entertainment Eve" && (
                    <div>
                      <label
                        htmlFor="leaderId"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {activeTab === "create" ? "Team Leader ID" : "Your ID"}
                      </label>
                      <input
                        id="leaderId"
                        name="leaderId"
                        type="text"
                        value={formData.leaderId}
                        disabled
                        className="bg-[#111920] block w-full px-4 py-3 border border-gray-700 rounded-md text-gray-300 sm:text-sm"
                      />
                    </div>
                  )}
                </div>
                {activeTab === "create" ? (
                  displayEventName != "Entertainment Eve" && (
                    <div>
                      <label
                        htmlFor="teamName"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Team Name
                      </label>
                      <input
                        id="teamName"
                        name="teamName"
                        type="text"
                        value={formData.teamName}
                        onChange={handleChange}
                        required
                        className="bg-[#111920] block w-full px-4 py-3 border border-gray-700 rounded-md text-gray-300 sm:text-sm"
                        placeholder="Enter your team name"
                      />
                    </div>
                  )
                ) : (
                  <div>
                    <label
                      htmlFor="teamCode"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Team Code
                    </label>
                    <input
                      id="teamCode"
                      name="teamCode"
                      type="text"
                      value={formData.teamCode}
                      onChange={handleChange}
                      required
                      className="bg-[#111920] block w-full px-4 py-3 border border-gray-700 rounded-md text-gray-300 sm:text-sm"
                      placeholder="Enter team code"
                    />
                  </div>
                )}
                {error && <div className="text-red-500 text-sm">{error}</div>}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-md text-black bg-[#00fcb8] hover:bg-[#00d06d] disabled:opacity-50"
                  >
                    {isSubmitting
                      ? activeTab === "create"
                        ? "Continuing..."
                        : "Joining..."
                      : activeTab === "create"
                      ? "Continue"
                      : "Join Team"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-6 bg-[#0d3331] border border-[#00fcb8] rounded-md text-[#00fcb8]">
                <p>
                  {activeTab === "create"
                    ? "Team created! Proceed to payment."
                    : "Successfully joined the team!"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Payment Modal: shown only after Continue (for create team only) */}
      {showPaymentModal && activeTab === "create" && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-gradient-to-b from-[#1e2a38] to-[#18222D] rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="flex justify-between items-center p-5 border-b border-gray-700 bg-[#1c2634]">
              <h2 className="text-2xl font-bold text-white">Payment Details</h2>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-400 hover:text-white transition-colors hover:bg-gray-700 rounded-full p-1"
              >
                <X
                  onClick={() =>
                    (window.location.href = "/endeavour/profile?events")
                  }
                  size={24}
                />
              </button>
            </div>
            <form
              onSubmit={handlePaymentSubmit}
              className="p-6 md:p-8 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 text-sm mb-2">Amount to Pay:</p>
                  <p className="text-[#00fcb8] font-bold text-2xl">
                    ₹{discountedPrice}
                  </p>

                  {displayEventName === "Entertainment Eve" && (
                    <>
                      <div className="mt-4">
                        <label
                          htmlFor="paymentTransactionId"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Transaction ID
                        </label>
                        <input
                          id="paymentTransactionId"
                          name="paymentTransactionId"
                          type="text"
                          value={formData.paymentTransactionId}
                          onChange={handleChange}
                          required
                          className="bg-[#18222D] block w-full px-4 py-3 border border-gray-700 rounded-md text-gray-300 sm:text-sm"
                          placeholder="Enter transaction ID"
                        />
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="paymentScreenshot"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Payment Screenshot
                        </label>
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer bg-[#18222D] hover:bg-[#111920]">
                          <div className="pt-5 pb-6 text-gray-400 text-center">
                            <Upload size={32} className="mx-auto mb-2" />
                            <p className="text-sm">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs mt-1 text-gray-500">
                              {formData.paymentScreenshot?.name ||
                                "PNG, JPG (MAX. 5MB)"}
                            </p>
                          </div>
                          <input
                            id="paymentScreenshot"
                            name="paymentScreenshot"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                            required
                          />
                        </label>
                      </div>
                    </>
                  )}
                </div>
                {displayEventName === "Entertainment Eve" && (
                  <div className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm font-medium mb-3">
                      Scan QR Code to Pay:
                    </p>
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <img
                        src={qrCode}
                        alt="Payment QR Code"
                        className="w-full max-w-xs object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}

              {displayEventName === "Entertainment Eve" ? (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-md text-black bg-[#00fcb8] hover:bg-[#00d06d] disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              ) : (
                <>
                  {/* <div className="text-center text-gray-400">OR</div> */}
                  <button
                    type="button"
                    onClick={handlePaymentGatewayChange}
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-md text-black bg-[#00fcb8] hover:bg-[#00d06d] disabled:opacity-50"
                  >
                    Pay through Payment Gateway
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

EventRegistrationPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  eventSlug: PropTypes.string,
  eventName: PropTypes.string,
  eventFees: PropTypes.number,
  qrCode: PropTypes.string,
};

export default EventRegistrationPopup;