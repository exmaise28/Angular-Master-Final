import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { User } from '../register/user.model';
import { UserService } from '../register/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = this.currentUser;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.deleteUserdetails().subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.findUserdetails().subscribe(users => { this.users = users; });
    }
}