import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationForm } from './components/location-form/locationForm.component';
import { GradientButtonComponent } from './components/buttons/gradient-button/gradientButton.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AboutComponent } from './screens/about/about.component';
import { SignUpComponent } from './screens/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationForm,
    GradientButtonComponent,
    LoginFormComponent,
    AboutComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
