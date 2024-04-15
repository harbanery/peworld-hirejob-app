import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../../login.module.css";
import api from "../../../../configs/api";
import Dashboard from "../../../../component/module/auth/Dashboard";
import AuthDesc from "../../../../component/module/auth/AuthDesc";
import Input from "../../../../component/base/Input";
import Button from "../../../../component/base/Button";

const RegWorker = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    confirmPassword: "",
  });

  const handleRegister = () => {
    if (form.password === form.confirmPassword) {
      api
        .post("/workers/register", {
          email: form.email,
          password: form.password,
          name: form.name,
          phone: form.phone,
        })
        .then(() => {
          alert("Sign up successfully.");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err.response);
          alert(`Sign up failed. Try again!
          
          
          Error: ${err.response.data.message}`);
        });
    }
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main
      className={`container max-w-full flex items-center lg:block py-[39px] ${style.bgAuthWorker}`}
    >
      <div className="flex mx-5 md:mx-[75px] rounded lg:rounded-none bg-[#ffffffd3] lg:bg-hirejob-light lg:bg-none shadow-md lg:shadow-none px-5 lg:px-0 ">
        <Dashboard />

        <section className="w-full py-9 lg-py-0 lg:w-[650px] 2xl:w-3/5 ml-0 lg:ml-[75px] mt-0 lg:mt-[106px] flex flex-col justify-center lg:justify-start text-hirejob-dark">
          <AuthDesc
            title="Hello, Pewpeople..."
            para="Celebrate excellence and explore boundless opportunities with Peworld."
          />
          <Input
            label="Full Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <Input
            label="Phone Number"
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
          />
          <div className="my-3"></div>
          <Button
            onClick={handleRegister}
            colorButton={"secondary"}
            extra="p-[15px] my-4"
          >
            Sign Up
          </Button>
          <h6 className="font-normal text-base mt-3 leading-[21.79px] block text-center">
            Do you already have an account?{" "}
            <Link
              className="text-hirejob-yellow-normal hover:text-hirejob-yellow-dark"
              to="/login"
            >
              Sign in here.
            </Link>
          </h6>
        </section>
      </div>
    </main>
  );
};

export default RegWorker;
