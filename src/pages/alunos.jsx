import React from 'react'
import { Aluno } from '../components/Aluno/Formaluno'

export const CriarAluno = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row items-center justify-between p-16">
        <Aluno />
    </main>
    </>
  )
}