import React, { useState } from "react";

import "./input.css";
export interface InputProps {
  placeholder?: string;
  clearable: boolean;
  type?: "text" | "password" | "number";
}

/** Primary UI component for user interaction */
export const Input = ({ type, clearable }: InputProps) => {
  const [value, setValue] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [query, setQuery] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    type === "password" ? setQuery(!query) : null;
  };

  const clearValue = () => {
    setValue("");
  };

  const toggleType = () => {
    setIsShow(!isShow);
  };

  const iconLock = isShow ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      {" "}
      <path d="M 18 1 C 14.67619 1 12 3.6761905 12 7 L 12 8 L 2.9296875 8 C 1.8656875 8 1 8.897 1 10 L 1 20 C 1 21.103 1.8656875 22 2.9296875 22 L 14.070312 22 C 15.134312 22 16 21.103 16 20 L 16 10 C 16 8.897 15.135266 8 14.072266 8 L 14 8 L 14 7 C 14 4.7238095 15.72381 3 18 3 C 20.27619 3 22 4.7238095 22 7 L 22 9 L 24 9 L 24 7 C 24 3.6761905 21.32381 1 18 1 z M 8.5078125 13 C 9.6078125 13 10.507812 13.9 10.507812 15 C 10.507812 16.1 9.6078125 17 8.5078125 17 C 7.4078125 17 6.5078125 16.1 6.5078125 15 C 6.5078125 13.9 7.4078125 13 8.5078125 13 z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      {" "}
      <path d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9069372 8 4 8.9069372 4 10 L 4 20 C 4 21.093063 4.9069372 22 6 22 L 18 22 C 19.093063 22 20 21.093063 20 20 L 20 10 C 20 8.9069372 19.093063 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 6 10 L 18 10 L 18 20 L 6 20 L 6 10 z M 12 13 C 10.9 13 10 13.9 10 15 C 10 16.1 10.9 17 12 17 C 13.1 17 14 16.1 14 15 C 14 13.9 13.1 13 12 13 z" />
    </svg>
  );

  const currentType = isShow ? "text" : type;
  const textPlaceholder = type === "password" ? "Enter password" : type === "text" ? "Enter text" : "Enter number"

  return (
    <label className="box__input">
      {type === "password" && value && (
        <button
          className="button__view-password"
          aria-label="Toggle password"
          type="button"
          onClick={toggleType}
        >
          {iconLock}
        </button>
      )}
      <input
        className={[
          "input",
          `input__${type === "password" && value && "password"}`,
        ].join(" ")}
        value={value}
        type={currentType}
        placeholder={textPlaceholder}
        onChange={handleChange}
      ></input>
      {clearable && value && (
        <button
          aria-label="Clear input"
          type="button"
          className="button__clear"
          onClick={clearValue}
        >
          X
        </button>
      )}
    </label>
  );
};
