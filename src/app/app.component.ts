import { Component, ViewChild, ElementRef, HostListener } from "@angular/core";
import * as THREE from "three";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  config: any;
  fullpage_api: any;
  @ViewChild("rendererContainer") rendererContainer: ElementRef;

  @HostListener("window:resize", ["$event"])
  onWindowResize(event) {
    this.renderer.setSize(event.target.innerWidth, event.target.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;

    this.camera.updateProjectionMatrix();
  }

  @HostListener("window:mousemove", ["$event"])
  onMouseMove(event) {
    event.preventDefault();

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);

    var intersects = this.raycaster.intersectObjects(this.scene.children, true);
    for (var i = 0; i < intersects.length; i++) {
     // console.log(intersects[0].object);
      //intersects[0].object.position.x++;
        if(this.mounseVel[0]!=0||this.mounseVel[1]!=0){
  intersects[0].object['vector'] = [this.mounseVel[0]*100,this.mounseVel[1]*100];}
  //console.log(intersects[0].object.vector);
console.log(Object.keys(intersects[0].object));
    }
  }

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  meshArray = [];
  numOfSquares = 15;

  constructor() {
    this.config = {
      // fullpage options
      licenseKey: "YOUR LICENSE KEY HERE",
      anchors: [
        "firstPage",
        "secondPage",
        "thirdPage",
        "fourthPage",
        "lastPage"
      ],
      menu: "#menu",

      // fullpage callbacks
      afterResize: () => {
      //  console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
      //  console.log(origin.index);
      }
    };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    this.camera.position.z = 1000;

    const geometry = new THREE.IcosahedronGeometry(100, 0);
    // console.log(typeof 0xff0000);

    for (var i = 0; i < this.numOfSquares; i++) {
      let material =  new THREE.MeshNormalMaterial();
      //    let material = new THREE.MeshBasicMaterial({color: Math.floor(Math.random()*16777215), wireframe: true});
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * window.innerWidth;
      mesh.position.y = (Math.random() - 0.5) * window.innerHeight;
      mesh.position.z = (Math.random() - 0.5) * 500;

      let vector = [
        -1 + Math.floor(Math.random() * 3),
        -1 + Math.floor(Math.random() * 3)
      ];
      //console.log(vector);
      mesh.position.x;
      mesh.position.y;
      // WHY IS THIS ALLOWED BUT NOT mesh.vector ?!?!??!?
      mesh['vector'] = vector;
      this.meshArray.push({ mesh, vector });
      mesh.translateY(40);
      this.scene.add(mesh);
    }

    var light = new THREE.PointLight(0xadd8e6, 1, 2000);
    light.position.set(0, 0, 205);
    this.scene.add(light);

    var light = new THREE.PointLight(0xffff00, 2, 750);
    light.position.set(0, 0, 25);
    this.scene.add(light);
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    //this.renderer.setClearColor("#fff");
    this.scene.background = new THREE.Color( 0xffffff );
    this.animate();
  }
    mousePositionOld =[0,0];
    mousePositionNew = [];
    mounseVel = [];



  animate() {
    window.requestAnimationFrame(() => this.animate());
   // console.log(  [this.mouse.x,  this.mouse.y])
    if(this.mouse.x&&this.mouse.y&&this.mounseVel){
    this.mousePositionNew = [this.mouse.x,this.mouse.y ] ;
    this.mounseVel = [this.mousePositionNew[0]-this.mousePositionOld[0],this.mousePositionNew[1]-this.mousePositionOld[1]];
    this.mousePositionOld = [this.mousePositionNew[0],this.mousePositionNew[1] ]  ;
    }
  
   // console.log(this.mounseVel);
    for (var i = 0; i < this.numOfSquares; i++) {
      this.meshArray[i]["mesh"].rotation.x += 0.01;
      this.meshArray[i]["mesh"].rotation.y += 0.02;

      this.meshArray[i]["mesh"].position.x +=  this.meshArray[i]["mesh"].vector[0];
      this.meshArray[i]["mesh"].position.y += this.meshArray[i]["mesh"].vector[1];

      if (
        this.meshArray[i]["mesh"].position.x > window.innerWidth / 1.5 ||
        this.meshArray[i]["mesh"].position.x < -(window.innerWidth / 1.5)
      ) {
       this.meshArray[i]["mesh"].vector[0] = -this.meshArray[i]["mesh"].vector[0];
      }
      if (
        this.meshArray[i]["mesh"].position.y > window.innerHeight / 1.5 ||
        this.meshArray[i]["mesh"].position.y < -(window.innerHeight / 1.5)
      ) {
        this.meshArray[i]["mesh"].vector[1]= -this.meshArray[i]["mesh"].vector[1];
      }

   
      // this.mesh[3].translateY(-40)
      //this.mesh.rotation.x += 0.01;
      // this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    }
  }
}
