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

  entries = [
    {
      header: 'WHAT2EAT APP',
      content: 'Developed cooking App with ionic and firebase which allows users to query a cooking database based on the ingredients they have. Yet to go on BETA',
      date: 'DEC 2019',
      colour: '#BEED53'
    },
   {
      header: '1000 Stackoverflow rep ',
      content: 'I set myself a goal to become an established user on StackOverflow. I achieved this with 50+ non-Wiki answers becoming top 5% in ionic 4 top and 10% ionic framework in answering questions with the respective tags.',
      date: 'SEP 2019',
       colour: '#FCC201'
    },
    {
      header: 'Applications Developer Placement (NUIT)',
      content: 'My first role as a full-time developer, where I worked primarily with WordPress, Ionic/Angular, WPF/.NET Framework, node express, and Microsoft teams development',
      date: 'JUN 2018- SEP 2019',
       colour: '#7FBDD9'
    },
      {
      header: 'Computer Science with Industrial Placement BSc Honours',
      content: 'Currenly set for a first achiving 84% in second year. Megority of work was in Java, C and web',
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
