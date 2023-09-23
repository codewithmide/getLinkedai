"use client"

import React, { useState } from "react"
import CustomInput from "@/components/InputField/page";
import CustomSelect from "@/components/selectField/page";
import { RegisterTypes } from "../types/registerTypes";
import { baseUrl } from "@/lib/request";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

/* eslint-disable @next/next/no-img-element */
const RegisterComp = () => {
    const [formSuccess, setFormSuccess] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSize, setSelectedSize] = useState("");    

    const initialValues: RegisterTypes = {
        teamName: "",
        phone: "",
        email: "",
        project: "",
        category: "",
        size: "",
        privacyPolicy: false,
    };
    
      const validationSchema = Yup.object().shape({
        teamName: Yup.string().required("Team name is required"),
        phone: Yup.string().required("Phone is required"),
        email: Yup.string().email("Please enter a valid email").required("This field is required"),
        project: Yup.string().required("Project topic is required"),
        category: Yup.string().required("Category is required"),
        size: Yup.string().required("Size is required"),
        privacyPolicy: Yup.boolean()
          .oneOf([true], "Terms and condition is Required!")
          .required("Terms and condition is Required!"),
    });
    
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            try {
              await registerRequest(values);
              toast.success("Registration successful");
              formik.resetForm();
            } catch (error) {
              console.error(error);
              handleRegistrationError(error);
            }
        },
    });

    const registerRequest = async (data: RegisterTypes) => {
        try {
          const response = await baseUrl.post("/hackathon/registration", data);
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
            toast.success("You have successfully registered");
          }
        } else {
          console.error("An unexpected error occurred:", error);
        }
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
        formik.setFieldValue("category", event.target.value); // Update Formik's value
      };
      
    const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSize(event.target.value);
        formik.setFieldValue("size", event.target.value); // Update Formik's value
    };

    const handleResetForm = () => {
        formik.resetForm();
        setTimeout(() => {
          toast.success("You have successfully registered");
        }, 1000);
      };
      

    console.log("formik.isValid:", formik.isValid);
    console.log("formik.errors:", formik.errors);


    return (
        <div className="w-full center relative overflow-hidden">
            <div className="w-[90%] md:my-16 my-10 center flex-col lg:flex-row z-10">
                <div className="lg:w-1/2 h-full relative">
                    <img src="/images/contact.png" alt="contact person" className="" />
                    {/* stars */}
                    <div className="absolute bottom-[20%] right-[10%]">
                        <img src="/images/register3.png" alt="purple flare" className="purpleFlare1 lg:w-[26px] w-[12px]" />
                    </div>
                    <div className="absolute bottom-[0%] left-[10%]">
                        <img src="/images/register4.png" alt="purple flare" className="purpleFlare1 lg:w-[26px] w-[12px]" />
                    </div>
                    <div className="absolute top-[0%] left-[8%]">
                        <img src="/images/register5.png" alt="purple flare" className="purpleFlare1 lg:w-[26px] w-[12px]" />
                    </div>
                </div>
                <div className="lg:w-1/2 ended relative">
                    <div className=" h-full contactContainer flex items-start flex-col lg:p-14 p-6 lg:w-[650px] w-full">
                        <h1 className="md:text-lg clash text-md font-bold text-purple">
                            Register
                        </h1>
                        <div className="flex text-[.7rem] end gap-2 md:text-[14px] md:gap-4 mt-6">
                            <p>
                                Be part of this movement!
                            </p>
                            <div className="center flex-col">
                                <div className="center gap-1 -mb-3">
                                    <img src="/images/ladyWalk.png" alt="walking" />
                                    <img src="/images/manWalk.png" alt="walking" />
                                </div>
                                <p className="leading-none text-purple">_ _ _ _ _ _ _ _</p>
                            </div>
                        </div>
                        <h2 className="md:text-[20px] text-normal font-semibold mt-5">
                            CREATE YOUR ACCOUNT
                        </h2>
                        <form onSubmit={formik.handleSubmit} className="flex flex-wrap gap-6 mt-6">
                            <div className="lg:w-[46%] w-full">
                                <CustomInput 
                                    label="Team's Name"
                                    type="text"
                                    id="teamName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.teamName}
                                    error={formik.errors.teamName}
                                    placeholder="Enter the name of your group" />
                            </div>
                            <div className="lg:w-[46%] w-full">
                                <CustomInput 
                                    label="Phone"
                                    type="tel"
                                    id="phone"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    error={formik.errors.phone}
                                    placeholder="Enter the name of your group" />
                            </div>
                            <div className="lg:w-[46%] w-full">
                                <CustomInput 
                                    label="Email"
                                    type="email"
                                    id="email"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    error={formik.errors.email}
                                    placeholder="Enter the name of your group" />
                            </div>
                            <div className="lg:w-[46%] w-full">
                                <CustomInput 
                                    label="Project Topic"
                                    type="text"
                                    id="project"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.project}
                                    error={formik.errors.project}
                                    placeholder="Enter the name of your group" />
                            </div>
                            <div className="lg:w-[46%] w-full">
                            <CustomSelect
                                topLabel={true}
                                label="Category"
                                id="category"
                                optionLabel="Select your category"
                                onChange={handleCategoryChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.category}
                                value={selectedCategory}
                                options={["Mobile", "Web", "Backend"]}
                                />
                            </div>
                            <div className="lg:w-[46%] w-full">
                            <CustomSelect
                                topLabel={true}
                                label="Group Size"
                                optionLabel="Select"
                                id="group"
                                onBlur={formik.handleBlur}
                                error={formik.errors.size}
                                onChange={handleSizeChange}
                                value={selectedSize}
                                options={["Option 1", "Option 2"]}
                            />
                            </div>
                            <p className="text-left w-full text-[#FF26B9] text-sm">
                                Please review your registration details before submitting
                            </p>
                            <div className="flex flex-col items-start justify-center">
                                <div className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="privacyPolicy"
                                    id="privacyPolicy"
                                    className="my-auto"
                                    checked={formik.values.privacyPolicy}
                                    onChange={formik.handleChange} // Use formik.handleChange to update the state
                                    />
                                    <p className="my-auto text-sm">
                                        I agreed with the event terms and conditions and privacy policy
                                    </p>
                                </div>
                                {formik.errors.privacyPolicy && (
                                <p className="text-left w-full text-red text-sm">
                                    {formik.errors.privacyPolicy}
                                </p>
                                )}

                            </div>
                            <button
                                type="submit" 
                                disabled={!formik.isValid || !formik.values.privacyPolicy} 
                                onClick={handleResetForm}
                                className="w-full registerBtn p-3 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer opacity-100">
                                    Register Now
                            </button>
                        </form>
                    </div>

                    {/* Stars */}
                    <div className="absolute top-0 right-[30%]">
                        <img src="/images/register1.png" alt="purple flare" className="purpleFlare1 lg:w-[26px] w-[12px]" />
                    </div>
                    <div className="absolute -bottom-2 right-[10%]">
                        <img src="/images/register2.png" alt="purple flare" className="purpleFlare1 w-[12px]" />
                    </div>
                </div>
            </div>

            {/* Flares */}
            <div className="absolute top-0 left-0 lg:flex hidden">
                <img src="/images/registerFlare.png" alt="purple flare" className="purpleFlare1" />
            </div>
            <div className="absolute bottom-0 right-0 lg:flex hidden">
                <img src="/images/registerFlare2.png" alt="purple flare" className="purpleFlare1" />
            </div>
        </div>
    );
}
 
export default RegisterComp;