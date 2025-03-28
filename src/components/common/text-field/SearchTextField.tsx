import React from "react";

type SearchTextFieldProps = {
  onChange: (value: string) => void;
  placeholder: string;
  handleEnterKey?: () => void;
};

function SearchTextField({ onChange, placeholder,handleEnterKey}: SearchTextFieldProps) {
  return (
    <label className="input bg-neutralGrey0 border-neutralGrey-grey400 input-bordered flex items-center gap-2 w-[400px] my-[20px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
      <input
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className="flex-1"
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault(); // Prevents form submission if inside a form
            handleEnterKey ? handleEnterKey() : null;
          }
        }}
      />
    </label>
  );
}

export default SearchTextField;
