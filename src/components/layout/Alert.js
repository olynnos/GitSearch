import React from "react";
import { IconContext } from "react-icons";
import { TiWarningOutline } from "react-icons/ti";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type} alert-custom`}>
        <IconContext.Provider value={{ className: "alert-icon" }}>
          <TiWarningOutline /> {alert.msg}
        </IconContext.Provider>
      </div>
    )
  );
};

export default Alert;
