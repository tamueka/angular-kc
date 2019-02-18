import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { InicioModule } from './inicio/inicio.module';
import { TareasModule } from './tareas/tareas.module';
import { ContactosModule } from './contactos/contactos.module';
import { LibrosModule } from './libros/libros.module';
import { AboutModule } from './about/about.module';

// the second parameter 'es' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    InicioModule,
    TareasModule,
    ContactosModule,
    LibrosModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
