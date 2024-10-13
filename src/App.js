import './App.css';
import LandingPage from './components/LandingPage';
import DigitalArt from './components/DigitalArt';
import TraditionalArt from './components/TraditionalArt';

function App() {
  return (
    <div className='app'>
      <LandingPage/>
      <DigitalArt/>
      <TraditionalArt/>
    </div>
  );
}

export default App;
