import { createBrowserRouter } from "react-router-dom";
import { Home } from "./src/pages/home";
import { Avaliacao } from "./src/pages/avaliacao";
import { Aluno } from "./src/components/Aluno/Formaluno";
import { Notas } from "./src/pages/notas";
import { ErrorPage } from "./src/pages/error";
import {CriarProfessor} from "./src/components/professor/formprofessor";
import { CriarTurma } from "./src/components/turma/formTurma";
import { MostrarTurma } from "./src/pages/mostrar-turma";
import { MostrarAluno } from "./src/pages/mostrar-aluno";
import { ClassePage } from "./src/pages/classe-page";
import { DisciplinaPage } from "./src/pages/disciplina-page";


export const route = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<ErrorPage/>,
    },
    {
        path:'/avaliacao',
        element: <Avaliacao/>,
    },
    {
        path:'/aluno',
        element: <Aluno/>,
    },
    {
        path:'/notas',
        element: <Notas/>,
    },
    {
        path:'/professor',
        element: <CriarProfessor/>,
    },
    {
        path:'/turma',
        element: <CriarTurma/>,
    },
    {
        path:'/mostrar-aluno',
        element: <MostrarAluno/>,
    },
    {
        path:'/mostrar-turma',
        element: <MostrarTurma/>,
    },
    {
        path:'/classe-page',
        element: <ClassePage/>,
    },
    {
        path:'/disciplina-page',
        element: <DisciplinaPage/>,
    },
    
])
