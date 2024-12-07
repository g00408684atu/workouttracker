// Import React Router components for managing routes and navigation
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import custom components that will be used in the app
import NavBar from './components/NaviBar';  // The navigation bar component
import Heading from './components/Heading';                // The header component (not used in this file but likely for other purposes)
import Footer from './components/Footer';                // The footer component
import FirstPage from './components/FirstPage';              // The main content component (likely to show the landing page)

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<FirstPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
