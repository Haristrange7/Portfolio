import React, { useState, useEffect } from "react";

function App() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error on new input
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, message } = formData;

    if (!first_name || !last_name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    const body = JSON.stringify({
      access_key: "1aee5581-faa4-48c3-b1dc-83b922cc4ff6",
      ...formData
    });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body
      }).then((res) => res.json());

      if (res.success) {
        setSuccess(true);
        setFormData({ first_name: "", last_name: "", email: "", message: "" });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  const closeSuccessModal = () => {
    setSuccess(false);
  };

  return (
    <div className="min-h-screen bg-blue-900 dark:bg-gray-900 transition-colors duration-300 ">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Contact Us</h1>
        <div className="md:flex md:space-x-8">
          {/* Left Side: Contact Form */}
          <div className="md:w-1/2 dark:bg-gray-800 p-8 rounded shadow-md ">
            {error && (
              <div className="mb-4 text-red-600 font-medium">
                {error}
              </div>
            )}
            <form onSubmit={onSubmit} className="space-y-4 h-full flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-1" htmlFor="first_name">
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    id="first_name"
                    name="first_name"
                    type="text"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-1" htmlFor="last_name">
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    id="last_name"
                    name="last_name"
                    type="text"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  id="message"
                  name="message"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none transition mt-auto"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 hidden md:block h-fit">
            <img
              src="https://res.cloudinary.com/dx5lg8mei/image/upload/v1745992298/online-survey_uqp4k4.png" // Replace with your image URL
              alt="Contact Illustration"
              className="rounded shadow-md w-full"
            />
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-lg text-center">
            {/* Animated Tick Image (replace with your animation) */}
            <div className="text-green-600 text-5xl">&#10004;</div>
            <p className="text-lg font-medium mt-4 text-gray-800 dark:text-white">
              Thank you! Your message has been sent.
            </p>
            <button
              className="mt-4 bg-transparent hover:bg-gray-400 border border-white text-white font-bold py-2 px-4 rounded focus:outline-none transition"
              onClick={closeSuccessModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
