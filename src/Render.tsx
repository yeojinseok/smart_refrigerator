import { RefObject, SetStateAction } from 'react'
import * as THREE from 'three'
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import lobbyGlb from './images/test.png'

const roomList = [
  'https://imetanium.com/FZQo5VB?hub_invite_id=pK99jMn',
  'https://imetanium.com/sYQhQiJ/downright-striking-tract',
  'https://imetanium.com/gs5EFQi/primary-loud-commons',
  'https://imetanium.com/JqBya6N/gripping-elliptical-barbecue',
  'https://imetanium.com/JJRJVTe/uniform-splendid-park',
]

export function Render(
  canvasRef: any,
  setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
) {
  console.log(canvasRef)
  //Scene
  const scene = new THREE.Scene()

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    canvasRef.current.clientWidth / canvasRef.current.clientHeight,
    0.1,
    1000
  )
  camera.position.y = 40.5
  camera.position.z = 60
  camera.position.x = 10
  camera.rotation.x = -0.7
  camera.position.set(0, 50, 70)
  scene.add(camera)

  // Render
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  })
  renderer.setSize(
    canvasRef.current.clientWidth,
    canvasRef.current.clientHeight
  )
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
  canvasRef.current.appendChild(renderer.domElement)

  // Light

  const ambientLight = new THREE.AmbientLight('white', 30)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight('white', 30)
  directionalLight.position.x = 1

  directionalLight.position.y = 20

  // directionalLight.rotateZ = 100

  scene.add(directionalLight)

  const gltfLoader = new GLTFLoader()

  // let mixer;
  let meshes: THREE.Object3D<THREE.Event>[]
  gltfLoader.load('./assets/refrigeater.glb', gltf => {
    console.log(gltf.scene.children[0])
    const glbmodel = gltf.scene
    scene.add(glbmodel)
    meshes = gltf.scene.children
    // console.log(meshes);
    setLoading(true)
  })

  // mouse controller

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.maxDistance = 170
  controls.minDistance = 50
  // controls.enableRotate = false;
  controls.enableDamping = true
  controls.minPolarAngle = Math.PI / 6 // 수직
  controls.maxPolarAngle = Math.PI / 2
  controls.enablePan = false

  //     수평
  controls.minAzimuthAngle = -Math.PI / 2
  controls.maxAzimuthAngle = Math.PI / 2
  // controls.minAzimuthAngle =

  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()

  function checkIntersects() {
    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObjects(meshes)
    if (intersects[0]) {
      // console.log(intersects[0].object.name);
      if (intersects[0].object.name.includes('CEO_Room')) {
        window.open(roomList[0], '_self')
      } else if (intersects[0].object.name.includes('Meeting_Room')) {
        window.open(roomList[1], '_self')
      } else if (intersects[0].object.name.includes('Corporate_PR_office')) {
        window.open(roomList[2], '_self')
      } else if (intersects[0].object.name.includes('IR_Room')) {
        window.open(roomList[3], '_self')
      } else if (
        intersects[0].object.name.includes('Social_Contribution_Room')
      ) {
        window.open(roomList[4], '_self')
      } else if (intersects[0].object.name.includes('텍스트')) {
        window.open(roomList[4], '_self')
      }
    }
  }

  const clock = new THREE.Clock()
  const animate = function () {
    controls.update()
    const delta = clock.getDelta()
    renderer.render(scene, camera)
    renderer.setAnimationLoop(animate)
  }

  // 이벤트
  function setSize() {
    camera.aspect =
      canvasRef.current.clientWidth / canvasRef.current.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight
    )
    renderer.render(scene, camera)
  }
  window.addEventListener('resize', setSize)
  canvasRef.current.addEventListener(
    'click',
    (event: { clientX: number; clientY: number }) => {
      mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1
      mouse.y = -((event.clientY / renderer.domElement.clientHeight) * 2 - 1)
      // console.log(mouse);
      checkIntersects()
    }
  )

  animate()

  return () => canvasRef.current.removeChild(renderer.domElement)
}
