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
            <div className="w-[85%] h-full between py-20 flex-col lg:flex-row lg:gap-0 gap-32">
                {/* Left side of the screen */}
                <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
                    <div className="mb-1">
                        <img src="/images/judgeStar1.png" alt="star" />
                    </div>
                    <FAQ />
                </div>

                {/* Right side of the screen */}
                <div className="lg:w-1/2 h-full flex flex-col justify-center relative">
                    <div className="flex gap-[5rem] absolute -top-20 left-16">
                        <div className="mt-16">
                            <img src="/images/question1.png" alt="question" />
                        </div>
                        <div>
                            <img src="/images/question2.png" alt="question" />
                        </div>
                        <div className="mt-12">
                            <img src="/images/question3.png" alt="question" />
                        </div>
                    </div>
                    <img src="/images/thinking.png" alt="star" className="h-full object-contain" />
                    <div className="ended mr-20 ">
                        <img src="/images/rulesStar2.png" alt="star" className="w-[30px]"  />
                    </div>
                </div>
            </div>

            {/* Flares, icons and stars  */}
            <div className="absolute right-0 -top-[30rem]">
                <img src="/images/judgeFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute top-[8rem] right-[24rem]">
                <img src="/images/footerM.png" alt="star" />
            </div>
            <div className="absolute top-[18rem] right-[35rem]">
                <img src="/images/footerM.png" alt="star" />
            </div>
        </div>
    );
}
 
export default Faq;
