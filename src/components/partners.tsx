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
            <div className="flex-col center gap-4 z-50 w-[80%]">
                <h1 className="clash text-md md:text-lg font-bold text-center">
                    Partners and Sponsors
                </h1>
                <p className="md:text-[14px] text-sm md:w-[450px] md:leading-[24.136px] text-center">
                    Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
                </p>
            </div>
            <div className="md:w-[85%] w-[90%] partnerContainer py-[2rem] lg:py-[8rem] md:py-[4rem] center z-50">
                <div className="center flex-col md:gap-6 gap-3 w-[80%] ">
                    <div className="between w-full">
                        <div className="w-[25%] center">
                            <img src="/images/partner1.png" alt="partner" className="object-contain w-[40px] md:w-fit"/>
                        </div>
                        <div className="md:w-[4px] w-[2px] md:h-[110px] h-[30px] bg-purple"></div>
                        <div className="w-[25%] center">
                            <img src="/images/partner2.png" alt="partner" className="object-contain w-[40px] md:w-fit" />
                        </div>
                        <div className="md:w-[4px] w-[2px] md:h-[110px] h-[30px] bg-purple"></div>
                        <div className="w-[25%] center">
                            <img src="/images/partner3.png" alt="partner" className="object-contain w-[40px] md:w-fit" />
                        </div>
                    </div>
                    <div className="center md:gap-16 gap-4 w-full">
                        <div className="w-[30%] h-[2px] md:h-[4px] bg-purple"></div>
                        <div className="w-[33.5%] h-[2px] md:h-[4px] bg-purple"></div>
                        <div className="w-[30%] h-[2px] md:h-[4px] bg-purple"></div>
                    </div>
                    <div className="between w-full">
                        <div className="w-[25%] center">
                            <img src="/images/partner4.png" alt="partner" className="object-contain w-[40px] md:w-fit" />
                        </div>
                        <div className="md:w-[4px] w-[2px] md:h-[110px] h-[30px] bg-purple"></div>
                        <div className="w-[25%] center">
                            <img src="/images/partner5.png" alt="partner" className="object-contain w-[40px] md:w-fit" />
                        </div>
                        <div className="md:w-[4px] w-[2px] md:h-[110px] h-[30px] bg-purple"></div>
                        <div className="w-[25%] center">
                            <img src="/images/partner6.png" alt="partner" className="object-contain w-[40px] md:w-fit" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Flare */}
            <div className="absolute right-0 lg:-bottom-[25rem] -bottom-[20rem]">
                <img src="/images/partnerFlare.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute left-0 lg:top-0 -top-24">
                <img src="/images/partnerFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute top-[25%] left-[15%]">
                <img src="/images/prizeStarTL.png" alt="purple flare" className="purpleFlare1 lg:w-[30px] w-[12px]" />
            </div>
            <div className="absolute top-[40%] right-[42%]">
                <img src="/images/prizeStarTL.png" alt="purple flare" className="purpleFlare1 lg:w-[30px] w-[12px]" />
            </div>
            <div className="absolute bottom-[20%] right-[42%]">
                <img src="/images/prizeStarTR.png" alt="purple flare" className="purpleFlare1 lg:w-[30px] w-[12px]" />
            </div>
        </div>
    );
}
 
export default Partners;
