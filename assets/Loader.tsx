import React from 'react';

import { useProgress } from '@react-three/drei';

type Props = {}

function Loader({}: Props) {
   const progress = useProgress();
  return (
    <div className='w-full h-full flex justify-center items-center bg-black/25'>
  <div className="radial-progress text-white bg-primary border-4 border-white" role="progressbar">{Math.floor(progress.progress)}%</div>
    </div>
  )
}

export default Loader