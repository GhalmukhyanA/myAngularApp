import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    @Input()
    public user: IUser;

    constructor() {
    }

    ngOnInit() {
        console.log(this.user);
    }

}
