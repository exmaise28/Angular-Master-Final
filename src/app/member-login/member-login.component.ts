import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../register/user.service';
import { User } from '../register/user.model';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'member-login.component.html'
})

export class MemberLoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    user:User;
    users:User[];
    constructor(private userService:UserService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
        this.user = new User();
    }
    
    onSubmit(){
        this.userService.submitUserdetails(this.user).subscribe(data => data);
        //this.router.navigate(['home']);
}
    onFind(){
        this.userService.findUserdetails().subscribe(data => {
            this.users = data;
    })
}

    login() {
        this.userService.login(this.user).subscribe(data => {
            this.user=data;
    })
    }

   
}
