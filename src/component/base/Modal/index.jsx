import React, { useEffect, useState } from "react";

const Modal = ({
  isOpen = false,
  durationInSeconds = 5,
  error = true,
  message,
}) => {
  const [isOpenInternal, setIsOpenInternal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsOpenInternal(true);
      const timer = setTimeout(() => {
        setIsOpenInternal(false);
      }, durationInSeconds * 1000); // Convert seconds to milliseconds
      return () => clearTimeout(timer);
    }
  }, [isOpen, durationInSeconds]);

  return (
    <>
      {isOpenInternal && (
        <div
          className={`fixed mx-5 md:mx-0 z-10 md:right-4 top-4 p-5 text-hirejob-white border ${
            error ? `border-hirejob-danger-dark` : "border-hirejob-success-dark"
          } rounded ${
            error ? `bg-[#f31e13cb]` : `bg-[#5cb85ce8]`
          } transition-opacity duration-500 `}
        >
          <div className="flex items-center gap-3 mb-2 transition-transform transform">
            <span
              className={`font-bold rounded-[50%] w-7 h-7 ${
                error ? `bg-hirejob-danger-dark` : `bg-hirejob-success-dark`
              } flex justify-center items-center`}
            >
              {error ? <>&#10006;</> : <>&#10004;</>}
            </span>
            <h1 className="font-bold text-lg">{error ? `Error` : `Success`}</h1>
          </div>
          {message && <p className="font-medium text-sm">{message}</p>}
        </div>
      )}
    </>
  );
};

export default Modal;
