import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../profile.module.css";
import iconMap from "../../../../../assets/img/icons/map.png";
import iconEdit from "../../../../../assets/img/icons/edit.png";
import iconMail from "../../../../../assets/img/icons/mail.png";
import iconInsta from "../../../../../assets/img/icons/instagram.png";
import iconPhone from "../../../../../assets/img/icons/phone.png";
import iconLinkedIn from "../../../../../assets/img/icons/linkedin.png";
import imageUser from "../.././../../../assets/img/profile-img/user-noimage.png";
import Input from "../../../../../component/base/Input";
import Button from "../../../../../component/base/Button";
import api from "../../../../../configs/api";

const EditCompany = () => {
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
      // console.log(profileData);
      setProfile(profileData);
    });
  };

  const handleUpdateProfile = () => {
    api
      .put(`/recruiters/profile`, {
        company: profile.company,
        position: profile.position,
        city: profile.city,
        description: profile.description,
        email: profile.email,
        instagram: profile.instagram,
        phone: profile.phone,
        linkedin: profile.linkedin,
      })
      .then(() => {
        alert("berhasil mengubah profil kamu!");
        getProfileData();
      })
      .catch((err) => {
        alert("gagal mengubah profil kamu!");
        console.log(err.response);
      });
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // const handleFileSelect = (e) => {
  //   e.preventDefault();
  //   const file = e.target.files[0];
  //   console.log(file);

  //   const formData = new FormData();
  //   formData.append("photo", file);

  //   api
  //     .put(`/recruiters/profile`, formData, {
  //       headers: { "content-type": "multipart/form-data" },
  //     })
  //     .then((res) => {
  //       alert("berhasil mengubah foto profil kamu!");
  //       getProfileData();
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data.message);
  //       alert(`Error: ${err.response.data.message}`);
  //     });
  // };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfileData();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <main>
        <div className="container max-w-full px-4 md:px-16 lg:px-[150px] py-5 lg:py-[70px] flex flex-col md:flex-row justify-between items-start gap-[30px]">
          <aside className="w-full md:w-2/5 xl:w-1/3 flex flex-col gap-[30px]">
            <div className="text-center md:text-left p-[30px] rounded-lg bg-hirejob-white">
              <div className="w-[150px] h-[150px] mx-auto overflow-hidden rounded-[50%]">
                <img
                  className="w-full h-auto"
                  src={imageUser}
                  alt={profile.company}
                />
              </div>
              <div className="pt-5 pb-[31px] font-semibold text-[22px] text-hirejob-gray">
                <label
                  htmlFor="img-worker-upload"
                  className="flex justify-center items-center gap-1.5 cursor-pointer"
                >
                  <img className="" src={iconEdit} />
                  <span>Edit</span>
                </label>
                <input
                  id="img-worker-upload"
                  type="file"
                  // onChange={handleFileSelect}
                />
              </div>
              <h1 className="font-semibold text-[22px] mt-[13px] text-hirejob-dark">
                {profile.company}
              </h1>
              <h2 className="font-normal text-sm mt-[10px] text-hirejob-dark">
                {profile.position}
              </h2>
              {profile.city && (
                <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm mt-[13px] text-hirejob-gray">
                  <img className=" w-4 h-auto" src={iconMap} />
                  <span>{profile.city}</span>
                </div>
              )}
              <p className=" my-[18px] font-normal text-sm leading-6 text-hirejob-gray">
                {profile.description}
              </p>

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
            <Button
              onClick={() => navigate(-1)}
              colorButton={`primary`}
              isBorder={true}
              isOutline={true}
              extra={`py-[15px]`}
            >
              Batal
            </Button>
          </aside>

          <div className="w-full md:w-3/5 xl:w-2/3 flex flex-col gap-[30px]">
            <section className="w-full rounded-lg py-4 bg-hirejob-white">
              <div className="font-semibold text-[22px] border-b border-[#C4C4C4] px-9 py-[18px] text-hirejob-dark">
                <h1>Data diri</h1>
              </div>
              <div className="py-4 px-9">
                <Input
                  label={`Nama Perusahaan`}
                  name={`company`}
                  value={profile.company}
                  onChange={handleChange}
                  placeholder={`Masukan nama perusahan`}
                />
                <Input
                  label={`Bidang`}
                  name={`position`}
                  value={profile.position}
                  onChange={handleChange}
                  placeholder={`Masukan bidang perusahaan ex : Financial`}
                />
                <Input
                  label={`Kota`}
                  name={`city`}
                  value={profile.city}
                  onChange={handleChange}
                  placeholder={`Masukan kota`}
                />
                <Input
                  label={`Dekripsi singkat`}
                  type={`textarea`}
                  name={`description`}
                  rows={`6`}
                  placeholder={`Tuliskan dekripsi singkat`}
                  value={profile.description}
                  onChange={handleChange}
                />
                <Input
                  label={`Email`}
                  type="email"
                  name={`email`}
                  value={profile.email}
                  onChange={handleChange}
                  placeholder={`Masukan email`}
                />
                <Input
                  label={`Instagram`}
                  name={`instagram`}
                  value={profile.instagram}
                  onChange={handleChange}
                  placeholder={`Masukan nama Instagram`}
                />
                <Input
                  label={`Nomor Telepon`}
                  name={`phone`}
                  value={profile.phone}
                  onChange={handleChange}
                  placeholder={`Masukan nomor telepon`}
                />
                <Input
                  label={`Linkedin`}
                  name={`linkedin`}
                  value={profile.linkedin}
                  onChange={handleChange}
                  placeholder={`Masukan nama Linkedin`}
                />
              </div>
            </section>

            <Button
              onClick={handleUpdateProfile}
              colorButton={`primary`}
              extra={`py-[15px]`}
            >
              Simpan
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default EditCompany;
