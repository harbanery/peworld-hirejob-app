import React, { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavbarProfile from "../../component/module/navbar/NavbarProfile";
import Footer from "../../component/module/Footer";

const Main = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const togglePopover = () => {
    setPopoverVisible((prev) => !prev);
  };

  const closePopover = () => {
    setPopoverVisible(false);
  };

  const handleOutsideClick = (event) => {
    // Close popover if clicked outside
    if (!event.target.closest("#popover-content") && popoverVisible) {
      closePopover();
    }
  };

  return (
    <>
      <div onClick={handleOutsideClick}>
        <NavbarProfile
          popoverVisible={popoverVisible}
          togglePopover={togglePopover}
        />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Main;
