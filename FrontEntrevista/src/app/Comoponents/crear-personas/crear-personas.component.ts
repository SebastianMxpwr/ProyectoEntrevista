import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona, Pagos} from "../../Models/persona"
import { PersonaService } from 'src/app/Services/persona.service';
declare var iziToast: any


@Component({
  selector: 'app-crear-personas',
  templateUrl: './crear-personas.component.html',
  styleUrls: ['./crear-personas.component.scss']
})
export class CrearPersonasComponent {

  constructor(public personaS: PersonaService){}
  nuevaPersona: Persona = 
  {
    Nombre: "",
    ApellidoPaterno: "",
    ApellidoMaterno: "",
    Email: "",
    Pagos: new Array<Pagos>
  }
  submit(){
    this.personaS.createPersona(this.nuevaPersona).subscribe((res:any)=>{
      iziToast.success({
        title: 'Exito registrar',
        message: `Se registro la persona`,
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
