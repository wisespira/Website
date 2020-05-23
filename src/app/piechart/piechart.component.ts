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
    titles = ['Frontend tech 🖥️', 'Backend tech 📚', 'Soft Skills 🤹', 'All Skills 🕺']
    title = '';
    projectObjs: projectObjs[] = [
      {
          title: 'PWA',
          num: 1,
          colour: 'rgba(117,13,55,1)',
          info: {
              projs: [{
                title: 'Algo2k - (PWA, Node.js, Python)',
                body: 'A trading strategy backtesting services developed as part of my dissertation. The PWA, hosted on Firebase, takes Python ‘strategy’ code uploading it to an Express.js server which runs performance test returning performance metrics back to the user.',
                sytleCentre:true
              }]
          }
      },


      {
            title: 'Angular7',
            num: 2,
            colour: 'rgba(0, 122, 168,1)',
            info: {
                projs: [{
                    title: 'Porfolio Website',
                    body: 'This website is a Progressive Web App, built with the angular framework, allowing it to take advantage of the native features of the viewing device through a service-worker script/web manifest. Currently, the service-worker is set up to cache the website in a browser after viewing allowing it to be loaded even without internet and also prompt phone users to download the website as an app. The main pages animation uses the three.js library which is an extension of WebGL. Other libraries used include fullpage.js, charts.js, bootstrap... my GitHub repo is linked below for more info.',
                    giff: 'https://raw.githubusercontent.com/wisespira/Website/master/its%20the%20giff.gif',
                    showGiff: true
                },
                 {
                    title: 'Newcastle uni tab Embedded in Microsoft teams App',
                    body: 'While working with Microsoft to help Microsoft teams integration within the university I developed a PWA replicating the features of the mobile app set hosted it on firebase and embedded it in my Teams app tab.'
                },
                {
                title: 'Algo2k - (PWA, Node.js, Python)',
                body: 'A trading strategy backtesting services developed as part of my dissertation. The PWA, hosted on Firebase, takes Python ‘strategy’ code uploading it to an Express.js server which runs performance test returning performance metrics back to the user.'
              }]
            }
        },
        {
            title: 'Ionic3',
            num: 3,
            colour: 'rgba(2, 56, 110,1)',
            info: {
                projs: [{
                    title: 'Newcastle Uni App',
                    body: 'I developed and deployed multiple releases for the app on android and ios. This included large updates on accessibility, push notifications, exams systems as well as app-wide framework plugin, dependencies, and polyfill updates.',
                }, {
                    title: 'Peseptron App',
                    body: 'My first ionic app I created mostly to test/learn about the framework. I implemented the p5js library to graphically show the learning process of a basic neural network.',
                    giff: 'https://raw.githubusercontent.com/wisespira/Ionic-App-Perceptron/master/giff.gif',
                    showGiff: false
                }, {
                    title: 'L system App',
                    body: 'An app which shows that graphically shows the generation of complex patterns from a simple rule set. It is esentualy a conversion of my p5js javascript into a typescript ionic project.'
                }]
            }
        },
        {
            title: 'Ionic4',
            num: 3,
            colour: 'rgba(0, 73, 141,1)',
            info: {
                projs: [{
                    title: 'Newcastle University App',
                    body: 'Worked to upgrade the University App from Ionic 3 to Ionic 4',
                    sytleCentre: true
                }, {
                    title: 'Stackoverflow',
                    body: 'Top 5% in answering questions on Ionic 4 (2019)',
                    sytleCentre: true
                }, {
                    title: 'Ionic-React tester App',
                    body: 'A starter project to get used to react with Ionic.',
                    sytleCentre: true
                }]
            }
        },

        {
            title: 'P5js',
            num: 3,
            colour: 'rgba(254, 204, 81,1)',
            info: {
                projs: [{
                    title: 'L-System',
                    body: 'Graphically shows the generation of complex patterns from a simple rule set.',
                    giff: 'https://raw.githubusercontent.com/wisespira/L-System/master/its%20the%20giff.gif',
                    showGiff: false,
                    sytleCentre:true
                }, {
                    title: 'MetaBalls',
                    body: 'Graphically creates organic-looking n-dimensional objects.',
                    sytleCentre:true
                }, {
                    title: 'Fractal trees',
                    body: 'Generates nice Fractal trees.',
                    sytleCentre:true
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
                    body: 'University team project (my role: lead developer) takes information from the Urban Observatory API and feeds it into an android app. The App then shows areas of high pollution on an in-app google map.',
                sytleCentre:true
                }]
            }
        },
        {
            title: '.NET Framework/WPF',
            num: 3,
            colour: 'rgba(87, 232, 107,1)',
            info: {
                projs: [{
                    title: 'Cluster/Libary desk App (Newcastle Uni)',
                    body: 'Developed and deployed multipul realeses. The app is used to provide user information on their timetable, exams, news, cluster/ gym availabity, and other things.',
                    sytleCentre:true
                }, {
                    title: 'Reminder App',
                    body: 'A basic reminder app for desktop.',
                    giff: 'https://raw.githubusercontent.com/wisespira/WPF-Desk-Remider-App/master/giiff.gif',
                    showGiff: true,
                    sytleCentre:true
                }, {
                    title: 'Basic commandline app',
                    body: 'Template for calling/running commandline from a desktop app.',
                    sytleCentre:true
                }, ]
            }
        },
        {
            title: 'Python',
            num: 1,
            colour: 'rgba(216, 191, 170,1)',
            info: {
                projs: [{
                    title: 'Trading Strategy Backtesting System',
                    body: 'Part of the Algo 2k project the a Phython system using Matplotlib, Pandas and Numpy would run the strategy over a given period returning its Sharpe Ratio',
                    sytleCentre:true

                }]
            }
        },
    ];

    softSkills: projectObjs[] = [{
         title: 'Presentations',
            num: 2,
            colour: 'rgba(245, 133, 41,1)',
            info: {
                 projs: [{
                    title: 'Lectured on my role at NUIT',
                    body: '',

                },{
                    title: 'Trade Fairs',
                    body: 'As part of my second year team project I ran a stand showing/explaining our application to people in industry.',
                    sytleCentre:true
                },


                ]
            }
    },{
         title: 'Interviewer ',
            num: 1,
            colour: 'rgba(254, 218, 119,1)',
            info: {
                 projs: [{
                    title: 'NUIT Placment',
                    body: 'Interviewed a dozen students for the applications developer role.',
                    sytleCentre:true
                }]
            }
    },{
         title: 'Documeter',
            num: 2,
            colour: 'rgba(221, 42, 123,1)',
            info: {
                 projs: [{
                    title: 'Handover Documentation',
                    body: 'I created documention for all services I was in charge of at NUIT to ensure that new placments could easly take over.',
                    sytleCentre:true
                },
              {
                    title: 'Requirements and Risk analysis  Doc',
                    body: 'I created requirements and risk analysis documention both at NUIT and whilsts at university.',
                    sytleCentre:true
                }
                 ]
            }
    },{
         title: 'Teamwork',
            num: 5,
            colour: 'rgba(129, 52, 175,1)',
            info: {
                 projs: [{
                    title: 'Agile Methodology',
                    body: "I'm comfortable working with the agile methodology after applying its principles while at NUIT.",
                    sytleCentre:true
                },{
                   title: 'Officer Training corps',
                    body: "Trained with the officer training corps at Newcastle University. Competed with their running team and lead sessions.",
                    sytleCentre:true
                },
               {
                    title: 'Lead on accessibility',
                    body: "Lead in increasing acsessibilty with the Newcastle University app.",
                    sytleCentre:true
                },
                {
                     title: 'University Team Project',
                     body: "Lead developer role in my university team project.",
                     sytleCentre:true
                 },
                 {
                      title: 'Lead in Attendance monitoring system',
                      body: "Lead in developing the web servives surrounding Newcastle Universitys new attendance monitoring system.",
                      sytleCentre:true
                  }
                 ]
            }
    },{
         title: 'Other training',
            num: 2,
            colour: 'rgba(81, 91, 212,1)',
            info: {
                 projs: [{
                    title: 'GDPR',
                    body: ''
                },
                {
                    title: 'Overcoming Unconscious Bias',
                    body: ''
                }]
            }
    }
    ];
     tecSkills: projectObjs[] = [{
         title: 'Apache~Linux',
            num: 3,
            colour: 'rgba(42, 245, 152,1)',
            info: {
                 projs: [{
                    title: 'Cron Jobs + Pm2 + Apache Config',
                    body: 'While working at Newcastle uni I set up many systems which relied on a Linux based server. I for instance set up cronjobs to run a PHP script which would check the university door scanners last heartbeats to ensure there were working correctly. ',
                    sytleCentre:true
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
                body: 'Contributed to developing the university push notification system. The web services receive requests from the client to update our tables and to link firebase tokens to there university user information. The web service would also receive requests from our WordPress backend push notification plugin, which I also helped develop, containing which groups of students should receive notifications. The web series would then generate the correct requests and send them to firebase to send the notifications.'
            }, {
                title: 'Exams Content system (Newcastle Uni)',
                body: 'Takes request from WordPress exam plugin and writes over information fed into exam JSON feeds used by the website and app.',
                sytleCentre: true
            }]
        }
    },
    {
        title: 'Socket.io',
        num: 1,
        colour: 'rgba(139, 190, 178,1)',
        info: {
            projs: [{
                title: 'Atresia Messenger backend',
                body: 'Used as Messenger App backend',
                sytleCentre: true
            }]
        }
    },
    {
        title: 'Wordpress/PHP',
        num: 4,
        colour: 'rgba(153, 105, 199,1)',
        info: {
            projs: [{
                title: 'Push Notification Plugin',
                body: 'A plugin alowing wordpress posts to be fired at firebase by a content editor.',
                sytleCentre:true

            }, {
                title: 'Exams Wordpress Plugin',
                body: 'Allows exams content editors to update exams mobile and web feeds from wordpress.',
                sytleCentre:true
            }, {
                title: 'Announchments Plugin',
                body: 'Allows content editors to create mobile anouncment cards to display in app from posts.',
                sytleCentre:true
            }, {
                title: 'Helped Develop Mobile News backend',
                body: 'Generates JSON feed from syndicating all university mobile content from sites RSS Feeds, which is then fed to the mobile app.',
                sytleCentre:true
            }]
        }
    },
    {
         title: 'Apache Sever',
            num: 1,
            colour: 'rgba(253, 136, 224,1)',
            info: {
                 projs: [{
                    title: 'Attendance monitoring',
                    body: 'Set up a virtual host and apache configeration for the university Attendance monitoring backend.',
                    sytleCentre:true
                }]
            }
    },{
         title: 'Network Programing',
            num: 1,
            colour: 'rgba(75, 157, 125,1)',
            info: {
                 projs: [{
                    title: 'Student Attendence Scanners',
                    body: 'Setting up DHCP so that new scanners pluged into the network would get an ip and config',
                    sytleCentre:true
                }]
            }
    },{
         title: 'Firebase',
            num: 3,
            colour: 'rgba(252, 194, 1,1)',
            info: {
                 projs: [{
                    title: 'Personal Website',
                    body: 'Hosted on firebase',
                    sytleCentre:true
                },
                {
                    title: 'Newcastle uni App',
                    body: 'Used Analytics, FCM',
                    sytleCentre:true
                },{
                    title: 'Other',
                    body: 'Firebase is my default for setting up an easy back end',
                    sytleCentre:true
                },]
            }
    },{
         title: 'PM2',
            num: 1,
            colour: 'rgba(191, 28, 43,1)',
            info: {
                 projs: [{
                    title: 'Newcastle Uni App',
                    body: 'Process manager for notifications and other mobile services which I worked on, mostly used for log-rotation.',
                      sytleCentre:true
                }]
            }
    },{
         title: 'Azure',
            num: 1,
            colour: 'rgba(250, 249, 246,1)',
            info: {
                 projs: [{
                    title: 'Microsoft teams  ',
                    body: 'Set up hosting, app services and congnitive services (LUIS) for the Newcastle Uni bot as well as worked out projected costing for the cloud services.',
                    sytleCentre:true
                }]
            }
    },{
         title: 'SQL sever managment',
            num: 1,
            colour: 'rgba(177, 240, 240,1)',
            info: {
                 projs: [{
                    title: 'Exams for Libary App',
                    body: 'Used Microsoft SQL sever managment to run SQL procedures for student infomation. This info was primarly used in libary desktop app.',
                    sytleCentre:true
                }]
            }
    },];

  menu = {"menu1":true,"menu2":true,"menu3":true};

  openMenu(i){
    switch (i) {
      case 1: this.menu.menu1 = !this.menu.menu1;
        break;
        case 2: this.menu.menu2 = !this.menu.menu2;
          break;
          case 3: this.menu.menu3 = !this.menu.menu3;
            break;
      default:
        break;
    }

  }


    back(){
      this.selectedItem = "";
      // this.title = "";
    }


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
               // console.table(this.chart);
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
    public options = {
  // cutoutPercentage: 30,
    }
    public doughnutChartLabels = [];
    public doughnutChartData = [];
    public pieChartColors = [{
        backgroundColor: [],
    }, ];
    public doughnutChartType = 'doughnut';

 //    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
 //   console.log(event, active);
 // }

    ngOnInit() {}

    menuSelect(i,a){
      switch (a) {
        case 1:   this.selectedItem = this.projectObjs[i].title;
              this.infoOnSelect = this.projectObjs[i].info.projs;
          break;
          case 2:   this.selectedItem = this.tecSkills[i].title;
            this.infoOnSelect = this.tecSkills[i].info.projs;
            break;
        case 3:     this.selectedItem = this.softSkills[i].title;
            this.infoOnSelect = this.softSkills[i].info.projs;
              break;

        default:
          break;
      }



    }

    onChartClick(event) {
        console.log(event.active[0])
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
        language ? : string,
        sytleCentre  ?: boolean
}
