import React, { useState } from 'react';
import { Aluno } from './Formaluno';

const initialAlunos = [
  { id: 1, nome: 'João Silva', dataNascimento: '2000-01-15', sexo: 'M', idTurma: 1 },
  { id: 2, nome: 'Maria Oliveira', dataNascimento: '1999-05-23', sexo: 'F', idTurma: 2 },
];

export const TabelaAluno = () => {
  const [alunos, setAlunos] = useState(initialAlunos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    setAlunos((prevAlunos) => prevAlunos.filter((aluno) => aluno.id !== id));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddAluno = (novoAluno) => {
    setAlunos((prevAlunos) => [...prevAlunos, novoAluno]);
    handleCloseModal();
  };

  return (
    <div className="ml-80 p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Tabela de Alunos</h1>
        <button
          className="py-2 px-4 bg-orange text-white rounded-md hover:bg-azul"
          onClick={handleOpenModal}
        >
          Adicionar Aluno
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300 w-3/4 mx-auto">
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
            {alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{aluno.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.dataNascimento}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.sexo === 'M' ? 'Masculino' : 'Feminino'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.idTurma}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-blue-600 hover:text-blue-900 mr-2"
                  >
                    Editar
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(aluno.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
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




// import React, { useState } from 'react';
 
// const initialAlunos = [
//   { id: 1, nome: 'João Silva', dataNascimento: '2000-01-15', sexo: 'M', idTurma: 1 },
//   { id: 2, nome: 'Maria Oliveira', dataNascimento: '1999-05-23', sexo: 'F', idTurma: 2 },
// ];

// export const TabelaAluno = () => {
//   const [alunos, setAlunos] = useState(initialAlunos);

//   const handleDelete = (id) => {
//     setAlunos((prevAlunos) => prevAlunos.filter((aluno) => aluno.id !== id));
//   };

//   return (
//     <div className="ml-80 p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">Tabela de Alunos</h1>
//         <button
//           className="py-2 px-4 bg-orange text-white rounded-md hover:bg-azul"
//         >
//           Adicionar Aluno
//         </button>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200 border border-gray-300 w-3/4 mx-auto">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nome</th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Data de Nascimento</th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Sexo</th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID da Turma</th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Ações</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {alunos.map((aluno) => (
//               <tr key={aluno.id}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{aluno.id}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.nome}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.dataNascimento}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.sexo === 'M' ? 'Masculino' : 'Feminino'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.idTurma}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   <button
//                     className="text-blue-600 hover:text-blue-900 mr-2"
//                     // Handler para editar aluno pode ser implementado aqui
//                   >
//                     Editar
//                   </button>
//                   <button
//                     className="text-red-600 hover:text-red-900"
//                     onClick={() => handleDelete(aluno.id)}
//                   >
//                     Excluir
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
