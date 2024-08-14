import { createBrowserRouter } from "react-router-dom";
import { Home } from "./src/pages/home";
import { Avaliacao } from "./src/pages/avaliacao";


export const route = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'/avaliacao',
        element: <Avaliacao/>,
    },
])