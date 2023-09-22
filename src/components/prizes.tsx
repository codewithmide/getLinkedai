/* eslint-disable @next/next/no-img-element */
/**
 * Prizes section
 * 
 * Test Cases:
 * Prizes must be rendered
 * Prizes heading and paragraph must be present
 * Prizes must include all images and icons
*/
"use client"

const Prizes:React.FC = () => {
    return (
        <div className="center w-full relative border-b border-b-lightGray py-20 overflow-hidden">
            <div className="lg:w-[85%] w-[90%] center flex-col lg:flex-row z-20">
                <div className="flex lg:hidden items-center w-full flex-col gap-3">
                    <h1 className="font-bold clash text-md md:text-lg text-center w-[200px] md:w-full leading-none">
                        Prizes and <span className="text-purple">Rewards</span>
                    </h1>
                    <p className="w-[80%] text-[12px] md:text-[14px] text-center">
                        Highlight of the prizes or rewards for winners and for participants
                    </p>
                </div>
                <div className="lg:w-[45%] center z-10">
                    <img src="/images/prizeCup.png" alt="cup" />
                </div>
                <div className="lg:w-[55%] w-full between lg:gap-[12rem] lg:mt-0 mt-24 flex-col">
                    <div className="lg:flex hidden flex-col gap-3">
                        <h1 className="font-bold clash text-lg w-[270px] leading-none">
                            Prizes and <span className="text-purple">Rewards</span>
                        </h1>
                        <p className="w-[350px] text-[14px]">
                            Highlight of the prizes or rewards for winners and for participants
                        </p>
                    </div>
                    <div className="center gap-3 w-[90%] lg:w-full">
                        <div className="flex-col center flex relative w-[32%]">
                            <div className="absolute lg:-top-24 md:-top-[7rem] -top-10" >
                                <img src="/images/silverMedal.png" alt="medal" />
                            </div>
                            <div className="medal2 flex items-center justify-end flex-col lg:w-full md:w-[200px] w-full md:h-[290px] h-[125px] lg:p-0 p-2 md:p-4">
                                <h2 className="font-bold leading-none text-sm md:text-[40px]">
                                    2nd
                                </h2>
                                <h3 className="md:text-lg font-semibold text-sm leading-none">
                                    Runner
                                </h3>
                                <h3 className="font-bold md:text-[32px] lg:text-md text-[14px] text-purple lg:leading-[69.248px] leading-[30.296px] lg:mb-3">
                                    N300,000
                                </h3>
                            </div>
                        </div>
                        <div className="flex-col center flex relative w-[32%]">
                            <div className="absolute lx:-top-[9rem] md:-top-[7rem] -top-10">
                                <img src="/images/goldMedal.png" alt="medal" />
                            </div>
                            <div className="medal1 flex items-center justify-end flex-col lg:w-full md:w-[200px] w-full md:h-[320px] h-[147px] lg:p-0 p-2 md:p-4">
                                <h2 className="font-bold leading-none text-sm md:text-[40px]">
                                    1st
                                </h2>
                                <h3 className="md:text-lg font-semibold text-sm leading-none">
                                    Runner
                                </h3>
                                <h3 className="font-bold md:text-[32px] text-[14px] lg:text-md text-[#903AFF] lg:leading-[69.248px] leading-[30.296px] lg:mb-3">
                                    N400,000
                                </h3>
                            </div>
                        </div>
                        <div className="flex-col center flex relative w-[32%]">
                            <div className="absolute lg:-top-24 md:-top-[7rem] -top-10">
                                <img src="/images/bronzeMedal.png" alt="medal"  />
                            </div>
                            <div className="medal3 flex items-center justify-end flex-col lg:w-full md:w-[200px] w-full md:h-[290px] h-[125px] lg:p-0 p-2 md:p-4">
                                <h2 className="font-bold leading-none text-sm md:text-[40px]">
                                    3rd
                                </h2>
                                <h3 className="md:text-lg font-semibold text-sm leading-none mb-1">
                                    Runner
                                </h3>
                                <h3 className="font-bold md:text-[32px] text-[14px] lg:text-md text-purple lg:leading-[69.248px] leading-[30.296px] lg:mb-3">
                                    N150,000
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Flares and stars */}
            <div className="absolute right-0 lg:flex hidden">
                <img src="/images/prizeFlare2.png" alt="flare" />
            </div>
            <div className="absolute w-[700px] left-10 lg:flex hidden">
                <img src="/images/prizeFlare1.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute right-20 top-[40%]">
                <img src="/images/prizeStarTR.png" alt="purple flare" className="w-[16px] lg:w-[26px]" />
            </div>
            <div className="absolute right-[20%] bottom-[5%]">
                <img src="/images/prizeStarBR.png" alt="purple flare" className="w-[16px] lg:w-[26px]" />
            </div>
            <div className="absolute top-[30%]">
                <img src="/images/prizeStarTR.png" alt="purple flare" className="w-[16px] lg:w-[26px]" />
            </div>
            <div className="absolute bottom-[20%] left-[15%]">
                <img src="/images/prizeStarBL.png" alt="purple flare" className="w-[16px] lg:w-[26px]" />
            </div>
            <div className="absolute top-[5%] left-[15%]">
                <img src="/images/prizeStarTL.png" alt="purple flare" className="w-[16px] lg:w-[26px]" />
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
 
export default Prizes;