import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

import { NewLocationComponent } from './screens/new-location/new-location.component';
import { GradientButtonComponent } from './components/buttons/gradient-button/gradientButton.component';
import { LoginComponent } from './screens/login/login.component';
import { AboutComponent } from './screens/about/about.component';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { RegButtonComponent } from './components/buttons/reg-button/reg-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImheadComponent } from './components/imhead/imhead.component';
import { MyLocationsComponent } from './screens/my-locations/my-locations.component';
import { LocationDetailsComponent } from './screens/location-details/location-details.component';
import { AddItemComponent } from './screens/add-item/add-item.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { EditItemComponent } from './screens/edit-item/edit-item.component';
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { NewItemNoteComponent } from './components/new-item-note/new-item-note.component'

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    NewLocationComponent,
    GradientButtonComponent,
    LoginComponent,
    AboutComponent,
    SignUpComponent,
    RegButtonComponent,
    NavbarComponent,
    ImheadComponent,
    MyLocationsComponent,
    LocationDetailsComponent,
    AddItemComponent,
    DialogBoxComponent,
    EditItemComponent,
    NewTransactionComponent,
    NewItemNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FusionChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewTransactionComponent,
    NewItemNoteComponent,
  ]
})
export class AppModule { }
