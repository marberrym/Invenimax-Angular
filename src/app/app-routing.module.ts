import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './screens/about/about.component'
import { LocationComponent } from './screens/location/location.component'
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'location', component: LocationComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent}
  // {path: 'about', component: },
  // {path: '', component: }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
