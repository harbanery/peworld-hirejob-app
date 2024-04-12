import React from "react";

const Input = ({ label, type = "text", ...props }) => {
  return (
    <div className="flex flex-col flex-nowrap py-4">
      {label && (
        <span className="font-normal text-xs text-hirejob-gray mb-1">
          {label}
        </span>
      )}

      {type === `textarea` ? (
        <textarea
          className="w-full rounded p-[15px] border border-hirejob-frost font-normal text-sm text-hirejob-dark placeholder:text-hirejob-gray"
          {...props}
        ></textarea>
      ) : (
        <input
          className="w-full h-[50px] rounded px-[15px] border border-hirejob-frost font-normal text-sm text-hirejob-dark placeholder:text-hirejob-gray"
          type={type}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
