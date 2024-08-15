import { createBrowserRouter } from "react-router-dom";
import { Home } from "./src/pages/home";
import { Avaliacao } from "./src/pages/avaliacao";
import { Aluno } from "./src/components/Aluno/Formaluno";
import { Notas } from "./src/pages/notas";
import { ErrorPage } from "./src/pages/error";
import { CriarProfessor } from "./src/components/professor/formprofessor";
import { CriarTurma } from "./src/components/turma/formTurma";
import { MostrarTurma } from "./src/pages/mostrar-turma";
import { MostrarAluno } from "./src/pages/mostrar-aluno";
import { ClassePage } from "./src/pages/classe-page";
import { DisciplinaPage } from "./src/pages/disciplina-page";
import WelcomePage from "./src/pages/welcomePage";
import { ProtectedRoute } from "./src/components/proutect-route";
import Login from "./src/components/login/login";

export const route = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/avaliacao',
        element: (
            <ProtectedRoute>
                <Avaliacao />
            </ProtectedRoute>
        ),
    },
    {
        path: '/aluno',
        element: <Aluno />,
    },
    {
        path: '/notas',
        element: <Notas />,
    },
    {
        path: '/professor',
        element: <CriarProfessor />,
    },
    {
        path: '/welcomePage',
        element: <WelcomePage />,
    },
    {
        path: '/turma',
        element: <CriarTurma />,
    },
    {
        path: '/mostrar-aluno',
        element: <MostrarAluno />,
    },
    {
        path: '/mostrar-turma',
        element: <MostrarTurma />,
    },
    {
        path: '/classe-page',
        element: <ClassePage />,
    },
    {
        path: '/login-page',
        element: <Login/>,
    },
    {
        path: '/disciplina-page',
        element: <DisciplinaPage />,
    },
]);
