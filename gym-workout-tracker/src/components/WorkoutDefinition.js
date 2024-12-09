import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import Button from "react-bootstrap/Button";

function WorkoutDefinition({ myworkout, Reload }) {

  // Destructure  'myworkout' object passed as a prop for defaults
const {
  title = "Untitled Workout",              
  reps = 0,                                
  sets = 0,                                
  image = "https://via.placeholder.com/150", 
  _id = ""                                 
} = myworkout;
//Any missing lines are filled off                      


  // Function to handle the deletion of a workout
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/api/workout/${_id}`)
      .then(() => {
        Reload(); 
      })
      .catch((error) => {
        console.error("Error deleting workout:", error); 
      });
  };
  

  return (
    <div>
      <Card style={{ width: "18rem", marginBottom: "20px" }}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={image} alt={title} />
          <blockquote className="blockquote mb-0">
            <footer>Reps: {reps}</footer>
            <footer>Sets: {sets}</footer>
          </blockquote>
        </Card.Body>
        <Link className="btn btn-primary" to={"/EditWorkout/" + myworkout._id}> {/*Links to update*/}
          Update
        </Link>
        <Button variant="danger" onClick={handleDelete}> {/*Preforms Delete function*/}
          Delete
        </Button>
      </Card>
    </div>
  );
}

export default WorkoutDefinition
