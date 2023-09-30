import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonService } from '../commonService/common.service';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  cityName = new FormControl('',[
    Validators.required]);
  @Input() data?: any;
  @Output()selectedcityName= new EventEmitter<string>()
  @Output()selectedLocation= new EventEmitter<any>()
  header: string='';
   get forcastCity(){
    return this.comService.cityName
   }
constructor(private comService:CommonService, 
    ){
  this.comService.title$.subscribe((res:string)=>{
    this.header=res
  })
}
 getCityData(){
  try {
    if(this.cityName.valid) 
   
      this.selectedcityName.next(this.cityName.value?this.cityName.value:'')
  } catch (error) {
    
  }
 }
 async getLocation(){
  const coordinates = await Geolocation.getCurrentPosition();
  this.selectedLocation.next(coordinates) 
 }
}
