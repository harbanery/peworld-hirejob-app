import React, { useState, useEffect } from "react";
import Input from "../../../../../base/Input";
import Button from "../../../../../base/Button";
import Tag from "../../../../../base/Tag";
import api from "../../../../../../configs/api";

const Skill = () => {
  const [skill, setSkill] = useState("");
  const [mySkill, setMySkill] = useState([]);

  const getSkill = () => {
    api.get("/skills").then((res) => {
      const skills = res.data.data;
      setMySkill(skills);
    });
  };

  const handleAddSkill = () => {
    api
      .post(`/skills`, { skill_name: skill })
      .then(() => {
        alert(`Skill ${skill} successfully added.`);
        setSkill("");
        getSkill();
      })
      .catch((err) => {
        alert("Failed to add skill. Please try again.");
        console.log(err.response);
      });
  };

  const deleteSkill = (id) => {
    api.delete(`/skills/${id}`).then(() => {
      alert("Skill successfully deleted!");
      getSkill();
    });
  };

  useEffect(() => {
    getSkill();
  }, []);

  return (
    <section className="w-full rounded-lg py-4 bg-hirejob-white">
      <div className="font-semibold text-[22px] border-b border-[#C4C4C4] px-9 py-[18px] text-hirejob-dark">
        <h1>Skills</h1>
      </div>
      <div className="py-4 px-9 flex justify-between items-center gap-[30px]">
        <div className="w-full">
          <Input
            name={`skill`}
            placeholder={`Enter your skill (e.g., Java)`}
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        </div>
        <div>
          <Button
            onClick={handleAddSkill}
            colorButton={`secondary`}
            extra={`p-[13.5px]`}
          >
            Add
          </Button>
        </div>
      </div>
      {mySkill && (
        <ul className="pb-4 px-9 font-semibold text-xs mt-[10px] flex flex-row justify-center md:justify-start flex-wrap text-hirejob-white">
          {mySkill.map((item) => (
            <Tag key={item.id} deleteClick={() => deleteSkill(item.id)}>
              {item.skill_name}
            </Tag>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Skill;
