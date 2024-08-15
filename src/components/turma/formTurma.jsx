import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CriarTurma = ({ onAddTurma }) => {
  const [formData, setFormData] = useState({
    numero: '',
    sala: '',
    idClasse: '', 
    idProfessor: '',
  });

  const [professores, setProfessores] = useState([]);
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/turmas`, formData);
      console.log('Turma criada com sucesso:', response.data);
      setFormData({
        numero: '',
        sala: '',
        idClasse: '',
        idProfessor: '',
      });
      setError('');
      onAddTurma(response.data); 
    } catch (error) {
      console.error('Erro ao criar turma:', error.response ? error.response.data : error.message);
      setError('Erro ao criar turma. Tente novamente.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const professoresResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/professores`);
        setProfessores(professoresResponse.data);

        const classesResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/classes`);
        setClasses(classesResponse.data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error.response ? error.response.data : error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-azul">Criar Turma</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Número</label>
          <input
            type="text"
            id="numero"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>

        <div>
          <label htmlFor="sala" className="block text-sm font-medium text-gray-700">Sala</label>
          <input
            type="text"
            id="sala"
            name="sala"
            value={formData.sala}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>

        <div>
          <label htmlFor="idClasse" className="block text-sm font-medium text-gray-700">Classe</label>
          <select
            id="idClasse"
            name="idClasse"
            value={formData.idClasse}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
          >
            <option value="">Selecione uma Classe</option>
            {classes.map((classe) => (
              <option key={classe._id} value={classe._id}>
                {classe.nome}ª classe
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="idProfessor" className="block text-sm font-medium text-gray-700">Professor</label>
          <select
            id="idProfessor"
            name="idProfessor"
            value={formData.idProfessor}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
          >
            <option value="">Selecione um Professor</option>
            {professores.map((professor) => (
              <option key={professor._id} value={professor._id}>
                {professor.nome}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange text-white font-semibold rounded-md shadow-sm hover:bg-azul focus:outline-none focus:ring-2 focus:ring-orange"
        >
          Criar Turma
        </button>
      </form>
    </div>
  );
};





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export const CriarTurma = () => {
//   const [formData, setFormData] = useState({
//     numero: '',
//     sala: '',
//     idClasse: '', 
//     idProfessor: '',
//   });

//   const [professores, setProfessores] = useState([]);
//   const [classes, setClasses] = useState([]);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/turmas`, formData);
//       console.log('Turma criada com sucesso:', response.data);
//       setFormData({
//         numero: '',
//         sala: '',
//         idClasse: '',
//         idProfessor: '',
//       });
//       setError('');
//     } catch (error) {
//       console.error('Erro ao criar turma:', error.response ? error.response.data : error.message);
//       setError('Erro ao criar turma. Tente novamente.');
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Buscar professores
//         const professoresResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/professores`);
//         setProfessores(professoresResponse.data);

//         // Buscar classes
//         const classesResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/classes`);
//         setClasses(classesResponse.data);
//       } catch (error) {
//         console.error('Erro ao carregar dados:', error.response ? error.response.data : error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6">Criar Turma</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Número</label>
//           <input
//             type="text"
//             id="numero"
//             name="numero"
//             value={formData.numero}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="sala" className="block text-sm font-medium text-gray-700">Sala</label>
//           <input
//             type="text"
//             id="sala"
//             name="sala"
//             value={formData.sala}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="idClasse" className="block text-sm font-medium text-gray-700">Classe</label>
//           <select
//             id="idClasse"
//             name="idClasse"
//             value={formData.idClasse}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             <option value="">Selecione uma Classe</option>
//             {classes.map((classe) => (
//               <option key={classe._id} value={classe._id}>
//                 {classe.nome}ª classe
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label htmlFor="idProfessor" className="block text-sm font-medium text-gray-700">Professor</label>
//           <select
//             id="idProfessor"
//             name="idProfessor"
//             value={formData.idProfessor}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             <option value="">Selecione um Professor</option>
//             {professores.map((professor) => (
//               <option key={professor._id} value={professor._id}>
//                 {professor.nome}
//               </option>
//             ))}
//           </select>
//         </div>

//         {error && <p className="text-red-600">{error}</p>}

//         <button
//           type="submit"
//           className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           Criar Turma
//         </button>
//       </form>
//     </div>
//   );
// };
