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
      
    } catch (error) {
      
    }
  }
  
  selectedCity(city:string){
    try {
      let param={
       
        url:`forecast?q=${city}&cnt=5`  
      }
this.comService.getCurrentWeatherData(param).subscribe((res:any)=>{
  this.comService.cityName=res.city.name
  this.data=res.list

})
      
    } catch (error) {
      
    }
  }
  selectedLocation(list:any){
    try {
   
   
      let param={
       
         url:`forecast?lat=${list.coords.latitude}&lon=${list.coords.longitude}&cnt=5`
      }
this.comService.getCurrentWeatherData(param).subscribe((res:any)=>{
  
  this.comService.cityName=res.city.name
  this.data=res.list

})
    } catch (error) {
      
    }
  }
}
