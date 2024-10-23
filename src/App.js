import LandingPage from './components/LandingPage/LandingPage';
import EducationPage from './components/EducationPage/EducationPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/education' element={<EducationPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
