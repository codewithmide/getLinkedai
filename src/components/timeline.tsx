/* eslint-disable @next/next/no-img-element */
/**
 * Timeline section
 * 
 * Test Cases:
 * Timeline must be rendered
 * Timeline heading and paragraph must be present
*/
"use client";

const Timeline:React.FC = () => {
    return (
        <div className="border-b w-full border-b-lightGray flex-col center gap-10 py-[6rem]">
            <div className="flex-col center gap-4">
                <h1 className="clash text-lg font-bold">
                    Timeline
                </h1>
                <p className="text-[14px] w-[340px] leading-[24.136px] text-center">
                    Here is the breakdown of the time we anticipate using for the upcoming event.
                </p>
            </div>
            <div className="w-[95%] flex-col flex">
                <div className="ml-20">
                    <img src="/images/timelineStar.png" alt="star" className="w-[30px]" />
                </div>
                <div className="w-full between">
                    <div className="end flex-col gap-[6rem] pt-[7rem] w-[42%]">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-[24px] text-purple text-right">
                                Hackathon Announcement
                            </h2>
                            <p className="text-right leading-[23.9px] text-[14px] w-[415px]">
                                The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="font-bold text-[24px] text-purple text-right">
                                November 18, 2023
                            </h2>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-[24px] text-purple text-right">
                                Teams Registration ends
                            </h2>
                            <p className="text-right leading-[23.9px] text-[14px] w-[388px]">
                                Interested Participants are no longer Allowed to register
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="font-bold text-[24px] text-purple text-right">
                                November 18, 2023
                            </h2>
                        </div>

                        <div className="flex flex-col gap-2 end">
                            <h2 className="font-bold text-[24px] text-purple text-right">
                                Getlinked Hackathon 1.0 Offically Begins
                            </h2>
                            <p className="text-right leading-[23.9px] text-[14px] w-[386px]">
                                Accepted teams can now proceed to build their ground breaking skill driven solutions
                            </p>
                        </div>

                        <div className="between w-[90%]">
                            <img src="/images/timelineStar3.png" alt="star" />
                            <h2 className="font-bold text-[24px] text-purple text-left">
                                November 18, 2023
                            </h2>
                        </div>
                    </div>
                    <div className="center flex-col gap-3 w-[15%]">
                        <div className="w-[6px] h-[120px] timeline"></div>
                        <div className="timeline w-[53px] h-[53px] center font-bold rounded-full">1</div>
                        <div className="w-[6px] h-[80px] timeline"></div>
                        <div className="timeline w-[53px] h-[53px] center font-bold rounded-full">2</div>
                        <div className="w-[6px] h-[80px] timeline"></div>
                        <div className="timeline w-[53px] h-[53px] center font-bold rounded-full">3</div>
                        <div className="w-[6px] h-[80px] timeline"></div>
                        <div className="timeline w-[53px] h-[53px] center font-bold rounded-full">4</div>
                        <div className="w-[6px] h-[80px] timeline"></div>
                        <div className="timeline w-[53px] h-[53px] center font-bold rounded-full">5</div>
                        <div className="w-[6px] h-[80px] timeline"></div>
                        <div className="timeline w-[53px] h-[53px] center font-bold rounded-full">6</div>
                    </div>
                    <div className="start flex-col gap-[6rem] w-[42%]">
                        <div className="flex flex-col mt-[10rem]">
                            <h2 className="font-bold text-[24px] text-purple text-left">
                                November 18, 2023
                            </h2>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-[24px] text-purple text-left">
                                Teams Registration begins
                            </h2>
                            <p className="text-left leading-[23.9px] text-[14px] w-[485px]">
                                Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
                            </p>
                        </div>

                        <div className="between w-[70%]">
                            <h2 className="font-bold text-[24px] text-purple text-left">
                                November 18, 2023
                            </h2>
                            <img src="/images/timelineStar2.png" alt="star" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-[20px] text-purple text-left">
                                Announcement of the accepted teams and ideas
                            </h2>
                            <p className="text-left leading-[23.9px] text-[14px] w-[481px]">
                                All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="font-bold text-[24px] text-purple text-left">
                                November 18, 2023
                            </h2>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-[24px] text-purple text-left">
                                Demo day
                            </h2>
                            <p className="text-left leading-[23.9px] text-[14px] w-[481px]">
                                Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Timeline;
