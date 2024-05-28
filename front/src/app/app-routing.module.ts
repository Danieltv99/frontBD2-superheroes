import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroeEditComponent } from './components/heroe-edit/heroe-edit.component';
import { LoginComponent } from './components/login/login.component';
import { MultimediaCrudComponent } from './components/multimedia-crud/multimedia-crud.component';

const routes: Routes = [
  { path: 'hogar', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesListComponent},
  { path: 'heroeedit/:idheroe', component: HeroeEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'multimedia', component: MultimediaCrudComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
