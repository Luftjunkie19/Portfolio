import React from 'react';

import Navbar from './Navbar';

type Props = {children:React.ReactNode}

function Layout({children}: Props) {
    return (<div className='min-h-screen w-screen'>
  
        <Navbar />

        <div className=" h-full w-full bg-bgColour">  
{children}
</div>

{/* <Footer /> */}

  </div>)
}

export default Layout