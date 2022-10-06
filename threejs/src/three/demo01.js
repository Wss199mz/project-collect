/*
 * @Author: wangshanshan
 * @Date: 2022-10-06 18:59:39
 * @LastEditTime: 2022-10-06 19:24:30
 * @LastEditors: wangshanshan
 * @Description: 
 * @FilePath: /project-collect/threejs/src/three/demo01.js
 * 初始化一个3D demo
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let scene, cube, camera, renderer;
let axesHelper, controls

init();
render();

function init() {
  /* 1.创建scene，以及物体 */
  scene = new THREE.Scene();

  const genometry = new THREE.BoxGeometry(1, 1, 1)
  // 材质
  const meterial = new THREE.MeshBasicMaterial({ color: '#409EFF' })
  // 创建物体
  cube = new THREE.Mesh(genometry, meterial) // Mesh: 物体
  scene.add(cube)

  /* 1.1 显示坐标轴 */
  axesHelper = new THREE.AxesHelper(3)
  scene.add(axesHelper)

  /* 2.创建camera */
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
  camera.position.z = 5
  camera.position.x = 2
  camera.position.y = 1

  /* 3.创建renderer */
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement) // canvas

  /* 控制器 */
  controls = new OrbitControls(camera, renderer.domElement)
}

function render() {
  renderer.render(scene, camera)
  // cube.rotation.y +=0.01
  requestAnimationFrame(render)
}