import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageLogo from "../../../../assets/img/header-logo.png";
import Button from "../../../base/Button";

const NavbarLanding = ({
  auth = false,
  role = "",
  popoverVisible,
  togglePopover,
  handleLogout,
}) => {
  return (
    <>
      {!auth ? (
        <nav className="px-4 md:px-16 lg:px-[150px] py-5 md:py-[45px] flex justify-between items-center relative">
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
                Recruiter Site
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
                Sign In
              </Button>
            </NavLink>
            <NavLink to={`/register`}>
              <Button
                colorButton={`primary`}
                size="text-sm"
                isBorder={true}
                extra={`hidden md:block leading-6 px-[10px] md:px-5 py-[10px]`}
              >
                Sign Up
              </Button>
            </NavLink>
            <Button
              onClick={togglePopover}
              colorButton={`primary`}
              isOutline={true}
              size="text-2xl"
              extra={`block md:hidden py-[10px] px-[15px]`}
            >
              &#9776;
            </Button>
            {popoverVisible && (
              <div
                id="popover-content"
                className="block md:hidden absolute w-1/2 sm:w-1/2 md:w-2/5 xl:w-1/5 h-auto p-1 top-16 right-4 md:top-20 md:right-28 lg:right-48 z-10 bg-hirejob-white border border-hirejob-frost rounded-md shadow-lg transition duration-500"
              >
                <NavLink to={`/login`}>
                  <Button
                    colorButton={`primary`}
                    isBorder={true}
                    isOutline={true}
                    extra={`leading-6 px-[10px] py-[10px] mb-1`}
                  >
                    Sign In
                  </Button>
                </NavLink>
                <NavLink to={`/register`}>
                  <Button
                    colorButton={`primary`}
                    isBorder={true}
                    extra={`leading-6 px-[10px] py-[10px]`}
                  >
                    Sign Up
                  </Button>
                </NavLink>
                <NavLink to={`/recruiter/register`}>
                  <div className=" w-full py-[10px] text-center">
                    <span className="font-semibold text-base text-hirejob-purple-normal hover:text-hirejob-purple-dark after:content-[''] after:block after:py-0 after:border-b-2 after:scale-x-0 after:transition after:ease-linear after:duration-200 after:hover:scale-x-[.6]">
                      Recruiter Site
                    </span>
                  </div>
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      ) : (
        <nav className="px-4 md:px-16 lg:px-[150px] py-5 md:py-[45px] flex justify-between items-center relative">
          <div className="flex justify-between items-center gap-12 md:gap-16 xl:gap-36">
            <Link to={`/`}>
              <img
                className="md:w-auto w-24"
                src={imageLogo}
                alt={`logo-peworld`}
              />
            </Link>
            <NavLink
              to={`/main/home`}
              className="inline-block font-semibold text-base md:text-lg text-hirejob-purple-normal hover:text-hirejob-purple-dark after:content-[''] after:block after:py-0 after:border-b-2 after:scale-x-0 after:transition after:ease-linear after:duration-200 after:hover:scale-x-100"
            >
              Search Worker
            </NavLink>
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
              Sign Out
            </Button>
            <Button
              onClick={togglePopover}
              colorButton={`primary`}
              isOutline={true}
              size="text-2xl"
              extra={`block md:hidden py-[10px] px-[15px]`}
            >
              &#9776;
            </Button>
            {popoverVisible && (
              <div
                id="popover-content"
                className="block md:hidden absolute w-1/2 sm:w-1/2 md:w-2/5 xl:w-1/5 h-auto p-1 top-16 right-4 md:top-20 md:right-28 lg:right-48 z-10 bg-hirejob-white border border-hirejob-frost rounded-md shadow-lg transition duration-500"
              >
                <NavLink
                  to={
                    role === "worker"
                      ? `/main/profile/worker`
                      : `/main/profile/company`
                  }
                >
                  <Button
                    colorButton={`primary`}
                    isBorder={true}
                    extra={`leading-6 px-[10px] py-[10px] mb-1`}
                  >
                    Profile
                  </Button>
                </NavLink>
                <Button
                  colorButton={`primary`}
                  onClick={handleLogout}
                  isBorder={true}
                  isOutline={true}
                  extra={`leading-6 px-[10px] py-[10px]`}
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  );
};

export default NavbarLanding;
