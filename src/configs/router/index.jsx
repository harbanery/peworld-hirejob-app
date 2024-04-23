import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../../pages/auth/Login";
import RegWorker from "../../pages/auth/register/RegWorker";
import ResetInput from "../../pages/auth/resetPassword/ResetInput";
import ResetRequest from "../../pages/auth/resetPassword/ResetRequest";
import ConfirmPassword from "../../pages/auth/ConfirmPassword";
import RegRecruiter from "../../pages/auth/register/RegRecruiter";
import Landing from "../../pages/main/Landing";
import Main from "../../pages/main";
import Home from "../../pages/main/Home";
import ViewWorker from "../../pages/main/profile/worker/ViewWorker";
import EditWorker from "../../pages/main/profile/worker/EditWorker";
import ViewCompany from "../../pages/main/profile/company/ViewCompany";
import EditCompany from "../../pages/main/profile/company/EditCompany";
import Hire from "../../pages/main/Hire";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authorization */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/register" element={<RegWorker />} />
        <Route path="/reset-password" element={<ResetInput />} />
        <Route path="/request-password" element={<ResetRequest />} />
        <Route path="/change-password" element={<ConfirmPassword />} />
        <Route path="/recruiter/register" element={<RegRecruiter />} />

        {/* Main */}
        <Route path="/" element={<Landing />} />
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="profile/worker" element={<ViewWorker />} />
          <Route path="profile/:workerId" element={<ViewWorker />} />
          <Route path="profile/worker/edit" element={<EditWorker />} />
          <Route path="profile/company" element={<ViewCompany />} />
          <Route path="profile/company/edit" element={<EditCompany />} />
          <Route path="hire/:workerId" element={<Hire />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
