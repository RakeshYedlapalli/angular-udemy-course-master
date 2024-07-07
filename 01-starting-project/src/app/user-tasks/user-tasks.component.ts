import { Component, Input } from '@angular/core';
import { TasksListComponent } from "../tasks-list/tasks-list.component";

@Component({
    selector: 'app-user-tasks',
    standalone: true,
    templateUrl: './user-tasks.component.html',
    styleUrl: './user-tasks.component.css',
    imports: [TasksListComponent]
})
export class UserTasksComponent {

  @Input({required: true}) username!: string | undefined;
  @Input({required: true}) userId!: string | undefined;



  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'U1 Master Angular Team',
      summary: 'Learn all the basic and advanced tasks',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'U2 Master Angular Team',
      summary: 'Learn all the basic and advanced tasks',
      dueDate: '2025-12-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'U3 Master Angular Team',
      summary: 'Learn all the basic and advanced tasks',
      dueDate: '2025-12-31'
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'U4 Master Angular Team',
      summary: 'Learn all the basic and advanced tasks',
      dueDate: '2025-12-31'
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'U5 Master Angular Team',
      summary: 'Learn all the basic and advanced tasks',
      dueDate: '2025-12-31'
    },  {
      id: 't6',
      userId: 'u6',
      title: 'U6 Master Angular Team',
      summary: 'Learn all the basic and advanced tasks',
      dueDate: '2025-12-31'
    },
    {
      id: 't7',
      userId: 'u6',
      title: 'U6 Master Angular Team',
      summary: 'Learn all the basic and advanced tasks',
      dueDate: '2025-12-31'
    }

  ]


  get getSelectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId)
  }

  makeTheTaskCompleted(id: string) {
    console.log("Going to delete the task that is ->", event);
    
    this.tasks =  this.tasks.filter(task => task.id !== id)
  }

  addDummyTasksForUser(id: string) {
    this.tasks.push(
      {
        id: Math.random().toString(),
        userId: id,
        title: 'U3 Master Angular Team',
        summary: 'Learn all the basic and advanced tasks Added',
        dueDate: '2025-12-31'
      }
    )
  }
}
