import React, { useState, useEffect } from "react";
import Input from "../../../../../base/Input";
import Button from "../../../../../base/Button";
import TagExtra from "../../../../../base/TagExtra";
import api from "../../../../../../configs/api";
import currentMonthYear from "../../../../../../configs/currentMonthYear";

const WorkExperience = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [experience, setExperience] = useState({
    position: "",
    company: "",
    work_date: currentMonthYear(),
    description: "",
  });
  const [myExperience, setMyExperience] = useState([]);

  const getWork = () => {
    api.get("/experience").then((res) => {
      const experiences = res.data.data;
      setMyExperience(experiences);
    });
  };

  const handleAddExperience = () => {
    const date = new Date(experience.work_date);
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    api
      .post(`/experience`, {
        position: experience.position,
        company: experience.company,
        work_month: month,
        work_year: year,
        description: experience.description,
      })
      .then(() => {
        alert("Experience successfully added.");
        setExperience({
          position: "",
          company: "",
          work_date: currentMonthYear(),
          description: "",
        });
        getWork();
      })
      .catch((err) => {
        alert("Failed to add experience. Please try again.");
        console.log(err.response);
      });
  };

  const getDataExperience = (id) => {
    setExperience({
      position: "",
      company: "",
      work_date: "",
      description: "",
    });
    api.get("/experience").then((res) => {
      const dataExperience = res.data.data.filter((item) => item.id === id);
      dataExperience.map((value) => {
        const setMonth = (
          months.findIndex((month) => month === value.work_month) + 1
        )
          .toString()
          .padStart(2, "0");
        setExperience({
          position: value.position,
          company: value.company,
          work_date: `${value.work_year}-${setMonth}`,
          description: value.description,
        });
      });
    });
  };

  const handleUpdateExperience = (id) => {
    const date = new Date(experience.work_date);
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    api
      .put(`/experience/${id}`, {
        position: experience.position,
        company: experience.company,
        work_month: month,
        work_year: year,
        description: experience.description,
      })
      .then(() => {
        alert("Experience successfully updated.");
        setExperience({
          position: "",
          company: "",
          work_date: currentMonthYear(),
          description: "",
        });
        getWork();
      })
      .catch((err) => {
        alert("Failed to update experience. Please try again.");
        console.log(err.response);
      });
  };

  const deleteExperience = (id) => {
    api.delete(`/experience/${id}`).then(() => {
      alert("Experience successfully deleted.");
      getWork();
    });
  };

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getWork();
  }, []);

  return (
    <section className="w-full rounded-lg py-4 bg-hirejob-white">
      <div className="font-semibold text-[22px] border-b border-[#C4C4C4] px-9 py-[18px] text-hirejob-dark">
        <h1>Work Experience</h1>
      </div>
      <div className="py-4 px-9">
        <Input
          label={`Position`}
          name={`position`}
          placeholder={`Enter your position (e.g., Web Developer)`}
          value={experience.position}
          onChange={handleChange}
        />
        <div className="flex justify-between flex-wrap xl:flex-nowrap xl:gap-5">
          <div className="w-full">
            <Input
              label={`Company`}
              name={`company`}
              placeholder={`Enter your company (e.g., Google)`}
              value={experience.company}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <Input
              label={`Month/Year`}
              type="month"
              name={`work_date`}
              value={experience.work_date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-8">
          <Input
            label={`Job Description`}
            type={`textarea`}
            name={`description`}
            rows={`6`}
            placeholder={`Share your job responsibilities briefly`}
            value={experience.description}
            onChange={handleChange}
          />
        </div>
        <div
          className={`pt-12 border-t ${
            myExperience && `pb-12 border-b`
          } border-hirejob-frost`}
        >
          <Button
            onClick={handleAddExperience}
            colorButton={`secondary`}
            isBorder={true}
            isOutline={true}
            extra={`p-[13.5px]`}
          >
            Add Work Experience
          </Button>
        </div>
        {myExperience && (
          <ul className="pt-8 pb-4 mt-[10px] flex flex-row justify-center md:justify-start flex-wrap text-hirejob-white">
            {myExperience.map((exp) => (
              <TagExtra
                key={exp.id}
                date={`${exp.work_month} ${exp.work_year}`}
                position={exp.position}
                company={exp.company}
                getClick={() => getDataExperience(exp.id)}
                updateClick={() => handleUpdateExperience(exp.id)}
                deleteClick={() => deleteExperience(exp.id)}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default WorkExperience;
