import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import imageLogo from "../../../../assets/img/header-logo.png";
import iconBell from "../../../../assets/img/icons/bell.png";
import iconMail from "../../../../assets/img/icons/mail.png";
import imageUserNav from "../../../../assets/img/profile-img/user-noimage.png";
import imageNoNotif from "../../../../assets/img/icons/no-notification.png";
import CardNotifications from "../../main/profile/CardNotifications";
import { useDispatch } from "react-redux";
import { resetWorkers } from "../../../../configs/redux/action/workerAction";
import Button from "../../../base/Button";
import { logout } from "../../../../configs/redux/action/authAction";

const NavbarProfile = ({
  isShadow = false,
  popoverVisible,
  togglePopover,
  role,
  notifHire,
  image,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const handleClickOutside = (event) => {
    const isDropdown = event.target.closest(".dropdown-menu");
    const isButton = event.target.closest(".dropdown-button");

    if (!isDropdown && !isButton) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  // const handleNavigation = () => {
  //   dispatch(resetWorkers());
  // };
  // const [role, setRole] = useState("");
  // const [image, setImage] = useState("");
  // const [notifHire, setNotifHire] = useState([]);

  // const getRole = () => {
  //   if (role === "worker") {
  //     // getWorker();
  //     getHireFromWorker();
  //   } else {
  //     // getRecruiter();
  //     getHireFromRecruiter();
  //   }
  // };

  // const getWorker = () => {
  // api.get("/workers/profile").then((res) => {
  //   const image = res.data.data.photo;
  //   // console.log(workerData);
  //   setImage(image);
  // });
  // };

  // const getHireFromWorker = () => {
  //   api.get("/hire/workers").then((res) => {
  //     const data = res.data.data.filter(
  //       (hire) => hire.message_purpose && hire.email_request_hire
  //     );
  //     // console.log(data);
  //     setNotifHire(data);
  //   });
  // };

  // const getRecruiter = () => {
  //   api.get("/recruiters/profile").then((res) => {
  //     const image = res.data.data.photo;
  //     // console.log(profileData);
  //     setImage(image);
  //   });
  // };

  // const getHireFromRecruiter = () => {
  //   api.get("/hire/recruiters").then((res) => {
  //     const data = res.data.data.filter(
  //       (hire) => hire.message_purpose && hire.email_request_hire
  //     );
  //     // console.log(data);
  //     setNotifHire(data);
  //   });
  // };

  // useEffect(() => {
  //   getRole();
  // }, []);

  return (
    <nav
      className={`px-4 md:px-16 lg:px-[150px] py-5 md:py-[33px] flex justify-between items-center ${
        isShadow && `shadow-lg`
      } bg-hirejob-white`}
    >
      <Link to={`/`}>
        <img className="md:w-auto w-24" src={imageLogo} alt={`logo-peworld`} />
      </Link>

      <div className="flex justify-between items-center gap-7 md:gap-10">
        <button onClick={togglePopover} className="relative">
          <img className="w-5 md:w-auto h-auto" src={iconBell} />
          {/* <span className=" bg-hirejob-purple-normal rounded-[50%] text-hirejob-white py-px px-1.5 text-xs absolute -top-2 -right-2">
            1
          </span> */}
        </button>
        {popoverVisible && (
          <div
            id="popover-content"
            className={`block absolute w-4/5 sm:w-1/2 md:w-2/5 xl:w-1/5 ${
              role === "recruiter" && notifHire.length > 1
                ? `h-2/5`
                : role === "worker" && notifHire.length > 2
                ? `h-2/5`
                : `h-auto`
            } top-14 right-8 md:top-20 md:right-28 lg:right-48 z-10 bg-hirejob-white border border-hirejob-frost rounded-md shadow-lg transition duration-500 ${
              notifHire.length > 0 && `overflow-y-scroll`
            }`}
          >
            {notifHire.length !== 0 ? (
              <CardNotifications role={role} arrayNotif={notifHire} />
            ) : (
              // notifHire.map((hire) => (
              //   <CardNotifications
              //     key={hire.id}
              //     message={hire.message_purpose}
              //     company_name={hire.recruiter_company}
              //     date={hire.created_at}
              //   />
              // ))
              <div className="w-full h-full flex flex-col justify-center items-center gap-4 px-10 py-20">
                <div>
                  <img className="" src={imageNoNotif} />
                </div>
                <p className="font-normal text-sm text-hirejob-dark">
                  No Notifications Available
                </p>
              </div>
            )}
            {/* <div className="w-full border-y border-hirejob-frost">
              <div className="flex px-5 pt-5 gap-5">
                <div className="w-1/4">
                  <img src={imageUserNav} />
                </div>
                <div className="w-3/4">
                  <p className="font-medium text-sm leading-6 text-hirejob-dark">
                    Seorang perekrut dari perusahaan PT Pijar Mahir ingin
                    menawari sebuah pekerjaan kepada Anda
                  </p>
                  <h3 className="font-normal text-sm text-hirejob-gray my-2">
                    1 minute ago
                  </h3>
                </div>
              </div>
              <div className="w-full text-center">
                <Button
                  colorButton={`primary`}
                  isWidthFull={false}
                  extra={`w-5/6 mt-2 mx-5 mb-5 p-2`}
                >
                  Lihat Penawaran
                </Button>
              </div>
            </div>
            <div className="w-full border-y border-hirejob-frost">
              <div className="flex px-5 pt-5 gap-5">
                <div className="w-1/5 sm:w-1/6 md:w-1/4">
                  <img src={imageUserNav} />
                </div>
                <div className="w-4/5 sm:w-5/6 md:w-3/4">
                  <p className="font-medium text-sm leading-6 text-hirejob-dark">
                    Seorang perekrut dari perusahaan PT Pijar Mahir ingin
                    menawari sebuah pekerjaan kepada Anda
                  </p>
                  <h3 className="font-normal text-sm text-hirejob-gray my-2">
                    1 minute ago
                  </h3>
                </div>
              </div>
              <div className="w-full text-center">
                <Button
                  colorButton={`primary`}
                  isWidthFull={false}
                  extra={`w-5/6 mt-2 mx-5 mb-5 p-2`}
                >
                  Lihat Penawaran
                </Button>
              </div>
            </div> */}
          </div>
        )}
        <div>
          <img className="w-5 md:w-auto h-auto" src={iconMail} />
        </div>
        <div className="w-[32px] h-[32px] overflow-hidden rounded-[50%]">
          <Button onClick={() => setVisible(!visible)}>
            <img
              className="w-full h-auto dropdown-button"
              src={image ? image : imageUserNav}
            />
          </Button>
          {visible && (
            <div className="dropdown-menu w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-auto rounded p-1 gap-1 flex flex-col bg-white absolute top-0 right-0 mt-16 md:mt-20 sm:mr-2 md:mr-12 lg:mr-32 z-50 border border-hirejob-purple-normal shadow-lg">
              <Button
                onClick={() =>
                  role === "worker"
                    ? navigate(`/main/profile/worker`)
                    : navigate(`/main/profile/company`)
                }
                isBorder={true}
                colorButton={`primary`}
                radius="rounded"
                extra={`py-2`}
              >
                Profile
              </Button>
              <Button
                onClick={handleLogout}
                isBorder={true}
                colorButton={`primary`}
                isOutline={true}
                radius="rounded"
                extra={`py-2`}
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
        {/* <Link
          to={
            role === "worker" ? `/main/profile/worker` : `/main/profile/company`
          }
          className="w-[32px] h-[32px] overflow-hidden rounded-[50%]"
        >
          <img className="w-full h-auto" src={image ? image : imageUserNav} />
        </Link> */}
      </div>
    </nav>
  );
};

export default NavbarProfile;
