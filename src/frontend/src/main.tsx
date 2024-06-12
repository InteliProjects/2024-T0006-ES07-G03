import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Toaster } from './components/ui/sonner'
import { AuthContextProvider } from './contexts/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
    <App />
    <Toaster />
  </AuthContextProvider>
)
