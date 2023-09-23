/* eslint-disable react/display-name */
/**
 * Custom Input field
 * 
 * Test Cases
 * Input field must render
 * Input field must conditionally render a label at the top
 * Input field must handle errors
 * Input field must display errors at the bottom
 */
"use client"

import React, { ChangeEvent, FocusEvent, InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  topLabel?: boolean;
  placeholder: string;
  type: string;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: any;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
  const {
    id,
    topLabel = true,
    placeholder,
    type,
    onBlur,
    label,
    onChange,
    value,
    error,
  } = props;

  return (
    <div className="flex flex-col gap-1 w-full">
      {topLabel && (
        <label className="text-[14px]">
          {label}
        </label>
      )}
      <div className="flex flex-col gap-1 w-full relative">
        <input
          ref={ref}
          id={id}
          className={`input p-3 text-sm outline-none ${error ? "border border-red" : ""}`}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          type=""
        />
        {error && (
          <p className="text-sm text-red  absolute -bottom-5 left-0">{error}</p>
        )}
      </div>
    </div>
  );
});

export default CustomInput;
