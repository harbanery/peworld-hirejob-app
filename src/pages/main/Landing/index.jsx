import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./landing.module.css";
import { checkRole } from "../../../configs/redux/action/checkRoleAction";
import { logout } from "../../../configs/redux/action/authAction";
import imageLanding1 from "../../../assets/img/landing-page-1.png";
import imageLanding2 from "../../../assets/img/landing-page-2.png";
import imageLanding3 from "../../../assets/img/landing-page-3.png";
import arrowIconLeft from "../../../assets/img/icons/prev.png";
import arrowIconRight from "../../../assets/img/icons/next.png";
import imageUser1 from "../../../assets/img/profile-img/user-1.png";
import imageUser2 from "../../../assets/img/profile-img/user-2.png";
import imageUser3 from "../../../assets/img/profile-img/user-3.png";
import tickLogo1 from "../../../assets/img/icons/tick_purple.png";
import tickLogo2 from "../../../assets/img/icons/tick_yellow.png";
import NavbarLanding from "../../../component/module/navbar/NavbarLanding";
import Footer from "../../../component/module/Footer";
import Button from "../../../component/base/Button";
import ReviewSlider from "../../../component/module/main/landing/ReviewSlider";

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.checkRole);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  useEffect(() => {
    dispatch(checkRole());
  }, []);

  return (
    <>
      <NavbarLanding auth={isLogged} role={role} handleLogout={handleLogout} />

      <main>
        <div className="container max-w-full px-4 md:px-16 lg:px-[150px] py-5">
          <section className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch justify-between gap-5">
            <div className="w-full lg:w-2/3 xl:w-[46%] lg:mt-8 xl:mt-32 text-center lg:text-left">
              <h1 className="font-semibold text-3xl xl:text-[44px] xl:leading-[70px] text-hirejob-dark">
                The Best Domestic Talent to Welcome 5.0 Era
              </h1>
              <p className="font-normal text-lg mt-5 mb-5 md:mb-14 text-hirejob-slate">
                Being part of the movement to embrace the 5.0 era with the best
                local talent is a valuable opportunity.
              </p>
              <Button
                colorButton={`primary`}
                isWidthFull={false}
                extra={`px-6 py-[21.5px]`}
              >
                Let's Start Now!
              </Button>
            </div>
            <div className="w-5/6 md:w-4/5 lg:w-auto xl:w-[54%]">
              <img
                className="w-full"
                src={imageLanding1}
                alt={`img-landing-page-1`}
              />
            </div>
          </section>
          <section className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-5 my-20">
            <div className="w-5/6 md:w-4/5 lg:w-auto xl:w-[45%]">
              <img
                className="w-full"
                src={imageLanding2}
                alt={`img-landing-page-2`}
              />
            </div>
            <div className="w-full lg:w-1/2 xl:w-[55%] text-center lg:text-left xl:pr-24">
              <h2 className="font-semibold text-2xl md:text-3xl xl:text-4xl xl:leading-[56px] lg:my-6 2xl:my-10 text-hirejob-dark">
                Why Should You Seek Talent on Peworld?
              </h2>
              <div className="flex flex-wrap lg:block my-8 xl:my-10">
                {/* tick */}
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-[22px] w-full md:w-1/2 lg:w-auto my-6 xl:my-8 font-normal text-base text-hirejob-slate">
                  <img src={tickLogo1} />
                  <span>Discover top-notch local talent</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-[22px] w-full md:w-1/2 lg:w-auto my-6 xl:my-8 font-normal text-base text-hirejob-slate">
                  <img src={tickLogo1} />
                  <span>Expand your options</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-[22px] w-full md:w-1/2 lg:w-auto my-6 xl:my-8 font-normal text-base text-hirejob-slate">
                  <img src={tickLogo1} />
                  <span>Boost collaboration</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-[22px] w-full md:w-1/2 lg:w-auto my-6 xl:my-8 font-normal text-base text-hirejob-slate">
                  <img src={tickLogo1} />
                  <span>Save time in hiring</span>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col-reverse xl:flex-row items-center xl:items-stretch justify-between gap-5 my-20">
            <div className="w-full md:w-4/5 xl:w-1/2 text-center xl:text-left xl:pl-16">
              <h2 className="font-semibold text-2xl md:text-3xl xl:text-4xl xl:leading-[56px] lg:my-6 2xl:my-10 text-hirejob-dark">
                Skill Talent
              </h2>
              <p className="font-normal text-lg my-5 text-hirejob-slate">
                Peworld empowers skillful talents by providing a platform to
                showcase their abilities and expertise, connecting them with
                opportunities that match their skills.
              </p>
              <div className="w-full h-auto md:h-60 flex flex-col flex-wrap items-center xl:items-stretch gap-y-8 my-8 xl:my-10">
                {/* tick */}
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>Java</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>Kotlin</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>PHP</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>Javascript</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>Golang</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>C++</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>Ruby</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>10+ Bahasa Lainnya</span>
                </div>
              </div>
            </div>
            <div className="w-5/6 md:w-4/5 xl:w-1/2">
              <img
                className="w-full"
                src={imageLanding3}
                alt={`img-landing-page-3`}
              />
            </div>
          </section>
        </div>

        <ReviewSlider />

        {/* <div className="block px-4 md:px-16 xl:px-[150px] py-28 bg-hirejob-ice">
          <div className="text-center mb-[52px]">
            <h1 className="font-semibold text-4xl">
              Their opinion about peworld
            </h1>
          </div>
          <div className="flex justify-between lg:justify-center md:gap-4 lg:gap-7">
            <div className="flex justify-center items-center">
              <img
                className="p-[10px] rounded-full bg-hirejob-purple-normal relative left-[50px]"
                src={arrowIconLeft}
              />
            </div>
            <div
              id="Card"
              className="flex flex-col items-center w-2/3 md:w-2/5 lg:w-1/3 2xl:w-1/4 px-[3%] py-[2%] bg-hirejob-white shadow-md"
            >
              <div className="my-3">
                <img
                  className=" max-w-28 h-auto border-[10px] border-hirejob-yellow-dark rounded-full"
                  src={imageUser2}
                  alt="Review-User-1"
                />
              </div>
              <h1 className="font-semibold text-3xl text-center">
                Harry Styles
              </h1>
              <h2 className="font-normal text-lg text-hirejob-gray">
                Software Developer
              </h2>
              <p className="font-normal text-lg leading-7 text-hirejob-slate text-center px-[2%] py-3">
                Peworld offers a fantastic platform where IT professionals like
                myself can easily discover promising career paths.
              </p>
            </div>
            <div className="hidden md:flex flex-col items-center w-2/3 md:w-2/5 lg:w-1/3 2xl:w-1/4 px-[3%] py-[2%] bg-hirejob-white shadow-md">
              <div className="my-3">
                <img
                  className=" max-w-28 h-auto border-[10px] border-hirejob-yellow-dark rounded-full"
                  src={imageUser3}
                  alt="Review-User-2"
                />
              </div>
              <h1 className="font-semibold text-3xl text-center">
                Niall Horan
              </h1>
              <h2 className="font-normal text-lg text-hirejob-gray">
                Computer Network Specialist
              </h2>
              <p className="font-normal text-lg leading-7 text-hirejob-slate text-center px-[2%] py-3">
                I'm impressed by Peworld's intuitive interface and their
                attentive customer service.
              </p>
            </div>
            <div className="hidden lg:flex flex-col items-center w-2/3 md:w-2/5 lg:w-1/3 2xl:w-1/4 px-[3%] py-[2%] bg-hirejob-white shadow-md">
              <div className="my-3">
                <img
                  className="max-w-28 h-auto border-[10px] border-hirejob-yellow-dark rounded-full"
                  src={imageUser1}
                  alt="Review-User-3"
                />
              </div>
              <h1 className="font-semibold text-3xl text-center">
                Louis Tomlinson
              </h1>
              <h2 className="font-normal text-lg text-hirejob-gray">
                Data Analyst
              </h2>
              <p className="font-normal text-lg leading-7 text-hirejob-slate text-center px-[2%] py-3">
                Peworld's commitment to promoting diversity and inclusivity
                within the IT industry creates a welcoming and enriching
                experience for all users.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="p-[10px] rounded-full bg-hirejob-purple-normal relative right-[50px]"
                src={arrowIconRight}
              />
            </div>
          </div>
        </div> */}

        <div className="container max-w-full p-4 md:p-16 lg:p-[150px]">
          <section className="flex items-center justify-center">
            <div
              className={`w-full flex flex-col md:flex-row items-center justify-between p-9 md:px-[68px] md:py-[57px] rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg text-hirejob-white ${style.bgSpecial} hover:bg-repeat hover:bg-cover`}
            >
              <h1 className="font-semibold text-xl text-center md:text-left lg:text-2xl xl:text-4xl xl:leading-[56px] pb-10 md:pb-0 w-full md:w-[45%]">
                Discover Talent on Peworld Today.
              </h1>
              <button className="font-bold text-base py-6 px-12 rounded bg-hirejob-white text-hirejob-purple-normal hover:bg-[#00000000] hover:text-hirejob-white transition duration-200 ">
                Start Now!
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Landing;
