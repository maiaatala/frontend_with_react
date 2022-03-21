import React, { useEffect } from "react";
import "./1-Forms.css";

const Alert = ({ type, msg, removeAlert, people }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [people]);

  return <h3 className={`alert alert-${type}`}>{msg}</h3>;
};

export default Alert;
