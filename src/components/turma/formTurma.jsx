// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export const CriarTurma = () => {
//   const [formData, setFormData] = useState({
//     numero: '',
//     sala: '',
//     idClasse: [1, 2, 3, 4],
//     idProfessor: '',
//   });

//   const [classes, setClasses] = useState([]);
//   const [professores, setProfessores] = useState([]);

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
//         idClasse: "",
//         idProfessor: '',
//       });
//     } catch (error) {
//       console.error('Erro ao criar turma:', error.response ? error.response.data : error.message);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [classesResponse, professoresResponse] = await Promise.all([
//           //axios.get(`${import.meta.env.VITE_API_BASE_URL}/classes`),
//           axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/professores`),
//         ]);
//        // setClasses(classesResponse.data);
//         setProfessores(professoresResponse.data);
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
//               <option key={classe.id} value={classe.id}>
//                 {classe.nome}
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
//               <option key={professor.id} value={professor.id}>
//                 {professor.nome}
//               </option>
//             ))}
//           </select>
//         </div>

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


import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CriarTurma = () => {
  const [formData, setFormData] = useState({
    numero: '',
    sala: '',
    idClasse: '', // Deixe como string no estado
    idProfessor: '',
  });

  const [professores, setProfessores] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/turmas`, {
        ...formData,
        idClasse: Number(formData.idClasse), // Converta para número antes de enviar
      });
      console.log('Turma criada com sucesso:', response.data);
      setFormData({
        numero: '',
        sala: '',
        idClasse: '',
        idProfessor: '',
      });
    } catch (error) {
      console.error('Erro ao criar turma:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const professoresResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/professores`);
        setProfessores(professoresResponse.data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error.response ? error.response.data : error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Criar Turma</h1>
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Selecione uma Classe</option>
            {[1, 2, 3, 4, 5, 6].map((classe) => (
              <option key={classe} value={classe}>
                Classe {classe}
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Selecione um Professor</option>
            {professores.map((professor) => (
              <option key={professor.id} value={professor.id}>
                {professor.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Criar Turma
        </button>
      </form>
    </div>
  );
};


