import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroeEditComponent } from './components/heroe-edit/heroe-edit.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MultimediaCrudComponent } from './components/multimedia-crud/multimedia-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroeEditComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    MultimediaCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Aqui involucro el HTTPClientModule para realizar las perticiones RESTFUL
    HttpClientModule,
     
    //Aqui involucramos el Forms Module
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
