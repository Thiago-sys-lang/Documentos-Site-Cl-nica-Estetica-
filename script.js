import * as THREE from 'three'; // Importando a biblioteca Three.js

// Criando uma cena 3D
const scene = new THREE.Scene();

// Criando uma câmera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5; // Posicionando a câmera para visualizar o cubo

// Criando um renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Criando um cubo
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Função de animação
function animate() {
  requestAnimationFrame( animate );

  // Rotação do cubo
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Renderizando a cena
  renderer.render( scene, camera );
}

// Iniciando a animação
animate();