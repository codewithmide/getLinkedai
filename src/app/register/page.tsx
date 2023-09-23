"use client"

import ContactNavbar from "../contact/navbar";
import RegisterComp from "./register";

const Register = () => {
    return (
        <div className="center flex-col">
            <ContactNavbar />
            <RegisterComp />
        </div>
    );
}
 
export default Register;
