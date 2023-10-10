import { Component } from '@angular/core';
import { Prestamo } from 'src/app/Models/prestamo';
import { PrestamoService } from 'src/app/Services/prestamo.service';
declare var iziToast: any


@Component({
  selector: 'app-crear-prestamos',
  templateUrl: './crear-prestamos.component.html',
  styleUrls: ['./crear-prestamos.component.scss']
})
export class CrearPrestamosComponent {
  nuevoPrestamo: Prestamo ={
    Pagos: [],
    Cl: "",
    Nombre: "",
    ApellidoPaterno: "",
    ApellidoMaterno: "",
    CantidadPrestada: 0,
    Telefono: "",
    Email: "",
    FechaDePrestamo: new Date,
    DiaDeCobro: 0,
    MesesDelPrestamo: 0,
    Intereses: 0

  }
  constructor(public prestamoS: PrestamoService){}

  submit(){
    this.prestamoS.createPrestamo(this.nuevoPrestamo).subscribe((res:any)=>{
      iziToast.success({
        title: 'Exito registrar',
        message: `Se registro el prestamo`,
        position: 'bottomLeft'
      });
    },err=>{
      console.log(err);
      
      iziToast.error({
        title: 'Error',
        message: `Ocurrio un error "${err.error}"`,
        position: 'bottomLeft'
      });
      
    })
    
  }





}
