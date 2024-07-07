import { Component } from "@angular/core";
import { UserComponent } from "../user/user.component";


@Component({
    selector: 'header-component',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [UserComponent]
})
export class HeaderComponent {

}