import React from 'react';
import Login from '../components/login/login';

const WelcomePage = () => {
  return (
    <div className="relative min-h-screen bg-blue-100">
      <div className="absolute inset-0 flex">
        {/* Parte laranja com título */}
        <div className="w-1/2 bg-gradient-to-br from-orange-500 to-orange-700 flex flex-col items-center justify-center p-16">
          <h1 className="text-white text-6xl font-extrabold mb-4">
            Bem-vindo!
          </h1>
          <p className="text-white text-lg max-w-xs text-center">
            Explore e aproveite nossas funcionalidades. A sua jornada começa aqui.
          </p>
        </div>
        {/* Divisão entre as seções */}
        <div className="w-1 border-r border-gray-200"></div>
        {/* Parte do formulário de login */}
        <div className="w-1/2 flex items-center justify-center p-16">
          <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 relative">
            {/* Efeito de sobreposição sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40 rounded-lg"></div>
            <div className="relative z-10">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
