import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Plataforma from './pages/Plataforma'
import Simulador from './pages/Simulador'
import Faq from './pages/Faq'
import Integrantes from './pages/Integrantes'
import Contato from './pages/Contato'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="plataforma" element={<Plataforma />} />
        <Route path="simulador" element={<Simulador />} />
        <Route path="faq" element={<Faq />} />
        {/* /integrantes/:id (rota dinâmica) fica sob responsabilidade do João */}
        <Route path="integrantes" element={<Integrantes />} />
        <Route path="contato" element={<Contato />} />
      </Route>
    </Routes>
  )
}

export default App
