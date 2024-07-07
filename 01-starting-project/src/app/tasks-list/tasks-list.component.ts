import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';



@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {


  @Input({required: true}) tasks! : Task;


  @Output() completed = new EventEmitter<string>();

  onCompleteTask() {
    console.log("Delete the user");
    
    this.completed.emit(this.tasks.id);
  }
}
