import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const LancamentoNotas = () => {
  const [turmaSelecionada, setTurmaSelecionada] = useState('');
  const [materiaSelecionada, setMateriaSelecionada] = useState('');
  const [avaliacaoSelecionada, setAvaliacaoSelecionada] = useState('');

  const [alunos, setAlunos] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    const fetchTurmas = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/turmas`);
        setTurmas(response.data);
      } catch (error) {
        console.error('Erro ao buscar turmas:', error.response ? error.response.data : error.message);
      }
    };

    const fetchMaterias = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/materias`);
        setMaterias(response.data);
      } catch (error) {
        console.error('Erro ao buscar matérias:', error.response ? error.response.data : error.message);
      }
    };

    const fetchAvaliacoes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/avaliacoes`);
        setAvaliacoes(response.data);
      } catch (error) {
        console.error('Erro ao buscar avaliações:', error.response ? error.response.data : error.message);
      }
    };

    fetchTurmas();
    fetchMaterias();
    fetchAvaliacoes();
  }, []);

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
    // Exemplo de chamada à API para enviar os dados
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
            {turmas.map((turma) => (
              <option key={turma._id} value={turma._id}>
                {`Turma: ${turma.numero} - Sala: ${turma.sala} - ${turma.idClasse ? turma.idClasse.nome : 'Desconhecida'}ª Classe`}
              </option>
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
            {materias.map((materia) => (
              <option key={materia._id} value={materia._id}>
                {materia.nome}
              </option>
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
            {avaliacoes.map((avaliacao) => (
              <option key={avaliacao._id} value={avaliacao._id}>
                {avaliacao.numero}
              </option>
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
