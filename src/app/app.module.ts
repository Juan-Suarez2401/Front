import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FromUsuarioModule } from './from-usuario/from-usuario.module';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { FormularioComponent } from './from-usuario/formulario/formulario.component';
import { GiroFormComponent } from './envio-giro/giro-form/giro-form.component';
import { EnvioGiroModule } from './envio-giro/envio-giro.module';
import { PagoGiroModule } from './pago-giro/pago-giro.module';
import { PagoFormComponent } from './pago-giro/pago-form/pago-form.component';
import { PagarComponent } from './pago-giro/pagar/pagar.component';
import { NuevoUsuarioComponent } from './Models/nuevo-usuario/nuevo-usuario.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';

const routes:Routes=[
  { path:'',redirectTo:'/Home', pathMatch:'full'},
  { path:'Home', component:HomeComponent},
  { path:'listar', component:UsuariosComponent},
  { path:'Form', component:FormularioComponent},
  { path:'Form/:cedula', component:FormularioComponent},
  { path:'GiroForm', component:GiroFormComponent},
  { path:'GiroForm/:cedulaBeneficiaro', component:GiroFormComponent},
  { path:'Pago', component:PagoFormComponent},
  { path:'Pagar/:cedulaBeneficiaro', component:PagarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FromUsuarioModule,
    EnvioGiroModule,
    FormsModule,
    HomeModule,
    RouterModule.forRoot(routes),
    PagoGiroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
