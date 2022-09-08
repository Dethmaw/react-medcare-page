import React from "react";
import "./Graph.css";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import { useEffect } from "react";

function Graph({ limit }) {
  const [top, setTop] = useState(739);

  useEffect(() => {
    setTop(limit === 3 ? 739 : 948.93);
  })

  return (
    <div className="GraphPanel" style={{top: `${top}px`}}>
      <div className="ThisMonth">
        <div className="ThisMonthText">This month</div>
        <ShoppingBagTwoToneIcon className="ThisMonthIcon" />
      </div>
      <div className="TotalEarning">$20.9K</div>
      <div className="TotalEarningText">Total Earning</div>
      <div className="OnTrack">On Track</div>
      <CheckCircleIcon className="GraphCheckIcon" />
      <div className="Percentage"></div>
      <div className="SEP">SEP</div>
      <div className="OCT">OCT</div>
      <div className="NOV">NOV</div>
      <div className="DEC">DEC</div>
      <div className="JAN">JAN</div>
      <div className="FEB">FEB</div>
    </div>
  );
}

export default Graph;
