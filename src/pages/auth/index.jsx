import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "../../styles/pages/auth.module.css";

const Auth = () => {
  const { loading, response } = useSelector((state) => state.auth);

  return (
    <main
      className={`container h-screen max-w-full flex items-center lg:block py-[39px] ${style.bgAuthWorker}`}
    >
      <Modal
        isOpen={response.open}
        error={response.error}
        message={response.message}
      />
      <div className="flex mx-5 md:mx-[75px] rounded lg:rounded-none bg-[#ffffffd3] lg:bg-hirejob-light lg:bg-none shadow-md lg:shadow-none px-5 lg:px-0 ">
        <Dashboard />

        <Outlet />
      </div>
    </main>
  );
};

export default Auth;
