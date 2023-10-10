import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona, Pagos } from '../Models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'https://localhost:7104/api/Persona'
  constructor(private http: HttpClient) { }

  getAllPersonas(){
    return this.http.get(`${this.url}/listarPersonas`)
  }
  getPersonaId(id:string){
    return this.http.get(`${this.url}/listarPersona/${id}`)
  }
  createPersona(data: Persona){
    return this.http.post(`${this.url}/crearPersona`, data)
  }
  updatePersona(id: string, data:Persona){
    return this.http.put(`${this.url}/ActualizarPersona/${id}`,data)
  }
  addPayment(id: string , data: Pagos){
    return this.http.put(`${this.url}/Pago${id}`, data)
  }
  deletePersona(id:string){
console.log(id);
    return this.http.delete(`${this.url}/BorrarPersona/${id}`)
  }
}
