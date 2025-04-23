import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { Upload, X } from "lucide-react";

const PaymentModal = ({
  eventName,
  discountedPrice,
  qrCode,
  onClose,
  onSubmit,
  teamId,
}) => {
  const [formData, setFormData] = useState({
    paymentTransactionId: "",
    paymentScreenshot: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const { paymentTransactionId, paymentScreenshot } = formData;
      if (!paymentTransactionId.trim()) throw new Error("Transaction ID is required");
      if (paymentTransactionId.trim().length !== 12)
        throw new Error("Transaction ID must be exactly 12 characters long");
      if (!paymentScreenshot) throw new Error("Payment screenshot is required");

      const screenshotUrl = await uploadImage(paymentScreenshot);
      const token = localStorage.getItem("token");

      await onSubmit({
        teamId,
        paymentTransactionId,
        paymentScreenshot: screenshotUrl,
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-[#1e2a38] to-[#18222D] rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="flex justify-between items-center p-5 border-b border-gray-700 bg-[#1c2634]">
          <h2 className="text-2xl font-bold text-white">Payment Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors hover:bg-gray-700 rounded-full p-1"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 text-sm mb-2">Event:</p>
              <p className="text-[#00fcb8] font-medium capitalize mb-4">
                {eventName}
              </p>

              <p className="text-gray-300 text-sm mb-2">Amount to Pay:</p>
              <p className="text-[#00fcb8] font-bold text-2xl">
                ₹{discountedPrice}
              </p>

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
                    <p className="text-sm">Click to upload or drag and drop</p>
                    <p className="text-xs mt-1 text-gray-500">
                      {formData.paymentScreenshot?.name || "PNG, JPG (MAX. 5MB)"}
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
            </div>
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
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-md text-black bg-[#00fcb8] hover:bg-[#00d06d] disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {/* <div className="text-center text-gray-400">OR</div>

          <button
            type="button"
            onClick={handleChange}
            disabled={isSubmitting}
            className="w-full py-2 rounded-md text-white bg-[#111920] hover:bg-[#1e2a2e] disabled:opacity-50"
          >
            Pay through Payment Gateway
          </button> */}
        </form>
      </div>
    </div>
  );
};

PaymentModal.propTypes = {
  eventName: PropTypes.string.isRequired,
  discountedPrice: PropTypes.number.isRequired,
  qrCode: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  teamId: PropTypes.string.isRequired,
};

export default PaymentModal;