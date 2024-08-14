import React from 'react'
import { TabelaTurma } from '../components/turma/tabelaTurma'
import { Dashboard } from '../components/dashboard/admindash'


export const MostrarTurma = () => {
  return (
    <>
      <Dashboard />
       <TabelaTurma />
    </>
  )
}