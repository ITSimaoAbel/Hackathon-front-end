import { createBrowserRouter } from "react-router-dom";
import { Home } from "./src/pages/home";
import { Avaliacao } from "./src/pages/avaliacao";
import { Aluno } from "./src/pages/aluno";
import { Notas } from "./src/pages/notas";


export const route = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        // errorElement:<ErrorPage/>,
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
])