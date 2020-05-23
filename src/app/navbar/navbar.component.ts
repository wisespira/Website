import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) {
console.log(this.deviceService)
if(this.deviceService.browser == "IE"){
   this.IEbrowserCheck = false;}
  }
IEbrowserCheck = true;
  ngOnInit() {
  }

}
