import React from "react";

const CardNotifications = ({ id }) => {
  return (
    <div
      id={id}
      className={`block absolute w-2/3 sm:w-1/2 md:w-2/5 xl:w-1/5 h-2/5 top-14 right-8 md:top-20 md:right-28 lg:right-48 z-10 bg-hirejob-white border border-hirejob-frost rounded-md shadow-lg transition duration-500 overflow-y-scroll`}
    >
      <div className="w-full border-y border-hirejob-frost">
        <div className="flex px-5 pt-5 gap-5">
          <div className="w-1/4">
            <img src={imageUserNav} />
          </div>
          <div className="w-3/4">
            <p className="font-medium text-sm leading-6 text-hirejob-dark">
              Seorang perekrut dari perusahaan PT Pijar Mahir ingin menawari
              sebuah pekerjaan kepada Anda
            </p>
            <h3 className="font-normal text-sm text-hirejob-gray my-2">
              1 minute ago
            </h3>
          </div>
        </div>
        <div className="w-full text-center">
          <Button
            colorButton={`primary`}
            isWidthFull={false}
            extra={`w-5/6 mt-2 mx-5 mb-5 p-2`}
          >
            Lihat Penawaran
          </Button>
        </div>
      </div>

      {/* <div className="w-full h-full flex flex-col justify-center items-center gap-4 px-10 py-20">
        <div>
          <img className="" src={imageNoNotif} />
        </div>
        <p className="font-normal text-sm text-hirejob-dark">
          Belum ada notifikasi
        </p>
      </div> */}
    </div>
  );
};

export default CardNotifications;
