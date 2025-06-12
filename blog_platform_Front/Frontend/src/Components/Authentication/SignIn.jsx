import React, { useState } from 'react';

function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Sign up attempted with:', formData);
    } else {
      console.log('Sign in attempted with:', { 
        username: formData.username, 
        password: formData.password 
      });
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-pink-400 bg-opacity-20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-blue-400 bg-opacity-15 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-yellow-400 bg-opacity-10 rounded-full blur-md animate-pulse"></div>
      
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Welcome section */}
        <div className="text-white space-y-6 px-8">
          <div className="flex items-center space-x-2">
            <div className=" text-5xl text-white rounded-sm flex items-center justify-center">
              Inspire World in your own Way!!
            </div>
          </div>
          
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              {isSignUp ? 'Join Us!' : 'Welcome!'}
            </h1>
            <div className="w-16 h-1 bg-white mb-6"></div>
            <p className="text-purple-100 text-lg leading-relaxed max-w-md">
              {isSignUp 
                ? 'Create your account and join our amazing community. Start your journey with us today and unlock exclusive features.'
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </p>
          </div>
          
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Learn More
          </button>
        </div>

        {/* Right side - Auth form */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-lg rounded-3xl p-8 w-full max-w-md border border-white border-opacity-20 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-white text-3xl font-bold">
                {isSignUp ? 'Sign up' : 'Sign in'}
              </h2>
              <button
                onClick={toggleAuthMode}
                className="text-white text-sm underline hover:text-purple-200 transition-colors duration-300"
              >
                {isSignUp ? 'Sign in instead' : 'Create account'}
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="TechPro"
                  className="w-full bg-[rgba(255,255,255,0.5)]  border border-white border-opacity-30 rounded-lg px-4 py-3 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                />
              </div>
              
              {isSignUp && (
                <div className="transform transition-all duration-300 ease-in-out">
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full  bg-[rgba(255,255,255,0.5)]  border border-white border-opacity-30 rounded-lg px-4 py-3 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••••"
                  className="w-full bg-[rgba(255,255,255,0.5)]  border border-white border-opacity-30 rounded-lg px-4 py-3 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                />
              </div>
              
              {isSignUp && (
                <div className="transform transition-all duration-300 ease-in-out">
                  <label className="block text-white text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••••"
                    className="w-full  bg-[rgba(255,255,255,0.5)]  border border-white border-opacity-30 rounded-lg px-4 py-3 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  />
                </div>
              )}
              
              {isSignUp && (
                <div className="flex items-start space-x-3 transform transition-all duration-300 ease-in-out">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 bg-white bg-opacity-20 border border-white border-opacity-30 rounded focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                  <label htmlFor="terms" className="text-white text-sm leading-relaxed">
                    I agree to the <span className="underline cursor-pointer hover:text-purple-200">Terms of Service</span> and <span className="underline cursor-pointer hover:text-purple-200">Privacy Policy</span>
                  </label>
                </div>
              )}
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isSignUp ? 'Create Account' : 'Submit'}
              </button>
            </div>
            
            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-white bg-opacity-30"></div>
              <span className="px-4 text-white text-sm">or continue with</span>
              <div className="flex-1 h-px bg-white bg-opacity-30"></div>
            </div>
            
            {/* Social media icons */}
            <div className="flex justify-center space-x-4">
              
              
              <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                              </svg>
              </button>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;