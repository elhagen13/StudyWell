import './App.css';
import './components/timer/Timer.css';
import ShortBreak from './pages/ShortBreak'
import LongBreak from './pages/LongBreak'
import MainScreen from './pages/MainScreen'
import Navbar from './components/navbar/NavBar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>        
          <Route path="/" element={<MainScreen />} />
              <Route path = "/short" element= {<ShortBreak />} />
              <Route path = "/long" element= {<LongBreak />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App

