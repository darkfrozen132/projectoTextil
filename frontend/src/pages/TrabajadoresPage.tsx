import { useState, useEffect } from 'react'
import axios from 'axios'
import './TrabajadoresPage.css'

interface Trabajador {
  id: number
  nombre: string
  apellido: string
  puesto: string
  salario: number
}

const TrabajadoresPage = () => {
  const [trabajadores, setTrabajadores] = useState<Trabajador[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchTrabajadores()
  }, [])

  const fetchTrabajadores = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/trabajadores')
      setTrabajadores(response.data)
      setError(null)
    } catch (err) {
      setError('Error al cargar los trabajadores')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="loading">Cargando trabajadores...</div>
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  return (
    <div className="trabajadores-page">
      <h1>Gestión de Trabajadores</h1>
      <div className="table-container">
        <table className="trabajadores-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Puesto</th>
              <th>Salario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {trabajadores.map((trabajador) => (
              <tr key={trabajador.id}>
                <td>{trabajador.id}</td>
                <td>{trabajador.nombre}</td>
                <td>{trabajador.apellido}</td>
                <td>{trabajador.puesto}</td>
                <td>${trabajador.salario}</td>
                <td>
                  <button className="btn-edit">Editar</button>
                  <button className="btn-delete">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn-add">Agregar Trabajador</button>
    </div>
  )
}

export default TrabajadoresPage
