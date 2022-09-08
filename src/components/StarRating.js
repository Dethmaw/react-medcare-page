import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function StarRating() {

  return (
    <Box>
      <Rating name="read-only" value="4.5"  precision={0.5} readOnly sx={{
          '& .MuiRating-iconFilled': {
            color: "#24306e;",
          },
        }} />
      
    </Box>
  );
}

export default StarRating;
