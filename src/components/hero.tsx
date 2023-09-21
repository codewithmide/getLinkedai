/* eslint-disable @next/next/no-img-element */
/**
 * Hero section
 * 
 * Test Cases:
 * All images, svgs and icons must be present
 * All background flares must be present
 * There must be a heading, a paragraph and a call to action button
 * There must be a counter
*/

"use client"

import CustomButton from "./Button/button";

const Hero:React.FC = () => {
    return (
        <div className="center h-full border-b border-b-lightGray w-full ">
            <div className="w-full flex justify-between pt-6">
                {/* Left part of the screen */}
                <div className="h-[550px] flex flex-col ml-20 z-50 pt-3">
                    {/* First star */}
                    <div className="pl-10">
                        <img src="/images/heroStar1.png" alt="hero star 1" className="p"/>
                    </div>

                    {/* Heading, paragraph and cta button */}
                    <div className="flex flex-col gap-6 w-[597px] mt-16 mb-3">
                        <div className="mb-16">
                            <div className="">
                                <div className="ended leading-none relative">
                                    <img src="/images/bulb.png" alt="bulb" className="absolute right-28 -bottom-3" />
                                </div>
                                <h1 className="leading-none font-black text-xxl ">
                                    getlinked Tech
                                </h1>
                            </div>
                            <div className="center absolute">
                                <h1 className="leading-none font-black text-xxl">
                                    Hackathon <span className="text-purple">1.0</span>
                                </h1>
                                <img src="/images/chain.png" alt="chain" />
                                <img src="/images/heroLight.png" alt="star" />
                            </div>
                        </div>
                        <p className="leading-[32.2px] font-semibold text-[19.5px] w-[522px]">
                            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                        </p>
                        <div>
                            <CustomButton onClick={() => {}} label="Register" />
                        </div>
                    </div>

                    <div className="w-[522px] ended">
                        <img src="/images/heroStar2.png" alt="star" />
                    </div>

                    {/* Counter */}
                    <div className="flex unica gap-4 leading-[85.12px]">
                        <div className="flex">
                            <h2 className="text-xxl">00<span className="text-normal">H</span></h2>
                        </div>
                        <div className="flex">
                            <h2 className="text-xxl">00<span className="text-normal">M</span></h2>
                        </div>
                        <div className="flex">
                            <h2 className="text-xxl">00<span className="text-normal">S</span></h2>
                        </div>
                    </div>
                </div>

                {/* Right part of the screen */}
                <div className="flex-col flex z-50">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col mr-20">
                            <h3 className="italic text-lg leading-none font-semibold text-right">
                                Igniting a Revolution in HR Innovation
                            </h3>
                            <div className="ended">
                                <img src="/svgs/heroUnderline.svg" alt="underline" className="w-[203px]" />
                            </div>
                        </div>
                        <div className="relative w-[670px]">
                            <img src="/images/man.png" alt="man" className="object-contain" />
                            <div className="absolute top-[0%] right-[10%]">
                                <img src="/images/glowBall.png" alt="blue bulb" />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* purple flares */}
                <div className="absolute -top-[6rem] left-[9rem] ">
                    <img src="/images/PurpleFlare1.png" alt="purple flare" className="purpleFlare1 w-[800px]" />
                </div>
                <div className="absolute right-0 top-10">
                    <img src="/images/PurpleFlare2.png" alt="purple flare" className="purpleFlare1" />
                </div>
            </div>
        </div>
    );
}
 
export default Hero;
