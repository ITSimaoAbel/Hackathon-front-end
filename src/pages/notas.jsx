import { LancamentoNotas } from "../components/Aluno/avaliar";
import { Dashboard } from "../components/dashboard/admindash";
import {Footer} from "../components/footer/footer";
// import Footer from "../components/Footer/footer";

export const Notas = () => {
    return (
      <>
        <div className="flex flex-col min-h-screen">
          <Dashboard />      
          <main className="flex-1">
            <LancamentoNotas />       
          </main>
          <Footer />
        </div> 
      </>
    );
}

