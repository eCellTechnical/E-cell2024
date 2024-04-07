import { useLocation } from "react-router-dom";
import Sponsor from "../../components/Sponsers/Sponsers";
import { useEffect } from "react";
function Sponsors() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="pt-[13vh] bg-white dark:bg-black">
      <Sponsor />
    </div>
  );
}

export default Sponsors;
