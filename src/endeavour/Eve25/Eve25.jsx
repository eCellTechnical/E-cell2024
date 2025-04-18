import LandingPage from "./components/Hero_Section";
import Past_Performers from "./components/Past_Performers";
import TicketSection from "./components/TicketSection";
import Glimpses from "./components/Glimpses";
import './app.css'
import { StrictMode } from "react";

function App(){
  return   <StrictMode  >
    
    <LandingPage/>
    <TicketSection/>
    <Past_Performers/>
    <Glimpses/>
  </StrictMode>
}
export default App;