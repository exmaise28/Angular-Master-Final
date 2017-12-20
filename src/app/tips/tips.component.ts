import { Component, OnInit } from '@angular/core';
import {Fish} from '../fish-bio/fish.model'
import {FishService} from '../fish-bio/fish.service'


@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  fish:Fish;
  data:Fish[];
  

  constructor(private fishService:FishService) {
    var getRandomFish = function () {
      return Fish[Math.floor(Math.random() * Fish.length)];
  };

   }

   ngOnInit() {
    this.fishService.findFishDetails().subscribe(data => {
        this.data = data;
        this.fish = data[Math.floor(Math.random() * data.length)];
        console.log(Fish);
  })
}

  Summer(){
   

  }

  Spring(){

  }

  Fall(){

  }
  

}
