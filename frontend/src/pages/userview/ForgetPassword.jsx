import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (email.trim() === '') {
      alert('Please enter your email address');
      return;
    }
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  const handleBackToLogin = () => {
    setIsSubmitted(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl border-4 border-blue-500/30 text-white text-3xl font-bold mb-4">
            T
          </div>
          <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-wide">
            Gadget Store
          </h1>
          <p className="text-gray-300 text-lg italic">Find Your Perfect Home</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Forgot Password Form Container */}
        <div className="bg-gray-900/80 backdrop-blur-sm p-10 rounded-lg shadow-2xl border border-gray-700/50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            {!isSubmitted ? (
              <>
                {/* Reset Password Form */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 text-blue-400 text-2xl mb-4">
                    🔒
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-white mb-2">
                    Forgot Password?
                  </h2>
                  <p className="text-gray-400 text-sm">
                    No worries! Enter your email address and we'll send you a reset link.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="block w-full px-4 py-3 border-2 border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full mt-8 py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
                >
                  Send Reset Link
                </button>

                {/* Back to Login Link */}
                <div className="text-center mt-6">
                  <a href="/login" className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    <span className="mr-2">←</span>
                    Back to Login
                  </a>
                </div>
              </>
            ) : (
              <>
                {/* Success Message */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600/20 text-green-400 text-2xl mb-4">
                    ✉️
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-white mb-4">
                    Check Your Email
                  </h2>
                  <p className="text-gray-400 text-sm mb-6">
                    We've sent a password reset link to:
                  </p>
                  <p className="text-blue-400 font-medium text-lg mb-8 break-all">
                    {email}
                  </p>
                  <p className="text-gray-500 text-sm mb-8">
                    Didn't receive the email? Check your spam folder or try again.
                  </p>

                  <div className="space-y-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="w-full py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all duration-300 border border-gray-600"
                    >
                      Resend Email
                    </button>

                    <button
                      type="button"
                      onClick={handleBackToLogin}
                      className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
                    >
                      Back to Login
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © 2025 Gadget Store. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;