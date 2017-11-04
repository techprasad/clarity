import { Component, OnInit } from '@angular/core';
import { ServiceNameService } from '../http-interceptor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [ServiceNameService]
})
export class UsersListComponent implements OnInit {
  public data:any = null;
  public show: boolean = false;
  constructor(private _httpInterceptor: ServiceNameService, private navigate: Router) { }
  public getusersList() {
    this._httpInterceptor.get('https://jsonplaceholder.typicode.com/users').subscribe((Response)=>{
      this.data= Response;
      this.show = true;
    });
  }
  public showTodosFor(userName:string) {
    localStorage.setItem('userName', userName);
    this.navigate.navigateByUrl('ViewTodoComponent');
  }
  ngOnInit() {
    this.getusersList();
  }
}
