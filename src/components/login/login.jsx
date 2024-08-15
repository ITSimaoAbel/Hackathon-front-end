import React from 'react';

const Login = ({ onSwitchToSignup }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Não tem uma conta?{' '}
        <button className="text-blue-500 underline" onClick={onSwitchToSignup}>
          Registre-se
        </button>
      </p>
    </div>
  );
};

export default Login;
