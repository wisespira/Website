import {
    Component,
    OnInit,
    ViewChild
} from '@angular/core';
//import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
    selector: 'app-piechart',
    templateUrl: './piechart.component.html',
    styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
//    @ViewChild(BaseChartDirective) chart: BaseChartDirective;

    infoOnSelect: proj[] = [];
    selectedItem: string = "";
    titles = ['<b>Skills</b> By # of Projects 🎯', 'Backend Tec used 📚', 'Soft Skills/taining 🤹', 'All Skills 🕺']
    title = '';
    projectObjs: projectObjs[] = [{
            title: 'PWA/Angular',
            num: 2,
            colour: 'rgba(0, 122, 168,1)',
            info: {
                projs: [{
                    title: 'Porfolio Website ;)',
                    body: 'The website your viewing code on Github link down below',
                    giff: 'https://raw.githubusercontent.com/wisespira/Website/master/its%20the%20giff.gif',
                    showGiff: true
                }, {
                    title: 'Newcastle uni tab Embedded in Microsoft teams App',
                    body: 'While working with Microsoft to help Microsoft teams integration within the university I developed a PWA replicating the features of the mobile app set hosted it on firebase and embedded it in my Teams app tab.'
                }]
            }
        },
        {
            title: 'ionic3',
            num: 3,
            colour: 'rgba(2, 56, 110,1)',
            info: {
                projs: [{
                    title: 'Newcastle Uni App',
                    body: 'I developed and deployed multiple releases for the app on android and ios.'
                }, {
                    title: 'Peseptron App',
                    body: 'My first ionic app I created mostly to test/learn about the framework. I implemented the p5js library to graphically show the learning process of a basic neural network.',
                    giff: 'https://raw.githubusercontent.com/wisespira/Ionic-App-Perceptron/master/giff.gif',
                    showGiff: false
                }, {
                    title: 'L system App',
                    body: 'An app which shows that graphically shows the generation of complex patterns from a simple rule set.'
                }]
            }
        },
        {
            title: 'ionic4',
            num: 3,
            colour: 'rgba(0, 73, 141,1)',
            info: {
                projs: [{
                    title: 'Atresia',
                    body: 'A hybrid messenger app, currently under development.'
                }, {
                    title: 'What2Make',
                    body: 'Creates a recipe based on ingredient inputs.'
                }, {
                    title: 'Ionic-React tester App',
                    body: 'A starter project to get used to react with ionic.'
                }]
            }
        },
        {
            title: 'Express',
            num: 3,
            colour: 'rgba(255, 245, 123,1)',
            info: {
                projs: [{
                    title: 'Push notification Admin system (Newcastle Uni)',
                    body: 'crates requests to Firebase FCM from client details combined the user information.'
                }, {
                    title: 'Exams Content system (Newcastle Uni)',
                    body: 'Takes request from WordPress exam plugin and writes over information fed into exam feeds.'
                }]
            }
        },
        {
            title: 'Socket.io',
            num: 1,
            colour: 'rgba(255, 228, 105,1)',
            info: {
                projs: [{
                    title: 'Atresia Messenger backend',
                    body: 'Messenger App backend.'
                }]
            }
        },
        {
            title: 'p5js',
            num: 3,
            colour: 'rgba(254, 204, 81,1)',
            info: {
                projs: [{
                    title: 'L-System',
                    body: 'Graphically shows the generation of complex patterns from a simple rule set.',
                    giff: 'https://raw.githubusercontent.com/wisespira/L-System/master/its%20the%20giff.gif',
                    showGiff: false
                }, {
                    title: 'MetaBalls',
                    body: 'Graphically creates organic-looking n-dimensional objects.'
                }, {
                    title: 'Fractal trees',
                    body: 'Generates nice Fractal trees.'
                }]
            }
        },
        {
            title: 'Android',
            num: 1,
            colour: 'rgba(205,133,63,1)',
            info: {
                projs: [{
                    title: 'New Air (team project Uni)',
                    body: 'University team project (my role: lead developer) takes information from the Urban Observatory API and feeds it into an android app. The App then shows areas of high pollution on an in-app google map.'
                }]
            }
        },
        {
            title: 'WPF',
            num: 3,
            colour: 'rgba(87, 232, 107,1)',
            info: {
                projs: [{
                    title: 'Cluster/Libary desk App (Newcastle Uni)',
                    body: 'I developed and deployed multipul realeses. The app is used to provide user information on their timetable, exams, news, cluster/ gym availabity, and other things.'
                }, {
                    title: 'Reminder App',
                    body: 'A basic reminder app for desktop.',
                    giff: 'https://raw.githubusercontent.com/wisespira/WPF-Desk-Remider-App/master/giiff.gif',
                    showGiff: false
                }, {
                    title: 'Basic commandline app',
                    body: 'Template for calling/running commandline from a desktop app.'
                }, ]
            }
        },
        {
            title: 'Wordpress',
            num: 4,
            colour: 'rgba(153, 105, 199,1)',
            info: {
                projs: [{
                    title: 'Push Notification Plugin',
                    body: 'A plugin alowing wordpress posts to be fired at firebase by a content editor.'
                }, {
                    title: 'Exams Wordpress Plugin',
                    body: 'Allows exams content editors to update exams mobile and web feeds from wordpress.'
                }, {
                    title: 'Announchments Plugin',
                    body: 'Allows content editors to create mobile anouncment cards to display in app from posts.'
                }, {
                    title: 'Mobile News backend',
                    body: 'Generates combined JSON feed from syndicating all university mobile content sites which is then fed to the mobile.'
                }]
            }
        },
    ];
    
    softSkills: projectObjs[] = [{
         title: 'Lecture/ Presentations',
            num: 2,
            colour: 'rgba(245, 133, 41,1)',
            info: {
                 projs: [{
                    title: 'Push Notification Plugin',
                    body: 'A plugin alowing wordpress posts to be fired at firebase by a content editor.'
                }]
            }
    },{
         title: 'Interviewer ',
            num: 1,
            colour: 'rgba(254, 218, 119,1)',
            info: {
                 projs: [{
                    title: 'Push Notification Plugin',
                    body: 'A plugin alowing wordpress posts to be fired at firebase by a content editor.'
                }]
            }
    },{
         title: 'Documeter',
            num: 2,
            colour: 'rgba(221, 42, 123,1)',
            info: {
                 projs: [{
                    title: 'Push Notification Plugin',
                    body: 'A plugin alowing wordpress posts to be fired at firebase by a content editor.'
                }]
            }
    },{
         title: 'Teamwork',
            num: 3,
            colour: 'rgba(129, 52, 175,1)',
            info: {
                 projs: [{
                    title: 'Push Notification Plugin',
                    body: 'A plugin alowing wordpress posts to be fired at firebase by a content editor.'
                }]
            }
    },{
         title: 'Other training',
            num: 2,
            colour: 'rgba(81, 91, 212,1)',
            info: {
                 projs: [{
                    title: 'GDPR',
                    body: 'A plugin alowing wordpress posts to be fired at firebase by a content editor.'
                },
                {
                    title: 'Overcoming Unconscious Bias',
                    body: 'A plugin alowing wordpress posts to be fired at firebase by a content editor.'
                }]
            }
    }
    ];
     tecSkills: projectObjs[] = [{
         title: 'Linux+Vim',
            num: 3,
            colour: 'rgba(42, 245, 152,1)',
            info: {
                 projs: [{
                    title: 'Push Notification Plugin',
                    body: 'A plugin alowing wordpress posts to be fired at firebase by a content editor.'
                }]
            }
    },{
         title: 'Apache Sever',
            num: 1,
            colour: 'rgba(253, 136, 224,1)',
            info: {
                 projs: [{
                    title: 'Push Notification Plugin',
                    body: 'A plugin alowing wordpress posts to be fired at firebase by a content editor.'
                }]
            }
    },{
         title: 'Network Programing',
            num: 1,
            colour: 'rgba(75, 157, 125,1)',
            info: {
                 projs: [{
                    title: 'Student Attendence Scanners',
                    body: 'Setting up DHCP'
                }]
            }
    },{
         title: 'Firebase',
            num: 5,
            colour: 'rgba(252, 194, 1,1)',
            info: {
                 projs: [{
                    title: 'Student Attendence Scanners',
                    body: 'Setting up DHCP'
                }]
            }
    },{
         title: 'PM2 (express)',
            num: 1,
            colour: 'rgba(191, 28, 43,1)',
            info: {
                 projs: [{
                    title: 'Student Attendence Scanners',
                    body: 'Setting up DHCP'
                }]
            }
    },{
         title: 'Azure',
            num: 1,
            colour: 'rgba(250, 249, 246,1)',
            info: {
                 projs: [{
                    title: 'Student Attendence Scanners',
                    body: 'Setting up DHCP'
                }]
            }
    },{
         title: 'SQL sever managment',
            num: 1,
            colour: 'rgba(177, 240, 240,1)',
            info: {
                 projs: [{
                    title: 'Student Attendence Scanners',
                    body: 'Setting up DHCP'
                }]
            }
    },];
    
    
    


    constructor() {
        this.title = this.titles[3];
        for (let i = 0; i < this.arrayAll.length; i++) {
            this.doughnutChartLabels.push(this.arrayAll[i].title);
            this.doughnutChartData.push(this.arrayAll[i].num);
            this.pieChartColors[0].backgroundColor.push(this.arrayAll[i].colour);
        }
     
    }
    arrayAll: projectObjs[]  = this.projectObjs.concat(this.softSkills,this.tecSkills);
    changeGraph(a: any) {
    //    console.log(a);

        switch (a) {
            case 0: {
                this.clearGraph();
                this.title = this.titles[0];
                for (let i = 0; i < this.projectObjs.length; i++) {
                    this.doughnutChartLabels.push(this.projectObjs[i].title);
                    this.doughnutChartData.push(this.projectObjs[i].num);
                    this.pieChartColors[0].backgroundColor.push(this.projectObjs[i].colour);
                }
                break;
            }
            case 1: {
                this.clearGraph();
                this.title = this.titles[1];
                for (let i = 0; i < this.tecSkills.length; i++) {
                    this.doughnutChartLabels.push(this.tecSkills[i].title);
                    this.doughnutChartData.push(this.tecSkills[i].num);
                    this.pieChartColors[0].backgroundColor.push(this.tecSkills[i].colour);
                }
                break;
            }
            case 2: {
                 this.clearGraph();
                this.title = this.titles[2];
                for (let i = 0; i < this.softSkills.length; i++) {
                    this.doughnutChartLabels.push(this.softSkills[i].title);
                 //   console.log(this.doughnutChartLabels);
                    this.doughnutChartData.push(this.softSkills[i].num);
                    this.pieChartColors[0].backgroundColor.push(this.softSkills[i].colour);
                  
                    
                }
                 break;
            }
            case 3: {
                 this.clearGraph();
                this.title = this.titles[3];
               // let arrayAll: projectObjs[]  = this.softSkills.concat(this.tecSkills,this.projectObjs );
                //console.log(arrayAll);
                for (let i = 0; i < this.arrayAll.length; i++) {
                    this.doughnutChartLabels.push(this.arrayAll[i].title);
                 //   console.log(this.doughnutChartLabels);
                    this.doughnutChartData.push(this.arrayAll[i].num);
                    this.pieChartColors[0].backgroundColor.push(this.arrayAll[i].colour);
                    
                    
                }
                //this.chart.labels= this.doughnutChartLabels;
              //  console.table(this.chart);
                break;
            }
            default: {
                this.title = this.titles[0];
                break;
            }
        }



    }
    
    private clearGraph(){
        this.doughnutChartData = [];
        this.doughnutChartLabels= [];
        this.pieChartColors[0].backgroundColor=[];
    }

    public doughnutChartLabels = [];
    public doughnutChartData = [];
    public pieChartColors = [{
        backgroundColor: [],
    }, ];
    public doughnutChartType = 'doughnut';

    ngOnInit() {}



    onChartClick(event) {
     //   console.log(event)
        if (event.active[0]) {
            let num = Number(event.active[0]._index);
            //******************************************************************************************************************
            if(this.title == this.titles[0]){
            this.selectedItem = this.projectObjs[num].title;
            this.infoOnSelect = this.projectObjs[num].info.projs;
            }
            if(this.title == this.titles[1]){
            this.selectedItem = this.tecSkills[num].title;
            this.infoOnSelect = this.tecSkills[num].info.projs;
             }
             if(this.title == this.titles[2]){
            this.selectedItem = this.softSkills[num].title;
            this.infoOnSelect = this.softSkills[num].info.projs;
             }
              if(this.title == this.titles[3]){
            this.selectedItem = this.arrayAll[num].title;
            this.infoOnSelect = this.arrayAll[num].info.projs;
             }
          
        }
       // console.log(this.chart.datasets);


    }

    showMore(i) {
        this.infoOnSelect[i].showGiff = !this.infoOnSelect[i].showGiff;
    }

}
interface projectObjs {
    title: string,
        num: number,
        colour: string,
        info: infomation
}
interface infomation {
    projs: proj[],
}
interface proj {
    title: string,
        body: string,
        giff ? : string,
        showGiff ? : boolean,
        language ? : string
}