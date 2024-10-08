import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); 

    try {
      
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`, {
        email: username,
        senha: password,
      });

     
      const { token } = response.data;

     
      localStorage.setItem('token', token);

      
      navigate('/');
    } catch (error) {
    
      setError('Credenciais inválidas ou erro no servidor.');
    }
  };

  const handleRegisterClick = () => {
    navigate('/professor'); 
  };

  return (
    <div className="w-96 mx-auto p-6">
    <div className="mt-40 p-6 bg-white rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-orange">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-orange"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 focus:ring-orange">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-orange"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-orange hover:bg-azul text-white py-2 rounded-md"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Não tem uma conta?{' '}
        <button
          className="text-blue-500 underline hover:text-orange"
          onClick={handleRegisterClick}
        >
          Registre-se
        </button>
      </p>
    </div>
    </div>
  );
};

export default Login;

