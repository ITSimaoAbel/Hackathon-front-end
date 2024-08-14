// export const Home = () => {
//     return (
//       <div className="p-6">
//         <h1 className="text-3xl font-bold">Home Page</h1>
//         <p className="mt-4">Welcome to the home page dude!</p>
//       </div>
//     );
// }

import React from 'react';

export const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Sistema de Avaliação e Desempenho</h1>
          <p className="text-lg mb-8">Centralize, analise e melhore o desempenho dos alunos com facilidade.</p>
          <a href="#features" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition">
            Saiba Mais
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Nosso Sistema Oferece</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Registro de Avaliações */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Registro de Avaliações</h3>
              <p>Facilite o registro de avaliações dos alunos com uma interface intuitiva e prática.</p>
            </div>
            {/* Feature 2: Análise de Desempenho */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Análise de Desempenho</h3>
              <p>Analise detalhadamente o desempenho dos alunos e obtenha insights valiosos para melhorar suas estratégias de ensino.</p>
            </div>
            {/* Feature 3: Geração de Relatórios */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Geração de Relatórios</h3>
              <p>Gere relatórios abrangentes que ajudam a monitorar o progresso e identificar áreas para desenvolvimento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Solves Problems Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Como o Sistema Resolve o Problema</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Centralização e Organização dos Dados</h3>
              <p>Armazene todas as informações de avaliações em um único lugar, facilitando o acesso e a gestão dos dados.</p>
            </div>
            {/* Solution 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Análise Detalhada e Personalizada</h3>
              <p>Obtenha uma visão detalhada e personalizada do desempenho dos alunos, permitindo ajustar suas estratégias de ensino conforme necessário.</p>
            </div>
            {/* Solution 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Relatórios Abrangentes</h3>
              <p>Gere relatórios abrangentes para ajudar na tomada de decisões e monitoramento contínuo do progresso dos alunos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Sistema de Avaliação e Desempenho. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

 



