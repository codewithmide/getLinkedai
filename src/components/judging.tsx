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
        <div className="border-b w-full border-b-lightGray center relative overflow-hidden">
            <div className="w-[85%] between py-20">
                {/* Left side of the screen */}
                <div className="w-1/2 h-[80%] flex flex-col justify-center ">
                    <div className="ml-[8rem] mb-10">
                        <img src="/images/judgeStar1.png" alt="star" />
                    </div>
                    <div className="h-[550px] z-50 relative">
                        <div className="w-full h-[80%] absolute top-10" style={{ backgroundImage: "url('/images/judges.png')", backgroundPosition: "center center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
                        <img src="/svgs/judgeEllipse.svg" alt="ellipse" className="ml-20"/>
                    </div>
                    <div className="ended mr-20 ">
                        <img src="/images/rulesStar2.png" alt="star" className="w-[30px]"  />
                    </div>
                </div>

                {/* Right side of the screen */}
                <div className="w-1/2 flex flex-col gap-10">
                    <h1 className="font-bold clash text-lg w-[270px]">
                    Judging Criteria <span className="text-purple">Key attributes</span>
                    </h1>
                    <ul className="w-[535px] flex flex-col gap-5">
                        {Criterias.map((criteria, index) => (
                            <li key={index}>
                                <p className="text-[14px]"><span className="text-[#FF26B9] font-bold text-[16px]">{criteria.title}</span> {criteria.description}</p>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <CustomButton onClick={() => {}} label="Read More"/>
                    </div>
                </div>
            </div>

            {/* Flares */}
            <div className="absolute w-[800px] left-0 -bottom-[10rem]">
                <img src="/images/judgeFlare1.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute right-0 -bottom-[30rem]">
                <img src="/images/judgeFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute right-0 -top-[30rem]">
                <img src="/images/rulesFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
        </div>
    );
}
 
export default Judging;
