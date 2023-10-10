import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagos, Persona } from 'src/app/Models/persona';
import { PersonaService } from 'src/app/Services/persona.service';
declare var iziToast: any


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit{

    personas: any = []
    constructor(public personaS: PersonaService, public route: Router){}

    ngOnInit(): void {
      this.getPersonas()
    }

    getPersonas(){
      this.personaS.getAllPersonas().subscribe((res:any)=>{
        this.personas = res
        iziToast.success({
          title: 'Exito al obtener',
          message: `Se obtuvieron a las personas`,
          position: 'bottomLeft'
        });
      },err=>{
        iziToast.error({
          title: 'Error',
          message: `Ocurrio un error ${err}`,
          position: 'bottomLeft'
        });
        
      })
      
    }

   eliminarPersona(id: string){
    iziToast.question({
      timeout: 20000,
      close: false,
      overlay: true,
      backgroundColor: 'rgb(240, 86, 86)',
      displayMode: 'once',
      id: 'question',
      zindex: 999,
      title: 'Oye!!',
      message: 'Estas seguro de borrarlo',
      position: 'center',
      buttons: [
          ['<button><b>SI</b></button>',  (instance:any, toast:any) => {            
            this.personaS.deletePersona(id).subscribe((res:any)=>{
              iziToast.success({
                title: 'OK',
                message: 'Exito al borrar la persona',
            });
            this.getPersonas()
            }, err=>{
              console.log(err);
            })
          
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
   
          }, true],
          ['<button><b>NO</b></button>', (instance:any, toast:any)=> {
   
              instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
   
          }],
      ],
  });
  }

  editPersona(id:string){
    this.route.navigate(['personas/editarPersona/', id])
  }

}
