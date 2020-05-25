import { CitiesService } from './services/cities.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AreasService } from './services/areas.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';


const router: Routes = [
  { path: '', component: HomeComponent },
  {path:'Registration',component:RegistrationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    RouterModule.forRoot(router,{useHash:true}),
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [AreasService,CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
