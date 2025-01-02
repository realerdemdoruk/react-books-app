import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../page/Home";
import Readed from "../page/Readed";
import ToRead from "../page/ToRead";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/readed" element={<Readed />} />
        <Route path="/toread" element={<ToRead />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
