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
      content: 'Developed cooking App',
      date: 'DEC 2019',
      colour: '#BEED53'
    },
   {
      header: '1000 Stackoverflow rep ',
      content: '50+ non Wiki answers  top 5% ionic 4 top 10% ionic framwork',
      date: 'SEP 2019',
       colour: '#FCC201'
    },
    {
      header: 'Applications Developer Placement (NUIT)',
      content: 'content',
      date: 'JUN 2018- SEP 2019',
       colour: '#7FBDD9'
    },
      {
      header: 'Computer Science with Industrial Placement BSc Honours',
      content: 'Started University',
      date: 'SEP 2016- JUN 2020',
       colour: '#62A7C5'
    },
    {
      header: '2nd Nationaly in tec4good competition',
      content: 'App consept for helping the elderly',
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
