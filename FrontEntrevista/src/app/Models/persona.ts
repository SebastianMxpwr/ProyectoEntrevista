export interface Pagos{
    id: string,
    periodoPago: number,
    fechaPago: Date,
    enTiempo: Boolean

}


export interface Persona {

    id?: string,
    Nombre: string,
    ApellidoPaterno: string,
    ApellidoMaterno: string,
    Email: string,
    Pagos?: Array<Pagos>

}
