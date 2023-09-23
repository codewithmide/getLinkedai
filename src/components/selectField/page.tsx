/* eslint-disable react/display-name */
import React, { ChangeEvent, FocusEvent, SelectHTMLAttributes } from "react";

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  topLabel?: boolean;
  id: string;
  label?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  error?: string;
  options: string[];
  optionLabel: string;
  onBlur: (event: FocusEvent<HTMLSelectElement>) => void;
}

const CustomSelect = React.forwardRef<HTMLSelectElement, CustomSelectProps>((props, ref) => {
  const {
    topLabel = true,
    id,
    label,
    onChange,
    onBlur,
    value,
    error,
    options,
    optionLabel,
    ...selectProps
  } = props;

  return (
    <div className="flex flex-col gap-1 w-full">
      {topLabel && (
        <label className="text-[14px]">{label}</label>
      )}
      <div className="flex flex-col gap-1 w-full">
        <select
          id={id}
          ref={ref}
          className={`input p-3 text-sm outline-none ${error ? "border border-red" : ""}`}
          onChange={onChange}
          value={value}
          {...selectProps}
        >
          <option value="" disabled selected style={{ display: "none" }}>{optionLabel}</option>
          {options.map((option, index) => (
            <option key={index} value={option} className="text-black">
            {option}
            </option>
        ))}
        </select>
        {error && (
          <p className="text-sm text-red">{error}</p>
        )}
      </div>
    </div>
  );
});

export default CustomSelect;
