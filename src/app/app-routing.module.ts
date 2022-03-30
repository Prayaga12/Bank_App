import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  //path for dashboard component
  {
    path:'dashboard', component:DashboardComponent
  },
  //path for Login component
  {
    path:'', component:LoginComponent
  },
  //path for register component
  {
    path:'register', component:RegisterComponent
  },
  //path for transaction component
  {
    path:'transaction', component:TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
