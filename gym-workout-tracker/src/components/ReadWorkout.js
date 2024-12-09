import React, { useEffect, useState } from "react";//React hooks
import axios from "axios";
import Workouts from "./Workouts";

const ReadWorkout = () => {
  // State to store list of workouts
  const [workouts, setWorkouts] = useState([]);

  // Function to get workouts from backend
  const Reload = () => {
    console.log("Reloading workouts data...");
    axios
      .get("http://localhost:4000/api/workouts") //backend URL
      .then((response) => {
        setWorkouts(response.data.workouts); // Update state with workouts
      })
      .catch((error) => {
        console.error("Error fetching workouts:", error);
      });
  };

  useEffect(() => {
    Reload();
  }, []);

  return (
    <div>
      <h3>Hello from ReadWorkout component!</h3>
      {/* Pass workouts and Reload function as props to Workouts component */}
      <Workouts myWorkouts={workouts} ReloadData={Reload} />
    </div>
  );
};

export default ReadWorkout;
