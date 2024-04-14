import Link from 'next/link';

function Navbar() {
  return (
<div className="navbar sticky top-0 left-0 z-50 bg-darkBlue">
  <div className="flex-1">
    <a className="btn text-white btn-ghost text-xl">Luftjunkie_19</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className='sm:hidden lg:block'><a href='#techs'>Technologies</a></li>
      <li>
        <details>
          <summary>
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Languages</a></li>
            <li><a>Contact</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar