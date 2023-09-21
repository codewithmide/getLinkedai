/* eslint-disable @next/next/no-img-element */
/**
 * Rules section
 * 
 * Test Cases:
 * Rules image must be present
 * Rules heading must be present
 * Rules paragraph must be present
 * Rules background flares must be present
*/
"use client"

const Rules:React.FC = () => {
    return (
        <div className="border-b w-full border-b-lightGray center relative overflow-hidden">
            <div className="w-[85%] between py-10 z-10">
                {/* Left side of the screen */}
                <div className="w-1/2">
                    <div className="center">
                        <img src="/images/rulesStar1.png" alt="rules" className="w-[]" />
                    </div>
                    <h1 className="font-bold clash text-lg w-[170px]">
                    Rules and <span className="text-purple">Guidelines</span>
                    </h1>
                    <p className="mt-6 font-medium w-[535px] leading-[27.5px] text-[14px]">
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!
                    </p>
                    <div className="ended">
                        <img src="/images/rulesStar2.png" alt="rules" className="w-[]" />
                    </div>
                </div>


                {/* Right side of the screen */}
                <div className="w-1/2 ended">
                    <img src="/images/rules.png" alt="rules" className="w-[450px]" />
                </div>
            </div>

            {/* Flares */}
            <div className="absolute w-[700px] left-10">
                <img src="/images/rulesFlare.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute right-0 -bottom-[30rem]">
                <img src="/images/rulesFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
        </div>
    );
}
 
export default Rules;