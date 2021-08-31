import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  msg:String="";
  onAddCart(event:any)
  {
    this.msg=event.target.value + "Added On Cart";
  }
  onInputClick(event:any)
  {
    console.log(event);
  }
}
