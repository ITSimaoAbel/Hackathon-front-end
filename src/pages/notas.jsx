import { LancamentoNotas } from "../components/Aluno/avaliar";
import { Dashboard } from "../components/dashboard/admindash";
import Footer from "../components/Footer/footer";

export const Notas = () => {
    return (
      <>
        <Dashboard />
        <LancamentoNotas />
        <Footer/>
      </>
    );
}

