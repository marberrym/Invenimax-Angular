import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './screens/about/about.component'
import { LocationForm } from './components/location-form/locationForm.component'

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'location', component: LocationForm}
  // {path: 'about', component: },
  // {path: '', component: }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
