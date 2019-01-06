import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav/nav.component';
import { AuthService } from './_services/Auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AlertifyService } from './_services/alertify.service';
import { ErrorIntercepterProvider } from './_services/ErrorIntercepter';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      AuthService,
      AlertifyService,
      ErrorIntercepterProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
