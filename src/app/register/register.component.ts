import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user.model';
import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    user:User;
    users:User[];
    constructor(private userService:UserService,
){}
ngOnInit(){
    this.user = new User();
}

onSubmit(){
    this.userService.submitUserdetails(this.user).subscribe(data => data);
 
}

onFind(){
    this.userService.findUserdetails().subscribe(data => {
        this.users = data;
    })
}
}