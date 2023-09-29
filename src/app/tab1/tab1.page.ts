import { Component } from '@angular/core';
import { CommonService } from '../commonService/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private comService:CommonService) {this.getCityData()}
  ngOnInit(){
    try {

      
    } catch (error) {
      
    }
  }
  getCityData(){
    try {
      let param={
        type:'forecast/daily',
        city:"Pune"
      }
this.comService.getCurrentWeatherData(param).subscribe((res:any)=>{
  console.log(res)
})
      
    } catch (error) {
      
    }
  }
}

