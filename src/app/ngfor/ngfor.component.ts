import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//http://cdn.mos.cms.futurecdn.net/2XcW8BYBLE4Uy5he8poY3L.jpg
//https://m.media-amazon.com/images/I/312UFzqvCuL.jpg
//https://images.samsung.com/is/image/samsung/in-uhd-tv-tu8000-ua75tu8000kxxl-frontblack-226346468?$720_576_PNG$
//https://www.lg.com/in/images/washing-machines/md07518521/gallery/FHV1409ZWB-Washing-Machines-Left-View-Open-D-07V.jpg

  products=
  [
    {proimg:'http://cdn.mos.cms.futurecdn.net/2XcW8BYBLE4Uy5he8poY3L.jpg', name:'Laptop', id:'pro01', price:15000},
    {proimg:'https://m.media-amazon.com/images/I/312UFzqvCuL.jpg', name:'Mobile', id:'pro02', price:8000},
    {proimg:'https://images.samsung.com/is/image/samsung/in-uhd-tv-tu8000-ua75tu8000kxxl-frontblack-226346468?$720_576_PNG$', name:'TV', id:'pro03', price:12000},
    {proimg:'https://www.lg.com/in/images/washing-machines/md07518521/gallery/FHV1409ZWB-Washing-Machines-Left-View-Open-D-07V.jpg', name:'WM', id:'pro04', price:18000}
  ]
}
