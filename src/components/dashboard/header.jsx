import React from 'react'
import { SearchIcon, UserCircleIcon } from '@heroicons/react/outline';

export const Header = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full py-2 px-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Bem-vindo, Admin</span>
            <UserCircleIcon className="h-8 w-8 text-gray-400" />
          </div>
        </header>
    </>
  )
}