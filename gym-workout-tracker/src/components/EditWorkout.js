
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

  const navigate = useNavigate();

  // useEffect hook to fetch workout data
  useEffect(() => {

    axios.get(`http://localhost:4000/api/workout/`+ id)
      .then((response) => {
        setTitle(response.data.title);
        setSets(response.data.sets);
        setReps(response.data.reps);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);  // Dependency array to refresh when the id changes

 
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent the default form submission behavior

    // updated workout data
    const newWorkout = { id, title, sets, reps, image };

    axios.put(`http://localhost:4000/api/workout/`+ id, newWorkout)
      .then((res) => {

        console.log(res.data);
        
        navigate('/ReadWorkout');
      });
  }

  return (
    <div>
      {/* Render the form for editing workout */}
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
          <input type="submit" value="Edit Workout" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
