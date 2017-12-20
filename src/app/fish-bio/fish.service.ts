import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Fish} from './fish.model';
import { Http } from '@angular/http';

@Injectable()
export class FishService{
    fish:Fish;

    constructor(private httpClient:HttpClient, private _http: Http) {
    }
    findFishDetails() : Observable<Fish[]>{
        //calls the listener 
        return this.httpClient.get<Fish[]>('http://localhost:8080/findFishDetails').map(e =>{
        e.forEach(a =>{
            a.fishPic = "data:image/jpg;base64,"+a.showPicture;
        })
        return e;
        
    });
       
    }
}