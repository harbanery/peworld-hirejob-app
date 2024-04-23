import React from "react";
import style from "./loading.module.css";

const Loading = () => {
  return (
    <section className="w-full rounded-lg my-[100px]">
      <div className="flex justify-center items-center gap-5">
        <div className={style.loader}></div>
        <h1 className="font-semibold text-2xl text-hirejob-purple-normal">
          Please Wait
        </h1>
      </div>
    </section>
  );
};

export default Loading;
