import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  
  infoOnSelect: string = "Select slise for breakdown";

  
  
  projectObjs:projectObjs[] = [
  {title:'PWA/Angular',num:2,colour:'rgba(0, 122, 168,1)',info:{projs: ['Porfolio Website ;)','Newcastle uni tab for Embended in microsoft teams']}},
  {title:'ionic3',num:3,colour:'rgba(2, 56, 110,1)',info:{projs: ['Newcastle Uni App','Peseptron App','Clock App','L system App']}},
  {title:'ionic4',num:3,colour:'rgba(0, 73, 141,1)',info:{projs: ['Atresia','What2Make','Ionic-React tester App']}},
  {title:'Express',num:3,colour:'rgba(255, 245, 123,1)',info:{projs: ['Push notification Admin system (Newcastle Uni)','Exams Content system (Newcastle Uni)']}},
  {title:'Socket.io',num:1,colour:'rgba(255, 228, 105,1)',info:{projs: ['Atresia Messenger backend']}},
  {title:'p5js',num:3,colour:'rgba(254, 204, 81,1)',info:{projs: ['L-System','MetaBalls','Fractal trees']}},
  {title:'Android',num:1,colour:'rgba(205,133,63,1)',info:{projs: ['New Air (team project Uni)']}},
  {title:'WPF',num:3,colour:'rgba(87, 232, 107,1)',info:{projs: ['Cluster/Libary desk App (Newcastle Uni)']}},
  {title:'Wordpress',num:4,colour:'rgba(153, 105, 199,1)',info:{projs: ['Push Notification Backend','Exams Wordpress Plugin','Announchments Plugin','Mobile News backend' ]}},
  ]
  
  
  
  
  
 
  
  
    constructor() { 
        for (let i = 0; i < this.projectObjs.length; i++){
            this.doughnutChartLabels.push(this.projectObjs[i].title); 
            this.doughnutChartData.push(this.projectObjs[i].num);   
            this.pieChartColors[0].backgroundColor.push(this.projectObjs[i].colour);
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
      console.log(event)
    if(event.active[0]){
    let num =  Number(event.active[0]._index);
   
    this.infoOnSelect = '<h2>'+this.projectObjs[num].title+'<br><br></h2>';
    let list = '<ul>';
      for (let i = 0; i < this.projectObjs[num].info.projs.length; i++){
         list = list + '<li>'+ this.projectObjs[num].info.projs[i] + '</li>';
    }
    list = list + '</ul>'
     this.infoOnSelect = this.infoOnSelect + list
  }
    
    
  }

}
interface projectObjs {
    title:string,
    num: number,
    colour: string,
    info: infomation
}
interface infomation {
    projs:string[],
 
}