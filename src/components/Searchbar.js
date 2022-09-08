import React from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import InfoIcon from "@mui/icons-material/Info";
import Avatar from "@mui/material/Avatar";
import avatar from "../images/cenkhoca.jpg"

function Searchbar() {
  return (
    <div className="SearchbarPanel">
      <div className="SearchField">
        <input type="text" placeholder="Search" className="SearchInput"></input>
        <SearchIcon className="SearchIcon" />
      </div>
      <NotificationsNoneSharpIcon className="NotificationsIcon" />
      <DarkModeTwoToneIcon className="MoonIcon" />
      <InfoIcon className="InfoIcon" />
      <Avatar src={avatar} className="Avatar" />
    </div>
  );
}

export default Searchbar;
