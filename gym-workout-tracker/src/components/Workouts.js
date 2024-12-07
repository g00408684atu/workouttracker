import WorkoutList from "./WorkoutList";  // Adjusted to your component
import { useEffect, useState } from "react";
import axios from "axios";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get('<my_api_url>')  // Replace with your actual API URL
      .then((response) => {
        setWorkouts(response.data.workouts);  // Assuming the API returns workouts in a "workouts" field
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>This is my Workouts Component.</h2>
      <WorkoutList myWorkouts={workouts} />  {/* Pass data to WorkoutList component */}
    </div>
  );
}

export default Workouts;