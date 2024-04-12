import React from "react";

const TagExtra = ({
  key,
  date,
  position,
  company,
  getClick,
  updateClick,
  deleteClick,
}) => {
  return (
    <li
      key={key}
      className="w-full lg:w-auto text-center lg:text-left px-4 py-1 my-[10px] mr-[10px] border rounded bg-[#fbb01799] border-hirejob-yellow-normal"
    >
      <div
        className={`flex flex-col ${getClick && `cursor-pointer`}`}
        onClick={getClick}
      >
        {date && (
          <span className="font-bold text-base pb-1 border-b">{date}</span>
        )}
        {position && (
          <span className="font-semibold text-sm pb-1">{position}</span>
        )}
        {company && <span className="font-bold text-xs">{company}</span>}
      </div>
      {updateClick && (
        <button
          onClick={updateClick}
          className="w-full font-semibold text-xs mt-2 py-1 rounded bg-hirejob-white text-hirejob-yellow-normal hover:bg-hirejob-yellow-normal hover:text-hirejob-white transition duration-200"
        >
          Edit
        </button>
      )}
      {deleteClick && (
        <button
          onClick={deleteClick}
          className="w-full font-semibold text-xs mt-1 py-1 rounded bg-hirejob-white text-hirejob-yellow-normal hover:bg-hirejob-yellow-normal hover:text-hirejob-white transition duration-200"
        >
          Hapus
        </button>
      )}
    </li>
  );
};

export default TagExtra;
