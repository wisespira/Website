import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  
  infoOnSelect: proj[] = [];
  selectedItem:string = "";
  
  
  projectObjs:projectObjs[] = [
  {title:'PWA/Angular',num:2,colour:'rgba(0, 122, 168,1)',info:{projs: [{title:'Porfolio Website ;)',body:'The website your viewing code on Github link down below'},{title:'Newcastle uni tab for Embended in microsoft teams',body:'While working microsft to help microsoft teams integration I developed a PWA replicating the mobile apps featers set hosted it on firebase and embeded it in my teams app tab'}]}},
  {title:'ionic3',num:3,colour:'rgba(2, 56, 110,1)',info:{projs: [{title:'Newcastle Uni App',body:'I developed and deployed multipul realeses for the app on android and ios'},{title:'Peseptron App',body:'An app I produced for android and ios implementing the p5js libary graphicaly show the learning proceses of a basic neural network'},{title:'L system App',body:'An app which shows that graphically shows the generation of complex patterns from a simple rule set.'}]}},
  {title:'ionic4',num:3,colour:'rgba(0, 73, 141,1)',info:{projs: [{title:'Atresia',body:'A hybrid messenger app, currently under development'},{title:'What2Make',body:'Creates a recipe based on ingredient inputs'},{title:'Ionic-React tester App',body:'A starter project to get used to react with ionic'}]}},
  {title:'Express',num:3,colour:'rgba(255, 245, 123,1)',info:{projs: [{title:'Push notification Admin system (Newcastle Uni)',body:'crates requests to Firebase FCM from client details combined the user information '},{title:'Exams Content system (Newcastle Uni)',body:'Takes request from WordPress exam plugin and writes over information fed into exam feeds'}]}},
  {title:'Socket.io',num:1,colour:'rgba(255, 228, 105,1)',info:{projs: [{title:'Atresia Messenger backend',body:'Messenger App backend'}]}},
  {title:'p5js',num:3,colour:'rgba(254, 204, 81,1)',info:{projs: [{title:'L-System',body:'Graphically shows the generation of complex patterns from a simple rule set.'},{title:'MetaBalls',body:'Graphically creates organic-looking n-dimensional objects'},{title:'Fractal trees',body:'Generates nice Fractal trees'}]}},
  {title:'Android',num:1,colour:'rgba(205,133,63,1)',info:{projs: [{title:'New Air (team project Uni)',body:'University team project (my role: lead developer) takes information from the Urban Observatory API and feeds it into an android app. The App then shows areas of high pollution on an in-app google map.'}]}},
  {title:'WPF',num:3,colour:'rgba(87, 232, 107,1)',info:{projs: [{title:'Cluster/Libary desk App (Newcastle Uni)',body:'I developed and deployed multipul realeses. The app is used to provide user information on their timetable, exams, news, cluster/ gym availabity, and other things'},{title:'Reminder App',body:'A basic reminder app for desktop'},{title:'Basic commandline app',body:'Template for calling/running commandline from a desktop app'},]}},
  {title:'Wordpress',num:4,colour:'rgba(153, 105, 199,1)',info:{projs: [{title:'Push Notification Plugin',body:'A plugin alowing wordpress posts to be fired at firebase by a content editor'},{title:'Exams Wordpress Plugin',body:'Allows exams content editors to update exams mobile and web feeds from wordpress'},{title:'Announchments Plugin',body:'Allows content editors to create mobile anouncment cards to display in app from posts.'},{title:'Mobile News backend',body:'Generates combined JSON feed from syndicating all university mobile content sites which is then fed to the mobile'} ]}},
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
    this.selectedItem = this.projectObjs[num].title;
    this.infoOnSelect = this.projectObjs[num].info.projs;
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
    projs:proj[],
 }
 interface proj {
    title:string,
    body:string,
   
 }