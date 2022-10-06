/*
 * @Author: wangshanshan
 * @Date: 2022-10-06 19:43:40
 * @LastEditTime: 2022-10-06 20:35:10
 * @LastEditors: wangshanshan
 * @Description: 
 * @FilePath: /project-collect/threejs/src/three/demo02.js
 * 记得注释
 */
import * as THREE from 'three'
import { Plane } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let renderer, camera, scene;
let axesHelper, ambientLight, spotLight
let plane, cylinder
let controls
let shadow

initRenderder()
initCamera()
initScene()
initControls()
initSpotLight()
// initAxesHelper()

initAmbientLight()

initMesh()
initShadow()

render()

function initRenderder() {
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
}

function initCamera() {
  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 1000)
  camera.position.set(0, 120, 200)
  camera.lookAt(0, 0, 0)
}

function initControls() {
  controls = new OrbitControls(camera, renderer.domElement)
  controls.addEventListener('change', render)
}

function initSpotLight() {
  spotLight = new THREE.SpotLight(0xffffff, 1)
  spotLight.position.set(-50, 80, 0)
  spotLight.angle = Math.PI/6
  spotLight.penumbra = 0.1
  scene.add(spotLight)
}

function initShadow() {
  cylinder.castShadow = true
  plane.receiveShadow = true
  spotLight.castShadow = true
  renderer.shadowMap.enabled = true
}

function initScene() {
  scene = new THREE.Scene()
}

function initAxesHelper() {
  axesHelper = new THREE.AxesHelper(50)
  scene.add(axesHelper)
}

function initAmbientLight() {
  ambientLight = new THREE.AmbientLight(0x808080, 0.2)
  scene.add(ambientLight)
}

function initMesh() {
  // 创建面
  const geometryPlane = new THREE.PlaneGeometry(2000,  2000)
  const metrial = new THREE.MeshPhongMaterial({ color: '0x808080' })
  plane = new THREE.Mesh(geometryPlane, metrial)
  plane.rotation.x = -Math.PI/2
  plane.position.set(0, -10, 0)
  scene.add(plane)

  // 圆柱体
  const geometryCylinder= new THREE.CylinderGeometry(5, 5, 2, 24, 1, false)
  const metrialCylinder = new THREE.MeshPhongMaterial({ color: 0x4080ff })
  cylinder = new THREE.Mesh(geometryCylinder, metrialCylinder)
  cylinder.position.set(0, 10, 0)
  scene.add(cylinder)
}

function render() {
  renderer.render(scene, camera)
}