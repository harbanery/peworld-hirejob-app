import React, { useState, useEffect } from "react";

const TimeAgo = ({ date }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const seconds = Math.floor((new Date() - new Date(date)) / 1000);

      let interval = Math.floor(seconds / 31536000);
      if (interval >= 1) {
        setTimeAgo(`${interval} year${interval === 1 ? "" : "s"} ago`);
        return;
      }

      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        setTimeAgo(`${interval} month${interval === 1 ? "" : "s"} ago`);
        return;
      }

      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        setTimeAgo(`${interval} day${interval === 1 ? "" : "s"} ago`);
        return;
      }

      interval = Math.floor(seconds / 3600);
      if (interval >= 1) {
        setTimeAgo(`${interval} hour${interval === 1 ? "" : "s"} ago`);
        return;
      }

      interval = Math.floor(seconds / 60);
      if (interval >= 1) {
        setTimeAgo(`${interval} minute${interval === 1 ? "" : "s"} ago`);
        return;
      }

      setTimeAgo(
        `${Math.floor(seconds)} second${
          Math.floor(seconds) === 1 ? "" : "s"
        } ago`
      );
    };

    calculateTimeAgo();

    const timer = setInterval(() => {
      calculateTimeAgo();
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [date]);

  return <>{timeAgo}</>;
};

export default TimeAgo;
