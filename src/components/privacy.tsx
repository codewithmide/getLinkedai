/* eslint-disable @next/next/no-img-element */
/**
 * Privacy section
 * 
 * Test Cases:
 * Privacy must be rendered
 * Privacy heading and paragraph must be present
 * Privacy must include all images and icons
*/
"use client"

import CustomButton from "./Button/button";

const Privacy:React.FC = () => {
    return (
        <div className="center w-full relative py-4 lg:py-[6rem] overflow-hidden">
            <div className="w-[85%] between flex-col lg:flex-row z-50">
                <div className="lg:w-[48%] center lg:p-10">
                    <div className="w-full flex flex-col">
                        <div className="flex flex-col items-center lg:items-start gap-3 mt-10">
                            <h1 className="font-bold clash text-md md:text-lg lg:w-[270px] w-[188px] md:w-full text-center lg:text-left leading-none">
                            Privacy Policy and <span className="text-purple">Terms</span>
                            </h1>
                            <p className="text-sm update text-center lg:text-left">
                                Last updated on September 12, 2023
                            </p>
                            <p className="md:w-[438px] md:leading-[26px] text-center lg:text-left text-sm lg:mt-10 mt-4">
                                Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
                            </p>
                        </div>
                        <div className="privacy center flex-col lg:px-16 px-3 text-center lg:text-left py-10 mt-10 w-full">
                            <p className="text-[12px] md:leading-[30.296px] leading-[25px]">
                                At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
                            </p>
                            <div className="start flex-col w-full my-10">
                                <h3 className="font-bold text-purple leading-[34px] text-[13px] md:text-normal">
                                    Licensing Policy
                                </h3>
                                <p className="text-left text-sm font-semibold">
                                    Here are terms of our Standard License:
                                </p>
                            </div>
                            <div className="w-full between md:gap-6 gap-3">
                                <div className="flex items-start justify-start h-full">
                                    <img src="/svgs/listTerms.svg" alt="list" className=""/>
                                </div>
                                <div className="text-sm w-full text-left">
                                    The Standard License grants you a non-exclusive right to navigate and register for our event
                                </div>
                            </div>
                            <div className="w-full between md:gap-6 gap-3 mt-6">
                                <div className="flex items-start justify-start h-full">
                                    <img src="/svgs/listTerms.svg" alt="list" className=""/>
                                </div>
                                <div className="text-sm w-full text-left">
                                    You are licensed to use the item available at any free source sites, for your project developement
                                </div>
                            </div>
                            <div className="mt-10">
                                <CustomButton onClick={() => {}} label="Read More"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[48%] center lg:mt-[10rem] mt-10">
                    <img src="/images/lock.png" alt="lock" />
                </div>
            </div>

            {/* Flares, stars and svg */}
            <div className="absolute right-0 lg:-top-[35rem] -top-[20rem]">
                <img src="/images/partnerFlare.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute left-0 lg:-bottom-[30rem] bottom-[50%]">
                <img src="/images/privacyFlare.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute bottom-[20%] left-[5%]">
                <img src="/images/prizeStarTL.png" alt="purple flare" className="purpleFlare1 xl:w-[30px] w-[12px]" />
            </div>
            <div className="absolute left-[35%] top-[13%]">
                <img src="/images/privacyStarTL.png" alt="purple flare" className="purpleFlare1 xl:w-[30px] w-[12px]" />
            </div>
            <div className="absolute top-[20%]">
                <img src="/images/privacyStarM3.png" alt="purple flare" className="purpleFlare1 xl:w-[30px] w-[12px]" />
            </div>
            <div className="absolute top-[20%] right-[15rem]">
                <img src="/images/privacyStaTR.png" alt="purple flare" className="purpleFlare1 xl:w-[30px] w-[12px]" />
            </div>
            <div className="absolute bottom-[27%] right-[5%]">
                <img src="/images/privacyStarLR.png" alt="purple flare" className="purpleFlare1 xl:w-[30px] w-[12px]" />
            </div>
            <div className="absolute bottom-[30%] right-[34rem]">
                <img src="/images/privacyStarM.png" alt="purple flare" className="purpleFlare1 xl:w-[30px] w-[12px]" />
            </div>
            <div className="absolute bottom-[26rem] right-[30rem]">
                <img src="/images/privacyStarM2.png" alt="purple flare" className="purpleFlare1 xl:w-[30px] w-[12px]" />
            </div>
        </div>
    );
}
 
export default Privacy;
