export interface Trabajador {
  id: number
  nombre: string
  apellido: string
  puesto: string
  salario: number
  fechaContratacion?: string
}

export interface CreateTrabajadorDto {
  nombre: string
  apellido: string
  puesto: string
  salario: number
}

export interface UpdateTrabajadorDto {
  nombre?: string
  apellido?: string
  puesto?: string
  salario?: number
}
