import { Component, OnInit } from '@angular/core';
import {GetLocationService} from '../get-location.service';

@Component({
  selector: 'app-getlocation',
  templateUrl: './getlocation.component.html',
  styleUrls: ['./getlocation.component.css']
})
export class GetlocationComponent implements OnInit {

  locations : any[];
  

  constructor(public dataService:GetLocationService) {
    this.dataService.getLocation().subscribe(locations=>{
      this.locations = locations.result
    });
   }

  ngOnInit() {
  }

}
