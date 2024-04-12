import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../profile.module.css";
import iconMap from "../../../../../assets/img/icons/map.png";
import iconEdit from "../../../../../assets/img/icons/edit.png";
import imageUser from "../.././../../../assets/img/profile-img/user-noimage.png";
import Skill from "../../../../../component/module/main/profile/worker/Skill";
import WorkExperience from "../../../../../component/module/main/profile/worker/WorkExperience";
import Portofolio from "../../../../../component/module/main/profile/worker/Portofolio";
import Input from "../../../../../component/base/Input";
import Button from "../../../../../component/base/Button";
import api from "../../../../../configs/api";

const EditWorker = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    job_desk: "",
    domicile: "",
    workplace: "",
    description: "",
  });

  const getProfileData = () => {
    api.get("/workers/profile").then((res) => {
      const profileData = res.data.data;
      // console.log(profileData);
      setProfile(profileData);
    });
  };

  const handleUpdateProfile = () => {
    api
      .put(`/workers/profile`, {
        name: profile.name,
        job_desk: profile.job_desk,
        domicile: profile.domicile,
        workplace: profile.workplace,
        description: profile.description,
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

  const handleFileSelect = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);

    const formData = new FormData();
    formData.append("photo", file);

    api
      .put(`/workers/profile/photo`, formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then(() => {
        alert("berhasil mengubah foto profil kamu!");
        getProfileData();
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(`Error: ${err.response.data.message}`);
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
    <>
      <main>
        <div className="container max-w-full px-4 md:px-16 lg:px-[150px] py-5 lg:py-[70px] flex flex-col md:flex-row justify-between items-start gap-[30px]">
          <aside className="w-full md:w-2/5 xl:w-1/3 flex flex-col gap-[30px]">
            <div className="text-center md:text-left p-[30px] rounded-lg bg-hirejob-white">
              <div className="w-[150px] h-[150px] mx-auto overflow-hidden rounded-[50%]">
                <img
                  className="w-full h-auto"
                  src={profile.photo === null ? imageUser : profile.photo}
                  alt={profile.name}
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
                  onChange={handleFileSelect}
                />
              </div>
              <h1 className="font-semibold text-[22px] mt-[13px] text-hirejob-dark">
                {profile.name}
              </h1>
              <h2 className="font-normal text-sm mt-[10px] text-hirejob-dark">
                {profile.job_desk}
              </h2>

              {profile.domicile && (
                <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm mt-[13px] text-hirejob-gray">
                  <img className=" w-4 h-auto" src={iconMap} />
                  <span>{profile.domicile}</span>
                </div>
              )}
              <h3 className="font-normal text-sm mt-[13px] text-hirejob-gray">
                {profile.workplace}
              </h3>

              <p className=" my-[18px] font-normal text-sm leading-6 text-hirejob-gray">
                {profile.description}
              </p>
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
                  label={`Nama Lengkap`}
                  name={`name`}
                  value={profile.name}
                  onChange={handleChange}
                  placeholder={`Masukan nama lengkap`}
                />
                <Input
                  label={`Job desk`}
                  name={`job_desk`}
                  value={profile.job_desk}
                  onChange={handleChange}
                  placeholder={`Masukan job desk`}
                />
                <Input
                  label={`Domisili`}
                  name={`domicile`}
                  value={profile.domicile}
                  onChange={handleChange}
                  placeholder={`Masukan domisili`}
                />
                <Input
                  label={`Tempat kerja`}
                  name={`workplace`}
                  value={profile.workplace}
                  onChange={handleChange}
                  placeholder={`Masukan tempat kerja`}
                />
                <Input
                  label={`Dekripsi singkat`}
                  type={`textarea`}
                  name={`description`}
                  rows={`6`}
                  value={profile.description}
                  onChange={handleChange}
                  placeholder={`Tuliskan dekripsi singkat`}
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

            <Skill />

            <WorkExperience />

            <Portofolio />
          </div>
        </div>
      </main>
    </>
  );
};

export default EditWorker;
