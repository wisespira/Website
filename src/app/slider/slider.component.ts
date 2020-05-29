import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  src = "assets/react.svg";
  text = "Currently Working on a React WebGL gallery to showcase work done whilst learning the API.";
  index = 0;
  size = 2;

  projects = [{src: "https://raw.githubusercontent.com/wisespira/WPF-Desk-Remider-App/master/giiff.gif",
text : "React WebGL gallery to showcase work done whilst learning the API"},
{src :"https://raw.githubusercontent.com/wisespira/Website/master/its%20the%20giff.gif",
text : "yo yo 2"}
];
show = true;
fade = false;
  constructor() {
     // setInterval(() => {
     //    this.src = this.projects[1].src
     //      this.text = this.projects[1].text
     //  },3000)

  }
  canClick = true;
  next(a){
    console.log(this.index)
    console.log(a)
    if(this.index+a<this.size&&this.index+a>-1&& this.canClick){
      this.canClick= false
      this.fade= true
        this.index = this.index +a;
       setInterval(() => {

      this.src = this.projects[this.index].src
      this.text = this.projects[this.index].text
        this.fade= false
            this.canClick= true
 },1000)
    }
  }
  ngOnInit() {
  }

}
