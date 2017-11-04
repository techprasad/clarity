import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { ServiceNameService } from './http-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent,
    ViewTodoComponent
  ],
  imports: [
    BrowserModule,
    RoutesRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ServiceNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
