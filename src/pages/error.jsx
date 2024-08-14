import React from 'react'
import{ Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row items-center justify-between h-screen p-16">
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-orange text-lg font-bold">Ups! Página não encontrada</h1>
          <h2 className="text-orange text-5xl font-bold mt-2">VOCÊ PARECE ESTAR PERDIDO!</h2>
          <p className="mt-4">Tente voltar à página inicial ou pesquise por algo mais específico.</p>
          <Link to="/" className="inline-block py-2 px-4 bg-orange text-white font-bold rounded-md hover:bg-verde transition duration-150 ease-in-out mt-4">Voltar</Link>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/Sc1.png"
           alt="imagem 404"
          className="w-full max-w-md h-auto md:max-w-lg lg:max-w-xl"
         />
        </div>
    </main>
    </>
  )
}


// import React from 'react';
// import { Link } from 'react-router-dom';

// export const ErrorPage = () => {
//   return (
//     <main className="flex flex-col md:flex-row items-center justify-center h-screen p-8 bg-gray-100">
//       <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
//         <h1 className="text-orange-600 text-lg font-bold">Ups! Página não encontrada</h1>
//         <h2 className="text-orange-600 text-4xl md:text-5xl font-bold mt-2">VOCÊ PARECE ESTAR PERDIDO!</h2>
//         <p className="mt-4">Tente voltar à página inicial ou pesquise por algo mais específico.</p>
//         <Link
//           to="/"
//           className="inline-block py-2 px-4 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-700 transition duration-150 ease-in-out mt-4"
//         >
//           Voltar
//         </Link>
//       </div>
//       <div className="flex-1 flex justify-center md:justify-end">
//         <img
//           src="/Sc1.png"
//           alt="imagem 404"
//           className="w-full max-w-md h-auto md:max-w-lg lg:max-w-xl"
//         />
//       </div>
//     </main>
//   );
// };

