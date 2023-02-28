import './App.css';
import GetNavbar from './components/GetNavbar';
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Readed from './page/Readed';
import ToRead from './page/ToRead';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <GetNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readed" element={<Readed />} />
          <Route path="/toread" element={<ToRead />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
