import axios from "axios"; 
import { useState } from "react"; //useState for component state

const AddWorkout = () => {
    // State variables to hold workout details
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState(''); 
    const [sets, setSets] = useState(''); 
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a workout object with the current state values
        const workout = { title, reps, sets, image };

        //POST request to server to add new workout
        axios.post('http://localhost:4000/api/workouts', workout)
            .then(response => {
                console.log('Workout added:', response.data);
            })
            .catch(error => {
                console.error('There was an error adding the workout!', error);
            });

        // Log the workout object to the console
        console.log(workout);
    }

    return (
        <div>
            <h3>Add a New Workout</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Workout Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Number of Reps: </label>
                    <input type="number"
                        className="form-control"
                        value={reps}
                        onChange={(e) => { setReps(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Number of Sets: </label>
                    <input type="number"
                        className="form-control"
                        value={sets}
                        onChange={(e) => { setSets(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Workout Image URL: </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Workout" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default AddWorkout;
