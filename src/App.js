import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import AppRoutes from "./router/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetNavbar from "./components/GetNavbar";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <GetNavbar />
        <AppRoutes />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Router>
    </GlobalProvider>
  );
}

export default App;
