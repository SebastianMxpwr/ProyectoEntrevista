import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrestamosComponent } from './Comoponents/prestamos/prestamos.component';
import { PersonasComponent } from './Comoponents/personas/personas.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { EditarPersonaComponent } from './Shared/editar-persona/editar-persona.component';
import { EditarPrestamoComponent } from './Shared/editar-prestamo/editar-prestamo.component';
import { MostrarPagosComponent } from './Shared/mostrar-pagos/mostrar-pagos.component';
import { CrearPrestamosComponent } from './Comoponents/crear-prestamos/crear-prestamos.component';
import { CrearPersonasComponent } from './Comoponents/crear-personas/crear-personas.component';



@NgModule({
  declarations: [
    AppComponent,
    PrestamosComponent,
    PersonasComponent,
    NavbarComponent,
    EditarPersonaComponent,
    EditarPrestamoComponent,
    MostrarPagosComponent,
    CrearPrestamosComponent,
    CrearPersonasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
