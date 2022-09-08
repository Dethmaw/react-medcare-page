import React from "react";
import "./StarRatingBar.css";
import StarRating from "./StarRating";
import StarsIcon from '@mui/icons-material/Stars';

function StarRatingBar() {
  return (
    <div className="RatingPanel">
      <StarsIcon className="StarIcon" />
      <div className="RatingText"> Ratings </div>
      <div className="Rating"><StarRating /></div>
      <div className="RatingCount">(108)</div>
    </div>
  );
}

export default StarRatingBar;
