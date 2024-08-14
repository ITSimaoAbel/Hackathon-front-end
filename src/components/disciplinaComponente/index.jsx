import React, { useState } from 'react';
import axios from 'axios';

export const FormularioDisciplina = () => {
  const [nome, setNome] = useState('');
  const [error, setError] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome) {
      setError('O nome da disciplina é obrigatório.');
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/disciplinas`, { nome });
      console.log('Disciplina criada com sucesso:', response.data);
      setNome('');
      setError('');
    } catch (error) {
      console.error('Erro ao criar disciplina:', error);
      setError('Erro ao criar disciplina. Tente novamente.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Criar Nova Disciplina</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome da Disciplina</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Criar Disciplina
        </button>
      </form>
    </div>
  );
};
