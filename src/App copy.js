
import './App.css';
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useLoader, extend, useThree, useFrame } from '@react-three/fiber';
import { Reflector, Image, useTexture, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from 'three';
import testScene from "./gltf/test.glb";
import roomScene from "./gltf/room.glb";
import mrBunny from "./gltf/bunny.glb";
import textureImage from "./gltf/mapblueprint.png";

extend({ OrbitControls });

const Box = () => {
  return (
    <mesh scale={[50, 50, 50]}>
      <boxGeometry attach='geometry'/>
      <meshLambertMaterial attach='material' color='#FFF' reflectivity={0.5} />
    </mesh>
  );
}

const BackWall = () => {
  return (
    <mesh scale={[100, 50, 50]}>
      <planeGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='#FFF' reflectivity={0.5} />
    </mesh>
  );
}

const Floor = () => {
  return (
    <mesh scale={[100, 100, 50]} rotation={[-Math.PI / 2, 0, 0 ]}>
      <planeGeometry attach='geometry'/>
      <meshLambertMaterial attach='material' color='#FC0606' reflectivity={0.5} />
    </mesh>
  );
}

const Ground = () => {
  const texture = useLoader(THREE.TextureLoader, textureImage)

  return (
    <mesh scale={[100, 100, 50]}>
      <planeGeometry attach="geometry" />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
}

function Gun() {
  const gltf = useLoader(GLTFLoader, testScene)
  return (
    <primitive object={gltf.scene} />
  )
}

const CameraControls = ({moveRoom}) => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement }
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(state => controls.current.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      maxAzimuthAngle={moveRoom ? 0 : 0}
      maxPolarAngle={moveRoom ? 0.5 : 0}
      minAzimuthAngle={0}
      minPolarAngle={0}
    />
  );
};

function Room() {
  const gltf = useLoader(GLTFLoader, roomScene)
  return (
    <mesh rotation={[-0.8, -0.3, 0 ]} onClick={() => {console.log('oi')}}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}

function Bunny({setMoveBunny, moveBunny}) {
  const gltf = useLoader(GLTFLoader, mrBunny)
  
  return (
    <mesh rotation={[-0.8, 0, 0 ]} scale={[150, 150, 150]} onClick={setMoveBunny}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const AppGame = () => {
  // const [test] = useTexture('./gltf/floor.jpg');
  const [moveBunny, setMoveBunny] = useState(150);
  const [moveRoom, setMoveRoom] = useState(true);
  const [luz, setLuz] = useState(0);

  const apagaLuz = () => {
    setLuz(1);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to <code>Bunny Heist</code>.
        </p>
        <div style={{ position: "relative", width: '80%', height: '70vh', background: 'black' }}>
          {luz ? 
            (
              <img src={textureImage} id={'board'} />
            )
            :
            <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 950], fov: 50 }}>
              <color attach="background" args={['black']} />
              {/* <fog attach="fog" args={['black', 15, 20]} /> */}
              <CameraControls moveRoom={moveRoom} />
              <Suspense fallback={null}>
                <group position={[moveBunny, 200, 70]}>
                  {/* <Box /> */}
                  <Bunny setMoveBunny={apagaLuz} moveBunny={moveBunny} />
                </group>
                <group position={[-150, -80, 0]}>
                  <Room />
                </group>
                
                <ambientLight intensity={1.5} />
                <spotLight position={[0, 0, 0]} intensity={0.3} />
                <directionalLight position={[20, 0, 10]} intensity={0.7} />
              </Suspense>
            </Canvas>
          }
        </div>
      </header>
    </div>
  );
}

