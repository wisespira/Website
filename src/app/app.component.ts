import {
    Component,
    ViewChild,
    ElementRef,
    HostListener
} from "@angular/core";
import * as THREE from "three";
import {
    DeviceDetectorService
} from 'ngx-device-detector';
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    pagesShow = {
        "Home": true,
        "Skills": false,
        "Experience": false,
        "Resume": false,
        "lastPage": false
    };
    EdgebrowserCheck = true;
    IEbrowserCheck = true;
    config: any;
    fullpage_api: any;
    @ViewChild("rendererContainer") rendererContainer: ElementRef;
    /*had to add because of hackin */
    //@HostListener('touchmove', ['$event']) onClick(e) { }

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
            if (this.mounseVel[0] != 0 || this.mounseVel[1] != 0) {
                intersects[0].object['vector'][0] = intersects[0].object['vector'][0] + this.mounseVel[0] * 100;
                intersects[0].object['vector'][1] = intersects[0].object['vector'][1] + this.mounseVel[1] * 100;
                // intersects[0].object['cooldown'] =1000;
            }

            //console.log(intersects[0].object.vector);
            //console.log(Object.keys(intersects[0].object));
        }
    }

    intro = true
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    renderer = new THREE.WebGLRenderer({
        alpha: true
    });
    scene = null;
    camera = null;
    /*should have used scene array :( */
    meshArray = [];
    numOfSquares = 18;
    ship;
    phone = false;
    deviceInfo = null;
    constructor(private deviceService: DeviceDetectorService) {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        console.log('%c Hello there ' + this.deviceInfo.os, 'font-weight: bold; font-size: \n\
50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) ,\n\
 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , \n\
18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');


        console.log(this.deviceInfo);
        if (this.deviceInfo.browser == "MS-Edge") {
            this.EdgebrowserCheck = false;
        }

        if (this.deviceInfo.os == 'Mac' || this.deviceInfo.os == 'Windows') {
            this.phone = false;
        } else {
            this.phone = true;
        }
        this.config = {
            dragAndMove: false,
            licenseKey: "451ECC33-310547B3-A0579CA3-5B8D3406",
            anchors: [
                "Home",
                "Skills",
                "Experience",
                "Resume+Contact",
                "lastPage"
            ],
            menu: "#menu",

            // fullpage callbacks
            afterResize: () => {
                console.log("After resize");
            },
            // pagesShow = {"Home":true,"Skills":false,"Experience":false,"Resume+Contact":false,"lastPage":false};
            afterLoad: (origin, destination, direction) => {
                if (destination.anchor == "Resume+Contact") {
                    this.pagesShow.Resume = true;

                } else if (destination.anchor == "Skills") {
                    this.pagesShow.Skills = true;
                } else if (destination.anchor == "Experience") {
                    this.pagesShow.Experience = true;
                }


                console.log(destination);
            }
        };

        if (this.deviceInfo.browser == "IE") {
            this.IEbrowserCheck = false;
            this.config.anchors = [
                "Home",
                "Resume+Contact",
            ]
        }

        /*SHould put this in own component also needs refactor -- ['mesh'] is a silly array from memory */

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            10000
        );
        this.camera.position.z = 1000;

        const geometry = new THREE.IcosahedronBufferGeometry(90, 0);
        const geometry2 = new THREE.OctahedronBufferGeometry(45, 0);
        let material = new THREE.MeshNormalMaterial({
            "wireframe": true,
        })
        /*  let Shipmaterial =  new THREE.MeshNormalMaterial({'wireframe':true});
          let shipGeometry = new THREE.ConeGeometry( 40, 160, 256 );
          Shipmaterial.wireframe = false;
           Shipmaterial.depthFunc = 1;
          var cone = new THREE.Mesh( shipGeometry, Shipmaterial );
          cone.position.x = (Math.random() - 0.5) * window.innerWidth;
          cone.position.y = (Math.random() - 0.5) * window.innerHeight;
          cone.position.z = 150;
          console.log(cone);
          cone.rotation.y = 50;
          this.scene.add( cone );
          */

        let exstra = 6;
        if (this.phone) {
            exstra = 4
        }
        this.numOfSquares = Math.floor((window.innerWidth * window.innerHeight) / 100000) + exstra;
        if (this.numOfSquares > 25) {
            this.numOfSquares = 25;
        }

        for (var i = 0; i < this.numOfSquares; i++) {
            //    let material = new THREE.MeshBasicMaterial({color: Math.floor(Math.random()*16777215), wireframe: true});
            if (i > (this.numOfSquares / 2)) {
                var mesh = new THREE.Mesh(geometry, material);
            } else {
                var mesh = new THREE.Mesh(geometry2, material);
            }

            mesh.position.x = (Math.random() * (2) - 1) * window.innerWidth * 0.75;
            mesh.position.y = (Math.random() * (2) - 1) * window.innerHeight * 0.75;
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

            this.meshArray.push({
                mesh,
                vector
            });
            mesh.translateY(40);
            this.scene.add(mesh);
        }

        /*var light = new THREE.PointLight(0xadd8e6, 1, 2000);
        light.position.set(0, 0, 205);
        this.scene.add(light);

        var light = new THREE.PointLight(0xffff00, 2, 750);
        light.position.set(0, 0, 25);
        this.scene.add(light);*/
    }

    enterSite(){
      this.intro = !this.intro 
    }

    getRef(fullPageRef) {
        this.fullpage_api = fullPageRef;
    }

    ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        //this.renderer.setClearColor("#fff");
        //this.scene.background = new THREE.Color( 0x6495ed );
        this.animate();
    }

    // addBall(){
    //     //console.log(this.meshArray)
    //     if(this.meshArray.length<=35){
    //     const geometry = new THREE.IcosahedronGeometry(90, 0);
    //     let material =  new THREE.MeshMatcapMaterial();
    //     var mesh = new THREE.Mesh(geometry, material);
    //     mesh.position.x = (Math.random() * (2) -1) * window.innerWidth*0.75;
    //     mesh.position.y = (Math.random() * (2) -1) * window.innerHeight*0.75;
    //     mesh.position.z = (Math.random() - 0.5) * 500;
    //
    //     let vector = [
    //       -1 + Math.floor(Math.random() * 3),
    //       -1 + Math.floor(Math.random() * 3)
    //     ];
    //     //console.log(vector);
    //     mesh.position.x;
    //     mesh.position.y;
    //     // WHY IS THIS ALLOWED BUT NOT mesh.vector ?!?!??!?
    //     mesh['vector'] = vector;
    //
    //     this.meshArray.push({ mesh, vector });
    //     mesh.translateY(40);
    //     this.scene.add(mesh);}
    // }
    // minusBall(){
    //     if (this.meshArray.length>0&&this.scene.children.length>0){
    //     //    if(this.scene.children>0){
    //     console.log(this.meshArray);
    //      console.log(this.scene.children);
    //     //let uuid = this.meshArray[0].mesh.uuid;
    //     this.meshArray.shift()
    //     this.scene.children.shift()}
    //     this.renderer.render(this.scene, this.camera);
    // }


    mousePositionOld = [0, 0];
    mousePositionNew = [];
    mounseVel = [];


    //maybe try doing the calculation outside the animation frame for better fps ??????
    animate() {
        window.requestAnimationFrame(() => this.animate());
        // console.log(  [this.mouse.x,  this.mouse.y])
        if (this.mouse.x && this.mouse.y && this.mounseVel) {
            this.mousePositionNew = [this.mouse.x, this.mouse.y];
            this.mounseVel = [this.mousePositionNew[0] - this.mousePositionOld[0], this.mousePositionNew[1] - this.mousePositionOld[1]];
            this.mousePositionOld = [this.mousePositionNew[0], this.mousePositionNew[1]];
        }

        // console.log(this.mounseVel);  could be simplified when done
        for (var i = 0; i < this.meshArray.length; i++) {

            this.meshArray[i]["mesh"].rotation.x += 0.01;
            this.meshArray[i]["mesh"].rotation.y += 0.02;

            // if (i == 0) {
            //     if (this.meshArray[i]["mesh"].position.x < this.mouse.x) {
            //         this.meshArray[i]["mesh"].position.x += 1;
            //
            //   this.meshArray[i]["mesh"].position.x = this.mouse.x*100
            //   this.meshArray[i]["mesh"].position.y = this.mouse.y
            //   console.log(this.mouse.y)
            // }

            this.meshArray[i]["mesh"].position.x += this.meshArray[i]["mesh"].vector[0];
            this.meshArray[i]["mesh"].position.y += this.meshArray[i]["mesh"].vector[1];

            if (this.meshArray[i]["mesh"].vector[0] > 1 || this.meshArray[i]["mesh"].vector[0] < -1) {
                this.meshArray[i]["mesh"].vector[0] = this.meshArray[i]["mesh"].vector[0] * 0.995;
            }
            if (this.meshArray[i]["mesh"].vector[1] > 1 || this.meshArray[i]["mesh"].vector[1] < -1) {
                this.meshArray[i]["mesh"].vector[1] = this.meshArray[i]["mesh"].vector[1] * 0.995;
            }


            //if(this.meshArray[i]["mesh"].position.y > window.innerHeight*0.9 ){this.meshArray[i]["mesh"].position.y--;}
            //  if(  this.meshArray[i]["mesh"].position.y < -(window.innerHeight*0.9)){this.meshArray[i]["mesh"].position.y++;}

            if (
                this.meshArray[i]["mesh"].position.x > window.innerWidth * 0.9
            ) {
                this.meshArray[i]["mesh"].vector[0] = -this.meshArray[i]["mesh"].vector[0];
                this.meshArray[i]["mesh"].position.x = this.meshArray[i]["mesh"].position.x - 5;
            }

            if (this.meshArray[i]["mesh"].position.x < -(window.innerWidth * 0.9)) {
                this.meshArray[i]["mesh"].vector[0] = -this.meshArray[i]["mesh"].vector[0];
                this.meshArray[i]["mesh"].position.x = this.meshArray[i]["mesh"].position.x + 5;
            }



            if (
                this.meshArray[i]["mesh"].position.y > window.innerHeight * 0.9
            ) {
                this.meshArray[i]["mesh"].vector[1] = -this.meshArray[i]["mesh"].vector[1];
                this.meshArray[i]["mesh"].position.y = this.meshArray[i]["mesh"].position.y - 5;
            }
            if (this.meshArray[i]["mesh"].position.y < -(window.innerHeight * 0.9)) {
                this.meshArray[i]["mesh"].vector[1] = -this.meshArray[i]["mesh"].vector[1];
                this.meshArray[i]["mesh"].position.y = this.meshArray[i]["mesh"].position.y + 5;
            }


            // this.mesh[3].translateY(-40)
            //this.mesh.rotation.x += 0.01;
            // this.mesh.rotation.y += 0.02;
            this.renderer.render(this.scene, this.camera);
        }
    }
}
