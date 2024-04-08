import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AllEvent from "../../../components/AllEvents/AllEvents";
function AllEvents() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="pt-[14vh] text-black dark:text-white bg-white dark:bg-black pb-10 min-h-[100vh]">
      <AllEvent />
    </div>
  );
}

export default AllEvents;
