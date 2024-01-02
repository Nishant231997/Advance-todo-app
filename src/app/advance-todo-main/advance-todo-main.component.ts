import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advance-todo-main',
  templateUrl: './advance-todo-main.component.html',
  styleUrls: ['./advance-todo-main.component.scss']
})
export class AdvanceTodoMainComponent implements OnInit {
  todoPage:FormGroup =new FormGroup({
    datePicker: new FormControl(null),
    desc: new FormControl(null),
    tags: new FormControl(null),
    
  })
  taskList:any=[];
  taskData:any  =[];
  headerArray=['SR NO', 'TASK NAME' , 'DUE DATE' , 'TAGS'];
  constructor() {
    const localData= localStorage.getItem('taskData');
    if(localData != null) this.taskList=JSON.parse(localData);
   }

  ngOnInit(): void {
  }
  createNewTask(){
    
    this.taskData.push(this.todoPage.value);
  console.warn('nj',this.taskList);
     this.taskList=[...this.taskData];
     localStorage.setItem('taskData',JSON.stringify(this.taskList));
  }

}
