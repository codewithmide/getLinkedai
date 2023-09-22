/* eslint-disable @next/next/no-img-element */
/**
 * Navigation bar
 * 
 * Test Cases:
 * Logo must be visible
 * Logo must route to the homepage
 * Neccessary links must be present and clickable
 * A call to action button that routes to the Register page
*/
"use client"

import { useState } from "react";
import CustomButton from "./Button/button";

import Logo from "./Logo/logo";

const Navbar:React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open);
        console.log('open')
    }
    return (
        <nav className="w-full center py-6 border-b border-b-lightGray">
            <div className="xl:w-[90%] md:w-[95%] sm:w-[85%] between z-50">
                <Logo />
                <div className="lg:flex gap-[5rem] hidden">
                    <ul className="center gap-10 text-normal font-medium">
                        <li className="hover:text-purple duration-300 transition-all cursor-pointer">Timeline</li>
                        <li className="hover:text-purple duration-300 transition-all cursor-pointer">Overview</li>
                        <li className="hover:text-purple duration-300 transition-all cursor-pointer">FAQs</li>
                        <li className="hover:text-purple duration-300 transition-all cursor-pointer">Contact</li>
                    </ul>
                    <div className="">
                        <CustomButton 
                            onClick={() => {}}
                            label="Register"
                        />
                    </div>
                </div>
                <div className="lg:hidden flex">
                    <img src="/svgs/menu.svg" alt="menu" onClick={handleMenu} />
                </div>
                {open && (
                    <div className="absolute top-0 left-0 w-screen h-[492px] bg-darkBlue text-white flex flex-col items-center gap-10 py-6 z-50">
                        <div className="w-[85%] ended">
                            <div className="border-purple border rounded-full p-2" onClick={handleMenu}>
                                <img src="/svgs/close.svg" alt="close" />
                            </div>
                        </div>
                        <div className="gap-10 flex flex-col ml-10 w-full items-start">
                            <ul className="flex flex-col gap-3 text-normal font-medium">
                                <li className="hover:text-purple duration-300 transition-all cursor-pointer">Timeline</li>
                                <li className="hover:text-purple duration-300 transition-all cursor-pointer">Overview</li>
                                <li className="hover:text-purple duration-300 transition-all cursor-pointer">FAQs</li>
                                <li className="hover:text-purple duration-300 transition-all cursor-pointer">Contact</li>
                            </ul>
                            <div className="">
                                <CustomButton 
                                    onClick={() => {}}
                                    label="Register"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
 
export default Navbar;
