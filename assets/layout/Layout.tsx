import React from 'react';

import Navbar from './Navbar';

type Props = {children:React.ReactNode}

function Layout({children}: Props) {
    return (<div className='h-screen w-screen'>
  
        <Navbar />

        <div className="h-full w-full">  
{children}
</div>

{/* <Footer /> */}

  </div>)
}

export default Layout