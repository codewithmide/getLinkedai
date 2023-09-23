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

import Link from "next/link";
import CustomButton from "./Button/button";

const Hero:React.FC = () => {
    return (
        <div className="center flex-col h-full border-b border-b-lightGray w-full ">
            <div className="flex-col lg:hidden my-8 z-30">
                <h3 className="italic text-[15px] leading-none font-semibold text-right">
                    Igniting a Revolution in HR Innovation
                </h3>
                <div className="ended">
                    <img src="/svgs/heroUnderline.svg" alt="underline" className="w-[110px]" />
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between lg:pt-6">
                {/* Left part of the screen */}
                <div className="lg:h-[550px] flex flex-col lg:items-start items-center w-full xl:ml-20 lg:ml-12 z-30 lg:pt-3">
                    {/* First star */}
                    <div className="lg:pl-10 pl-16 w-full">
                        <img src="/images/heroStar1.png" alt="hero star 1" className="lg:w-[26px] md:w-[18px] w-[10px]"/>
                    </div>

                    {/* Heading, paragraph and cta button */}
                    <div className="flex-col center lg:items-start md:gap-3 lg:mt-16 mb-3">
                        <div className="lg:mb-16">
                            <div className="relative flex flex-col items-center lg:items-start xl:w-[597px] w-[269px] md:w-[409px]">
                                <div className="ended leading-none absolute xl:right-28 xl:bottom-12 right-10 md:bottom-10 bottom-6">
                                    <img src="/images/bulb.png" alt="bulb" className="lg:w-[53px] md:w-[35px] w-[18px]" />
                                </div>
                                <h1 className="leading-none font-black xl:text-xxl md:text-xl text-[1.6rem] text-center lg:text-left">
                                    getlinked Tech
                                </h1>
                            </div>
                            <div className="center lg:absolute">
                                <h1 className="leading-none font-black xl:text-xxl md:text-xl text-[1.6rem]">
                                    Hackathon <span className="text-purple">1.0</span>
                                </h1>
                                <img src="/images/chain.png" alt="chain" className="lg:w-[80px] md:w-[50px] w-[32px]" />
                                <img src="/images/heroLight.png" alt="star" className="lg:w-[70px] md:w-[40px] w-[22px]" />
                            </div>
                        </div>
                        <p className="lg:leading-[32.2px] font-semibold lg:text-[19.5px] text-[13px] xl:w-[522px] lg:w-full w-[280px] md:w-[380px] lg:text-left text-center mt-3 mb-8">
                            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                        </p>
                        <Link href="/register" className="">
                            <CustomButton 
                                onClick={() => {}}
                                label="Register"
                            />
                        </Link>
                    </div>

                    <div className="w-[522px] items-end hidden">
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
                <div className="flex-col flex z-30 xl:w-full lg:w-1/2">
                    <div className="flex flex-col gap-6 md:items-center">
                        <div className="flex-col mr-20 lg:flex hidden">
                            <h3 className="italic xl:text-lg lg:text-md leading-none font-semibold text-right">
                                Igniting a Revolution in HR Innovation
                            </h3>
                            <div className="ended">
                                <img src="/svgs/heroUnderline.svg" alt="underline" className="w-[203px]" />
                            </div>
                        </div>
                        <div className="relative md:w-[670px] w-full">
                            <img src="/images/man.png" alt="man" className="object-contain" />
                            <div className="absolute top-[0%] right-[10%]">
                                <img src="/images/glowBall.png" alt="blue bulb" />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* purple flares */}
                <div className="absolute -top-[6rem] left-[9rem] lg:flex hidden">
                    <img src="/images/PurpleFlare1.png" alt="purple flare" className="purpleFlare1 w-[800px]" />
                </div>
                <div className="absolute right-0 top-10 lg:flex hidden">
                    <img src="/images/PurpleFlare2.png" alt="purple flare" className="purpleFlare1" />
                </div>
                <div className="absolute left-0 top-10 lg:hidden">
                    <img src="/images/mobilePurpleFlare1.png" alt="purple flare" className="purpleFlare1" />
                </div>
            </div>
        </div>
    );
}
 
export default Hero;
