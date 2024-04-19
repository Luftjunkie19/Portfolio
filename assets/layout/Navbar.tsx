import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { RiContactsBookFill } from "react-icons/ri";
type Props={
  hamburgerOpen: boolean;
  setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>> ;
}

import { GoProject } from "react-icons/go";
import { IoLanguageSharp } from "react-icons/io5";


function Navbar({hamburgerOpen, setHamburgerOpen}:Props) {

  const handleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
<div className="navbar fixed top-0 left-0 z-50 bg-black/20">
  <div className="flex-1">
    <a className="btn text-white btn-ghost text-xl">Luftjunkie_19</a>
  </div>

  <button onClick={handleHamburger} className='lg:hidden mx-6 cursor-pointer text-white' ><GiHamburgerMenu size={24}/></button>
 <div className="lg:flex sm:hidden gap-6 mx-4 text-4xl">
  <a className='text-white' href='#techs'><GrTechnology/></a>
  <a className='text-white' href='#projects'><GoProject/></a>
  <a className='text-white' href='#languages'><IoLanguageSharp/></a>
  <a className='text-white' href='#contact'><RiContactsBookFill/></a>
 </div>

</div>
  )
}

export default Navbar