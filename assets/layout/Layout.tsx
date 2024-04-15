import React, { useState } from 'react';

import Navbar from './Navbar';
import Drawer from './Drawer';

type Props = {children:React.ReactNode}

function Layout({children}: Props) {

  const [hamburgerState, setHamburger]=useState(false);

  const closeHamburger=()=>{
    setHamburger(false);
  }

    return (<div className='min-h-screen w-screen'>
  

        <Drawer closeHamburger={closeHamburger} hamburgerState={hamburgerState}/>

        <div className=" h-full w-full bg-bgColour">  
        <Navbar hamburgerOpen={hamburgerState} setHamburgerOpen={setHamburger} />
{children}
</div>

{/* <Footer /> */}

  </div>)
}

export default Layout