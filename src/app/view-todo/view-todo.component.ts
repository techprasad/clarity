import { Component, OnInit } from '@angular/core';
import { ServiceNameService } from '../http-interceptor.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {
  public userId: string = '';
  public usersTodoList: any;
  public show: boolean = false;
  public todoListForm: FormGroup;
  constructor(
    private _httpInterceptor: ServiceNameService, 
    private navigate: Router,
    private _formBuilder: FormBuilder
  ) { }
  public getUserName() {
    this.userId = localStorage.getItem('userName');
    this.getUserToDoList();
  }
  public buildForm() {
    this.todoListForm = this._formBuilder.group({
      updateTask: ['']
    });
  }
  public updateTaskStatus(id:number, from: string) {
    if(!from) {
      this.usersTodoList[id].completed = this.todoListForm.value['updateTask'];
      this.saveTaskStatus(id);
    } else {
      this.usersTodoList.splice(id, 1);
    }
    
  }
  public saveTaskStatus(id:number) {
    this._httpInterceptor.post('https://jsonplaceholder.typicode.com/todos/', this.usersTodoList[id]).subscribe((Response)=>{
      console.log('updated status');  
    });
  }
  ngOnInit() {
    this.getUserName();
    this.buildForm();
  }
  private getUserToDoList() {

    this._httpInterceptor.get('https://jsonplaceholder.typicode.com/todos?userId='+this.userId).subscribe((Response)=>{
      this.usersTodoList = Response;
      this.show = true;  
    });
  }

}
