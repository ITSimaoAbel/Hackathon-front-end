import React from 'react'
import { Link } from 'react-router-dom';

export const Aside = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full fixed top-0 left-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-orange mb-6">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/" className="block py-2 px-4 rounded hover:bg-orange">
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/#" className="block py-2 px-4 rounded hover:bg-orange">
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/mostrar-aluno" className="block py-2 px-4 rounded hover:bg-orange">
                Alunos
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/mostrar-turma" className="block py-2 px-4 rounded hover:bg-orange">
                Turmas
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/Avaliacao" className="block py-2 px-4 rounded hover:bg-orange">
                Avaliação
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/Notas" className="block py-2 px-4 rounded hover:bg-orange">
                Lançar Notas
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/disciplina-page" className="block py-2 px-4 rounded hover:bg-orange">
                Disciplinas
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/classe-page" className="block py-2 px-4 rounded hover:bg-orange">
                Classes
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/#" className="block py-2 px-4 rounded hover:bg-orange">
                Sair
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}