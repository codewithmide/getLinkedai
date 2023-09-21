/**
 * Custom Logo
 * 
 * Test Cases:
 * The text "getlinked" is present
 * The text "linked" is purple
 * Links to the correct destination
*/
"use client";

import Link from "next/link";

const Logo:React.FC = () => {
    return (
        <Link href="/">
             <div className="font-bold clash text-[36px] cursor-pointer">
            get<span className="text-purple">linked</span>
            </div>
        </Link>
    );
}
 
export default Logo;
