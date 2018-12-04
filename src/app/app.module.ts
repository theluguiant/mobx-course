import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';
import { routing, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { Pearson } from './store/pearson.store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    FormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MobxAngularModule,
    NgbModule
  ],
  providers: [
    appRoutingProviders,
    Pearson
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
