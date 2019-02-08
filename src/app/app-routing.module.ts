import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './screens/about/about.component'
import { NewLocationComponent } from './screens/new-location/new-location.component'
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { LoginComponent } from './screens/login/login.component';
import { MyLocationsComponent } from './screens/my-locations/my-locations.component';
import { LocationDetailsComponent } from './screens/location-details/location-details.component';
import { AddItemComponent } from './screens/add-item/add-item.component';
import { EditItemComponent } from './screens/edit-item/edit-item.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'locations', component: MyLocationsComponent},
  {path: 'location', component: LocationDetailsComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newlocation', component: NewLocationComponent},
  {path: 'additem', component: AddItemComponent},
  {path: 'edititem', component: EditItemComponent}
  // {path: 'about', component: },
  // {path: '', component: }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
