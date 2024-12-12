import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";

export default function EditWorkout(props) {
  
  // Use the 'id' parameter from the URL
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [image, setImage] = useState("");
  const [muscleGroup, setMuscleGroup] = useState(""); 

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/workouts/`+ id)
      .then((response) => {
        setTitle(response.data.title);
        setSets(response.data.sets);
        setReps(response.data.reps);
        setImage(response.data.image);
        setMuscleGroup(response.data.muscleGroup);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);  // Dependency array to refresh when the id changes

  const handleSubmit = (event) => {
    event.preventDefault(); 

 
    const newWorkout = { id, title, sets, reps, image, muscleGroup };

    axios.put(`http://localhost:4000/api/workouts/`+ id, newWorkout)
      .then((res) => {
        console.log(res.data);
        navigate('/ReadWorkout');
      });
  }

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Workout Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Sets: </label>
          <input
            type="text"
            className="form-control"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Reps: </label>
          <input
            type="text"
            className="form-control"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
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
          <input type="submit" value="Save" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
