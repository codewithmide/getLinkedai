'use client';

import ButtonProps from "./buttonTypes";

const CustomButton: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
}) => {
    return (
        <button 
        onClick={onClick}
        disabled={disabled}
        className="disabled:opacity-70 disabled:cursor-not-allowed rounded-[4px] hover:opacity-80 transition-all duration-300 py-3 px-10 buttonStyle">
            {label}
        </button>
    );
}
 
export default CustomButton;