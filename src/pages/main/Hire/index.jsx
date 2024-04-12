import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import imageUser from "../../../assets/img/profile-img/user-noimage.png";
import iconMap from "../../../assets/img/icons/map.png";
import iconMail from "../../../assets/img/icons/mail.png";
import iconPhone from "../../../assets/img/icons/phone.png";
import Input from "../../../component/base/Input";
import Tag from "../../../component/base/Tag";
import Button from "../../../component/base/Button";
import api from "../../../configs/api";

const Hire = () => {
  const navigate = useNavigate();
  const { workerId } = useParams();
  const [role, setRole] = useState("");
  const [workerSkills, setWorkerSkills] = useState([]);
  const [worker, setWorker] = useState({
    id: "",
    name: "",
    job_desk: "",
    domicile: "",
    workplace: "",
    description: "",
  });

  const [hire, setHire] = useState({
    message_purpose: "project",
    worker_id: "",
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [recruiter, setRecruiter] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const getRole = () => {
    api.get("/auth/check-role").then((res) => {
      const role = res.data.data.data.role;
      // console.log(role);
      if (role === "recruiter") {
        getWorkerDataId(workerId);
        getWorkerSkillsId(workerId);
        getRecruiter();
      } else {
        navigate(`/`);
      }
    });
  };

  const getWorkerDataId = (id) => {
    api.get(`/workers/${id}`).then((res) => {
      const workerData = res.data.data;
      //   console.log(workerData);
      setWorker(workerData);
    });
  };

  const getWorkerSkillsId = (id) => {
    api.get(`/skills/${id}`).then((res) => {
      const skills = res.data.data;
      //   console.log(skills);
      setWorkerSkills(skills);
    });
  };

  const getRecruiter = () => {
    api.get("/recruiters/profile").then((res) => {
      const profileData = res.data.data;
      //   console.log(profileData);
      setRecruiter(profileData);
    });
  };

  const handleAddHire = () => {
    api
      .post(`/hire`, {
        message_purpose: hire.message_purpose,
        worker_id: worker.id,
        name: hire.name,
        email: hire.email,
        phone: hire.phone,
        desciption: hire.description,
      })
      .then(() => {
        alert(
          `berhasil dikirimkan ke ${worker.name}! tunggu pekerja untuk menerima tawaran Anda.`
        );
        navigate(`/main/home`);
      })
      .catch((err) => {
        alert("gagal dikirimkan!");
        console.log(err.response);
      });
  };

  const handleChange = (e) => {
    setHire({
      ...hire,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getRole();
    } else {
      navigate(`/login`);
    }
  }, []);
  return (
    <>
      <main>
        <div className="container max-w-full px-4 md:px-16 lg:px-[150px] py-5 lg:py-[70px] flex flex-col-reverse lg:flex-row justify-between items-start gap-16 lg:gap-[81px]">
          <aside className="w-full lg:w-2/5 xl:w-1/3 flex flex-col gap-[30px]">
            <div className="text-center md:text-left p-[30px] rounded-lg bg-hirejob-white">
              <div className="flex justify-center items-center py-2">
                <div className="w-[150px] md:w-[300px] lg:w-[150px] h-[150px] md:h-[300px] lg:h-[150px] overflow-hidden rounded-[50%]">
                  <img
                    className="w-full h-auto"
                    src={worker.photo ? worker.photo : imageUser}
                    alt={worker.name}
                  />
                </div>
              </div>
              <h1 className="font-semibold text-[22px] mt-[13px] text-hirejob-dark">
                {worker.name}
              </h1>
              <h2 className="font-normal text-sm mt-[10px] text-hirejob-dark">
                {worker.job_desk}
              </h2>

              {worker.domicile && (
                <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm mt-[13px] text-hirejob-gray">
                  <img className=" w-4 h-auto" src={iconMap} />
                  <span>{worker.domicile ? worker.domicile : "Somewhere"}</span>
                </div>
              )}

              <h3 className="font-normal text-sm mt-[13px] text-hirejob-gray">
                {worker.workplace}
              </h3>

              <p className=" my-[18px] font-normal text-sm leading-6 text-hirejob-gray">
                {worker.description}
              </p>

              {workerSkills.length !== 0 && (
                <>
                  <h1 className="font-semibold text-[22px] mt-[13px] text-hirejob-dark">
                    Skill
                  </h1>
                  <ul className="font-semibold text-xs mt-[10px] flex flex-row justify-center md:justify-start flex-wrap text-hirejob-white">
                    {workerSkills.map((skill) => (
                      <Tag key={skill.id}>{skill.skill_name}</Tag>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </aside>

          <section className="w-full lg:w-3/5 xl:w-2/3 rounded-lg xl:pr-36">
            <h1 className=" font-semibold text-[32px]">
              {`Hubungi ${worker.name}`}
            </h1>
            <p className="font-normal text-lg text-hirejob-slate mt-4 my-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>

            <div className="flex flex-col flex-nowrap py-4">
              <span className="font-normal text-xs text-hirejob-gray mb-1">
                Tujuan tentang pesan ini
              </span>
              <select
                className="w-full h-[50px] rounded px-[15px] border border-hirejob-frost font-normal text-sm text-hirejob-gray"
                name="message_purpose"
                value={hire.message_purpose}
                onChange={handleChange}
              >
                <option value="project">Project</option>
                <option value="full-time">Full-Time</option>
              </select>
            </div>

            <Input
              label={`Nama Lengkap`}
              name={`name`}
              value={hire.name}
              onChange={handleChange}
              placeholder={`Masukkan nama lengkap`}
            />

            <Input
              label={`Email`}
              name={`email`}
              value={hire.email}
              onChange={handleChange}
              placeholder={`Masukkan email`}
            />

            <Input
              label={`No handphone`}
              name={`phone`}
              value={hire.phone}
              onChange={handleChange}
              placeholder={`Masukkan no telepon`}
            />

            <Input
              label={`Dekripsi singkat`}
              type={`textarea`}
              name={`description`}
              value={hire.description}
              onChange={handleChange}
              rows={`10`}
              placeholder={`Tuliskan dekripsi singkat`}
            />

            <Button
              onClick={handleAddHire}
              colorButton={`secondary`}
              extra={`h-[50px] mt-12`}
            >
              Hire
            </Button>
          </section>
        </div>
      </main>
    </>
  );
};

export default Hire;
