import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./speaker.css";
import Organizerr from "../../components/Speaker/Organiser";
const Organizer = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="pt-[16vh] pb-8 dark:bg-gray-900 bg-white" id="team">
      <Organizerr />
    </div>
  );
};

export default Organizer;
