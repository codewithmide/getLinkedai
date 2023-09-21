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

import CustomButton from "./Button/button";

import Logo from "./Logo/logo";

const Navbar:React.FC = () => {
    return (
        <nav className="w-full center py-6 border-b border-b-lightGray">
            <div className="w-[90%] between z-50">
                <Logo />
                <div className="flex gap-[5rem]">
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
            </div>
        </nav>
    );
}
 
export default Navbar;
