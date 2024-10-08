import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const LancamentoNotas = () => {
  const [turmaSelecionada, setTurmaSelecionada] = useState('');
  const [avaliacaoSelecionada, setAvaliacaoSelecionada] = useState('');
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState('');

  const [alunos, setAlunos] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [disciplinasPorClasse, setDisciplinasPorClasse] = useState([]);

  useEffect(() => {
    const fetchTurmas = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/turmas`);
        setTurmas(response.data);
      } catch (error) {
        console.error('Erro ao buscar turmas:', error.response ? error.response.data : error.message);
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
    fetchAvaliacoes();
  }, []);

  useEffect(() => {
    if (turmaSelecionada) {
      const turmaSelecionadaInfo = turmas.find(turma => turma._id === turmaSelecionada);
      if (turmaSelecionadaInfo) {
        const idClasse = turmaSelecionadaInfo.idClasse._id;

        const fetchDisciplinasPorClasse = async () => {
          try {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/${idClasse}/disciplinas`);
            setDisciplinasPorClasse(response.data);
          } catch (error) {
            console.error('Erro ao buscar disciplinas por classe:', error.response ? error.response.data : error.message);
          }
        };

        fetchDisciplinasPorClasse();
      }
    } else {
      setDisciplinasPorClasse([]);
      setDisciplinaSelecionada('');
    }
  }, [turmaSelecionada, turmas]);

  useEffect(() => {
    if (turmaSelecionada && avaliacaoSelecionada && disciplinaSelecionada) {
      console.log("turma selecionada", turmaSelecionada);
      const fetchAlunos = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/alunos/turma/${turmaSelecionada}`, {
            params: {
              turma: turmaSelecionada,
              avaliacao: avaliacaoSelecionada,
              disciplina: disciplinaSelecionada,
            },
          });
          setAlunos(response.data);
        } catch (error) {
          console.error('Erro ao buscar alunos:', error.response ? error.response.data : error.message);
        }
      };

      fetchAlunos();
    } else {
      setAlunos([]);
    }
  }, [turmaSelecionada, avaliacaoSelecionada, disciplinaSelecionada]);

  const handleTurmaChange = (e) => {
    setTurmaSelecionada(e.target.value);
  };

  const handleAvaliacaoChange = (e) => {
    setAvaliacaoSelecionada(e.target.value);
  };

  const handleDisciplinaChange = (e) => {
    setDisciplinaSelecionada(e.target.value);
  };

  const handleNotaChange = (index, e) => {
    const { value } = e.target;
    const novosAlunos = [...alunos];
    const nota = Math.max(0, Math.min(20, parseFloat(value))); 
    novosAlunos[index].nota = nota;
    setAlunos(novosAlunos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosNotas = alunos.map(aluno => ({
      idAluno: aluno._id, 
      idAvaliacao: avaliacaoSelecionada, 
      nota: aluno.nota 
    }));

    try {
      console.log("...verificando dados..", dadosNotas);
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/notas/todas`, dadosNotas);
      console.log('Notas lançadas com sucesso:', response.data);
      window.alert('Notas registradas com sucesso!'); // Adiciona o alerta de sucesso
    } catch (error) {
      console.error('Erro ao lançar notas:', error.response ? error.response.data : error.message);
      window.alert('Erro ao registrar as notas.'); // Adiciona o alerta de erro
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-2xl font-bold text-orange mb-6">Lançamento de Notas</h1>
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="turma" className="block text-sm font-medium text-gray-700">Escolha a Turma</label>
          <select
            id="turma"
            value={turmaSelecionada}
            onChange={handleTurmaChange}
            className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
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
          <label htmlFor="disciplina" className="block text-sm font-medium text-gray-700">Escolha a Disciplina</label>
          <select
            id="disciplina"
            value={disciplinaSelecionada}
            onChange={handleDisciplinaChange}
            className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
          >
            <option value="">Selecione a Disciplina</option>
            {disciplinasPorClasse.map((disciplina) => (
              <option key={disciplina._id} value={disciplina._id}>
                {disciplina.nome}
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
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
          <div className="grid grid-cols-3 gap-4 text-center font-semibold text-gray-700 mb-2">
            <div>Nome do Aluno</div>
            <div>Nota</div>
            <div>Ações</div>
          </div>

          {alunos.map((aluno, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 items-center mb-4">
              <div className="text-gray-900">{aluno.nome}</div>
              <input
                type="number"
                name="nota"
                value={aluno.nota || ''}
                onChange={(e) => handleNotaChange(index, e)}
                min="0"
                max="20"
                step="0.1"
                required
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
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

          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange text-white font-semibold rounded-md shadow-sm hover:bg-azul focus:outline-none focus:ring-2 focus:ring-orange"
          >
            Lançar Notas
          </button>
        </form>
      )}
    </div>
  );
};
