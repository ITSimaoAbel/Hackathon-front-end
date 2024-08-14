import React from 'react'
import { TabelaAluno } from '../components/Aluno/tabelaAluno'
import { Dashboard } from '../components/dashboard/admindash'




export const MostrarAluno = () => {
  return (
    <>
     <Dashboard />
     <TabelaAluno />
    </>
  )
}