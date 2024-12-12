import React, { useState, useEffect } from "react";
import axios from "axios";
import WorkoutDefinition from "./WorkoutDefinition";

const FirstPage = () => {
  const [workouts, setWorkouts] = useState([]); 
  const [searchTitle, setSearchTitle] = useState(""); // State for title search
  const [searchMuscleGroup, setSearchMuscleGroup] = useState(""); // State for muscle group search
  const [filteredWorkouts, setFilteredWorkouts] = useState([]); 

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/workouts")
      .then((response) => {
        setWorkouts(response.data.workouts);
      })
      .catch((error) => {
        console.error("Error fetching workouts:", error);
      });
  }, []);

  // Handle title search
  const handleTitleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTitle(term);
    filterWorkouts(term, searchMuscleGroup);
  };

  // Handle muscle group search
  const handleMuscleGroupSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchMuscleGroup(term);
    filterWorkouts(searchTitle, term);
  };

  // Filter workouts by both title and muscle group
  const filterWorkouts = (titleTerm, muscleGroupTerm) => {
    let filtered = workouts;

    if (titleTerm) {
      filtered = filtered.filter((workout) =>
        workout.title.toLowerCase().includes(titleTerm)
      );
    }

    if (muscleGroupTerm) {
      filtered = filtered.filter((workout) =>
        workout.muscleGroup.toLowerCase().includes(muscleGroupTerm)
      );
    }

    setFilteredWorkouts(filtered);
  };

  return (
    <div className="text-center">
      <h1>Looking for a specific workout? Search here</h1>

      {/* Search by Title */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search workout by name"
          value={searchTitle}
          onChange={handleTitleSearch}
          style={{
            padding: "10px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
            marginRight: "10px",
          }}
        />
      </div>
      <h2>Looking for workouts for specific muscles? Search below here</h2>
      {/* Search by Muscle Group */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search for a muscle group"
          value={searchMuscleGroup}
          onChange={handleMuscleGroupSearch}
          style={{
            padding: "10px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
        />
      </div>

      {/* Workout List */}
      {(searchTitle || searchMuscleGroup) && (
        <div className="workout-container">
          {filteredWorkouts.length > 0 ? (
            filteredWorkouts.map((workout) => (
              <WorkoutDefinition
                key={workout._id}
                myworkout={workout}
                Reload={() => {}}
              />
            ))
          ) : (
            <p style={{ fontSize: "1rem", color: "#888" }}>No workouts found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FirstPage;
