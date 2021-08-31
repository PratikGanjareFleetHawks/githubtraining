import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dynName:String="Fleet Hawks"
  myMethod()
  {
    return "My Company Name Is "+this.dynName
  }
  enable:boolean=false;
  appStatus:boolean=false;
  status1="online";
  status2="ofline";
}
