<template>
  <div>
    <websocket-client @loadGLTF="displayGLTF"></websocket-client>
    <Renderer ref="rendererC" antialias :orbit-ctrl="{ enableDamping: true }" >
      <Camera :position="{ x: 0, y: 3, z: 2 }" />
      <Scene ref="sceneC">
        <PointLight :position="{ y: 50, z: 50 }" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene, GltfModel } from 'troisjs'
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader'

const gltfLoader = new GLTFLoader()

const rendererC = ref()
const sceneC = ref()

function displayModel(url) {
  const scene = {...sceneC.value}

  gltfLoader.load(url, (gltf) => {

              const root = gltf.scene
              scene.add(root)
            })

  const renderer = {...rendererC.value}

  renderer.render(scene)
}

function displayGLTF(url) {
  displayModel(url)
}
</script>

<style>
body {
  margin: 0;
}
canvas {
  display: block;
}
</style>