import React from "react";
import { Link } from "react-router-dom";
import imageNoFolio from "../../../../../../assets/img/portofolio/no-portofolio.jpg";

const CardPortofolio = ({ children, link, image }) => {
  return (
    <Link
      to={link}
      className="w-full sm:w-[45%] md:w-[30%] lg:w-full xl:w-[30%] flex flex-col flex-nowrap items-center justify-center "
    >
      {image ? (
        <div className="w-full h-full md:h-[55%] lg:h-[90%] xl:h-[70%] max-h-[200px] overflow-y-hidden border border-hirejob-frost">
          <img
            className="w-full h-auto bg-cover bg-center"
            src={image}
            alt="Portofolio"
          />
        </div>
      ) : (
        <div className="w-full h-full md:h-[55%] lg:h-[90%] xl:h-[70%] max-h-[200px] flex justify-center items-center overflow-y-hidden border border-hirejob-frost">
          <div className="w-full h-auto text-center">No images</div>
        </div>
      )}
      <span className="font-normal text-sm text-center py-1.5">{children}</span>
    </Link>
  );
};

export default CardPortofolio;
