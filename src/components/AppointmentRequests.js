import React from "react";
import "./AppointmentRequests.css";
import { ClientData } from "./ClientData";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

function AppointmentRequests({limit, setLimit}) {
  const [height, setHeight] = useState(341.07);

  const seeMoreHandler = () => {
    setLimit(6);
    setHeight(550);
  };

  const seeLessHandler = () => {
    setLimit(3);
    setHeight(341.07);
  };

  return (
    <div className="AppointmentPanel" style={{height: `${height}px`}}>
      <div className="AppointmentText">Appointment Requests</div>
      <div className="SeeMore" onClick={seeMoreHandler}>
        See more
      </div>
      {limit === 6 && (<div className="SeeLess" onClick={seeLessHandler}>
        See less
      </div>)}
      <div className="ClientName">Name</div>
      <div className="Disease">Disease</div>
      <div className="Date">Date</div>
      <div className="Approval">Approval</div>
      <ul>
        {ClientData.slice(0, limit).map((val, key) => {
          return (
            <li key={key} id={val.id} className="Client">
              <div className="NameOf">{val.name}</div>
              <div className="DiseaseOf">{val.disease}</div>
              <div className="DateOf">{val.date}</div>
              <CheckCircleIcon className="DoneIcon" />
              <CancelIcon className="CancelIcon" />
              <Avatar src={val.avatar} className="ClientAvatar" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AppointmentRequests;
