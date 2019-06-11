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

  entries = [ {
      header: '1000 Stackoverflow rep ',
      content: '',
      date: 'SEP 2019'
    },
   {
      header: '1000 Stackoverflow rep ',
      content: '',
      date: 'SEP 2019'
    },
   {
      header: '1000 Stackoverflow rep ',
      content: '',
      date: 'SEP 2019'
    },
   {
      header: '1000 Stackoverflow rep ',
      content: '',
      date: 'SEP 2019'
    },
   {
      header: '1000 Stackoverflow rep ',
      content: '',
      date: 'SEP 2019'
    },
   {
      header: '1000 Stackoverflow rep ',
      content: '',
      date: 'SEP 2019'
    },
   {
      header: '1000 Stackoverflow rep ',
      content: '',
      date: 'SEP 2019'
    },
   {
      header: '1000 Stackoverflow rep ',
      content: '',
      date: 'SEP 2019'
    },
   {
      header: '1000 Stackoverflow rep ',
      content: '',
      date: 'SEP 2019'
    },
    {
      header: '1000 Stackoverflow rep ',
      content: '',
      date: 'SEP 2019'
    },
    {
      header: 'WHAT2EAT',
      content: '',
      date: 'SEP 2019'
    },
   {
      header: '1000 Stackoverflow rep ',
      content: '',
      date: 'SEP 2019'
    },
    {
      header: 'NUIT',
      content: 'content',
      date: 'JUN 2018- SEP 2019'
    },
      {
      header: 'Newcastle UNI',
      content: 'content',
      date: 'SEP 2016- JUN 2020'
    },
    {
      header: '2nd Nationaly in tec4good competition',
      content: '',
      date: 'SEP 2012'
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
