import React, { useState } from "react";

export interface InputProps {
  label: string;
  placeholder: string;
  clearable: boolean;
  type?: "text" | "password" | "number";
}

/** Primary UI component for user interaction */
export const Input = ({ label, type = "text", clearable, ...props }: InputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clearValue = () => { 
    setValue('');
  };

  const toggleType = () => { 
   
  };


  return (
    <label>
      <input
        value={value}
        type={type}
        {...props}
        onChange={handleChange}
      ></input>
      {type === "password" && value && (
        <button onClick={toggleType}>See</button>
      )}
      {clearable && value && (
        <button className="clearInput" onClick={clearValue}>
          X
        </button>
      )}
    </label>
  );
};
