import React, { useEffect, useState } from "react";
import axios from "axios";
import Workouts from "./Workouts";

const ReadWorkout = () => {
  const [workouts, setWorkouts] = useState([]);

  
  const Reload = () => {
    console.log("Reloading workouts data...");
    axios
      .get("http://localhost:4000/api/workouts") 
      .then((response) => {
        setWorkouts(response.data.workouts); // Updates the state with the fetched workouts
      })
      .catch((error) => {
        console.error("Error fetching workouts:", error);
      });
  };

  useEffect(() => {
    Reload(); 
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="text-center">
      <h3>Heres the list of workouts you have so far.</h3>
      <Workouts myWorkouts={workouts} ReloadData={Reload} />
    </div>
  );
};

export default ReadWorkout;
