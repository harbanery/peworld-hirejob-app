import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSkills } from "../../../../../configs/redux/action/skillAction";
import { getWorkerProfile } from "../../../../../configs/redux/action/workerAction";
import { getExperience } from "../../../../../configs/redux/action/experienceAction";
import { getPortofolio } from "../../../../../configs/redux/action/portofolioAction";
import imageUser from "../.././../../../assets/img/profile-img/user-noimage.png";
import iconMap from "../../../../../assets/img/icons/map.png";
import iconMail from "../../../../../assets/img/icons/mail.png";
import iconPhone from "../../../../../assets/img/icons/phone.png";
import CardExperience from "../../../../../component/module/main/profile/worker/CardExperience";
import CardPortofolio from "../../../../../component/module/main/profile/worker/CardPortofolio";
import Button from "../../../../../component/base/Button";
import Tag from "../../../../../component/base/Tag";

const ViewWorker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { workerId } = useParams();
  const { role } = useSelector((state) => state.checkRole);
  const { user, profile } = useSelector((state) => state.worker);
  const [portoBar, setPortoBar] = useState({
    portoToolbar:
      "pb-1.5 border-b-4 border-hirejob-purple-normal text-hirejob-dark",
    portoDisplay: "flex",
  });
  const [expBar, setExpBar] = useState({
    expToolbar: "",
    expDisplay: "hidden",
  });

  const getProfile = (id) => {
    dispatch(getWorkerProfile(id));
    dispatch(getSkills(id));
    dispatch(getExperience(id));
    dispatch(getPortofolio(id));
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
    getProfile(workerId);
  }, []);

  return (
    <>
      <main>
        <div className="container max-w-full px-4 md:px-16 lg:px-[150px] py-5 lg:py-[70px] flex flex-col lg:flex-row justify-between items-start gap-[30px]">
          <aside className="w-full lg:w-2/5 xl:w-1/3 flex flex-col gap-[30px]">
            <div className="text-center md:text-left p-[30px] rounded-lg bg-hirejob-white shadow-md">
              <div className="flex justify-center items-center py-2">
                <div className="w-[150px] md:w-[300px] lg:w-[150px] h-[150px] md:h-[300px] lg:h-[150px] overflow-hidden rounded-[50%]">
                  <img
                    className="w-full h-auto"
                    src={user.photo ? user.photo : imageUser}
                    alt={user.name ? user.name : `Unknown`}
                  />
                </div>
              </div>
              <h1 className="font-semibold text-[22px] mt-[13px] text-hirejob-dark">
                {user.name ? user.name : `Unknown`}
              </h1>
              <h2 className="font-normal text-sm mt-[10px] text-hirejob-dark">
                {user.job_desk}
              </h2>

              <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm mt-[13px] text-hirejob-gray">
                <img className=" w-4 h-auto" src={iconMap} />
                <span>{user.domicile ? user.domicile : `Somewhere`}</span>
              </div>

              <h3 className="font-normal text-sm mt-[13px] text-hirejob-gray">
                {user.workplace}
              </h3>

              <p className=" my-[18px] font-normal text-justify text-sm leading-6 text-hirejob-gray">
                {user.description}
              </p>

              {role === "recruiter" && (
                <Button
                  colorButton={`secondary`}
                  extra={`py-[15px]`}
                  onClick={() => navigate(`/main/hire/${user.id}`)}
                >
                  Hire
                </Button>
              )}

              {role === "worker" && (
                <>
                  {!workerId && (
                    <Link to={`/main/profile/worker/edit`}>
                      <Button colorButton={`primary`} extra={`py-[15px]`}>
                        Edit Profile
                      </Button>
                    </Link>
                  )}
                </>
              )}

              {profile.skills.length !== 0 && (
                <>
                  <h1 className="font-semibold text-[22px] mt-[13px] text-hirejob-dark">
                    Skill
                  </h1>
                  <ul className="font-semibold text-xs mt-[10px] flex flex-row justify-center md:justify-start flex-wrap text-hirejob-white">
                    {profile.skills
                      .filter((_skill, i) => i < 10)
                      .map((skill) => (
                        <Tag key={skill.id}>{skill.skill_name} </Tag>
                      ))}
                    {profile.skills.length > 10 && (
                      <Tag>{`+${profile.skills.length - 10}`} </Tag>
                    )}
                  </ul>
                </>
              )}

              <div className="my-9 flex flex-col justify-center items-start gap-6">
                {user.email && (
                  <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray h-6">
                    <img src={iconMail} />
                    <span>{user.email}</span>
                  </div>
                )}
                {user.phone && (
                  <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray h-6">
                    <img src={iconPhone} />
                    <span>{user.phone}</span>
                  </div>
                )}
              </div>
            </div>
          </aside>

          <section className="w-full lg:w-3/5 xl:w-2/3 rounded-lg py-4 px-9 bg-hirejob-white shadow-md">
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

            {profile.portofolios.length !== 0 ? (
              <div
                className={`${portoBar.portoDisplay} flex-wrap justify-start gap-7`}
              >
                {profile.portofolios.map((portofolio) => (
                  <CardPortofolio
                    key={portofolio.id}
                    link={portofolio.link_repository}
                    image={portofolio.image}
                  >
                    {portofolio.application === "Aplikasi Web"
                      ? "Web Application"
                      : "Mobile Application"}{" "}
                    - {portofolio.application_name}
                  </CardPortofolio>
                ))}
              </div>
            ) : (
              <div
                className={`${portoBar.portoDisplay} justify-center items-center h-[150px]`}
              >
                <h1 className="font-semibold text-lg text-hirejob-slate">
                  Portfolio Not Available
                </h1>
              </div>
            )}
            {profile.experiences.length !== 0 ? (
              <ul className={`${expBar.expDisplay} flex-col my-3`}>
                {profile.experiences.map((experience) => (
                  <CardExperience
                    key={experience.id}
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
                  Work Experience Not Available
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
