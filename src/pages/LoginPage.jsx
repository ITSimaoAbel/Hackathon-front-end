import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-[#37221] bg-white border-2 border-[#37221] rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#f05f24] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f05f24]"
            >
              Submeter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

