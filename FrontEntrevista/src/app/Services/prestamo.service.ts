import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prestamo } from '../Models/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  url = 'https://localhost:7104/api/Prestamo'
  constructor(private http :HttpClient) { }

  getAllPrestamos(){
    return this.http.get(`${this.url}/listarPrestamos`)
  }
  getPrestamoId(id:string){
    return this.http.get(`${this.url}/listarPrestamoId/${id}`)
  }
  getPrestamoByEmail(correo:string){
    return this.http.get(`${this.url}/listarPrestamoCorreo?email=${correo}`)
  }
  createPrestamo(data: Prestamo){
    return this.http.post(`${this.url}/crearPrestamo`, data)
  }
  updatePrestamo(id:string, data:Prestamo){
    return this.http.put(`${this.url}/actuzalizarPrestamo/${id}`,data )
  }
  deletePrestamo(id:string){
    return this.http.delete(`${this.url}/borrarPrestamo/${id}`)
  }
}
