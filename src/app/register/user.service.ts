import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';

@Injectable()
export class UserService{
    user:User;

    constructor(private httpClient:HttpClient) {
    }
    submitUserdetails(user:User) : Observable<any>{
        return this.httpClient.post('http://localhost:8080/submitUserDetails', user)
    }
    //user[] - return type
    //observable - wait untill the data is ready - suscbribe - doesn't wait until that option is loaded - asynchornous
    findUserdetails() : Observable<User[]>{
        //calls the listener 
        return this.httpClient.get<User[]>('http://localhost:8080/findUserDetails')
    }
    deleteUserdetails() : Observable<User[]>{
        //calls the listener 
        return this.httpClient.get<User[]>('http://localhost:8080/deleteUserDetails')
    }    
    login(user:User) : Observable<User>{

    return this.httpClient.post<User>('http://localhost:8080/login',user).map(u=>{
        this.user=u;
        console.log(u)

        return u;
    })
}
}