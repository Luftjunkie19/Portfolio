import { Progress } from '@/components/ui/progress'
import { useProgress } from '@react-three/drei'
import React from 'react'

type Props = {}

function Loader({}: Props) {
   const progress = useProgress();
  return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-black/25'>
  <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":progress.loaded}} role="progressbar">${progress.loaded}%</div>
    </div>
  )
}

export default Loader