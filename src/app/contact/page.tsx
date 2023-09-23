"use client"

import ContactUs from "./contact";
import ContactNavbar from "./navbar";

const Contact = () => {
    return (
        <div className="flex flex-col center">
            <ContactNavbar />
            <ContactUs />
        </div>
    );
}
 
export default Contact;