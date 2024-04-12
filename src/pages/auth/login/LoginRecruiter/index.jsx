import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "../../../../component/module/auth/Dashboard";
import AuthDesc from "../../../../component/module/auth/AuthDesc";
import Input from "../../../../component/base/Input";
import Button from "../../../../component/base/Button";
import style from "../../login.module.css";
import api from "../../../../configs/api";

const LoginRecruiter = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    api({
      method: "POST",
      url: `/auth/login`,
      data: {
        email: form.email,
        password: form.password,
      },
    })
      .then((res) => {
        const { token, refreshToken } = res.data.data;
        localStorage.setItem("token", token);
        localStorage.setItem("resfreshToken", refreshToken);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <main
      className={`container h-screen max-w-full flex items-center lg:block py-[39px] ${style.bgAuthRecruiter}`}
    >
      <div className="flex mx-5 md:mx-[75px] rounded lg:rounded-none bg-[#ffffffd3] lg:bg-hirejob-light lg:bg-none shadow-md lg:shadow-none px-5 lg:px-0 ">
        <Dashboard />

        <section className="w-full py-9 lg-py-0 lg:w-[650px] 2xl:w-3/5 ml-0 lg:ml-[75px] mt-0 lg:mt-[106px] flex flex-col justify-center lg:justify-start text-hirejob-dark">
          <AuthDesc
            title="Halo, Pewpeople"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor."
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Masukkan alamat email"
          />
          <Input
            label="Kata Sandi"
            type="password"
            name="password"
            placeholder="Masukkan kata sandi"
          />
          <h6 className="font-normal text-base leading-[21.79px] block my-2 text-right">
            <Link
              className="text-hirejob-yellow-normal hover:text-hirejob-yellow-dark"
              to="/recruiter/reset-password"
            >
              Lupa kata sandi?
            </Link>
          </h6>
          <Button colorButton={"secondary"} extra="p-[15px] my-4">
            Masuk
          </Button>
          <h6 className="font-normal text-base mt-3 leading-[21.79px] block text-center">
            Anda belum punya akun?{" "}
            <Link
              className="text-hirejob-yellow-normal hover:text-hirejob-yellow-dark"
              to="/recruiter/register"
            >
              Daftar disini
            </Link>
          </h6>
        </section>
      </div>
    </main>
  );
};

export default LoginRecruiter;
