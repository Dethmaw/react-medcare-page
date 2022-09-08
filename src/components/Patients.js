import React from 'react'
import "./Patients.css";
import HowToRegIcon from '@mui/icons-material/HowToReg';

function Patients() {
  return (
    <div className="PatientsPanel">
      <HowToRegIcon className="PatientsIcon" />
      <div className="PatientsText"> Patients Treated </div>
      <div className="PatientsCount"> 3000 </div>
    </div>
  )
}

export default Patients