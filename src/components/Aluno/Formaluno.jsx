import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Aluno = () => {
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    sexo: '',
    idTurma: ''
  });

  const [turmas, setTurmas] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/alunos`, formData);
      console.log('Aluno registrado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao registrar aluno:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    const fetchTurmas = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/turmas`);
        setTurmas(response.data);
      } catch (error) {
        console.error('Erro ao carregar turmas:', error.response ? error.response.data : error.message);
      }
    };

    fetchTurmas();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Registro de Aluno</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="sexo" className="block text-sm font-medium text-gray-700">Sexo</label>
          <select
            id="sexo"
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Selecione...</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <label htmlFor="idTurma" className="block text-sm font-medium text-gray-700">Turma</label>
          <select
            id="idTurma"
            name="idTurma"
            value={formData.idTurma}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Selecione uma Turma</option>
            {turmas.map((turma) => (
              <option key={turma._id} value={turma._id}>
                {`Turma: ${turma.numero} - Sala: ${turma.sala} - ${turma.idClasse ? turma.idClasse.nome : 'Desconhecida'}ª Classe`}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Registrar Aluno
        </button>
      </form>
    </div>
  );
};
