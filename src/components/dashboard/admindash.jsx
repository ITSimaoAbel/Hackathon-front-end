import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, UserCircleIcon } from '@heroicons/react/outline';

export const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
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
                <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/Avaliacao" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Avaliação
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/Notas" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Notas
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

      {/* Main content */}
      <div className="flex-1 ml-64 bg-gray-100">
        <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full py-2 px-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Bem-vindo, Admin</span>
            <UserCircleIcon className="h-8 w-8 text-gray-400" />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          {/* Your main content goes here */}
        </main>
      </div>
    </div>
  );
};
