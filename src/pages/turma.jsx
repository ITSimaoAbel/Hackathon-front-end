import React from 'react'
import { CriarTurma } from '../components/turma/formTurma'


export const CriarAluno = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row items-center justify-between p-16">
        <CriarTurma />
    </main>
    </>
  )
}