import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { ChartsComponent } from './charts/charts.component';
import { UserTasksComponent } from "./user-tasks/user-tasks.component";
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, ChartsComponent, UserTasksComponent, CommonModule]
})
export class AppComponent { 

    users = DUMMY_USERS; 

    selectedUserId!: string | undefined;


    get getSelectedUserName(): any {
        return this.users.find(user => user.id === this.selectedUserId)!;
    }

    public onSelectUserInApp(event:any) {
        console.log("Selected user data-> "+ event);
        this.selectedUserId = event;
        
    }
}
