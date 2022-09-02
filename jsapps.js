// Get the element that will contain the plot
testplot = document.getElementById("testplotly");

// Tell plotly to put a graph in that element

Plotly.newPlot(testplot, 
    [{x: [0, 10, 20, 30, 40],
    y: [8.497, 10.41, 11.033, 11.426, 11.802]}]);


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 600);

// append a child element to the body element to display whatever graphics we want to draw
document.body.appendChild(renderer.domElement);

// That set up the box we're going to use for the display, now time for the content

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);
}

animate();