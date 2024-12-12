import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddWorkout() {
  const [title, setTitle] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [image, setImage] = useState("");
  const [muscleGroup, setMuscleGroup] = useState(""); 

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const newWorkout = { title, sets, reps, image, muscleGroup };

    axios
      .post(`http://localhost:4000/api/workouts`, newWorkout) // Send POST request to create a new workout
      .then((res) => {
        console.log(res.data);
        navigate("/ReadWorkout"); // Navigate to the workout list page after adding a workout
      })
      .catch((error) => {
        console.error("Error adding workout:", error);
      });
  };

  return (
    <div className="text-center">
      <h3>Add a New Workout</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Workout Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Sets: </label>
          <input
            type="number"
            className="form-control"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Reps: </label>
          <input
            type="number"
            className="form-control"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL: </label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Muscle Group: </label>
          <input
            type="text"
            className="form-control"
            value={muscleGroup}
            onChange={(e) => setMuscleGroup(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Add Workout"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
