//.js
import React from 'react';
import WorkoutDefinition from './WorkoutDefinition';

const AddWorkout = ({ workouts = [] }) => {  // Default value of an empty array if workouts is undefined
  if (workouts.length === 0) {
    return <p>No workouts available</p>; // Optional: Show a message if there are no workouts
  }

  return (
    <div>
      <h3>Workout List</h3>
      {workouts.map((workout) => (
        <WorkoutDefinition key={workout.Title} workout={workout} />
      ))}
    </div>
  );
};

export default AddWorkout;