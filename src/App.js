import './App.css';
import LandingPage from './components/LandingPage';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const HashRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.location.href = "/"
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
      <HashRedirect/>
    </Router>
  );
}

export default App;
