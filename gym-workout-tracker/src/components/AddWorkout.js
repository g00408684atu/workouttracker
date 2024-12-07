import { useState } from "react";

function AddWorkout() {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      reps,
      sets,
      image,
    });
  };

  return (
    <div>
      <h2>Add Workout</h2>
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
          <label>Reps: </label>
          <input
            type="number"
            className="form-control"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Sets: </label>
          <input
            type="number"
            className="form-control"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
        </div>

        <div className="form-group">
                    <label>Add Workout Image URL: </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
          
        </div>

        <input type="submit" value="Add Workout" />
      </form>
    </div>
  );
}

export default AddWorkout;