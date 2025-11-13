import { Copy, Upload, X, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function PaymentDialog({ isOpen, onClose, onSubmit, formData }) {
  const [transactionId, setTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [copied, setCopied] = useState(false);

  const upiId = "example@upi";

  const handleCopy = () => {
    // Using document.execCommand as a fallback for potential iframe restrictions
    try {
      const el = document.createElement("textarea");
      el.value = upiId;
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

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setScreenshot(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!transactionId || !screenshot) {
      // You could show an error message here
      console.error("Transaction ID and Screenshot are required.");
      return;
    }
    onSubmit({
      transactionId,
      screenshot,
      formData,
    });
    // Reset form
    setTransactionId("");
    setScreenshot(null);
    onClose(); // Close the dialog on successful submit
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      aria-labelledby="payment-dialog-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative sm:max-w-4xl w-full bg-[#1a1a1a] border border-gray-800 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="py-6 px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-6">
            {/* Left Side: QR Code */}
            <div className="flex flex-col items-center space-y-4 md:w-2/5 flex-shrink-0">
              <p className="text-gray-400 text-sm text-center md:hidden">
                Scan the QR code or copy the UPI ID to pay.
              </p>
              <div className="h-64 w-64 bg-gray-800 flex items-center justify-center rounded-xl border-2 border-gray-700">
                {/* Placeholder for QR Code */}
                <img
                  src="https://placehold.co/256x256/333333/999999?text=Scan+QR+to+Pay"
                  alt="QR Code"
                  className="rounded-lg h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center space-x-2 bg-[#232323] px-4 py-2 rounded-lg border border-gray-700">
                <span className="font-medium text-gray-300 text-sm">
                  {upiId}
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-purple-500/10 text-gray-400 hover:text-purple-400"
                  aria-label="Copy UPI ID"
                >
                  {copied ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
              <p className="text-gray-400 text-xs text-center hidden md:block max-w-xs pt-2">
                Scan the QR code or copy the UPI ID to complete your payment.
              </p>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 justify-center items-center space-y-6">
              {/* Transaction ID Input */}

              <div className="flex items-center justify-between pt-4">
                <h2
                  id="payment-dialog-title"
                  className="text-2xl text-gray-100 font-semibold"
                >
                  Complete Payment
                </h2>

                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="transactionId"
                  className="text-sm text-gray-400 font-medium"
                >
                  Transaction ID <span className="text-red-400">*</span>
                </label>
                <input
                  id="transactionId"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="Enter transaction ID"
                  className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none placeholder-gray-500"
                  required
                />
              </div>

              {/* Payment Screenshot Upload */}
              <div className="space-y-2">
                <label
                  htmlFor="screenshot"
                  className="text-sm text-gray-400 font-medium"
                >
                  Payment Screenshot <span className="text-red-400">*</span>
                </label>
                <div className="flex flex-col items-center space-y-3">
                  <input
                    id="screenshot"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                    required
                  />
                  <button
                    type="button"
                    className="w-full flex items-center justify-center border-2 border-dashed border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 text-gray-300 rounded-xl py-6 transition-colors"
                    onClick={() =>
                      document.getElementById("screenshot")?.click()
                    }
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    {screenshot ? "Change Screenshot" : "Upload Screenshot"}
                  </button>
                  {screenshot && (
                    <div className="text-sm text-gray-400 bg-[#232323] px-4 py-2 rounded-lg w-full text-center border border-gray-700 truncate">
                      ✓ {screenshot.name}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold rounded-full hover:shadow-xl transition-all disabled:opacity-50"
                disabled={!transactionId || !screenshot}
                onClick={() => window.location.href = '/ideatex/dashboard'}
              >
                Submit Payment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
