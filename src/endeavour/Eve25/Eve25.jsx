import LandingPage from "./components/Hero_Section";
import Past_Performers from "./components/Past_Performers";
import TicketSection from "./components/TicketSection";
import Glimpses from "./components/Glimpses";
import { StrictMode } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import './app.css';
// import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StrictMode>
      <motion.div 
        className="app-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div className="gradient-grid-background"></div>
        <LandingPage />
        <TicketSection />
        <Past_Performers />
        <Glimpses />
      </motion.div>
    </StrictMode>
  );
}

export default App;