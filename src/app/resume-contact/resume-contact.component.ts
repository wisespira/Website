import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-contact',
  templateUrl: './resume-contact.component.html',
  styleUrls: ['./resume-contact.component.scss']
})
export class ResumeContactComponent implements OnInit {
 pdfSrc: string = 'assets/Ira Watt Resume.pdf';
  constructor() { }

  ngOnInit() {
  }

}
