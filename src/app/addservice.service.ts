import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddserviceService {
  items:String[]=[]; 
  addTaskValue:any;
  constructor() { }

  addItem(item){
  this.items.push(item);
  this.addTaskValue = null;
  console.log(this.items);
  }


  getItem(){
    return this.items;
  }

}


