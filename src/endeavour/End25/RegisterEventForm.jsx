import { useState, useEffect } from 'react';

const EventRegistrationForm = () => {
  // Extract eventSlug from URL
  const getEventSlugFromUrl = () => {
    const path = window.location.pathname;
    const match = path.match(/\/events\/register\/([^/]+)/);
    return match ? match[1] : '';
  };
  
  const [formData, setFormData] = useState({
    eventSlug: '',
    leaderId: '',
    teamName: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  useEffect(() => {
    // Set eventSlug from URL path
    const eventSlug = getEventSlugFromUrl();
    if (eventSlug) {
      setFormData(prev => ({ ...prev, eventSlug }));
    }
    
    // Set leaderId from localStorage
    const userId = localStorage.getItem('userId');
    if (userId) {
      setFormData(prev => ({ ...prev, leaderId: userId }));
    }
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Form validation
      if (!formData.teamName.trim()) {
        throw new Error('Team name is required');
      }
      
      // Submit the form (replace with your API endpoint)
      const response = await fetch('/api/event-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register');
      }
      
      setSuccess(true);
      // Redirect after successful registration
      setTimeout(() => {
        window.location.href = `/events/${formData.eventSlug}/confirmation`;
      }, 2000);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Event Registration
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Register your team for {formData.eventSlug ? formData.eventSlug.replace(/-/g, ' ') : 'the event'}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {success ? (
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Registration successful!</h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Your team has been registered. Redirecting to confirmation page...</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="eventSlug" className="block text-sm font-medium text-gray-700">
                  Event
                </label>
                <div className="mt-1">
                  <input
                    id="eventSlug"
                    name="eventSlug"
                    type="text"
                    value={formData.eventSlug}
                    disabled
                    className="bg-gray-100 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                  <p className="mt-1 text-xs text-gray-500">This field is automatically populated from the URL</p>
                </div>
              </div>

              <div>
                <label htmlFor="leaderId" className="block text-sm font-medium text-gray-700">
                  Team Leader ID
                </label>
                <div className="mt-1">
                  <input
                    id="leaderId"
                    name="leaderId"
                    type="text"
                    value={formData.leaderId}
                    disabled
                    className="bg-gray-100 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                  <p className="mt-1 text-xs text-gray-500">This field is automatically populated from your account</p>
                </div>
              </div>

              <div>
                <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">
                  Team Name
                </label>
                <div className="mt-1">
                  <input
                    id="teamName"
                    name="teamName"
                    type="text"
                    required
                    value={formData.teamName}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    placeholder="Enter your team name"
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Registration failed</h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>{error}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Registering...' : 'Register Team'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationForm;