import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import imageUser from "../.././../../../assets/img/profile-img/user-noimage.png";
import iconMap from "../../../../../assets/img/icons/map.png";
import iconMail from "../../../../../assets/img/icons/mail.png";
import iconPhone from "../../../../../assets/img/icons/phone.png";
import imageFolio1 from "../../../../../assets/img/portofolio/pf1.png";
import imageFolio2 from "../../../../../assets/img/portofolio/pf2.png";
import imageFolio3 from "../../../../../assets/img/portofolio/pf3.png";
import CardExperience from "../../../../../component/module/main/profile/worker/CardExperience";
import CardPortofolio from "../../../../../component/module/main/profile/worker/CardPortofolio";
import Button from "../../../../../component/base/Button";
import Tag from "../../../../../component/base/Tag";
import api from "../../../../../configs/api";

const ViewWorker = () => {
  const navigate = useNavigate();
  const { workerId } = useParams();
  const [role, setRole] = useState("");
  const [workerSkills, setWorkerSkills] = useState([]);
  const [workerExperiences, setWorkerExperiences] = useState([]);
  const [workerPortofolio, setWorkerPortofolio] = useState([]);
  const [portoBar, setPortoBar] = useState({
    portoToolbar:
      "pb-1.5 border-b-4 border-hirejob-purple-normal text-hirejob-dark",
    portoDisplay: "flex",
  });
  const [expBar, setExpBar] = useState({
    expToolbar: "",
    expDisplay: "hidden",
  });
  const [worker, setWorker] = useState({
    name: "",
    job_desk: "",
    domicile: "",
    workplace: "",
    description: "",
  });

  const getRole = () => {
    api.get("/auth/check-role").then((res) => {
      const role = res.data.data.data.role;
      // console.log(role);
      if (role === "worker") {
        getWorkerData();
        getWorkerSkills();
        getWorkerExperience();
        getWorkerPortofolio();
      } else if (role === "recruiter") {
        getWorkerDataId(workerId);
        getWorkerSkillsId(workerId);
        getWorkerExperienceId(workerId);
        getWorkerPortofolioId(workerId);
      }
      setRole(role);
    });
  };

  const getWorkerData = () => {
    api.get("/workers/profile").then((res) => {
      const workerData = res.data.data;
      // console.log(workerData);
      setWorker(workerData);
    });
  };

  const getWorkerSkills = () => {
    api.get("/skills").then((res) => {
      const skills = res.data.data;
      // console.log(skills);
      setWorkerSkills(skills);
    });
  };

  const getWorkerExperience = () => {
    api.get("/experience").then((res) => {
      const experiences = res.data.data;
      setWorkerExperiences(experiences);
    });
  };

  const getWorkerPortofolio = () => {
    api.get("/portfolio").then((res) => {
      const portofolios = res.data.data;
      setWorkerPortofolio(portofolios);
    });
  };

  const getWorkerDataId = (id) => {
    api.get(`/workers/${id}`).then((res) => {
      const workerData = res.data.data;
      // console.log(workerData);
      setWorker(workerData);
    });
  };

  const getWorkerSkillsId = (id) => {
    api.get(`/skills/${id}`).then((res) => {
      const skills = res.data.data;
      // console.log(skills);
      setWorkerSkills(skills);
    });
  };

  const getWorkerExperienceId = (id) => {
    api.get(`/experience/${id}`).then((res) => {
      const experiences = res.data.data;
      // console.log(experiences);
      setWorkerExperiences(experiences);
    });
  };

  const getWorkerPortofolioId = (id) => {
    api.get(`/portfolio/${id}`).then((res) => {
      const portofolios = res.data.data;
      // console.log(experiences);
      setWorkerPortofolio(portofolios);
    });
  };

  const getPortofolioBar = () => {
    setExpBar({
      expToolbar: "",
      expDisplay: "hidden",
    });
    setPortoBar({
      portoToolbar:
        "pb-1.5 border-b-4 border-hirejob-purple-normal text-hirejob-dark",
      portoDisplay: "flex",
    });
  };

  const getExperienceBar = () => {
    setPortoBar({
      portoToolbar: "",
      portoDisplay: "hidden",
    });
    setExpBar({
      expToolbar:
        "pb-1.5 border-b-4 border-hirejob-purple-normal text-hirejob-dark",
      expDisplay: "flex",
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
        <div className="container max-w-full px-4 md:px-16 lg:px-[150px] py-5 lg:py-[70px] flex flex-col lg:flex-row justify-between items-start gap-[30px]">
          <aside className="w-full lg:w-2/5 xl:w-1/3 flex flex-col gap-[30px]">
            <div className="text-center md:text-left p-[30px] rounded-lg bg-hirejob-white">
              <div className="flex justify-center items-center py-2">
                <div className="w-[150px] md:w-[300px] lg:w-[150px] h-[150px] md:h-[300px] lg:h-[150px] overflow-hidden rounded-[50%]">
                  <img
                    className="w-full h-auto"
                    src={worker.photo ? worker.photo : imageUser}
                    alt={worker.name ? worker.name : `Unknown`}
                  />
                </div>
              </div>
              <h1 className="font-semibold text-[22px] mt-[13px] text-hirejob-dark">
                {worker.name ? worker.name : `Unknown`}
              </h1>
              <h2 className="font-normal text-sm mt-[10px] text-hirejob-dark">
                {worker.job_desk}
              </h2>

              <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm mt-[13px] text-hirejob-gray">
                <img className=" w-4 h-auto" src={iconMap} />
                <span>{worker.domicile ? worker.domicile : `Somewhere`}</span>
              </div>

              <h3 className="font-normal text-sm mt-[13px] text-hirejob-gray">
                {worker.workplace}
              </h3>

              <p className=" my-[18px] font-normal text-sm leading-6 text-hirejob-gray">
                {worker.description}
              </p>

              {role === "recruiter" && (
                <Button
                  colorButton={`primary`}
                  extra={`py-[15px]`}
                  onClick={() => navigate(`/main/hire/${worker.id}`)}
                >
                  Hire
                </Button>
              )}

              {role === "worker" && (
                <Link to={`/main/profile/worker/edit`}>
                  <Button colorButton={`primary`} extra={`py-[15px]`}>
                    Edit Profile
                  </Button>
                </Link>
              )}

              {workerSkills.length !== 0 && (
                <>
                  <h1 className="font-semibold text-[22px] mt-[13px] text-hirejob-dark">
                    Skill
                  </h1>
                  <ul className="font-semibold text-xs mt-[10px] flex flex-row justify-center md:justify-start flex-wrap text-hirejob-white">
                    {workerSkills
                      .filter((_skill, i) => i < 10)
                      .map((skill) => (
                        <Tag key={skill.id}>{skill.skill_name} </Tag>
                      ))}
                    {workerSkills.length > 10 && (
                      <Tag>{`+${workerSkills.length - 10}`} </Tag>
                    )}
                  </ul>
                </>
              )}

              <div className="my-9 flex flex-col justify-center items-start gap-6">
                {worker.email && (
                  <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray h-6">
                    <img src={iconMail} />
                    <span>{worker.email}</span>
                  </div>
                )}
                {worker.phone && (
                  <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray h-6">
                    <img src={iconPhone} />
                    <span>{worker.phone}</span>
                  </div>
                )}
              </div>
            </div>
          </aside>

          <section className="w-full lg:w-3/5 xl:w-2/3 rounded-lg py-4 px-9 bg-hirejob-white">
            <ul className="font-semibold text-xl sm:text-[22px] flex flex-wrap sm:flex-nowrap justify-between sm:justify-start pb-8 sm:pb-[18px] pt-[18px] gap-[15px] sm:gap-[30px] text-hirejob-gray">
              <li
                onClick={() => getPortofolioBar()}
                className={`${portoBar.portoToolbar} cursor-pointer`}
              >
                Portofolio
              </li>
              <li
                onClick={() => getExperienceBar()}
                className={`${expBar.expToolbar} cursor-pointer`}
              >
                Work Experience
              </li>
            </ul>

            {workerPortofolio.length !== 0 ? (
              <div
                className={`${portoBar.portoDisplay} flex-wrap justify-between gap-6 md:gap-3`}
              >
                {workerPortofolio.map((portofolio) => (
                  <CardPortofolio
                    link={portofolio.link_repository}
                    image={portofolio.image}
                  >
                    {portofolio.application} - {portofolio.application_name}
                  </CardPortofolio>
                ))}
                {/* Portofolio */}
                {/* <div className="w-full sm:w-[45%] md:w-[30%] lg:w-full xl:w-[30%] flex flex-col flex-nowrap items-center justify-center ">
                <img
                  className="w-full h-full"
                  src={imageFolio1}
                  alt="Portofolio"
                />
                <span className="font-normal text-sm py-1.5">
                  Remainder App
                </span>
              </div>
              <div className="w-full sm:w-[45%] md:w-[30%] lg:w-full xl:w-[30%] flex flex-col flex-nowrap items-center justify-center ">
                <img
                  className="w-full h-full"
                  src={imageFolio2}
                  alt="Portofolio"
                />
                <span className="font-normal text-sm py-1.5">
                  Social media app
                </span>
              </div>
              <div className="w-full sm:w-[45%] md:w-[30%] lg:w-full xl:w-[30%] flex flex-col flex-nowrap items-center justify-center ">
                <img
                  className="w-full h-full"
                  src={imageFolio3}
                  alt="Portofolio"
                />
                <span className="font-normal text-sm py-1.5">
                  Project management web
                </span>
              </div>
              <div className="w-full sm:w-[45%] md:w-[30%] lg:w-full xl:w-[30%] flex flex-col flex-nowrap items-center justify-center ">
                <img
                  className="w-full h-full"
                  src={imageFolio4}
                  alt="Portofolio"
                />
                <span className="font-normal text-sm py-1.5">
                  Remainder App
                </span>
              </div>
              <div className="w-full sm:w-[45%] md:w-[30%] lg:w-full xl:w-[30%] flex flex-col flex-nowrap items-center justify-center ">
                <img
                  className="w-full h-full"
                  src={imageFolio5}
                  alt="Portofolio"
                />
                <span className="font-normal text-sm py-1.5">
                  Social media app
                </span>
              </div>
              <div className="w-full sm:w-[45%] md:w-[30%] lg:w-full xl:w-[30%] flex flex-col flex-nowrap items-center justify-center ">
                <img
                  className="w-full h-full"
                  src={imageFolio6}
                  alt="Portofolio"
                />
                <span className="font-normal text-sm py-1.5">
                  Project management web
                </span>
              </div> */}
              </div>
            ) : (
              <div
                className={`${portoBar.portoDisplay} justify-center items-center h-[150px]`}
              >
                <h1 className="font-semibold text-lg text-hirejob-slate">
                  Belum Memiliki Portofolio
                </h1>
              </div>
            )}
            {workerExperiences.length !== 0 ? (
              <ul className={`${expBar.expDisplay} flex-col my-3`}>
                {workerExperiences.map((experience) => (
                  <CardExperience
                    company={experience.company}
                    position={experience.position}
                    month={experience.work_month}
                    year={experience.work_year}
                    description={experience.description}
                  />
                ))}
              </ul>
            ) : (
              <div
                className={`${expBar.expDisplay} justify-center items-center h-[150px]`}
              >
                <h1 className="font-semibold text-lg text-hirejob-slate">
                  Belum Memiliki Pengalaman Kerja
                </h1>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default ViewWorker;
