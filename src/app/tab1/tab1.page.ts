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
      this.comService.updateTitle('Current Weather')
    } catch (error) {
      
    }
   
  }
  ngOnInit(){
    try {
 
      
    } catch (error) {
      
    }
  }
  selectedCity(city:string){
    try {
      let param={
       
        url:`weather?q=${city}`
      }
this.comService.getCurrentWeatherData(param).subscribe((res:any)=>{
  console.log(res)
  let arr=new Array()
   arr.push(res)
   this.data=arr

})
      
    } catch (error) {
      
    }
  }
  selectedLocation(list:any){
    try {
    console.log(list.coords.latitude)
   
      let param={
       
         url:`weather?lat=${list.coords.latitude}&lon=${list.coords.longitude}`
      }
this.comService.getCurrentWeatherData(param).subscribe((res:any)=>{
  console.log(res)
  let arr=new Array()
   arr.push(res)
   this.data=arr

})
    } catch (error) {
      
    }
  }
}

