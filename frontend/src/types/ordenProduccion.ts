export interface OrdenProduccion {
  id: number
  cliente: string
  producto: string
  cantidad: number
  fechaEntrega: string
  estado: 'Pendiente' | 'Proceso' | 'Completado'
}

export interface CreateOrdenProduccionDto {
  cliente: string
  producto: string
  cantidad: number
  fechaEntrega: string
  estado: string
}

export interface UpdateOrdenProduccionDto {
  cliente?: string
  producto?: string
  cantidad?: number
  fechaEntrega?: string
  estado?: string
}
