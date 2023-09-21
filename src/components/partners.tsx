/* eslint-disable @next/next/no-img-element */
/**
 * Partners section
 * 
 * Test Cases:
 * Partners must be rendered
 * Partners heading and paragraph must be present
 * Partners must include all images and icons
*/
"use client"

const Partners:React.FC = () => {
    return (
        <div className="border-b w-full border-b-lightGray flex-col center gap-20 py-[6rem] relative overflow-hidden">
            <div className="flex-col center gap-4 z-50">
                <h1 className="clash text-lg font-bold">
                    Partners and Sponsors
                </h1>
                <p className="text-[14px] w-[450px] leading-[24.136px] text-center">
                    Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
                </p>
            </div>
            <div className="w-[85%] partnerContainer py-[8rem] center z-50">
                <div className="center flex-col gap-6 w-[80%] ">
                    <div className="between w-full">
                        <div className="w-[25%] center">
                            <img src="/images/partner1.png" alt="partner" />
                        </div>
                        <div className="w-[4px] h-[110px] bg-purple"></div>
                        <div className="w-[25%] center">
                            <img src="/images/partner2.png" alt="partner" />
                        </div>
                        <div className="w-[4px] h-[110px] bg-purple"></div>
                        <div className="w-[25%] center">
                            <img src="/images/partner3.png" alt="partner" />
                        </div>
                    </div>
                    <div className="center gap-16 w-full">
                        <div className="w-[30%] h-[4px] bg-purple"></div>
                        <div className="w-[33.5%] h-[4px] bg-purple"></div>
                        <div className="w-[30%] h-[4px] bg-purple"></div>
                    </div>
                    <div className="between w-full">
                        <div className="w-[25%] center">
                            <img src="/images/partner4.png" alt="partner" />
                        </div>
                        <div className="w-[4px] h-[110px] bg-purple"></div>
                        <div className="w-[25%] center">
                            <img src="/images/partner5.png" alt="partner" />
                        </div>
                        <div className="w-[4px] h-[110px] bg-purple"></div>
                        <div className="w-[25%] center">
                            <img src="/images/partner6.png" alt="partner" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Flare */}
            <div className="absolute right-0 -bottom-[25rem]">
                <img src="/images/partnerFlare.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute left-0">
                <img src="/images/partnerFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute top-[25%] left-[15%]">
                <img src="/images/prizeStarTL.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute top-[40%] right-[42%]">
                <img src="/images/prizeStarTL.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute bottom-[20%] right-[42%]">
                <img src="/images/prizeStarTR.png" alt="purple flare" className="purpleFlare1" />
            </div>
        </div>
    );
}
 
export default Partners;
