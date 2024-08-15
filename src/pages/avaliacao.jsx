import { FormAvalicacao } from "../components/avaliacao";
import { Dashboard } from "../components/dashboard/admindash";

export const Avaliacao = () => {
  return (
    <>
      <Dashboard />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <FormAvalicacao />
        </div>
      </main>
    </>
  );
  }
  

  