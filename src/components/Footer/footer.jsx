import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-orange-400 transition-colors">Sobre nós</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Termos de Serviço</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
