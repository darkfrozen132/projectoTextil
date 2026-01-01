import { useState, useEffect } from 'react'
import axios from 'axios'
import './OrdenesProduccionPage.css'

interface OrdenProduccion {
  id: number
  cliente: string
  producto: string
  cantidad: number
  fechaEntrega: string
  estado: string
}

const OrdenesProduccionPage = () => {
  const [ordenes, setOrdenes] = useState<OrdenProduccion[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchOrdenes()
  }, [])

  const fetchOrdenes = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/orden-produccion')
      setOrdenes(response.data)
      setError(null)
    } catch (err) {
      setError('Error al cargar las órdenes de producción')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="loading">Cargando órdenes de producción...</div>
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  return (
    <div className="ordenes-page">
      <h1>Órdenes de Producción</h1>
      <div className="table-container">
        <table className="ordenes-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Fecha de Entrega</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ordenes.map((orden) => (
              <tr key={orden.id}>
                <td>{orden.id}</td>
                <td>{orden.cliente}</td>
                <td>{orden.producto}</td>
                <td>{orden.cantidad}</td>
                <td>{new Date(orden.fechaEntrega).toLocaleDateString()}</td>
                <td>
                  <span className={`estado estado-${orden.estado.toLowerCase()}`}>
                    {orden.estado}
                  </span>
                </td>
                <td>
                  <button className="btn-edit">Editar</button>
                  <button className="btn-delete">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn-add">Agregar Orden</button>
    </div>
  )
}

export default OrdenesProduccionPage
