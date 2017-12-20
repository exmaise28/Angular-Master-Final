import { Component, OnInit } from '@angular/core';
import {Fish} from './fish.model';
import {FishService} from './fish.service';
import { SearchPipe} from './search.pipe';


@Component({
  selector: 'app-fish-bio',
  templateUrl: './fish-bio.component.html',
  styleUrls: ['./fish-bio.component.css']
})
export class FishBioComponent implements OnInit {
  fish:Fish;
  data:Fish[];
  showHide: string;

  constructor( private fishService:FishService) {
    
  }

  ngOnInit() {
    this.fishService.findFishDetails().subscribe(data => {
        this.data = data;
        console.log(this.data);
  })
}
changeShowStatus(show:string){
  if(this.showHide == show){ 
  this.showHide = null;
  }
  else{
    this.showHide = show;
  }
}
imageToShow: any;
 
}
