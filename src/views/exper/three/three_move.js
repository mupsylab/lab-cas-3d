import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let continue_loop;
function initCanvas({
    width = 300, 
    height = 500,
    camer = { pos: { x: 0, y: 0, z: 5 }, rotate: { x: 0, y: 0, z: 0 }},
    cam_fov = 25
}) {
    // 渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe7e7e7);

    // 摄像机
    const camera = new THREE.PerspectiveCamera(cam_fov, width / height, 0.01, 20);
    camera.position.set(camer.pos.x, camer.pos.y, camer.pos.z);
    camera.rotation.x = camer.rotate.x;
    camera.rotation.y = camer.rotate.y;
    camera.rotation.z = camer.rotate.z;

    // camera.lookAt(0, 0, 0.4);
    // console.log(Math.PI / camera.rotation.x)
    // console.log(Math.PI / camera.rotation.y)

    const camera1 = new THREE.PerspectiveCamera(cam_fov, width / height, 0.01, 20);
    camera1.position.set(camer.pos.x, camer.pos.y, camer.pos.z);
    camera1.rotation.x = camer.rotate.x;
    camera1.rotation.y = camer.rotate.y;
    camera1.rotation.z = camer.rotate.z;
    const cm = new THREE.CameraHelper(camera1);
    scene.add(camera1);
    scene.add(cm);

    // const o = new OrbitControls(camera, renderer.domElement);

    // 模拟面光源：点光源 + 平行光
    const lightGroup = new THREE.Object3D();
    const directLight = new THREE.DirectionalLight(0xffffff, 3);
    directLight.castShadow = true;
    directLight.position.set(0, 0, 0);
    directLight.lookAt(0, 0, -1);
    lightGroup.add(directLight);

    function getEightPos(dist) {
        return [[dist, 0, 0],
        [-dist, 0, 0],
        [0, dist, 0],
        [0, -dist, 0],
        [dist, dist, 0],
        [dist, -dist, 0],
        [-dist, dist, 0],
        [-dist, -dist, 0]]
    }

    const pointLights = [];
    getEightPos(0.29).forEach(v => {
        const pointLight = new THREE.PointLight(0xffffff, 1, 10, 1);
        pointLight.position.set(v[0], v[1], 0);
        pointLight.lookAt(v[0], v[1], -1);
        pointLight.castShadow = true;
        pointLight.shadow.mapSize.set(256, 256);
        pointLights.push(pointLight);
    });
    pointLights.forEach(v => {
        lightGroup.add(v);
    });

    lightGroup.position.set(0, 2, 5);
    lightGroup.lookAt(0, 0, 0);
    scene.add(lightGroup);

    // 地板
    const plane1Geometry = new THREE.PlaneGeometry(6, 6);
    const plane1Material = new THREE.MeshPhysicalMaterial({
        side: THREE.DoubleSide,
        emissive: 0x000000
    });
    const plane1 = new THREE.Mesh(plane1Geometry, plane1Material);
    plane1.position.set(0, 0, -0.36);
    scene.add(plane1);

    const plane2Geometry = new THREE.PlaneGeometry(0.92, 1.6);
    const plane2Material = new THREE.MeshPhysicalMaterial({
        side: THREE.DoubleSide,
        color: 0x748ae8,
        metalness: 0,
        roughness: 0.5,
        ior: 1.45,
        emissive: 0x000000 // 自发光
    });
    const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
    plane2.receiveShadow = true;
    scene.add(plane2);

    // 物体
    const cubeGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.02);
    const cubeMaterial = new THREE.MeshPhysicalMaterial({
        metalness: 0.0,
        emissive: 0x000000,
        transmission: 0.5,
        opacity: 1.0
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, 0, 0.4);
    cube.castShadow = true;
    scene.add(cube);

    continue_loop = true;
    function animate() {
        renderer.render(scene, camera);
        if (continue_loop) requestAnimationFrame(animate);
    }

    function stop() {
        continue_loop = false;
    }

    function setPos(z) {
        cube.position.z = z;
    }

    return { renderer, scene, animate, setPos, stop }
}

export default initCanvas;