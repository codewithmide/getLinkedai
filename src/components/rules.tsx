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
            <div className="w-[85%] between lg:flex-row flex-col-reverse py-10 z-10">
                {/* Left side of the screen */}
                <div className="lg:w-1/2 flex flex-col items-center lg:items-start relative">
                    <div className="absolute lg:right-[50%] right-0 top-4">
                        <img src="/images/rulesStar1.png" alt="rules" className="w-[12px] md:w-[26px]" />
                    </div>
                    <h1 className="font-bold clash md:text-lg text-[20px] w-[249px] lg:text-left text-center lg:w-[170px] md:w-[300px]">
                    Rules and <span className="text-purple">Guidelines</span>
                    </h1>
                    <p className="mt-6 font-medium lg:w-[535px] md:leading-[27.5px] md:text-[14px] sm:text-sm text-center lg:text-left">
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!
                    </p>
                </div>


                {/* Right side of the screen */}
                <div className="lg:w-1/2 ended relative">
                    <img src="/images/rules.png" alt="rules" className="w-[450px]" />
                    <div className="absolute lg:left-10 left-6 lg:bottom-24 bottom-[50%]">
                        <img src="/images/rulesStar2.png" alt="rules" className="w-[12px] md:w-[26px]" />
                    </div>
                </div>
            </div>

            {/* Flares */}
            <div className="absolute w-[700px] left-10 lg:flex hidden">
                <img src="/images/rulesFlare.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute right-0 -bottom-[30rem] lg:flex hidden">
                <img src="/images/rulesFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute left-0 -top-28 flex lg:hidden">
                <img src="/images/mobileRulesFlare1.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute right-0 flex lg:hidden">
                <img src="/images/mobileRulesFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
        </div>
    );
}
 
export default Rules;