import './App.css';
import GetNavbar from './components/GetNavbar';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import AppRoutes from './router/Routes';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <GetNavbar />
        <AppRoutes />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
