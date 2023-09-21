/* eslint-disable @next/next/no-img-element */
/**
 * Introduction section
 * 
 * Test Cases:
 * Introduction image must be present
 * Introduction heading must be present
 * Introduction paragraph must be present
*/
"use client"

const Introduction:React.FC = () => {
    return (
        <div className="w-full border-b border-b-lightGray center">
            <div className="w-[85%] between py-10">
                {/* Left side of the screen */}
                <div className="center w-1/2 h-[477px]">
                    <div className="-mt-[10rem] -ml-10">
                        <img src="/images/introStar1.png" alt="star" className="w-[21px]"  />
                    </div>
                    <div className="w-[450px] h-full center" style={{ backgroundImage: "url('/images/idea.png')", backgroundPosition: "center center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                        <h2 className="w-[140px] text-center text-[24px] leading-[29.4px] font-bold">
                            The Big Idea!
                        </h2>
                    </div>
                    <div className="ended h-full">
                        <img src="/images/arrow.png" alt="star" className="w-[50px]"  />
                    </div>
                </div>

                {/* Right side of the screen */}
                <div className="w-1/2">
                    <div className="between">
                        <h1 className="font-bold clash text-lg w-[390px]">
                            Introduction to getlinked <span className="text-purple">tech Hackathon 1.0</span>
                        </h1>
                        <div className="mr-10">
                            <img src="/images/introStar2.png" alt="star" className="w-[30px]" />
                        </div>
                    </div>
                    <p className="mt-6 font-medium w-[535px] leading-[27.5px] text-[14px]">
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Introduction;