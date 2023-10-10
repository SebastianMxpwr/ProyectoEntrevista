import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestamosComponent } from './Comoponents/prestamos/prestamos.component';
import { PersonasComponent } from './Comoponents/personas/personas.component';
import { CrearPersonasComponent } from './Comoponents/crear-personas/crear-personas.component';
import { CrearPrestamosComponent } from './Comoponents/crear-prestamos/crear-prestamos.component';
import { EditarPersonaComponent } from './Shared/editar-persona/editar-persona.component';
import { EditarPrestamoComponent } from './Shared/editar-prestamo/editar-prestamo.component';
import { MostrarPagosComponent } from './Shared/mostrar-pagos/mostrar-pagos.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "prestamos",
    pathMatch: 'full'
  },
  {
    path: "prestamos",
    component: PrestamosComponent
  },
  {
    path: "personas",
    component: PersonasComponent
  },
  {
    path: "personas/crearPersona",
    component: CrearPersonasComponent
  },
  {
    path: "personas/editarPersona/:id",
    component: EditarPersonaComponent
  },
  {
    path: "prestamos/crearPrestamo",
    component: CrearPrestamosComponent
  },
  {
    path: "prestamos/editarPrestamo/:id",
    component: EditarPrestamoComponent
  },
  {
    path: "prestamos/detallesPrestamo/:id",
    component: MostrarPagosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
