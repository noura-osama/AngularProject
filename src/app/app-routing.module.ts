import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:AuthGuard},
  {path:'signup',component:SignUpComponent},

  {path:"",redirectTo:"/home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
