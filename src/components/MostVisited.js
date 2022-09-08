import React from "react";
import "./MostVisited.css";
import Avatar from "@mui/material/Avatar";
import avatar from "../images/cenkhoca.jpg";
import { useState } from "react";
import { ClientData } from "./ClientData";

function MostVisited({limit2, setLimit2}) {
  const [height, setHeight] = useState(341.07);

  const seeMoreHandler = () => {
    setLimit2(6);
    setHeight(550);
  };

  const seeLessHandler = () => {
    setLimit2(3);
    setHeight(341.07);
  };

  let ClientDataCopy = [...ClientData];

  return (
    <div className="MostVisitedPanel" style={{ height: `${height}px` }}>
      <div className="MostVisitedText">Most Visited Clients</div>
      <div className="SeeMoreVisited" onClick={seeMoreHandler}>
        See more
      </div>
      {limit2 === 6 && (
        <div className="SeeLessVisited" onClick={seeLessHandler}>
          See less
        </div>
      )}
      <div className="ClientNameVisited">Name</div>
      <div className="DiseaseVisited">Disease</div>
      <div className="Visited">Visited</div>
      <ul>
        {ClientDataCopy.sort(function (a, b) {
          return parseFloat(b.visited) - parseFloat(a.visited);
        })
          .slice(0, limit2)
          .map((val, key) => {
            return (
              <li key={key} id={key} className="ClientVisited">
                <div className="NameOfVisited">{val.name}</div>
                <div className="DiseaseOfVisited">{val.disease}</div>
                <div className="VisitedCount">{val.visited}</div>
                <Avatar src={val.avatar} className="ClientAvatarVisited" />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default MostVisited;
