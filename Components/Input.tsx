import React, { FC } from "react";

interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
};

const Input: FC<InputProps> = ({ id, onChange, value, label, type }) => {
    return (
        <div className="relative">
            <label
                htmlFor={id}
                className="px-1 text-lg text-white"
            >
                {label}
            </label>

            <input
                onChange={onChange}
                value={value}
                type={type}
                id={id}
                className="block rounded-md px-3 py-3 mt-1 w-full text-md text-white 
                bg-neutral-900 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder={`Enter ${label}`}
            />
        </div>
    )
};

export default Input;