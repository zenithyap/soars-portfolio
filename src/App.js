import './App.css';
import LandingPage from './components/LandingPage';
import EducationPage from './components/EducationPage/EducationPage';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/education' element={<EducationPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
