import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import FirstScene from './meshes/FirstMesh';

type Props = {}

function Scene({}: Props) {
  return (
      <Canvas shadows camera={{ fov: 50, near: 0.1, far: 600, position: [0, 0, 3] }}>
          <OrbitControls />
  <ambientLight  intensity={6} />
  <directionalLight  position={[0, 0, 5]} />
      <FirstScene/>
    </Canvas>
  )
}

export default Scene