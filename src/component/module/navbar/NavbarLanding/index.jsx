import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import imageLogo from "../../../../assets/img/header-logo.png";
import Button from "../../../base/Button";
import api from "../../../../configs/api";

const NavbarLanding = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState("");
  const [classNav, setClassNav] = useState("h-0");

  const getRole = () => {
    api.get("/auth/check-role").then((res) => {
      const role = res.data.data.data.role;
      setRole(role);
    });
  };

  const handleLogout = () => {
    api
      .get(`/auth/logout`)
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("resfreshToken");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getRole();
      setAuth(true);
    }
  }, []);

  return (
    <>
      {!auth ? (
        <nav className="px-4 md:px-16 lg:px-[150px] py-5 md:py-[45px] flex justify-between items-center">
          <Link to={`/`}>
            <img
              className="md:w-auto w-24"
              src={imageLogo}
              alt={`logo-peworld`}
            />
          </Link>

          <div className="flex justify-between items-center gap-3 md:gap-4">
            <NavLink to={`/recruiter/register`}>
              <span className="hidden md:inline-block font-semibold text-base md:text-lg text-hirejob-purple-normal hover:text-hirejob-purple-dark after:content-[''] after:block after:py-0 after:border-b-2 after:scale-x-0 after:transition after:ease-linear after:duration-200 after:hover:scale-x-100">
                Untuk Perusahaan
              </span>
            </NavLink>
            <NavLink to={`/login`}>
              {/* button */}
              <Button
                colorButton={`primary`}
                size="text-sm"
                isBorder={true}
                isOutline={true}
                extra={`hidden md:block leading-6 px-[10px] md:px-5 py-[10px]`}
              >
                Masuk
              </Button>
            </NavLink>
            <NavLink to={`/register`}>
              <Button
                colorButton={`primary`}
                size="text-sm"
                isBorder={true}
                extra={`hidden md:block leading-6 px-[10px] md:px-5 py-[10px]`}
              >
                Daftar
              </Button>
            </NavLink>
            <Button
              onClick={() => setClassNav("h-full")}
              colorButton={`primary`}
              size="text-lg"
              extra={`block md:hidden py-[10px] px-[15px]`}
            >
              &#9776;
            </Button>
          </div>
          <div
            className={`w-full ${classNav} md:h-0 fixed z-[1] top-0 left-0 bg-[#fffffff1] text-hirejob-purple-normal overflow-hidden transition duration-500`}
          >
            <button
              onClick={() => setClassNav("h-0")}
              className="font-bold text-6xl block p-2 absolute top-5 right-10 text-hirejob-purple-normal hover:text-hirejob-purple-dark focus:text-hirejob-purple-dark transition duration-300 "
            >
              &times;
            </button>
            <div className="relative top-1/4 w-full text-center mt-8">
              <NavLink to={`/login`}>
                <Button
                  colorButton={`primary`}
                  size="text-2xl"
                  isBorder={true}
                  isOutline={true}
                  isWidthFull={false}
                  extra={`w-4/5 my-1 leading-6 p-[10px]`}
                >
                  Masuk
                </Button>
              </NavLink>
              <NavLink to={`/register`}>
                <Button
                  colorButton={`primary`}
                  size="text-2xl"
                  isBorder={true}
                  isWidthFull={false}
                  extra={`w-4/5 my-1 leading-6 p-[10px]`}
                >
                  Daftar
                </Button>
              </NavLink>
              <NavLink to={`/recruiter/register`}>
                <span className="inline-block font-medium text-3xl mt-5 text-hirejob-purple-normal hover:text-hirejob-purple-dark after:content-[''] after:block after:py-0 after:border-b-2 after:scale-x-0 after:transition after:ease-linear after:duration-200 after:hover:scale-x-100">
                  Untuk Perusahaan
                </span>
              </NavLink>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="px-4 md:px-16 lg:px-[150px] py-5 md:py-[45px] flex justify-between items-center">
          <div className="flex justify-between items-center gap-12 md:gap-16 xl:gap-36">
            <Link to={`/`}>
              <img
                className="md:w-auto w-24"
                src={imageLogo}
                alt={`logo-peworld`}
              />
            </Link>
            {role === "recruiter" ? (
              <NavLink
                to={`/main/home`}
                className="inline-block font-semibold text-base md:text-lg text-hirejob-purple-normal hover:text-hirejob-purple-dark after:content-[''] after:block after:py-0 after:border-b-2 after:scale-x-0 after:transition after:ease-linear after:duration-200 after:hover:scale-x-100"
              >
                Home
              </NavLink>
            ) : (
              <></>
            )}
          </div>

          <div className="flex justify-between items-center gap-3 md:gap-4">
            <NavLink
              to={
                role === "worker"
                  ? `/main/profile/worker`
                  : `/main/profile/company`
              }
            >
              <Button
                colorButton={`primary`}
                size="text-sm"
                isBorder={true}
                extra={`hidden md:block leading-6 px-[10px] md:px-5 py-[10px]`}
              >
                Profile
              </Button>
            </NavLink>
            <Button
              colorButton={`primary`}
              onClick={handleLogout}
              size="text-sm"
              isBorder={true}
              isOutline={true}
              extra={`hidden md:block leading-6 px-[10px] md:px-5 py-[10px]`}
            >
              Logout
            </Button>
            <Button
              onClick={() => setClassNav("h-full")}
              colorButton={`primary`}
              size="text-lg"
              extra={`block md:hidden py-[10px] px-[15px]`}
            >
              &#9776;
            </Button>
          </div>
          <div
            className={`w-full ${classNav} md:h-0 fixed z-[1] top-0 left-0 bg-[#fffffff1] text-hirejob-purple-normal overflow-hidden transition duration-500`}
          >
            <button
              onClick={() => setClassNav("h-0")}
              className="font-bold text-6xl block p-2 absolute top-5 right-10 text-hirejob-purple-normal hover:text-hirejob-purple-dark focus:text-hirejob-purple-dark transition duration-300 "
            >
              &times;
            </button>
            <div className="relative top-1/4 w-full text-center mt-8">
              <NavLink
                to={
                  role === "worker"
                    ? `/main/profile/worker`
                    : `/main/profile/company`
                }
              >
                <Button
                  colorButton={`primary`}
                  size="text-2xl"
                  isBorder={true}
                  isWidthFull={false}
                  extra={`w-4/5 my-1 leading-6 p-[10px]`}
                >
                  Profile
                </Button>
              </NavLink>
              <Button
                colorButton={`primary`}
                onClick={handleLogout}
                size="text-2xl"
                isBorder={true}
                isOutline={true}
                isWidthFull={false}
                extra={`w-4/5 my-1 leading-6 p-[10px]`}
              >
                Logout
              </Button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavbarLanding;
