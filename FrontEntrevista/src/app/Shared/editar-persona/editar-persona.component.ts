import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pagos, Persona } from 'src/app/Models/persona';
import { PersonaService } from 'src/app/Services/persona.service';
declare var iziToast: any

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.scss']
})
export class EditarPersonaComponent implements OnInit{
  nuevaPersona = 
  {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    pagos: new Array<Pagos>
  }

  personaActualizada: Persona = 
      {
        Nombre: "",
        ApellidoPaterno: "",
        ApellidoMaterno: "",
        Email: "",
        Pagos: []
      }
  id: string = ""
  constructor(public personaS: PersonaService, public aRouter: ActivatedRoute){}

  ngOnInit(): void {
    this.getPersona()
  }

  getPersona(){
    this.aRouter.params.subscribe(params=>{
      this.id = params['id']
      this.personaS.getPersonaId(this.id).subscribe((res:any)=>{
        this.nuevaPersona = res
        console.log(this.nuevaPersona);
        
        iziToast.success({
          title: 'Exito al obtener',
          message: `Se obtuvo a la persona`,
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

  editar(){
    this.personaActualizada = {
      Nombre: this.nuevaPersona.nombre,
      ApellidoPaterno: this.nuevaPersona.apellidoPaterno,
      ApellidoMaterno: this.nuevaPersona.apellidoMaterno,
      Email: this.nuevaPersona.email,
      Pagos: this.nuevaPersona.pagos
    }
    
    this.personaS.updatePersona(this.id, this.personaActualizada).subscribe((res:any)=>{
      iziToast.success({
        title: 'Exito al actualizar',
        message: `Se actualizó la persona`,
        position: 'bottomLeft'
      });
    },err=>{
      iziToast.error({
        title: 'Error',
        message: `Ocurrio un error ${err.error}`,
        position: 'bottomLeft'
      });
      
    })
  }

  
}
