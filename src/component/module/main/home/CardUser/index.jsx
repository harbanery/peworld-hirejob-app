import React from "react";
import imageUser from "../../../../../assets/img/profile-img/user-noimage.png";
import iconMap from "../../../../../assets/img/icons/map.png";
import Tag from "../../../../base/Tag";
import Button from "../../../../base/Button";

const CardUser = ({
  onClick,
  image = null,
  name = "Unknown",
  job_desk = "Unknown",
  domicile = "Somewhere",
  skills = [],
}) => {
  return (
    <div className="w-full py-[21px] flex flex-wrap md:flex-nowrap justify-evenly gap-[11px] border-y-2 border-[#f2f3f4]">
      <div className="w-1/2 md:w-1/4 xl:w-1/6 2xl:w-1/12 flex justify-center items-center">
        <div className="w-[100px] h-[100px] overflow-hidden rounded-[50%]">
          <img
            className=" w-full h-auto"
            src={image === null ? imageUser : image}
            alt={name !== null ? name : "Unknown"}
          />
        </div>
      </div>
      <div className="text-center md:text-left w-4/5 md:w-1/2 xl:w-2/3 2xl:w-2/3">
        <h1 className="font-semibold text-[22px] my-2 text-hirejob-dark">
          {name ? name : "Unknown"}
        </h1>
        <h2 className="font-normal text-sm my-2 text-hirejob-gray">
          {job_desk ? job_desk : "Unknown"}
        </h2>
        <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray">
          <img className=" w-4 h-auto" src={iconMap} />
          <span>{domicile ? domicile : "Somewhere"}</span>
        </div>
        {skills.length !== 0 ? (
          <ul className="font-semibold text-xs mt-[10px] flex flex-row justify-center md:justify-start flex-wrap text-hirejob-white">
            {skills
              .filter((_skill, i) => i < 5)
              .map((skill, i) => (
                <Tag key={i}>{skill}</Tag>
              ))}
            {skills.length > 5 && <Tag>{`+${skills.length - 6}`}</Tag>}
          </ul>
        ) : (
          <div className="mt-[10px] h-[46px]"></div>
        )}
      </div>
      <div className="w-full md:w-1/3 xl:w-1/4 flex justify-center items-center">
        <Button
          onClick={onClick}
          colorButton={`primary`}
          isWidthFull={false}
          extra={`px-[27px] py-[17px]`}
        >
          Lihat Profile
        </Button>
      </div>
    </div>
  );
};

export default CardUser;
