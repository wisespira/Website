import {Component, ViewChild, ElementRef,HostListener} from '@angular/core';
import * as THREE from 'three';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild('rendererContainer') rendererContainer: ElementRef;
    
    @HostListener('window:resize', ['$event'])
    onWindowResize(event) {
    this.renderer.setSize(event.target.innerWidth, event.target.innerHeight)
    this.camera.aspect = window.innerWidth/window.innerHeight;

    this.camera.updateProjectionMatrix();
    }
    renderer = new THREE.WebGLRenderer();
    scene = null;
    camera = null;
    mesh = [];
    numOfSquares = 5;

    constructor() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;

        const geometry = new THREE.BoxGeometry(200, 200, 200);
        console.log(typeof 0xff0000);
       
        
         for(var i = 0; i<this.numOfSquares;i++) {
              let material = new THREE.MeshBasicMaterial({color: Math.floor(Math.random()*16777215), wireframe: true});
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = (Math.random() - 0.5) * window.innerWidth;
            mesh.position.y = (Math.random() - 0.5) * window.innerHeight;
            mesh.position.z = (Math.random() - 0.5) * 1000;
           
            this.mesh.push(mesh);
             mesh.translateY(40)
            this.scene.add(mesh);
         
        }
        
       // this.mesh = new THREE.Mesh(geometry, material);

        //this.scene.add(this.mesh);
    }

    ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        console.table(this.rendererContainer.nativeElement);
        this.animate();
    }
     y = 40;
    animate() {
        window.requestAnimationFrame(() => this.animate());
       for(var i = 0; i<this.numOfSquares;i++) {
           this.mesh[i].rotation.x += 0.01;
           this.mesh[i].rotation.y += 0.02;
       }
       
         this.mesh[3].translateY(this.y)
       // console.log(this.mesh[3].position)
        if(this.mesh[3].position.y>1000){
           this.y = -this.y;
        }
       if(this.mesh[3].position.y<-1000){
           this.y = -this.y;
        }
       // this.mesh[3].translateY(-40)
        //this.mesh.rotation.x += 0.01;
       // this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
}