import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "../../../../component/module/auth/Dashboard";
import AuthDesc from "../../../../component/module/auth/AuthDesc";
import Input from "../../../../component/base/Input";
import Button from "../../../../component/base/Button";
import style from "../../../../styles/pages/auth.module.css";
import loader from "../../../../styles/components/loading.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registerRecruiter } from "../../../../configs/redux/action/recruiterAction";
import { reset } from "../../../../configs/redux/action/authAction";
import Modal from "../../../../component/base/Modal";

const RegRecruiter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { loading, response } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
    position: "",
    phone: "",
    confirmPassword: "",
  });

  const handleRegister = () => {
    e.preventDefault();
    const errors = {};

    Object.keys(form).forEach((key) => {
      const errorMessage = validateRegister(key, form[key]);
      if (errorMessage) {
        errors[key] = errorMessage;
      }
    });

    if (Object.keys(errors).length === 0) {
      // Form is valid, submit data
      dispatch(registerRecruiter(form, navigate));
    } else {
      // Form is invalid, set errors
      setErrors(errors);
    }
  };

  const handleNavigate = () => {
    dispatch(reset());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateRegister(name, value);

    setErrors({
      ...errors,
      [name]: errorMessage,
    });

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <main
      className={`container max-w-full flex items-center lg:block py-[39px] ${style.bgAuthRecruiter}`}
    >
      <Modal
        isOpen={response.open}
        error={response.error}
        message={response.message}
      />
      <div className="flex mx-5 md:mx-[75px] rounded lg:rounded-none bg-[#ffffffd3] lg:bg-hirejob-light lg:bg-none shadow-md lg:shadow-none px-5 lg:px-0 ">
        <Dashboard />

        <section className="w-full py-9 lg-py-0 lg:w-[650px] 2xl:w-3/5 ml-0 lg:ml-[75px] mt-0 lg:mt-[106px] flex flex-col justify-center lg:justify-start text-hirejob-dark">
          <AuthDesc
            title="Welcome, Recruiters"
            para="Create your recruiter profile now and start connecting with top talent for your job openings."
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
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <Input
            label="Company"
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Enter your company"
          />
          <Input
            label="Position"
            type="text"
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="Enter your position"
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
            isDisabled={loading}
          >
            {!loading ? (
              `Sign In`
            ) : (
              <div className={`mx-auto ${loader.loaderDotsl21}`}></div>
            )}
          </Button>
          <h6 className="font-normal text-base mt-3 leading-[21.79px] block text-center">
            Do you already have an account?{" "}
            <Link
              className="text-hirejob-yellow-normal hover:text-hirejob-yellow-dark"
              to="/login"
              onClick={handleNavigate}
            >
              Sign in here.
            </Link>
          </h6>
        </section>
      </div>
    </main>
  );
};

export default RegRecruiter;
