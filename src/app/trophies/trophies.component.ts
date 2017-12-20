import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { User } from '../register/user.model';
import { UserService } from '../register/user.service';
import { HttpClientModule } from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Files} from './files.model';
import {FilesService} from './files.service';



@Component({
    moduleId: module.id.toString(),
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.css']
})
export class TrophiesComponent implements OnInit{
    user:User;
    files:Files;
    data:Files[];

    constructor(private httpClient:HttpClient,
         private userService: UserService,
         private filesService: FilesService) {
  }
  ngOnInit() {
    this.filesService.findFilesdetails().subscribe(data => {
        this.data = data;
  })
}

    onSubmit(){
        this.userService.submitUserdetails(this.user).subscribe(data => data);
    }
 


}
