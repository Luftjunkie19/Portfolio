import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import FirstScene from './meshes/FirstMesh';

type Props = {}

function Scene({}: Props) {
  return (
      <Canvas >
          <OrbitControls />
  <ambientLight  intensity={6} />
  <directionalLight  position={[0, 0, 5]} />
      <FirstScene/>
    </Canvas>
  )
}

export default Scene