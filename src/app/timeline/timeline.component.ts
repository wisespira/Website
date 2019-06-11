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
      content: '',
      date: 'SEP 2019',
      colour: '#A0A'
    },
   {
      header: '1000 Stackoverflow rep ',
      content: '',
      date: 'SEP 2019',
       colour: '#A0A'
    },
    {
      header: 'Applications Developer Placement (NUIT)',
      content: 'content',
      date: 'JUN 2018- SEP 2019',
       colour: '#A0A'
    },
      {
      header: 'Computer Science with Industrial Placement BSc Honours',
      content: 'content',
      date: 'SEP 2016- JUN 2020',
       colour: '#A0A'
    },
    {
      header: '2nd Nationaly in tec4good competition',
      content: '',
      date: 'SEP 2012',
       colour: '#A0A'
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
