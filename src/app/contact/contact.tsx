/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from "react"
import CustomInput from "@/components/InputField/page";
import { baseUrl } from "@/lib/request";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { ContactTypes } from "../types/contactTypes";

const ContactUs = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSize, setSelectedSize] = useState("");    

    const initialValues: ContactTypes = {
        name: "",
        email: "",
        textArea: "",
    };
    
      const validationSchema = Yup.object().shape({
        name: Yup.string().required("First name is required"),
        textArea: Yup.string().required("Message is required"),
        email: Yup.string().email("Please enter a valid email").required("This field is required"),
    });
    
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            try {
              await registerRequest(values);
              if (formik.submitCount > 0) {
                toast.success("Success");
              }
              formik.resetForm();
            } catch (error) {
              console.error(error);
              handleRegistrationError(error);
            }
        },        
    });

    const registerRequest = async (data: ContactTypes) => {
        try {
          const response = await baseUrl.post("/hackathon/contact-form", data);
          console.log(response.data);
        } catch (error) {
          throw error;
        }
    };
    
    const handleRegistrationError = (error: unknown) => {
        if (error instanceof Error) {
          if (error.message === "Network Error") {
            toast.error(error.message);
          } else {
            toast.success("Message sent successfully");
          }
        } else {
          console.error("An unexpected error occurred:", error);
        }
    };

    const handleResetForm = () => {
        formik.resetForm();
        setTimeout(() => {
          toast.success("Message sent successfully");
        }, 1000);
    };

    return (
        <div className="w-full lg:py-20 h-full bg-center py-10 center relative overflow-hidden">
            <div className="lg:w-[90%] flex-col-reverse lg:flex-row gap-10 lg:gap-0 between z-10">
                <div className="lg:w-1/2 center relative">
                    <div className="flex items-start lg:pl-10 flex-col gap-6">
                        <h1 className="text-purple text-md lg:text-lg font-bold">
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
                        <div>
                            <p>
                                We are open from Monday-Friday
                            </p>
                            <p>
                                08:00am - 05:00pm
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#D434FE] font-bold">
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
                    {/* Star */}
                    <div className="absolute top-0 left-[10%] lg:flex hidden">
                        <img src="/images/contactStar.png" alt="purple flare" className="purpleFlare1 lg:w-[26px] w-[12px]" />
                    </div>
                </div>
                <div className="lg:w-1/2 w-full center lg:h-[600px] relative">
                    <div className="lg:w-[90%] containerCon w-full center h-full">
                        <div className="h-full center flex flex-col lg:p-14 p-6 w-full">
                            <h1 className="md:text-md clash text-normal text-left font-bold w-full text-purple">
                                Questions or need assistance?
                            </h1>
                            <h1 className="md:text-md clash text-normal font-bold text-left w-full text-purple">
                                Let us know  about it!
                            </h1>
                            <p className="lg:hidden text-left text-sm mt-6">
                                Email us below to any question related to our event
                            </p>
                            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 mt-6 w-full">
                                <div className="w-full">
                                    <CustomInput 
                                        type="text"
                                        id="name"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        error={formik.errors.name}
                                        placeholder="First Name" />
                                </div>
                                <div className="w-full">
                                    <CustomInput 
                                        type="email"
                                        id="email"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        error={formik.errors.email}
                                        placeholder="Mail" />
                                </div>
                                <textarea
                                    name="textArea"
                                    id="textArea"
                                    className="w-full h-[119px] area outline-none p-3"
                                    placeholder="Message"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.textArea}
                                ></textarea>
                                {formik.touched.textArea && formik.errors.textArea && (
                                    <p className="text-red text-sm -mt-3">{formik.errors.textArea}</p>
                                )}
                                <button
                                    type="submit" 
                                    disabled={!formik.isValid} 
                                    onClick={handleResetForm}
                                    className=" registerBtn p-3 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer opacity-100">
                                        Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* stars */}
                    <div className="absolute -top-[10%] right-[15%]">
                        <img src="/images/contactStar3.png" alt="purple flare" className="purpleFlare1 lg:w-[26px] w-[12px]" />
                    </div>
                    <div className="absolute -bottom-2 right-[5%]">
                        <img src="/images/contactStar1.png" alt="purple flare" className="purpleFlare1 lg:w-[24px] w-[12px]" />
                    </div>
                    <div className="absolute bottom-[25%] -left-[10%]">
                        <img src="/images/contactStar2.png" alt="purple flare" className="purpleFlare1 lg:w-[24px] w-[12px]" />
                    </div>
                </div>
            </div>

            {/* Flares */}
            <div className="absolute top-0 left-0 lg:flex hidden">
                <img src="/images/contact1.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute bottom-0 right-0 lg:flex hidden">
                <img src="/images/registerFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
        </div>
    );
}
 
export default ContactUs;