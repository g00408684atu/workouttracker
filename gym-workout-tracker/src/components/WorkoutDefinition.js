import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Button from "react-bootstrap/Button";

function WorkoutDefinition({ myworkout, Reload }) {
  const {
    title = "Untitled Workout",
    reps = 0,
    sets = 0,
    image = "https://via.placeholder.com/150",
    muscleGroup = "Unknown", 
    _id = "",
  } = myworkout;

  // Function to handle deletion of a workout
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/api/workouts/${_id}`) // Sends DELETE request to delete the workout by ID
      .then(() => {
        Reload(); // Reloads the workout list after deletion
      })
      .catch((error) => {
        console.error("Error deleting workout:", error);
      });
  };

  return (
    <div className="card">
      <Card style={{ width: "100%", background: "transparent", border: "none" }}>
        <Card.Header style={{ backgroundColor: "#b5ffbf", color: "#fff" }}>
          {title}
        </Card.Header>
        <Card.Body>
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            style={{ borderRadius: "5px" }}
          />
          <blockquote className="blockquote mb-0">
            <footer>Muscle Group: {muscleGroup}</footer>
            <footer>Reps: {reps}</footer>
            <footer>Sets: {sets}</footer>
          </blockquote>
        </Card.Body>
        <Link className="btn btn-primary" to={`/EditWorkout/${_id}`}>
          Update
        </Link>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Card>
    </div>
  );
}

export default WorkoutDefinition;
