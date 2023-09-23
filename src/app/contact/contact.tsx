/* eslint-disable @next/next/no-img-element */
const ContactUs = () => {
    return (
        <div className="w-full mt-10 bg-center">
            <div className="lg:w-1/2 center h-[500px]">
                <div className="flex items-start justify-center flex-col gap-3">
                    <h1 className="text-purple text-lg font-bold">
                        Get in touch
                    </h1>
                    <p className="w-[98px]">
                        Contact Information
                    </p>
                    <p className="w-[150px]">
                        27,Alara Street Yaba 100012 Lagos State
                    </p>
                    <p>
                        Call Us : 07067981819
                    </p>
                    <p>
                        We are open from Monday-Friday 08:00am - 05:00pm
                    </p>
                    <div className="flex flex-col">
                        <p>
                            Share on
                        </p>
                        <div className="center gap-3">
                            <a href="" target="_blank" className="hover:text-purple">
                                <img src="/svgs/instagram.svg" alt="instagram" />
                            </a>
                            <a href="https://twitter.com/getLinkedai" target="_blank" className="hover:text-purple">
                                <img src="/svgs/x.svg" alt="x" />
                            </a>
                            <a href="" target="_blank" className="hover:text-purple">
                                <img src="/svgs/facebook.svg" alt="facebook" />
                            </a>
                            <a href="https://ng.linkedin.com/company/getlinked-ai?trk=public_post_main-feed-card_reshare_feed-actor-name" target="_blank" className="hover:text-purple">
                                <img src="/svgs/linkedin.svg" alt="linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 center h-[500px]">
                <div className="w-[90%]">

                </div>
            </div>
        </div>
    );
}
 
export default ContactUs;