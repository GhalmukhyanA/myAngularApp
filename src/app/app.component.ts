import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser} from './user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public loginForm: FormGroup;
    public users: Array<IUser> = [];


    constructor() {
        this.loginForm = new FormGroup({
            'userName': new FormControl('',
                [Validators.required,
                    Validators.minLength(3),
                    Validators.pattern(/^[A-Za-z ]{2,30}$/g)]),

            'userSurname': new FormControl('',
                [Validators.required,
                    Validators.minLength(3),
                    Validators.pattern(/^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/g)]),

            'userEmail': new FormControl('',
                [Validators.required, Validators.minLength(4),
                    Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g)]),
            'userGender': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required),
            'confirmPassword': new FormControl('', Validators.required),
        });

    }

    public submitForm(): boolean {
        if (this.loginForm.get('password').value === this.loginForm.get('confirmPassword').value) {
            this.users.push(this.loginForm.getRawValue());
            this.loginForm.reset();
        }
        return null;
    }
}


