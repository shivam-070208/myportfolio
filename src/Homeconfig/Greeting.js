import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function Greet() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
  const canvas = document.querySelector('canvas');
  const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvas });
  camera.position.set(0,0.8,0)
  camera.position.z = 3;
  camera.rotation.x=-0.2;
  

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const loader = new GLTFLoader();
  const modelPath = './homegreeting.glb';
  const ambientLight = new THREE.AmbientLight("white", 2);
  scene.add(ambientLight);

  let mixer;
  let clock = new THREE.Clock();

  loader.load(modelPath, (glb) => {
    let model = glb.scene;
    mixer = new THREE.AnimationMixer(model);
    const action = mixer.clipAction(glb.animations[0]);
    action.play();
    console.log("Model loaded:", model);
    model.position.set(-0.7, -2, 0);
  model.rotateZ(-0.3)
    model.scale.set(1.3, 1, 0.8);
    scene.add(model);
  });

  function animate() {
    requestAnimationFrame(animate);
    if (mixer) {
      mixer.update(clock.getDelta());
    }
    renderer.render(scene, camera);
  }

  animate();
}

