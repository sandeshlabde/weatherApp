import { Component } from '@angular/core';
import { CommonService } from '../commonService/common.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  header: string='';
 
  constructor(private comService:CommonService) {
    this.comService.title$.subscribe((res:string)=>{
      this.header=res
    })
  }

}
