import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { WeatherWrapper } from './components/wrapper/WeatherWrapper';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherWrapper/>} />
      </Routes>
    </Router>
  );
}

export default App;
