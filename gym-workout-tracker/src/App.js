import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NaviBar';
import Heading from './components/Heading';
import Footer from './components/Footer';   
import FirstPage from './components/FirstPage';
import AddWorkout from './components/AddWorkout';
import ReadWorkout from './components/ReadWorkout';
import EditWorkout from './components/EditWorkout';



function App() {
  return (
    <Router>
      <NavBar />
       <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/ReadWorkout" element={<ReadWorkout />} />
          <Route path="/AddWorkout" element={<AddWorkout/>} />
          <Route path="/EditWorkout/:id" element={<EditWorkout/>} /> {/*edit workout with ids*/}
       </Routes>
      <Footer />
    </Router>
  );
}

export default App;
