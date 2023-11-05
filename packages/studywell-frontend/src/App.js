import './App.css';
import './Timer.css';
import ShortBreak from './ShortBreak'
import LongBreak from './LongBreak'
import MainScreen from './MainScreen'
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path = "/short" element= {<ShortBreak />} />
        <Route path = "/long" element= {<LongBreak />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App

