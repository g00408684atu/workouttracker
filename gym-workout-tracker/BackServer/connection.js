const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());

const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Specifics
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the Workout Tracker API');
});


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster1.ywayv.mongodb.net/workouts')
  .then(() => console.log("Connected to MongoDB")) 
  .catch((error) => console.error("MongoDB connection error:", error));

// layout or schematic
const workoutSchema = new mongoose.Schema({
  title: String,  
  reps: Number, 
  sets: Number,  
  image: String,
  muscleGroup: String 
});

// model for database
const Workout = mongoose.model('myWorkouts', workoutSchema);

// Retrieve all workouts from the database
app.get('/api/workouts', async (req, res) => {
  const workouts = await Workout.find({});
  // Array for all workouts
  res.status(200).json({ workouts });
});

  //Specific workouts
    app.get('/api/workouts/:id', async (req, res) => {
      const workout = await Workout.findById(req.params.id);
      res.status(200).json(workout);
    });


//Post endpoint for creating workouts
  app.post('/api/workouts', async (req, res) => {
    console.log("Workout added: " + req.body.title);
    const { title, reps, sets, image, muscleGroup } = req.body;

    const newWorkout = new Workout({ title, reps, sets, image, muscleGroup });

    await newWorkout.save();

    res.status(201).json({ message: 'Workout created successfully', workout: newWorkout });
  });

//put endpoint for updating workouts
app.put('/api/workouts/:id', async (req, res) => {
  let workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(workout);
});

//Delete endpoint for workouts
app.delete('/api/workouts/:id', async (req, res) => {
  console.log('Deleting workout with ID:', req.params.id);
  
      const workout = await Workout.findByIdAndDelete(req.params.id);
      if (!workout) {
        return res.status(404).send({ message: "Workout not found" });
      }
      res.status(200).send({ message: "Workout deleted successfully", workout });
    });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); //port for server which is defined in line 3
});
