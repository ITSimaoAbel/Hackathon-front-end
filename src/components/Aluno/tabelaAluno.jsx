import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Aluno } from './Formaluno';

export const TabelaAluno = () => {
  const [alunos, setAlunos] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [selectedTurma, setSelectedTurma] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAlunos, setTotalAlunos] = useState(0);
  const [error, setError] = useState('');

  const getAuthToken = () => localStorage.getItem('token');

  useEffect(() => {
    const fetchTurmas = async () => {
      try {
        const token = getAuthToken();
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/turma-por-professor`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        console.log("prof....",response.data);
        if (Array.isArray(response.data)) {
          setTurmas(response.data);
        } else {
          setError('Resposta da API não é um array.');
        }
      } catch (error) {
        setError('Erro ao buscar turmas.');
      }
    };

    fetchTurmas();
  }, []);

  useEffect(() => {
    const fetchAlunos = async () => {
      if (selectedTurma) {
        try {
          const token = getAuthToken();
          console.log("jklshdfuhef",selectedTurma);
          const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/alunos/turma/${selectedTurma}`, {
            headers: { 'Authorization': `Bearer ${token}` },
            params: { idTurma: selectedTurma }
          });

          if (Array.isArray(response.data)) {
            console.log(response.data)
            setAlunos(response.data);
            setTotalAlunos(response.data.length);
          } else {
            setError('Resposta da API não é um array de alunos.',response.data);
            setAlunos([]);
            setTotalAlunos(0);
          }
        } catch (error) {
          console.log(error)
          setError('Erro ao buscar alunos.');
          setAlunos([]);
          setTotalAlunos(0);
        }
      }
    };

    fetchAlunos();
  }, [selectedTurma]);

  const handleDelete = (id) => {
    setAlunos(prevAlunos => prevAlunos.filter(aluno => aluno._id !== id));
  };

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddAluno = (novoAluno) => {
    setAlunos(prevAlunos => [...prevAlunos, novoAluno]);
    handleCloseModal();
  };

  return (
    <div className="ml-80 p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Tabela de Alunos</h1>
        <button
          className="py-2 px-4 bg-orange text-white rounded-md hover:bg-orange transition duration-300"
          onClick={handleOpenModal}
        >
          Adicionar Aluno
        </button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="turma-select" className="block text-sm font-medium text-gray-700">Selecione uma Turma</label>
        <select
          id="turma-select"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={selectedTurma}
          onChange={(e) => setSelectedTurma(e.target.value)}
        >
          <option value="">Selecione uma turma</option>
          {turmas.map(turma => (
            <option key={turma._id} value={turma._id}>
              {turma.numero} - {turma.sala}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300 mx-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Data de Nascimento</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Sexo</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID da Turma</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {alunos.length > 0 ? (
            
              alunos.map(aluno => (
                <tr key={aluno._id}>
                  {console.log(alunos[0])}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{aluno._id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.nome}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.dataNascimento}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.sexo === 'M' ? 'Masculino' : 'Feminino'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.idTurma}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-2">Editar</button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(aluno._id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">Nenhum aluno encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="mt-4">
          <p>Total de Alunos: {totalAlunos}</p>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={handleCloseModal}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Aluno onAddAluno={handleAddAluno} />
          </div>
        </div>
      )}
    </div>
  );
};
