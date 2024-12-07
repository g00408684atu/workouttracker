// WorkoutList.js
import React from 'react';
import WorkoutDefinition from './WorkoutDefinition';

function WorkoutList({ myWorkouts }) {
  return (
    <div>
      <h3>Workout List</h3>
      {myWorkouts.map((workout) => (
        <WorkoutDefinition key={workout.Title} myworkout={workout} />
      ))}
    </div>
  );
}

export default WorkoutList;