import React from "react";
import WorkoutDefinition from "./WorkoutDefinition";

function Workouts(props) {

  return (
    <>
      {props.myWorkouts.map((workout) => {
        return (
          <WorkoutDefinition
            myworkout={workout} // Pass workout to WorkoutDefinition
            key={workout._id} // Use id as key
            Reload={props.ReloadData} // Pass Reload function
          />
        );
      })}
    </>
  );
} 

export default Workouts;
