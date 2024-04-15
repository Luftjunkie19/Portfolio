import React from 'react';

type Props = {
    hamburgerState: boolean;
    closeHamburger: ()=>void;
}


import classes from '@/styles/me.module.css';

function Drawer({ hamburgerState, closeHamburger }: Props) {
    return (
        <div className={`sm:flex justify-center ${classes.transition} flex-col transition-all lg:hidden bg-black/60 gap-4 h-screen fixed sm:w-11/12 md:w-80 z-40 top-0 ${hamburgerState ? 'right-0' : '-right-full'}`}>
            <div className="flex flex-col gap-8 w-full max-w-md text-white px-2">
                <a onClick={closeHamburger} href="#techs" className={`text-4xl cursor-pointer text-transparent ${classes.techClass}`}>Technologies</a>
                <a onClick={closeHamburger}  href="#projects" className={`text-4xl cursor-pointer text-transparent ${classes.proClass}`}>Projects</a>
                <a onClick={closeHamburger}  href="#languages" className={`text-4xl cursor-pointer text-transparent ${classes.langClass}`}>Languages</a>
                <a onClick={closeHamburger}  href="#contact" className={`text-4xl cursor-pointer text-transparent ${classes.ctcClass}`}>Contact</a>
            </div>
        </div>
    );
}

export default Drawer;
