import { Progress } from '@/components/ui/progress'
import { useProgress } from '@react-three/drei'
import React from 'react'

type Props = {}

function Loader({}: Props) {
   const progress = useProgress();
  return (
    <div className='w-full h-full flex justify-center items-center bg-black/25'>
  <div className="radial-progress text-white bg-primary border-4 border-white" style={{"--value":progress.progress}} role="progressbar">${progress.progress}%</div>
    </div>
  )
}

export default Loader