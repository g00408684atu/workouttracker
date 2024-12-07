// WorkoutDefinition.js
import React from 'react';

const WorkoutDefinition = ({ workout }) => {
  if (!workout) {
    return <p>Workout not found</p>; // Fallback in case workout is undefined
  }

  return (
    <div>
      <h4>{workout.Title} ({workout.Category})</h4>
      <img src={workout.Image} alt={workout.Title} />
      <p>Duration: {workout.Duration}</p>
    </div>
  );
};

export default WorkoutDefinition;