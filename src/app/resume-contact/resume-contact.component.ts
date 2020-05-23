import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-resume-contact',
  templateUrl: './resume-contact.component.html',
  styleUrls: ['./resume-contact.component.scss']
})
export class ResumeContactComponent implements OnInit {
 pdfSrc: string = 'assets/Ira Watt Resume.pdf';
  constructor(private deviceService: DeviceDetectorService) {
    console.log(this.deviceService)
    if(this.deviceService.browser == "MS-Edge"){
       this.EdgebrowserCheck = false;}
       if(this.deviceInfo.browser == "IE"){
          this.IEbrowserCheck = false;}


      }

EdgebrowserCheck = true;
   IEbrowserCheck = true;

  ngOnInit() {
  }

}
