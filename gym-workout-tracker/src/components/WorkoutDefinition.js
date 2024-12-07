
import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';  // Importing Bootstrap Card

function WorkoutDefinition({ myworkout }) {
  // useEffect hook to log workout details when changed
  useEffect(() => {
    console.log("Workout Item:", myworkout);
  }, [myworkout]);  // show any workout changes

  return (
    <div>
      <Card style={{ width: '18rem', marginBottom: '20px' }}>
        <Card.Header>{myworkout.Title}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={myworkout.Image} alt={myworkout.Title} />
          <blockquote className="blockquote mb-0">
            <footer>Category: {myworkout.Category}</footer>
            <footer>Duration: {myworkout.Duration}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WorkoutDefinition;