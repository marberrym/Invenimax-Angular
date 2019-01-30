import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './screens/location/location.component';
import { GradientButtonComponent } from './components/buttons/gradient-button/gradientButton.component';
import { LoginComponent } from './screens/login/login.component';
import { AboutComponent } from './screens/about/about.component';
import { SignUpComponent } from './screens/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    GradientButtonComponent,
    LoginComponent,
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
