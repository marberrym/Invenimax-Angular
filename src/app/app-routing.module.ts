import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './screens/about/about.component'
import { LocationForm } from './components/location-form/locationForm.component'
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'location', component: LocationForm},
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginFormComponent}
  // {path: 'about', component: },
  // {path: '', component: }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
