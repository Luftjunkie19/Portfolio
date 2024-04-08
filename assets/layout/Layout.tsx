import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

type Props = {children:React.ReactNode}

function Layout({children}: Props) {
    return (<div className='h-screen w-screen'>
  
        <Navbar />

        <div className="h-full w-full">  
{children}
</div>


  </div>)
}

export default Layout