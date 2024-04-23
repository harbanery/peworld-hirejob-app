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
import { useDispatch, useSelector } from "react-redux";
import { createHire } from "../../../configs/redux/action/hireAction";
import { getWorkerProfile } from "../../../configs/redux/action/workerAction";
import { getSkills } from "../../../configs/redux/action/skillAction";

const Hire = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { workerId } = useParams();
  // const [role, setRole] = useState("");
  const { role } = useSelector((state) => state.checkRole);
  const { user, profile } = useSelector((state) => state.worker);
  // const [workerSkills, setWorkerSkills] = useState([]);
  // const [worker, setWorker] = useState({
  //   id: "",
  //   name: "",
  //   job_desk: "",
  //   domicile: "",
  //   workplace: "",
  //   description: "",
  // });

  const [hire, setHire] = useState({
    message_purpose: "project",
    worker_id: "",
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  // const [recruiter, setRecruiter] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  // });

  // const getRole = () => {
  //   api.get("/auth/check-role").then((res) => {
  //     const role = res.data.data.data.role;
  //     // console.log(role);
  //     if (role === "recruiter") {
  //       getWorkerDataId(workerId);
  //       getWorkerSkillsId(workerId);
  //       getRecruiter();
  //     } else {
  //       navigate(`/`);
  //     }
  //   });
  // };

  const getWorkerDataId = (id) => {
    dispatch(getWorkerProfile(id));
    // api.get(`/workers/${id}`).then((res) => {
    //   const workerData = res.data.data;
    //   //   console.log(workerData);
    //   setWorker(workerData);
    // });
  };

  const getWorkerSkillsId = (id) => {
    dispatch(getSkills(id));
    // api.get(`/skills/${id}`).then((res) => {
    //   const skills = res.data.data;
    //   //   console.log(skills);
    //   setWorkerSkills(skills);
    // });
  };

  // const getRecruiter = () => {
  //   api.get("/recruiters/profile").then((res) => {
  //     const profileData = res.data.data;
  //     //   console.log(profileData);
  //     setRecruiter(profileData);
  //   });
  // };

  const handleAddHire = () => {
    dispatch(createHire(hire, workerId, navigate));
    // api
    //   .post(`/hire`, {
    //     message_purpose: hire.message_purpose,
    //     worker_id: worker.id,
    //     name: hire.name,
    //     email: hire.email,
    //     phone: hire.phone,
    //     desciption: hire.description,
    //   })
    //   .then(() => {
    //     alert(
    //       `Successfully sent to ${worker.name}! Now wait for the worker to accept your offer.`
    //     );
    //     navigate(`/main/home`);
    //   })
    //   .catch((err) => {
    //     alert("Failed to send. Please try again later.");
    //     console.log(err.response);
    //   });
  };

  const handleChange = (e) => {
    setHire({
      ...hire,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (role === "recruiter") {
      getWorkerDataId(workerId);
      getWorkerSkillsId(workerId);
    } else {
      navigate(`/main/home`);
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
                    src={user.photo ? user.photo : imageUser}
                    alt={user.name}
                  />
                </div>
              </div>
              <h1 className="font-semibold text-[22px] mt-[13px] text-hirejob-dark">
                {user.name ? user.name : "Unknown"}
              </h1>
              <h2 className="font-normal text-sm mt-[10px] text-hirejob-dark">
                {user.job_desk}
              </h2>

              {user.domicile && (
                <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm mt-[13px] text-hirejob-gray">
                  <img className=" w-4 h-auto" src={iconMap} />
                  <span>{user.domicile ? user.domicile : "Somewhere"}</span>
                </div>
              )}

              <h3 className="font-normal text-sm mt-[13px] text-hirejob-gray">
                {user.workplace}
              </h3>

              <p className=" my-[18px] font-normal text-sm leading-6 text-hirejob-gray">
                {user.description}
              </p>

              {profile.skills.length !== 0 && (
                <>
                  <h1 className="font-semibold text-[22px] mt-[13px] text-hirejob-dark">
                    Skill
                  </h1>
                  <ul className="font-semibold text-xs mt-[10px] flex flex-row justify-center md:justify-start flex-wrap text-hirejob-white">
                    {profile.skills.map((skill) => (
                      <Tag key={skill.id}>{skill.skill_name}</Tag>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </aside>

          <section className="w-full lg:w-3/5 xl:w-2/3 rounded-lg xl:pr-36">
            <h1 className=" font-semibold text-[32px]">
              {`Hire ${user.name ? user.name : "Someone"}`}
            </h1>
            <p className="font-normal text-lg text-hirejob-slate mt-4 my-12">
              After that, feel free to contact for any additional details or
              inquiries.
            </p>

            <div className="flex flex-col flex-nowrap py-4">
              <span className="font-normal text-xs text-hirejob-gray mb-1">
                Message Purpose
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
              label={`Full Name`}
              name={`name`}
              value={hire.name}
              onChange={handleChange}
              placeholder={`Enter your full name`}
            />

            <Input
              label={`Email`}
              name={`email`}
              value={hire.email}
              onChange={handleChange}
              placeholder={`Enter your email`}
            />

            <Input
              label={`Phone Number`}
              name={`phone`}
              value={hire.phone}
              onChange={handleChange}
              placeholder={`Enter your phone number`}
            />

            <Input
              label={`Job Brief`}
              type={`textarea`}
              name={`description`}
              value={hire.description}
              onChange={handleChange}
              rows={`10`}
              placeholder={`Describe the job briefly`}
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
