/* eslint-disable @next/next/no-img-element */
/**
 * Footer section
 * 
 * Test Cases:
 * Footer must be rendered
 * Footer logo and paragraph must be present
 * Footer must include useful links
 * Footer must include contact information
 * Footer must include all stars
*/
"use client";

import Logo from "./Logo/logo";

const Footer:React.FC = () => {
    return (
        <div className="center pt-[4rem] pb-[2rem] w-full relative overflow-hidden">
            <div className="lg:w-[85%] w-[80%] flex-col center z-50 gap-8">
                <div className="w-full flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between ">
                    <div className="lg:w-[50%] flex flex-col gap-10">
                        <div>
                            <Logo />
                            <p className="text-[12px] leading-[20px] lg:w-[412px] mt-2">
                                Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing  young and talented individuals in the field of technology
                            </p>
                        </div>
                        <div className="text-[12px]">
                            Terms of Use <span className="text-purple font-bold">|</span> Privacy Policy
                        </div>
                    </div>

                    <div className="flex-col gap-6 flex">
                        <div className="flex flex-col gap-2 pt-3">
                            <h3 className="font-bold text-purple text-[14px] lg:text-normal">Useful links</h3>
                            <ul className="gap-2 flex flex-col text-[12px]">
                                <li className="hover:text-purple duration-300 transition-all cursor-pointer">Timeline</li>
                                <li className="hover:text-purple duration-300 transition-all cursor-pointer">Overview</li>
                                <li className="hover:text-purple duration-300 transition-all cursor-pointer">FAQs</li>
                                <li className="hover:text-purple duration-300 transition-all cursor-pointer">Contact</li>
                            </ul>  
                        </div>
                        <div className="flex items-start w-full gap-3">
                            <p className="text-purple text-[14px] my-auto">
                                Follow us
                            </p>
                            <div className="center gap-3">
                                <a href="" target="_blank" className="hover:text-purple">
                                    <img src="/svgs/instagram.svg" alt="instagram" />
                                </a>
                                <a href="https://twitter.com/getLinkedai" target="_blank" className="hover:text-purple">
                                    <img src="/svgs/x.svg" alt="x" />
                                </a>
                                <a href="" target="_blank" className="hover:text-purple">
                                    <img src="/svgs/facebook.svg" alt="facebook" />
                                </a>
                                <a href="https://ng.linkedin.com/company/getlinked-ai?trk=public_post_main-feed-card_reshare_feed-actor-name" target="_blank" className="hover:text-purple">
                                    <img src="/svgs/linkedin.svg" alt="linkedin" />
                                </a>
                            </div>
                        </div> 
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                        <h3 className="font-bold text-purple text-[14px] lg:text-normal">Contact us</h3>
                        <div className="flex gap-2">
                            <div>
                                <img src="/svgs/call.svg" alt="telephone" />
                            </div>
                            <a href="tel:23467981819" className="text-[12px]">
                                +234 679 81819
                            </a>
                            
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <img src="/svgs/location.svg" alt="location" />
                            </div>
                            <p className="text-[12px] w-[89px]">
                                27,Alara Street Yaba 100012 Lagos State
                            </p>
                        </div>
                    </div>
                </div>
                <div className="center text-[12px]">
                    All rights reserved. © getlinked Ltd.
                </div>
            </div>

            {/* Flares and stars */}
            <div className="absolute left-0 -top-[37rem]">
                <img src="/images/privacyFlare.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute left-10 top-20 hidden md:flex">
                <img src="/images/footerTL.png" alt="purple flare" className="purpleFlare1 xl:w-[30px] w-[12px]" />
            </div>
            <div className="absolute right-20 bottom-20">
                <img src="/images/footerBR.png" alt="purple flare" className="purpleFlare1 xl:w-[30px] w-[12px]" />
            </div>
            <div className="absolute bottom-20">
                <img src="/images/footerM.png" alt="purple flare" className="purpleFlare1 xl:w-[30px] w-[12px]" />
            </div>
            <div className="absolute right-[20rem] top-20">
                <img src="/images/footerTR.png" alt="purple flare" className="purpleFlare1 xl:w-[30px] w-[12px]" />
            </div>
        </div>
    );
}
 
export default Footer;