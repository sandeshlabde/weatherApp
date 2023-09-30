import { Component } from '@angular/core';
import { CommonService } from '../commonService/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data: any;

  constructor(private comService:CommonService) {
    
   
  }
  ionViewWillEnter(){
    try {
      this.comService.updateTitle('Weather Forcast')
      this.getCityData()
    } catch (error) {
      
    }
  }
  getCityData(){
    try {
      let param={ 
        city:"Pune"
      }
this.comService.getForcastWeatherData(param).subscribe((res:any)=>{
  this.data=res.list
  console.log(res)
})
      
    } catch (error) {
      
    }
  }
}
