import Link from 'next/link';

function Navbar() {
  return (
      <div className="flex sticky top-0 left-0 z-10 justify-around p-2 items-center bg-blue-400">
          <p className=' text-white text-3xl font-bold'>Łukasz Borkowski</p>

          <div className="flex gap-8 text-white">
              <Link href='#about'>About me</Link>
              <Link href='#projects'>Projects</Link>
              <Link href="#techs">Technologies</Link>
          </div>
    </div>
  )
}

export default Navbar