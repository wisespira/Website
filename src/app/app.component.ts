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
    mesh = null;

    constructor() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;

        const geometry = new THREE.BoxGeometry(200, 200, 200);
        const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
        this.mesh = new THREE.Mesh(geometry, material);

        this.scene.add(this.mesh);
    }

    ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        console.table(this.rendererContainer.nativeElement);
        this.animate();
    }

    animate() {
        window.requestAnimationFrame(() => this.animate());
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
}