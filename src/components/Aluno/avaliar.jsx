import React, { useState, useEffect } from 'react';

// Dados de exemplo para turmas, matérias, avaliações e alunos
const turmas = ['Turma A', 'Turma B', 'Turma C'];
const materias = ['Matemática', 'Português', 'História'];
const avaliacoes = [1, 2, 3]; // Números de avaliações disponíveis

const alunosData = [
  { nome: 'João', materia: 'Matemática', turma: 'Turma A', avaliacao: 1, nota: '' },
  { nome: 'Maria', materia: 'Português', turma: 'Turma B', avaliacao: 2, nota: '' },
  { nome: 'Pedro', materia: 'História', turma: 'Turma C', avaliacao: 3, nota: '' },
  { nome: 'Ana', materia: 'Matemática', turma: 'Turma A', avaliacao: 1, nota: '' },
  { nome: 'Lucas', materia: 'Matemática', turma: 'Turma B', avaliacao: 2, nota: '' },
];

export  const LancamentoNotas = () => {
  const [turmaSelecionada, setTurmaSelecionada] = useState('');
  const [materiaSelecionada, setMateriaSelecionada] = useState('');
  const [avaliacaoSelecionada, setAvaliacaoSelecionada] = useState('');

  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    if (turmaSelecionada && materiaSelecionada && avaliacaoSelecionada) {
      const alunosFiltrados = alunosData.filter(aluno =>
        aluno.turma === turmaSelecionada &&
        aluno.materia === materiaSelecionada &&
        aluno.avaliacao === avaliacaoSelecionada
      );
      setAlunos(alunosFiltrados);
    } else {
      setAlunos([]);
    }
  }, [turmaSelecionada, materiaSelecionada, avaliacaoSelecionada]);

  const handleTurmaChange = (e) => {
    setTurmaSelecionada(e.target.value);
  };

  const handleMateriaChange = (e) => {
    setMateriaSelecionada(e.target.value);
  };


  const handleAvaliacaoChange = (e) => {
    setAvaliacaoSelecionada(parseInt(e.target.value, 10));
  };

  const handleNotaChange = (index, e) => {
    const { value } = e.target;
    const novosAlunos = [...alunos];
    novosAlunos[index].nota = value;
    setAlunos(novosAlunos);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados das notas enviados:', alunos);
    // Exemplo de chamada à API
    // axios.post(`${import.meta.env.VITE_API_BASE_URL}/notas`, alunos)
    //   .then(response => {
    //     console.log('Notas lançadas com sucesso:', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Erro ao lançar notas:', error);
    //   });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-400 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Lançamento de Notas</h1>
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="turma" className="block text-sm font-medium text-gray-700">Escolha a Turma</label>
          <select
            id="turma"
            value={turmaSelecionada}
            onChange={handleTurmaChange}
            className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Selecione a Turma</option>
            {turmas.map((turma, idx) => (
              <option key={idx} value={turma}>{turma}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="materia" className="block text-sm font-medium text-gray-700">Escolha a Matéria</label>
          <select
            id="materia"
            value={materiaSelecionada}
            onChange={handleMateriaChange}
            className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Selecione a Matéria</option>
            {materias.map((materia, idx) => (
              <option key={idx} value={materia}>{materia}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="avaliacao" className="block text-sm font-medium text-gray-700">Escolha a Avaliação</label>
          <select
            id="avaliacao"
            value={avaliacaoSelecionada}
            onChange={handleAvaliacaoChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Selecione a Avaliação</option>
            {avaliacoes.map((avaliacao, idx) => (
              <option key={idx} value={avaliacao}>{avaliacao}</option>
            ))}
          </select>
        </div>
      </div>

      {alunos.length > 0 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Cabeçalho da Tabela */}
          <div className="grid grid-cols-3 gap-4 text-center font-semibold text-gray-700 mb-2">
            <div>Nome do Aluno</div>
            <div>Nota</div>
            <div>Ações</div>
          </div>

          {/* Linhas da Tabela */}
          {alunos.map((aluno, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 items-center mb-4">
              <div className="text-gray-900">{aluno.nome}</div>
              <input
                type="number"
                name="nota"
                value={aluno.nota}
                onChange={(e) => handleNotaChange(index, e)}
                min="0"
                max="10"
                step="0.1"
                required
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => handleNotaChange(index, { target: { value: '' } })}
                className="bg-red-500 text-white px-3 py-1 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Limpar
              </button>
            </div>
          ))}

          {/* Botão de Envio */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Lançar Notas
          </button>
        </form>
      )}
    </div>
  );
};


