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
            <div className="w-[85%] center">
                <div className="w-[45%] center z-10">
                    <img src="/images/prizeCup.png" alt="cup" />
                </div>
                <div className="w-[55%] between gap-[12rem] flex-col">
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold clash text-lg w-[270px] leading-none">
                            Prizes and <span className="text-purple">Rewards</span>
                        </h1>
                        <p className="w-[350px] text-[14px]">
                            Highlight of the prizes or rewards for winners and for participants
                        </p>
                    </div>
                    <div className="between w-full relative">
                        <div className="flex-col center flex">
                            <img src="/images/silverMedal.png" alt="medal" className="absolute -top-16 object-cover" />
                            <div className="medal2 flex items-center justify-end flex-col">
                                <h2 className="font-bold leading-none text-[40px]">
                                    2nd
                                </h2>
                                <h3 className="text-lg font-semibold leading-none">
                                    Runner
                                </h3>
                                <h3 className="font-bold text-[32px] text-purple leading-[69.248px] mb-3">
                                    N300,000
                                </h3>
                            </div>
                        </div>
                        <div className="flex-col center flex">
                            <img src="/images/goldMedal.png" alt="medal" className="absolute -top-32 object-cover" />
                            <div className="medal1 flex items-center justify-end flex-col">
                                <h2 className="font-bold leading-none text-[40px]">
                                    1st
                                </h2>
                                <h3 className="text-lg font-semibold leading-none">
                                    Runner
                                </h3>
                                <h3 className="font-bold text-[32px] text-[#903AFF] leading-[69.248px] mb-3">
                                    N400,000
                                </h3>
                            </div>
                        </div>
                        <div className="flex-col center flex">
                            <img src="/images/bronzeMedal.png" alt="medal" className="absolute -top-16 object-cover" />
                            <div className="medal3 flex items-center justify-end flex-col">
                                <h2 className="font-bold leading-none text-[40px]">
                                    3rd
                                </h2>
                                <h3 className="text-lg font-semibold leading-none">
                                    Runner
                                </h3>
                                <h3 className="font-bold text-[32px] text-purple leading-[69.248px] mb-3">
                                    N150,000
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Flares and stars */}
            <div className="absolute right-0">
                <img src="/images/prizeFlare2.png" alt="flare" />
            </div>
            <div className="absolute w-[700px] left-10">
                <img src="/images/prizeFlare1.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute right-20 top-[40%]">
                <img src="/images/prizeStarTR.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute right-[20%] bottom-[5%]">
                <img src="/images/prizeStarBR.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute top-[30%]">
                <img src="/images/prizeStarTR.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute bottom-[20%] left-[15%]">
                <img src="/images/prizeStarBL.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute top-[5%] left-[15%]">
                <img src="/images/prizeStarTL.png" alt="purple flare" className="purpleFlare1" />
            </div>
        </div>
    );
}
 
export default Prizes;