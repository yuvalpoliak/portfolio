/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/66177dd582179d0f63d8cd52.glb 
*/

import React, { Suspense, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'
import { useAnimations, useFBX } from '@react-three/drei'

export function Avatar(props) {
  //load assets
  const { nodes, materials } = useGLTF('models/66177dd582179d0f63d8cd52.glb')
  const {animations: runningAnimation} = useFBX('/animations/SlowRun.fbx')
  const {animations: standingAnimation} = useFBX('/animations/StandingIdle.fbx')

  runningAnimation[0].name = 'Run'
  standingAnimation[0].name = "Stand"

  const groupRef = useRef();

  const {actions} = useAnimations((runningAnimation, standingAnimation), groupRef)

  const formatNamesAnimation = (tracks) => {
    tracks.forEach(track => track.name = track.name.replace('mixamorig', '') )
  }

  const playAnimation = () => {
    formatNamesAnimation(runningAnimation[0].tracks)
    formatNamesAnimation(standingAnimation[0].tracks)
    actions['Stand'].play(); 
  }
  useEffect(()=> {playAnimation()}, [])
  return (
    <Suspense>
      <group {...props} ref={groupRef} dispose={null}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
    </Suspense>
  )
}

useGLTF.preload('models/66177dd582179d0f63d8cd52.glb')
