import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  
  infoOnSelect = "yo yo yo";
  projectObjs = 
  [['PWA/Angular',2,'rgba(0, 122, 168,1)'],
  ['ionic3',6,'rgba(2, 56, 110,1)'],
  ['ionic4',3,'rgba(0, 73, 141,1)'],
  ['Express',3,'rgba(255, 245, 123,1)'],
  ['Socket.io',1,'rgba(255, 228, 105,1)'],
  ['p5js',3,'rgba(254, 204, 81,1)'],
  ['Android',1,'rgba(205,133,63,1)'],
  ['WPF',3,'rgba(87, 232, 107,1)'],
  ['Wordpress',3,'rgba(153, 105, 199,1)'],
  
  ]
  
    constructor() { 
        for (let i = 0; i < this.projectObjs.length; i++){
            this.doughnutChartLabels.push(this.projectObjs[i][0]); 
            this.doughnutChartData.push(Number(this.projectObjs[i][1]));   
            this.pieChartColors[0].backgroundColor.push(this.projectObjs[i][2].toString());
        }
     }
  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public pieChartColors = [
    {
      backgroundColor: [],
    },
  ];
  public doughnutChartType = 'doughnut';

  ngOnInit() {
  }
  
  onChartClick(event) {
    console.log(event);
  }

}
