import React from 'react';

import { makeStyles } from '@material-ui/core';

import { Canvas } from "@react-three/fiber";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { Suspense } from 'react';

import  gucci  from './Assets/gucci.gltf'


const useStyles = makeStyles({
    root:{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(225, 179, 182, 0)',
        fontFamily: 'Nunito',
        color: '#fff',
        fontSize: '2rem',
        textAlign: 'center',
    },
})

function GuczModel() {
    const Model = useLoader(GLTFLoader, gucci);
    return (
    <>
        <primitive object={Model.scene}/>
    </>
    );
}

export default function Card() {
    const  classes = useStyles()
  return (
  <div className={classes.root} id="canvas-container">
    <Canvas style={{height:300,width:'100%'}}>
    <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={10}
        />
        <PerspectiveCamera
        makeDefault fov={60}
         position={[0, 0, 10]}>
        <spotLight position={[10, 10, 15]} angle={0.15} penumbra={1} intensity={1.5} castShadow shadow-mapSize={[2048, 2048]} />
        </PerspectiveCamera>
        <GuczModel/>
        </Suspense>
    </Canvas>
  </div>
  )
}
