import { Card, CardContent } from "../../components/Ui/Card/card";

const PrivacyPolicy2 = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto pt-20">
        <Card className="bg-white shadow-lg py-4">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Privacy Policy
              </h1>
              <p className="text-gray-600">E-Cell KIET App</p>
            </div>

            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The E-Cell KIET App ("we," "our," or "us") is dedicated to
                protecting your privacy and ensuring that your personal
                information is handled in a safe and responsible manner. This
                Privacy Policy outlines how we collect, use, disclose, and
                protect your information when you use our app.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <span className="font-medium">Personal Information:</span>{" "}
                  Information Collection: We collect personal information, such
                  as your name, email address, phone number, and other pertinent
                  details, during account registration and profile updates. This
                  information is essential for delivering a seamless and
                  personalized user experience.
                </li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use the information collected to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Provide, operate, and improve the E-Cell KIET App and its
                  features.
                </li>
                <li>
                  Personalize user experience and optimize app functionality.
                </li>
                <li>
                  Communicate with you, including responding to inquiries or
                  providing updates about events, services, and notifications.
                </li>
                <li>Maintain security and prevent fraudulent activities.</li>
                <li>
                  Comply with legal obligations and enforce our terms and
                  conditions.
                </li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 mb-4">
                We do not sell or rent your personal data to third parties. We
                may share your information in the following scenarios:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <span className="font-medium">Service Providers:</span>We may
                  share your information with trusted third-party service
                  providers who assist in app operations, analytics, or event
                  management.
                </li>
                <li>
                  <span className="font-medium">Legal Requirements:</span>If
                  required by law or in response to valid requests by public
                  authorities.
                </li>
                <li>
                  <span className="font-medium">With Your Consent:</span> When
                  you provide explicit consent for sharing information with
                  third parties.
                </li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy, please contact us at:{" "}
                <a
                  href="mailto:ecell@kiet.edu"
                  className="text-blue-600 hover:text-blue-800"
                >
                  ecell@kiet.edu
                </a>
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy2;
