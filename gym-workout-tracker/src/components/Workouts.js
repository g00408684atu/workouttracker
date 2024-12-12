import React from "react";
import WorkoutDefinition from "./WorkoutDefinition";

function Workouts(props) {
  return (
    <div className="workout-container">
      {props.myWorkouts.map((workout) => {
        return (
          <WorkoutDefinition
            myworkout={workout}
            key={workout._id} // Uses the unique _id as a key for React
            Reload={props.ReloadData} // Passes the Reload function
          />
        );
      })}
    </div>
  );
}

export default Workouts;

