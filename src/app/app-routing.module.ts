import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { DetailComponent } from './detail/detail.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { ListeComponent } from './liste/liste.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'voitures', component: ListeComponent},
  {path: 'delete', component: DeleteComponent, canActivate: [AuthGuard]},
  {path: 'ajouter', component: AddVoitureComponent, canActivate: [AuthGuard]},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'modifier/:id', component: UpdateComponent, canActivate: [AuthGuard]},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
