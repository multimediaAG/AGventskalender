import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_pages/login/login.component';
import { RegisterComponent } from './_pages/register/register.component';
import { RulesComponent } from './_pages/rules/rules.component';
import { ScoresComponent } from './_pages/scores/scores.component';
import { UsersComponent } from './_pages/users/users.component';
import { WelcomeComponent } from './_pages/welcome/welcome.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"welcome", component: WelcomeComponent /*canActivate [AuthenticationGuard]*/},
  {path:"users", component: UsersComponent /*canActivate [AuthenticationGuard, AdminGuard]*/},
  {path:"scores", component: ScoresComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"rules", component: RulesComponent},
  {path:"**", redirectTo: "home", pathMatch: "full"},
  // tasks a day (AuthenticationGuard)
  // tasks (AuthenticationGuard)
  // resetPassword

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
