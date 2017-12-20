import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import { Files } from './files.model';


@Injectable()
export class FilesService{
    
    files:Files;

    constructor(private httpClient:HttpClient,  private _http: Http) {
    }
    findFilesdetails() : Observable<Files[]>{
        //calls the listener 
        return this.httpClient.get<Files[]>('http://localhost:8080/findFilesDetails').map(e =>{
            e.forEach(f =>{
                f.pic = "data:image/jpg;base64,"+f.showTrophy;
            })
            return e;
            
        });
           
        }
    
}
