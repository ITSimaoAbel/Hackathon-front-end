import React from 'react'
import { Link } from 'react-router-dom';

export const Aside = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full fixed top-0 left-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/mostrarAlunos" className="block py-2 px-4 rounded hover:bg-gray-700">
                Alunos
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/mostrarTurmas" className="block py-2 px-4 rounded hover:bg-gray-700">
                Turma
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/Avaliacao" className="block py-2 px-4 rounded hover:bg-gray-700">
                Avaliação
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/Notas" className="block py-2 px-4 rounded hover:bg-gray-700">
                Lançar Notas
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Sair
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}