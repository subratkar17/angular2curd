import { Component, OnInit } from '@angular/core';
import { AddserviceService } from './addservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'curdapp';
  item:any = {};
  datalist:any;
  
 

  constructor(private addService:AddserviceService) { }

  ngOnInit(){

  }

  addItem(item){
    //this.item = item;
    this.addService.addItem(item);
   this.datalist= this.addService.getItem();
   //document.getElementById("myForm").reset();
  }
}
