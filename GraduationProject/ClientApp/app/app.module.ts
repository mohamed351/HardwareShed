

import { CitiesService } from './services/cities.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { AreasService } from './services/areas.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './components/user/login/login.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './guards/auth-interceptor';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './components/profile/profile.component';
import { UserdetailsComponent } from './components/profile/userdetails/userdetails.component';
import { ReviewsComponent } from './components/profile/reviews/reviews.component';
import { UserproductComponent } from './components/profile/userproduct/userproduct.component';
import { ProductCardComponent } from './components/resuable/product-card/product-card.component';
import { UserInfoService } from './services/userInfo.service';
import { RatingComponent } from './components/resuable/rating/rating.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule } from '@angular/material/icon';
import {ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AddProductComponent } from './components/home/add-product/add-product.component'
import { ProductService } from './services/product.service';
import { ImageCropperModule } from 'ngx-image-cropper';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    UserdetailsComponent,
    ReviewsComponent,
    UserproductComponent,
    ProductCardComponent,
    RatingComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    ImageCropperModule,
    MatAutocompleteModule
    
    
   
  ],
  providers: [
     
        [AreasService, CitiesService, UserInfoService,ProductService],
        UserService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
      { provide: APP_BASE_HREF, useValue: '/' },
     
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
