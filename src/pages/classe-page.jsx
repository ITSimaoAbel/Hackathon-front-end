import React from 'react'
import { FormularioClasseDisciplinas } from '../components/classeComponente'
import { Dashboard } from '../components/dashboard/admindash'
import { Footer } from '../components/footer/footer'

export const  ClassePage = () =>{
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Dashboard />      
                <main className="flex-1 p-20 ml-80 m-20 ">
                    <FormularioClasseDisciplinas/>      
                </main>
                <Footer />
          </div>
        </>
    )
}

        
