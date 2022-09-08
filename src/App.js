import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import StarRatingBar from "./components/StarRatingBar";
import Welcome from "./components/Welcome";
import Patients from "./components/Patients";
import AppointmentRequests from "./components/AppointmentRequests";
import MostVisited from "./components/MostVisited";
import Announcements from "./components/Announcements";
import Graph from "./components/Graph";
import { useState } from "react";

function App() {
  const [limit, setLimit] = useState(3);
  const [limit2, setLimit2] = useState(3);
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Searchbar />
          <Welcome />
          <Patients />
          <StarRatingBar />
          <AppointmentRequests limit={limit} setLimit={setLimit} />
          <MostVisited limit2={limit2} setLimit2={setLimit2}/>
          <Announcements limit2={limit2}/>
          <Graph limit={limit}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
