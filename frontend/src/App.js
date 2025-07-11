import './App.css';
import Home from './Pages/Home';
import AddStudent from './Pages/AddStudent';      // optional if created
import StudentList from './Pages/StudentList';    // optional if created
import About from './Pages/About';                // optional
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
