import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

type Props={
  hamburgerOpen: boolean;
  setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>> ;
}

function Navbar({hamburgerOpen, setHamburgerOpen}:Props) {

  const handleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
<div className="navbar sticky top-0 left-0 z-50 bg-darkBlue">
  <div className="flex-1">
    <a className="btn text-white btn-ghost text-xl">Luftjunkie_19</a>
  </div>

  <button onClick={handleHamburger} className='lg:hidden mx-6 cursor-pointer text-white' ><GiHamburgerMenu size={24}/></button>
  <a className='sm:hidden lg:block mx-6 text-white' href='#techs'>Technologies</a>

</div>
  )
}

export default Navbar