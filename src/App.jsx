import { RouterProvider } from 'react-router-dom'
import { route } from '../routes'
import { AuthProvider } from './components/context'

export const App = () => {
  return (    
    <AuthProvider>
      <RouterProvider router={route} /> 
      </AuthProvider>
  )
}
export default App;