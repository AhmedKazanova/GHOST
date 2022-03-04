import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PersonComponent } from './person/person.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import { RegisterComponent } from './register/register.component';
import { TrendingmoviesComponent } from './trendingmovies/trendingmovies.component';
import { TrendintvComponent } from './trendintv/trendintv.component';
import { TvdatailsComponent } from './tvdatails/tvdatails.component';

const routes: Routes = [
  {path:'' , redirectTo:'Home/1',pathMatch:'full' }, 
  {path:'Home' , redirectTo:'Home/1',pathMatch:'full' },
  {path:'Home/:id',component:HomeComponent},
  {path:'Actors/:id',component:PersonComponent},
  {path:'Actors' , redirectTo:'Actors/1',pathMatch:'full' },
  {path:'Movies/:id',component:TrendingmoviesComponent},
  {path:'Movies' , redirectTo:'Movies/1',pathMatch:'full' },
  {path:'Tv/:id',component:TrendintvComponent},
  {path:'Tv' , redirectTo:'Tv/1',pathMatch:'full' },
  {path:'About',component:AboutComponent},
  {path:'Login',component:LoginComponent},
  {path:'Moviedetails/:id',component:MoviedetailsComponent},
  {path:'Persondatails/:id',component:PersondetailsComponent},
  {path:'Tvdatails/:id',component:TvdatailsComponent},
  {path:'Register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
