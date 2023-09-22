/* eslint-disable @next/next/no-img-element */
/**
 * FAQ section
 * 
 * Test Cases:
 * FAQ must be present
 * FAQ heading must be present
 * FAQ image must be present
 * FAQ background flares must be present
*/
"use client";

import FAQ from "./FAQ/page";

const Faq:React.FC = () => {
    return (
        <div className="border-b w-full border-b-lightGray center relative overflow-hidden min-h-screen lg:py-[5rem]">
            <div className="w-[85%] h-full between py-20 flex-col lg:flex-row lg:gap-0 gap-10">
                {/* Left side of the screen */}
                <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-6 relative">
                    <div className="absolute lg:-top-10 -top-4 left-0">
                        <img src="/images/judgeStar1.png" alt="star" className="lg:w-[30px] w-[15px]" />
                    </div>
                    <FAQ />
                </div>

                {/* Right side of the screen */}
                <div className="lg:w-1/2 h-full flex flex-col justify-center relative">
                    <img src="/images/thinking.png" alt="star" className="h-full object-contain" />
                    <div className="absolute right-10 lg:right-20 lg:-bottom-10 bottom-0">
                        <img src="/images/rulesStar2.png" alt="star" className="lg:w-[30px] w-[15px]"  />
                    </div>
                    <div className="absolute lg:top-[3rem] lg:right-[18rem] top-4 right-[50%]">
                        <img src="/images/footerM.png" alt="star" className="lg:w-[20px] w-[8px]"/>
                    </div>
                    <div className="absolute lg:top-[10rem] lg:left-[7rem] left-[3rem] top-16">
                        <img src="/images/footerM.png" alt="star" className="lg:w-[18px] w-[10px]" />
                    </div>
                    <div className="absolute left-0">
                        <img src="/images/faqStar.png" alt="star" className="lg:w-[26px] w-[15px]" />
                    </div>
                </div>
            </div>

            {/* Flares, icons and stars  */}
            <div className="absolute right-0 -top-[30rem]">
                <img src="/images/judgeFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
        </div>
    );
}
 
export default Faq;
