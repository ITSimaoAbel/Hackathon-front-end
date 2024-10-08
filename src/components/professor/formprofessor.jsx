import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate

export const CriarProfessor = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sexo: '',
    email: '',
    senha: '',
  });

  const navigate = useNavigate(); // Inicialize o hook useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/professores`, formData);
      console.log('Professor registrado com sucesso:', response.data);
      
     
      setFormData({
        nome: '',
        sexo: '',
        email: '',
        senha: '',
      });

    
      navigate(`/login-page`); 
    } catch (error) {
      console.error('Erro ao registrar professor:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6">
    <div className="mt-40 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-orange">Registrar Professor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>

        {/* Sexo */}
        <div>
          <label htmlFor="sexo" className="block text-sm font-medium text-gray-700">Sexo</label>
          <select
            id="sexo"
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
          >
            <option value="">Selecione o Sexo</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outros">Outro</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>

        {/* Senha */}
        <div>
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>

        {/* Botão de Enviar */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange text-white font-semibold rounded-md shadow-sm hover:bg-azul focus:outline-none focus:ring-2 focus:ring-orange"
        >
          Registrar
        </button>
      </form>
    </div>
    </div>
  );
};

export default CriarProfessor;
