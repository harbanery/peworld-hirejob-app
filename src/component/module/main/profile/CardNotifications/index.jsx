import React from "react";
import imageUserNav from "../../../../../assets/img/profile-img/user-noimage.png";
import TimeAgo from "../../../../../configs/timeAgo";
import Button from "../../../../base/Button";

const CardNotifications = ({ image = null, message, company_name, date }) => {
  return (
    <>
      <div className="w-full border-y border-hirejob-frost">
        <div className="flex px-5 pt-5 gap-5">
          <div className="w-1/4">
            <img src={image ? image : imageUserNav} />
          </div>
          <div className="w-3/4">
            <p className="font-medium text-sm leading-6 text-hirejob-dark">
              A recruiter from {company_name} has sent you a message about a{" "}
              <span className="capitalize">{message}</span>.
            </p>
            <h3 className="font-normal text-sm text-hirejob-gray my-2">
              <TimeAgo date={date} />
            </h3>
          </div>
        </div>
        <div className="w-full text-center">
          <Button
            colorButton={`primary`}
            isWidthFull={false}
            extra={`w-5/6 mt-2 mx-5 mb-5 p-2`}
            isDisabled={true}
          >
            View Offers
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
    </>
  );
};

export default CardNotifications;
