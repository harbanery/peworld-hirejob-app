import React from "react";

const CardSlider = () => {
  return (
    <div className="flex flex-col items-center w-2/3 md:w-2/5 lg:w-1/3 2xl:w-1/4 px-[3%] py-[2%] bg-hirejob-white shadow-md">
      <div className="my-3">
        <img
          className=" max-w-28 h-auto border-[10px] border-hirejob-yellow-dark rounded-full"
          src={imageUser2}
          alt="Review-User-1"
        />
      </div>
      <h1 className="font-semibold text-3xl text-center">Harry Styles</h1>
      <h2 className="font-normal text-lg text-hirejob-gray">
        Software Developer
      </h2>
      <p className="font-normal text-lg leading-7 text-hirejob-slate text-center px-[2%] py-3">
        Peworld offers a fantastic platform where IT professionals like myself
        can easily discover promising career paths.
      </p>
    </div>
  );
};

export default CardSlider;
