import React from "react";
import imageUserNav from "../../../../../assets/img/profile-img/user-noimage.png";
import TimeAgo from "../../../../base/TimeAgo";
import Button from "../../../../base/Button";

const CardNotifications = ({ role, arrayNotif = [] }) => {
  return (
    <>
      {role === "worker"
        ? arrayNotif.map((hire) => (
            <div key={hire.id} className="w-full border-y border-hirejob-frost">
              <div className="flex px-5 pt-5 gap-5">
                <div className="w-1/4">
                  <img
                    src={
                      hire.recruiter_photo ? hire.recruiter_photo : imageUserNav
                    }
                  />
                </div>
                <div className="w-3/4">
                  <p className="font-medium text-sm leading-6 text-hirejob-dark">
                    A recruiter from {hire.recruiter_company} has sent you a
                    message about a{" "}
                    <span className="capitalize">{hire.message_purpose}</span>.
                  </p>
                  <h3 className="font-normal text-sm text-hirejob-gray my-2">
                    <TimeAgo date={hire.created_at} />
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
          ))
        : arrayNotif.map((hire) => (
            <div key={hire.id} className="w-full border-y border-hirejob-frost">
              <div className="flex px-5 pt-5 gap-5">
                <div className="w-1/4">
                  <img
                    src={hire.worker_photo ? hire.worker_photo : imageUserNav}
                  />
                </div>
                <div className="w-3/4">
                  <p className="font-medium text-sm leading-6 text-hirejob-dark">
                    You're hiring a job to{" "}
                    {hire.worker_name ? hire.worker_name : `Someone`}, now
                    waiting for response.
                  </p>
                  <h3 className="font-normal text-sm text-hirejob-gray my-2">
                    <TimeAgo date={hire.created_at} />
                  </h3>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};

export default CardNotifications;
