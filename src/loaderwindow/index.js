import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';

export function LoaderWindow(elm) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ canvas: elm, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 5;
    // camera.position.set(0, 3, 4);
        renderer.domElement.addEventListener('wheel', (event) => {
    event.preventDefault();
    });

    camera.lookAt(0,0,0)
    const loader = new GLTFLoader();
    const modelPath = './DamagedHelmet.gltf'; 
    console.log("Loading model from:", modelPath); 
    let model;
    loader.load(modelPath, (gltf) => {
        model = gltf.scene;
        console.log("Model loaded:", model);
        model.scale.set(1.5, 1.5, 1.5);
        scene.add(model);

        
        model.traverse((child) => {
            if (child.isMesh) {
                child.material.emissive = new THREE.Color("red"); 
                child.material.emissiveIntensity = 0.5; // Initial intensity
            }
        });
    }, undefined, (error) => {
        console.error("Error loading model", error);
    });

    // const pointlight = new THREE.PointLight("red", 2, 100);
    // pointlight.position.set(3, 1, 1);
    // scene.add(pointlight);

    // const ambientlight = new THREE.AmbientLight(0xffffff, 2);
    // scene.add(ambientlight);
    const directionalLight = new THREE.DirectionalLight("green", 16);
    directionalLight.position.set(3, 2, 9).normalize();
    scene.add(directionalLight);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);

    composer.addPass(renderPass);

    const rgbShiftPass = new ShaderPass(RGBShiftShader);

    composer.addPass(rgbShiftPass);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    composer.setSize(window.innerWidth, window.innerHeight);

    let glowDirection = 1; 
    let glowSpeed = 0.1; // Speed of the glow animation
    function animate() {
        requestAnimationFrame(animate);

        // Glow animation logic
        if (model) {
            model.traverse((child) => {
                if (child.isMesh && child.material.emissiveIntensity !== undefined) {
                    rgbShiftPass.uniforms['amount'].value = 0; // for rgb shift anim
                    child.material.emissiveIntensity += glowSpeed * glowDirection;
                    if (child.material.emissiveIntensity >= 10 || child.material.emissiveIntensity <= -0.5) {
                        glowDirection *= -1; 

                    }
                }
            });
        }

        composer.render();
    }
    animate();
}