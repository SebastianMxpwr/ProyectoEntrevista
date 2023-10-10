export interface PagoDelPrestamo 
{
    Monto: Number,
    PeriodoDePago:number,
    FechaDePago: Date,
    EnTiempo: Boolean

}


export interface Prestamo {

    id?: string,
    Pagos?: Array<PagoDelPrestamo>
    Cl: string,
    Nombre: string,
    ApellidoPaterno: string,
    ApellidoMaterno: string,
    CantidadPrestada: number,
    Telefono?: string,
    Email: string,
    FechaDePrestamo: Date,
    DiaDeCobro: number
    MesesDelPrestamo: number
    Intereses: number
}
