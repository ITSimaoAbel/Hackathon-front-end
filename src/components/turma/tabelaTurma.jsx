import React, { useState } from 'react';

const initialTurmas = [
  { id: 1, numero: '101', sala: '1', idClasse: 1, idProfessor: 1 },
  { id: 2, numero: '102', sala: '2', idClasse: 2, idProfessor: 2 },
  { id: 3, numero: '103', sala: '3', idClasse: 3, idProfessor: 3 },
  { id: 4, numero: '104', sala: '4', idClasse: 4, idProfessor: 4 },
  { id: 5, numero: '105', sala: '5', idClasse: 5, idProfessor: 5 },
];

export const TabelaTurma = () => {
  const [turmas, setTurmas] = useState(initialTurmas);

  const handleDelete = (id) => {
    setTurmas((prevTurmas) => prevTurmas.filter((turma) => turma.id !== id));
  };

  return (
    <div className="ml-80 p-6 mr-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Tabela de Turmas</h1>
        <button
          className="py-2 px-4 bg-orange text-white rounded-md hover:bg-azul"
        >
          Adicionar Turma
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300 w-3/4 mx-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Número</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Sala</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID da Classe</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID do Professor</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {turmas.map((turma) => (
              <tr key={turma.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{turma.numero}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{turma.sala}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{turma.idClasse}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{turma.idProfessor}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-blue-600 hover:text-blue-900 mr-2"
                  >
                    Editar
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(turma.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
