import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }
alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  side = 'left';
 clicked = false;
  entries = [
    {
      header: 'Algo2K Project',
      content: 'Developed a trading strategy backtesting services developed as part of my dissertation. The PWA, hosted on Firebase, takes Python ‘strategy’ code uploading it to an Express.js server which runs performance test returning performance metrics back to the user.',
      date: 'MAY 2020',
      colour: '#BEED53'
    },
   {
      header: 'Stackoverflow 1K Rep ~ Established User',
      content: 'Achieved this with 50+ non-Wiki answers becoming top 5% in ionic 4 top and the Ionic Framework as well as top 20% in CSS.',
      date: 'SEP 2019',
       colour: '#FCC201'
    },
    {
      header: 'Applications Developer Placement at NUIT',
      content: 'Worked to develop and deploy the Newcastle University mobile (Ionic Framework) and desktop apps (.NET). Lead developer on the Universitys new scanner attendance web services and surrounding infrastructure. Worked in collaboration with University partners, most notably on the Microsoft SLATE project. Within this project I developed applications for the Microsoft Teams platform requiring extensive use of Azure.  ',
      date: 'JUN 2018- SEP 2019',
       colour: '#7FBDD9'
    },
      {
      header: 'Computer Science with Industrial Placement BSc Honours (1.1)',
      content: 'Acted as lead developer in team project building an Android app. The app aimed to draw attention to pollution in the local area showcasing data from the Urban Observatory API. Active in with the OTC (Officer Training Core) linked to the university. Ran with and lead OTC running club on training sessions.   ',
      date: 'SEP 2016- JUN 2020',
       colour: '#62A7C5'
    },
    {
      header: '2nd Nationaly in tec4good competition',
      content: 'Developed an App concept for helping the elderly with tutorial videos. My team was selected and we presented our concept at Alnwick castle coming second overall',
      date: 'SEP 2012',
       colour: '#BD4491'
    }
  ]





  onHeaderClick(event) {
      this.clicked = true
      console.log(event);
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
      if(expanded&&index){
    console.log(`Expand status of entry #${index} changed to ${expanded}`)}
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }
  ngOnInit() {
  }

}
