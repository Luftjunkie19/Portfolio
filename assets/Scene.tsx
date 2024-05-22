import { Canvas } from '@react-three/fiber';

import FirstScene from './meshes/FirstMesh';

type Props = {}

function Scene({}: Props) {
  return (
    <Canvas>

      <ambientLight  intensity={2} />
    <directionalLight/>
          <FirstScene/>
    </Canvas>
    
  )
}

export default Scene