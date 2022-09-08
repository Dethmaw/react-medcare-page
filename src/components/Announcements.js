import React from "react";
import "./Announcements.css";
import { AnnouncementData } from "./AnnouncementData";
import Avatar from "@mui/material/Avatar";
import avatar from "../images/cenkhoca.jpg";
import { useState } from "react";
import { useEffect } from "react";

function Announcements({ limit2 }) {
  const [height, setHeight] = useState(337);
  const [limit, setLimit] = useState(3);
  const [top, setTop] = useState(739);
  const seeMoreHandler = () => {
    setLimit(6);
    setHeight(520);
  };

  const seeLessHandler = () => {
    setLimit(3);
    setHeight(337);
  };

  useEffect(() => {
    setTop(limit2 === 3 ? 739 : 948.93);
  })

  return (
    <div
      className="AnnouncementsPanel"
      style={{ height: `${height}px`, top: `${top}px` }}
    >
      <div className="AnnouncementsText">Announcements</div>
      <div className="SeeMoreAnnouncement" onClick={seeMoreHandler}>
        See more
      </div>
      {limit === 6 && (
        <div className="SeeLessAnnouncement" onClick={seeLessHandler}>
          See less
        </div>
      )}
      <ul>
        {AnnouncementData.slice(0, limit).map((val, key) => {
          return (
            <li key={key} id={key} className="AnnouncementRow">
              <div className="Announcement">{val.announcement}</div>
              <Avatar src={val.avatar} className="AnnouncementAvatar" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Announcements;
