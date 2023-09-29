import { Component } from '@angular/core';
import { CommonService } from '../commonService/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private comService:CommonService) {
    this.getCityData()
  }
  getCityData(){
    try {
      let param={ 
        city:"Pune"
      }
this.comService.getForcastWeatherData(param).subscribe((res:any)=>{
  console.log(res)
})
      
    } catch (error) {
      
    }
  }
}
