import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrestamoService } from '../../Services/prestamo.service'
declare var iziToast: any

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit{

  prestamos: any = []
  constructor(public prestamosS: PrestamoService, public router: Router){}

  ngOnInit(){
    this.getPrestamos()
  }

  getPrestamos(){
    this.prestamosS.getAllPrestamos().subscribe((res:any)=>{
      this.prestamos = res
      console.log(this.prestamos);
      
      iziToast.success({
        title: 'Exito al obtener',
        message: `Se obtuvieron los prestamos`,
        position: 'bottomLeft'
      });
    },err=>{
      iziToast.error({
        title: 'Error',
        message: `Ocurrio un error ${err.error});
        }`,
        position: 'bottomLeft'
      });
      
    })
    
  }

  detailPrestamo(id:string){
    this.router.navigate(['prestamos/detallesPrestamo',id])
  }
  

}
