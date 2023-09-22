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
        <div className="border-b w-full border-b-lightGray flex-col center gap-10 py-[6rem]" id="timeline">
            <div className="flex-col center gap-4">
                <h1 className="clash text-md md:text-lg font-bold">
                    Timeline
                </h1>
                <p className="md:text-[14px] text-sm md:w-[340px] w-[80%] md:leading-[24.136px] text-center">
                    Here is the breakdown of the time we anticipate using for the upcoming event.
                </p>
            </div>
            <div className="w-[95%] flex-col flex items-center relative">
                <div className="absolute left-[20%] lg:top-0 -top-6">
                    <img src="/images/timelineStar.png" alt="star" className="lg:w-[20px] w-[12px]" />
                </div>
                <div className="lg:w-full flex items-center justify-center lg:justify-between lg:gap-0 gap-3 w-[90%]">
                    <div className="flex-col items-end gap-[6rem] pt-[7rem] w-[42%] lg:flex hidden">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-[24px] text-purple text-right">
                                Hackathon Announcement
                            </h2>
                            <p className="text-right leading-[23.9px] text-[14px] xl:w-[415px]">
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
                    <div className="flex-col gap-3 lg:w-[15%] lg:flex items-center hidden">
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
                    <div className="items-start flex-col gap-[6rem] w-[42%] lg:flex hidden">
                        <div className="flex flex-col mt-[10rem]">
                            <h2 className="font-bold text-[24px] text-purple text-left">
                                November 18, 2023
                            </h2>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-[24px] text-purple text-left">
                                Teams Registration begins
                            </h2>
                            <p className="text-left leading-[23.9px] text-[14px] xl:w-[485px]">
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
                            <p className="text-left leading-[23.9px] text-[14px] xl:w-[481px]">
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
                            <p className="text-left leading-[23.9px] text-[14px] xl:w-[481px]">
                                Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:hidden flex h-full flex-col items-center gap-6 relative">
                        <div className="flex gap-3 h-[110px] w-full">
                            <div className="between flex-col">
                                <div className="w-[2px] h-[77px] timeline"></div>
                                <div className="w-[25px] h-[25px] text-center center rounded-full timeline text-sm">1</div>
                            </div>
                            <div className="between flex-col">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-purple font-bold text-[12px]">Hackathon Announcement</h3>
                                    <p className="text-[.7rem] ">
                                        The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register
                                    </p>
                                </div>
                                <p className="text-purple font-bold text-[12px] text-left w-full">
                                    November 18, 2023
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 h-[110px] w-full">
                            <div className="between flex-col">
                                <div className="w-[2px] h-[77px] timeline"></div>
                                <div className="w-[25px] h-[25px] text-center center rounded-full timeline text-sm">2</div>
                            </div>
                            <div className="between flex-col">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-purple font-bold text-[12px]">Teams Registration begins</h3>
                                    <p className="text-[.7rem] ">
                                        Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
                                    </p>
                                </div>
                                <p className="text-purple font-bold text-[12px] text-left w-full">
                                    November 18, 2023
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 h-[110px] w-full">
                            <div className="between flex-col">
                                <div className="w-[2px] h-[77px] timeline"></div>
                                <div className="w-[25px] h-[25px] text-center center rounded-full timeline text-sm">3</div>
                            </div>
                            <div className="between flex-col">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-purple font-bold text-[12px]">Teams Registration ends</h3>
                                    <p className="text-[.7rem] ">
                                        Interested Participants are no longer Allowed to register
                                    </p>
                                </div>
                                <div className="w-full between">
                                    <p className="text-purple font-bold text-[12px] text-left w-full">
                                        November 18, 2023
                                    </p>
                                    <img src="/images/timelineStar2.png" alt="star" className="w-[10px] mr-16" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 h-[110px] w-full">
                            <div className="between flex-col">
                                <div className="w-[2px] h-[77px] timeline"></div>
                                <div className="w-[25px] h-[25px] text-center center rounded-full timeline text-sm">4</div>
                            </div>
                            <div className="between flex-col">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-purple font-bold text-[12px]">Announcement of the accepted teams and ideas</h3>
                                    <p className="text-[.7rem] ">
                                        All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced
                                    </p>
                                </div>
                                <p className="text-purple font-bold text-[12px] text-left w-full">
                                    November 18, 2023
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 h-[110px] w-full">
                            <div className="between flex-col">
                                <div className="w-[2px] h-[77px] timeline"></div>
                                <div className="w-[25px] h-[25px] text-center center rounded-full timeline text-sm">5</div>
                            </div>
                            <div className="between flex-col">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-purple font-bold text-[12px]">Getlinked Hackathon 1.0 Offically Begins</h3>
                                    <p className="text-[.7rem] ">
                                        Accepted teams can now proceed to build their ground breaking skill driven solutions
                                    </p>
                                </div>
                                <p className="text-purple font-bold text-[12px] text-left w-full">
                                    November 18, 2023
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 h-[110px] w-full">
                            <div className="between flex-col">
                                <div className="w-[2px] h-[77px] timeline"></div>
                                <div className="w-[25px] h-[25px] text-center center rounded-full timeline text-sm">6</div>
                            </div>
                            <div className="between flex-col">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-purple font-bold text-[12px]">Demo Day</h3>
                                    <p className="text-[.7rem] ">
                                        Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day
                                    </p>
                                </div>
                                <p className="text-purple font-bold text-[12px] text-left w-full">
                                    November 18, 2023
                                </p>
                            </div>
                        </div>
                        <div className="absolute -left-3 -bottom-10 lg:hidden">
                            <img src="/images/mobileTimelineStar.png" alt="star" className="w-[12px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Timeline;
