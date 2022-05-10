import * as THREE from 'three'

window.THREE = THREE // THREE.OrbitControls expects THREE to be a global object
require('three/examples/jsm/controls/OrbitControls')

// export default { ...THREE, OrbitControls: THREE.OrbitControls }
