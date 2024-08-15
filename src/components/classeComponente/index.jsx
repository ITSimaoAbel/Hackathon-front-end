import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const FormularioClasseDisciplinas = () => {
  const [classeNome, setClasseNome] = useState('');
  const [disciplinas, setDisciplinas] = useState([]);
  const [selectedDisciplinas, setSelectedDisciplinas] = useState([]);
  const [allDisciplinas, setAllDisciplinas] = useState([]);

 
  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/disciplinas`);
        setAllDisciplinas(response.data);
      } catch (error) {
        console.error('Erro ao buscar disciplinas:', error);
      }
    };

    fetchDisciplinas();
  }, []);

 
  const handleDisciplinasChange = (e) => {
    const { value, checked } = e.target;
    setSelectedDisciplinas((prevSelected) =>
      checked ? [...prevSelected, value] : prevSelected.filter((id) => id !== value)
    );
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/classes`, {
        nome: classeNome,
        disciplinas: selectedDisciplinas
      });
      console.log('Classe criada com sucesso:', response.data);
    
      setClasseNome('');
      setSelectedDisciplinas([]);
    } catch (error) {
      console.error('Erro ao criar classe:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-2xl font-bold mb-6 text-orange">Criar Classe e Associar Disciplinas</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="classeNome" className="block text-sm font-medium text-gray-700">Nome da Classe</label>
          <input
            type="text"
            id="classeNome"
            value={classeNome}
            onChange={(e) => setClasseNome(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Disciplinas</label>
          <div className="mt-1">
            {allDisciplinas.map((disciplina) => (
              <div key={disciplina._id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`disciplina-${disciplina._id}`}
                  value={disciplina._id}
                  checked={selectedDisciplinas.includes(disciplina._id)}
                  onChange={handleDisciplinasChange}
                  className="mr-2 "
                />
                <label htmlFor={`disciplina-${disciplina._id}`} className="text-sm text-gray-700">
                  {disciplina.nome}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange text-white font-semibold rounded-md shadow-sm hover:bg-azul focus:outline-none focus:ring-2 focus:ring-orange"
        >
          Criar Classe
        </button>
      </form>
    </div>
  );
};
