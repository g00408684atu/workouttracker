const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
}); 
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

app.get('/api/workouts', (req, res) => {
    const workouts = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.json({ workouts });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});