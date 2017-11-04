import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UsersListComponent } from '../users-list/users-list.component';
import {ViewTodoComponent} from '../view-todo/view-todo.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'usersList', component: UsersListComponent},
  {path: 'ViewTodoComponent', component: ViewTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
