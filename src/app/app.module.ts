import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocalstoragesService } from './storages/localstorages.service'; 
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes =[
  {path:'', pathMatch:'full', redirectTo:'inicio'},
  {path:'inicio', component:InicioComponent },
  {path:'nosotros',component:NosotrosComponent},
  {path:'productos',component:ProductosComponent},
  {path:'contactanos',component:ContactanosComponent}
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ProductosComponent,
    ContactanosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [LocalstoragesService],
  bootstrap: [AppComponent,ContactanosComponent]
})
export class AppModule { }
