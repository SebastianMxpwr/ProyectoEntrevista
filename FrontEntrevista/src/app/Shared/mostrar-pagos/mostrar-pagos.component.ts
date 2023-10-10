import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrestamoService } from 'src/app/Services/prestamo.service';
declare var iziToast: any

@Component({
  selector: 'app-mostrar-pagos',
  templateUrl: './mostrar-pagos.component.html',
  styleUrls: ['./mostrar-pagos.component.scss']
})
export class MostrarPagosComponent implements OnInit{
  Prestamo ={
    pagos: [],
    cl: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    cantidadPrestada: 0,
    telefono: "",
    email: "",
    fechaDePrestamo: new Date,
    diaDeCobro: 0,
    mesesDelPrestamo: 0,
    intereses: 0

  }
  id: string = ""
  pagos = [
    {
      enTiempo: true,
      fechaDePago: "",
      monto:0,
      periodoDePago:0
    }
  ]
  constructor(public prestamoS: PrestamoService, public aRouter: ActivatedRoute){}

  ngOnInit(){
    this.getPrestamo()
  }

  getPrestamo(){
    this.aRouter.params.subscribe(params=>{
      this.id = params['id']
      this.prestamoS.getPrestamoId(this.id).subscribe((res:any)=>{
        this.Prestamo = res
        this.pagos = res.pagos
        console.log(this.Prestamo,this.pagos);
        
        iziToast.success({
          title: 'Exito al obtener',
          message: `Se obtuvo el prestamo`,
          position: 'bottomLeft'
        });
      },err=>{
        iziToast.error({
          title: 'Error',
          message: `Ocurrio un error ${err.error}`,
          position: 'bottomLeft'
        });
        
      })
    })
  }
}
