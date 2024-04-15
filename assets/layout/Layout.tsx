import React, { useState } from 'react';

import Navbar from './Navbar';
import Drawer from './Drawer';

type Props = {children:React.ReactNode}

function Layout({children}: Props) {

  const [hamburgerState, setHamburger]=useState(false);

    return (<div className='min-h-screen w-screen'>
  
        <Navbar hamburgerOpen={hamburgerState} setHamburgerOpen={setHamburger} />

        {hamburgerState && <Drawer hamburgerState={hamburgerState}/>}

        <div className=" h-full w-full bg-bgColour">  
{children}
</div>

{/* <Footer /> */}

  </div>)
}

export default Layout