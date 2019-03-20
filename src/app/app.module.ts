import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MaterialModule } from './material.module';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { HeaderComponent } from './pages/navigation/header/header.component';
import { SidenavListComponent } from './pages/navigation/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomepageComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }