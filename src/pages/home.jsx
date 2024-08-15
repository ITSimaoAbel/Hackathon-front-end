import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { Dashboard } from '../components/dashboard/admindash';
import axios from 'axios';

export const data = [
  ["Matéria", "Nível de Dificuldade"],
  ["Matemática", 65], 
  ["Português", 55], 
  ["História", 70],  
  ["Ciências", 60],  
  ["Geografia", 50], 
  ["Física", 75],    
  ["Química", 68],   
];

export const optionsBar = {
  chart: {
    title: "Matérias com Maior Nível de Dificuldade",
    subtitle: "Dificuldade média das matérias",
  },
  bars: 'horizontal',
  colors: ['#f37221', '#d6bda4', '#3357FF', '#FF33A1', '#A1FF33', '#33FFF4', '#F4FF33'],
  hAxis: {
    title: "Nível de Dificuldade",
    format: 'decimal',
  },
  vAxis: {
    title: "Matérias",
  },
  legend: { position: 'none' },
};

export const optionsPie = {
  title: "Distribuição do Nível de Dificuldade por Matéria",
  slices: {
    0: { offset: 0.05 }, 
    1: { offset: 0.05 },
    2: { offset: 0.05 },
    3: { offset: 0.05 },
    4: { offset: 0.05 },
    5: { offset: 0.05 },
    6: { offset: 0.05 },
  },
  colors: ['#f37221', '#d6bda4', '#3357FF', '#FF33A1', '#A1FF33', '#33FFF4', '#F4FF33'],
};

export const Home = () => {
  const [totalAlunos, setTotalAlunos] = useState(0); 
  const totalTurmas = 12;   
  const totalClasses = 8;   
  const totalDisciplinas = 5; 

  useEffect(() => {
    const fetchTotalAlunos = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/alunos-por-turma`);

        console.log('Resposta da API:', response.data.totalAlunos);
        
        if (Array.isArray(response.data)) {
          const {totalAlunos} = response.data.reduce((acc, turma) => acc + turma.quantidade, 0);
          setTotalAlunos(totalAlunos);
        } else {
          console.error('A resposta da API não é um array:', response.data);
          setTotalAlunos(response.data.totalAlunos);
        }
      } catch (error) {
        console.error('Erro ao buscar o total de alunos:', error.response ? error.response.data : error.message);
      }
    };

    fetchTotalAlunos();
  }, []); 

  return (
    <>
      <Dashboard />
      <div className="p-4">
        <div className="ml-80 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded shadow-2xl">
            <h3 className="text-lg font-semibold mb-2">Total de Alunos</h3>
            <p className="text-2xl font-bold">{totalAlunos}</p>
          </div>

          <div className="p-4 bg-white rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Total de Turmas</h3>
            <p className="text-2xl font-bold">{totalTurmas}</p>
          </div>

          <div className="p-4 bg-white rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Total de Classes</h3>
            <p className="text-2xl font-bold">{totalClasses}</p>
          </div>

          <div className="p-4 bg-white rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Total de Disciplinas</h3>
            <p className="text-2xl font-bold">{totalDisciplinas}</p>
          </div>
        </div>
        
        <div className="ml-80 mt-20 flex justify-center gap-56 items-center mt-8">
          <div className="p-4 bg-white rounded shadow-lg" style={{ width: '400px', height: '400px' }}>
            <h2 className="text-xl font-bold text-orange mb-4 text-center">Dificuldade das Matérias</h2>
            <Chart
              chartType="Bar"
              width="100%"
              height="100%"
              data={data}
              options={optionsBar}
            />
          </div>
          
          <div className="p-4 bg-white rounded shadow-lg" style={{ width: '400px', height: '400px' }}>
            <h2 className="text-xl font-bold mb-4 text-orange text-center">Distribuição do Nível de Dificuldade</h2>
            <Chart
              chartType="PieChart"
              width="100%"
              height="100%"
              data={data}
              options={optionsPie}
            />
          </div>
        </div>
      </div>
    </>
  );
};
