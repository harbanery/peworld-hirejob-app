import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import imageUser from "../../../../../assets/img/profile-img/user-noimage.png";
import bgUser from "../../../../../assets/img/profile-img/bg-user.jpg";
import iconMap from "../../../../../assets/img/icons/map.png";
import iconEdit from "../../../../../assets/img/icons/edit-w.png";
import iconMail from "../../../../../assets/img/icons/mail.png";
import iconInsta from "../../../../../assets/img/icons/instagram.png";
import iconPhone from "../../../../../assets/img/icons/phone.png";
import iconLinkedIn from "../../../../../assets/img/icons/linkedin.png";
import Button from "../../../../../component/base/Button";
import api from "../../../../../configs/api";

const ViewCompany = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    company: "",
    position: "",
    city: "",
    description: "",
    email: "",
    instagram: "",
    phone: "",
    linkedin: "",
  });

  const getProfileData = () => {
    api.get("/recruiters/profile").then((res) => {
      const profileData = res.data.data;
      //   console.log(profileData);
      setProfile(profileData);
    });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfileData();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <main>
      <div className="container max-w-full px-4 md:px-16 lg:px-[150px] py-5 lg:py-[70px]">
        <div className="w-full rounded-lg bg-hirejob-white">
          <div className="w-full h-48 overflow-hidden rounded-t-lg bg-hirejob-purple-normal">
            {/* <img className="w-full h-auto" src={bgUser} alt="" /> */}
          </div>
          <div className="pt-5 pb-[31px] font-semibold text-[22px] absolute top-24 right-10 md:top-60 md:right-24 lg:top-72 lg:right-44 text-hirejob-white">
            <label
              htmlFor="img-worker-upload"
              className="flex justify-center items-center gap-1.5 cursor-pointer"
            >
              <img className="" src={iconEdit} />
              <span className="hidden md:block">Ubah Latar</span>
            </label>
            <input id="img-worker-upload" type="file" />
          </div>
          <div className="w-full md:w-3/5 mx-auto flex flex-col justify-start items-center gap-2 relative -top-20 text-center">
            <div className="w-[150px] h-[150px] overflow-hidden rounded-[50%]">
              <img
                className="w-full h-auto"
                src={profile.photo ? profile.photo : imageUser}
                alt={profile.company}
              />
            </div>
            <h1 className="font-semibold text-[22px] mt-[13px] text-hirejob-dark">
              {profile.company ? profile.company : `Unknown`}
            </h1>
            <h2 className="font-normal text-sm text-hirejob-dark">
              {profile.position ? profile.position : `Unknown`}
            </h2>
            <div className="flex justify-center md:justify-start items-center gap-[11px] mt-2 font-normal text-sm text-hirejob-gray">
              <img className=" w-4 h-auto" src={iconMap} />
              <span>{profile.city ? profile.city : `Somewhere`}</span>
            </div>
            <p className=" mt-[14px] mb-[18px] font-normal text-sm leading-6 text-hirejob-gray">
              {profile.description}
            </p>
            <Link className="w-5/6 lg:w-1/2" to={`/main/profile/company/edit`}>
              <Button colorButton={`primary`} extra={`py-[15px]`}>
                Edit profile
              </Button>
            </Link>
            <div className="my-9 flex flex-col justify-center items-start gap-6">
              {profile.email && (
                <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray h-6">
                  <img src={iconMail} />
                  <span>{profile.email} </span>
                </div>
              )}

              {profile.instagram && (
                <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray h-6">
                  <img src={iconInsta} />
                  <span>{profile.instagram}</span>
                </div>
              )}

              {profile.phone && (
                <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray h-6">
                  <img src={iconPhone} />
                  <span>{profile.phone} </span>
                </div>
              )}

              {profile.linkedin && (
                <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray h-6">
                  <img src={iconLinkedIn} />
                  <span>{profile.linkedin}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewCompany;
