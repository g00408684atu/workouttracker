// Workouts.js
import React from 'react';
import WorkoutList from './AddWorkout';

const Workouts = () => {
  const workoutsData = [
    {
      "Title": "Push-up",
      "Category": "Strength",
      "Duration": "30 minutes",
      "Image": "https://example.com/pushup.jpg"
    },
    {
      "Title": "Running",
      "Category": "Cardio",
      "Duration": "45 minutes",
      "Image": "https://example.com/running.jpg"
    },
    {
      "Title": "Yoga",
      "Category": "Flexibility",
      "Duration": "60 minutes",
      "Image": "https://example.com/yoga.jpg"
    }
  ];

  return (
    <div>
      <h3>Hello from the Workouts component</h3>
      {/* Make sure to pass workoutsData to WorkoutList */}
      <WorkoutList workouts={workoutsData} />
    </div>
  );
};

export default Workouts;