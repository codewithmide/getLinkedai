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
            <div className="w-[85%] between lg:flex-row flex-col py-10 sm:gap-10">
                {/* Left side of the screen */}
                <div className="center lg:w-1/2 w-full lg:h-[477px] sm:h-[257px] relative">
                    <div className="absolute md:top-[10rem] sm:top-10 md:left-10 sm:left-5">
                        <img src="/images/introStar1.png" alt="star" className="md:w-[21px] w-[10px]"  />
                    </div>
                    <div className="w-[450px] h-full center" style={{ backgroundImage: "url('/images/idea.png')", backgroundPosition: "center center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                        <h2 className="lg:w-[140px] md:w-[100px] w-[78px] text-center lg:text-[24px] lg:leading-[29.4px] font-bold">
                            The Big Idea!
                        </h2>
                    </div>
                    <div className="ended h-full absolute bottom-0 right-0">
                        <img src="/images/arrow.png" alt="star" className="md:w-[50px] w-[20px]"  />
                    </div>
                </div>

                {/* Right side of the screen */}
                <div className="lg:w-1/2 w-full">
                    <div className="center relative">
                        <h1 className="font-bold clash md:text-lg text-[20px] md:w-[390px] w-[249px] text-center">
                            Introduction to getlinked <span className="text-purple">tech Hackathon 1.0</span>
                        </h1>
                        <div className="absolute -right-3">
                            <img src="/images/introStar2.png" alt="star" className="md:w-[30px] w-[10px]" />
                        </div>
                    </div>
                    <p className="mt-6 font-medium lg:w-[535px] md:leading-[27.5px] md:text-[14px] sm:text-sm text-center lg:text-left">
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Introduction;