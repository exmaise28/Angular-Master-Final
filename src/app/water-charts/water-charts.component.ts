import { Component, OnInit } from '@angular/core';
import { UserService } from '../register/user.service';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as xml2js from 'xml2js';
import { Water } from './waterlevel.model';
import { FilterPipe} from './filter.pipe';



@Component({
  selector: 'app-water-charts',
  templateUrl: './water-charts.component.html',
  styleUrls: ['./water-charts.component.css']
})
export class WaterChartsComponent {
  title='app works';
  private apiUrl = 'https://waterservices.usgs.gov/nwis/iv/?stateCd=MO&format=json,1.1';
  data: WaterLevel[];
  

 
  constructor(private http: HttpClient ,public userService:UserService){
    console.log('Here is Missouri')
    this.getData();
   
  
  }
  getData(){
     this.http.get<Water>(this.apiUrl).subscribe(data =>{
      let temp: WaterLevel[] = [];
      data.value.timeSeries.forEach(e =>{
          let tempName = e.sourceInfo.siteName;
          if(e.variable.variableName == "Gage height, ft"){
            temp.push(new WaterLevel(tempName, e.values[0].value[0].value))
          }

       })

      this.data = temp;
     })
  }
}

class WaterLevel{
  name:string;
  value:string;
  constructor(name:string, value:string){
    this.name = name;
    this.value = value;
  }
}
