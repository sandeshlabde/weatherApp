import { Component } from '@angular/core';
import { CommonService } from '../commonService/common.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cityName = new FormControl('');
  data: any;
  constructor(private comService:CommonService) {
    
   
    
  }
  ionViewWillEnter(){
    try {
      this.getCityData()
      this.comService.updateTitle('Current Weather')
    } catch (error) {
      
    }
   
  }
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
  let arr=new Array()
   arr.push(res)
   this.data=arr

})
      
    } catch (error) {
      
    }
  }
}

