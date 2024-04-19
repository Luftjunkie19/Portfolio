import Link from 'next/link';
import { useRouter } from 'next/router';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoProject } from 'react-icons/go';
import { GrTechnology } from 'react-icons/gr';
import { IoLanguageSharp } from 'react-icons/io5';
import { RiContactsBookFill } from 'react-icons/ri';

type Props={
  hamburgerOpen: boolean;
  setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>> ;
}

function Navbar({hamburgerOpen, setHamburgerOpen}:Props) {
  const router = useRouter();
  const pathname = router.asPath;

  const handleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
<div className="navbar sticky top-0 left-0 z-50 bg-black/90">
  <div className="flex-1">
    <Link href={'/'} className="btn text-white btn-ghost text-xl">Luftjunkie_19</Link>
  </div>

  <button onClick={handleHamburger} className='lg:hidden mx-6 cursor-pointer text-white' ><GiHamburgerMenu size={24}/></button>
 <div className="lg:flex sm:hidden gap-6 mx-4 text-4xl">
        <Link className='text-white' href={pathname === '/' ? '#techs' : '/'}><GrTechnology /></Link>
  <Link className='text-white' href={pathname === '/' ? '#projects' : '/'}><GoProject/></Link>
  <Link className='text-white' href={pathname === '/' ? '#languages' : '/'}><IoLanguageSharp/></Link>
  <Link className='text-white' href={pathname === '/' ? '#contact' : '/'}><RiContactsBookFill/></Link>
 </div>

</div>
  )
}

export default Navbar