// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { RoutesRoutingModule } from './routes-routing.module';
// @NgModule({
//   imports: [
//     CommonModule,
//     RoutesRoutingModule
//   ],
//   declarations: []
// })
// export class RoutesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesModule { }

export const routedComponents = [LoginComponent];