import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import TrabajadoresPage from './pages/TrabajadoresPage'
import OrdenesProduccionPage from './pages/OrdenesProduccionPage'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabajadores" element={<TrabajadoresPage />} />
          <Route path="/ordenes-produccion" element={<OrdenesProduccionPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
