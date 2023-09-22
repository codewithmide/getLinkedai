/* eslint-disable @next/next/no-img-element */
/**
 * Judging section
 * 
 * Test Cases:
 * Judging image must be present
 * Judging heading must be present
 * Judging criterias must be present
 * Judging background flares must be present
*/
"use client";

import { Criterias } from "@/utils/criterias";
import CustomButton from "./Button/button";

const Judging:React.FC = () => {
    return (
        <div className="border-b w-full border-b-lightGray center relative overflow-hidden py-10">
            <div className="w-[85%] flex-col lg:flex-row between md:py-20 py-10 z-30">
                {/* Left side of the screen */}
                <div className="lg:w-1/2 lg:h-[80%] w-full h-full flex flex-col justify-center relative">
                    <div className="left-[8rem] lg:-top-28 top-0 absolute">
                        <img src="/images/judgeStar1.png" alt="star" className="lg:w-[30px] w-[10px]" />
                    </div>
                    <div className="md:h-[550px] sm:h-[275px] z-50 relative">
                        <div className="w-full h-[80%] absolute top-10" style={{ backgroundImage: "url('/images/judges.png')", backgroundPosition: "center center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
                        <img src="/svgs/judgeEllipse.svg" alt="ellipse" className="ml-20 lg:flex hidden"/>
                    </div>
                    <div className="absolute lg:right-[40%] lg:bottom-[40%] bottom-[45%] right-[45%]">
                        <img src="/images/rulesStar2.png" alt="rules" className="w-[12px] md:w-[26px]" />
                    </div>
                </div>

                {/* Right side of the screen */}
                <div className="lg:w-1/2 flex flex-col lg:gap-10 gap-6 lg:items-start items-center relative">
                    <h1 className="font-bold clash md:text-lg text-[20px] md:w-[270px] w-[167px] text-center lg:text-left">
                    Judging Criteria <span className="text-purple">Key attributes</span>
                    </h1>
                    <ul className="lg:w-[535px] flex flex-col lg:items-start items-center gap-5">
                        {Criterias.map((criteria, index) => (
                            <li key={index}>
                                <p className="lg:text-[14px] text-sm lg:text-left text-center"><span className="text-[#FF26B9] font-bold lg:text-[16px] text-sm">{criteria.title}</span> {criteria.description}</p>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <CustomButton onClick={() => {}} label="Read More"/>
                    </div>
                    <div className="absolute lg:-left-20 bottom-0 sm:right-0 sm:bottom-6">
                        <img src="/images/rulesStar2.png" alt="star" className="md:w-[30px] w-[12px]" />
                    </div>
                </div>
            </div>

            {/* Flares */}
            <div className="absolute w-[800px] left-0 -bottom-[10rem] lg:flex hidden">
                <img src="/images/judgeFlare1.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute right-0 -bottom-[30rem] lg:flex hidden">
                <img src="/images/judgeFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute right-0 -top-[30rem] lg:flex hidden">
                <img src="/images/rulesFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute left-0 top-[2rem] flex lg:hidden">
                <img src="/images/mobileJudgeFlare1.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute right-0 bottom-[2rem] flex lg:hidden">
                <img src="/images/mobileJudgeFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
        </div>
    );
}
 
export default Judging;
