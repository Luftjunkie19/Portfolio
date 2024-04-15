import React from 'react';

type Props = {
    hamburgerState: boolean;
}


import classes from '@/styles/me.module.css';

function Drawer({ hamburgerState }: Props) {
    return (
        <div className={`flex overflow-hidden gap-6 justify-center flex-col fixed z-40 transition-all duration-500 w-5/6 h-screen bg-black/50 ${
            hamburgerState ? 'translate-x-0 top-0 right-0 opacity-100' : 'translate-x-full opacity-0 top-0 -right-0'
        }`}>
            <div className="flex flex-col gap-4 w-full max-w-md text-white">
                <a href="#techs" className={`text-3xl cursor-pointer text-transparent ${classes.techClass}`}>Technologies</a>
                <a href="#projects" className={`text-3xl cursor-pointer text-transparent ${classes.proClass}`}>Projects</a>
                <a href="#languages" className={`text-3xl cursor-pointer text-transparent ${classes.langClass}`}>Languages</a>
                <a href="#contact" className={`text-3xl cursor-pointer text-transparent ${classes.ctcClass}`}>Contact</a>
            </div>
        </div>
    );
}

export default Drawer;
