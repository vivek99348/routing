import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';

const approutes: Routes =[
    { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'contact', component: ContactComponent},
   {path: 'login', component: LoginComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(approutes)], 
  exports: [ RouterModule ]
})
export class AppRoutingModule {} 

