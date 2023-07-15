import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { TablaComponent } from './tabla-component/tabla-component.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'Tarjeta-Ingreso', component:RegistroComponent},
  {path:'Tabla',component:TablaComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

