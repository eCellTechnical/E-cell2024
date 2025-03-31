import axios from "axios";
import {
  useEffect,
  useState,
  useCallback,
  useMemo,
  lazy,
  Suspense,
} from "react";
import { Link } from "react-router-dom";
import "./AllEvents.css";

const Card = lazy(() => import("../../components/Card/Card"));
import Button from "./button/button";
function AllEvents() {
  const [events, setEvents] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://e-cell2024backend-production.up.railway.app/allevents`
      );
      const sortedEvents = response.data.sort((a, b) => {
        const nameA = a.name ? a.name.toString().toLowerCase() : "";
        const nameB = b.name ? b.name.toString().toLowerCase() : "";
        return nameA.localeCompare(nameB);
      });
      setEvents(sortedEvents);
      // setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events :(");
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // const renderedEvents = useMemo(() => {
  //   return events.map((event, index) => (
  //     <div key={index}>
  //       <h1>{event.name}</h1>
  //       <Link to={`/endeavour/events/${event._id}`}>click</Link>
  //     </div>
  //   ));
  // }, [events]);

  const renderedCards = useMemo(() => {
    return events.map((event, index) => (
      <article
        data-aos="fade-up"
        key={index}
        className="card__article relative w-[80%] md:w-[28%]"
      >
        <img src={event.poster} alt="image" className="card__img" />
        <div className="card__data flex flex-col justify-center items-center">
          <h2 className="card__title font-semibold">{event.name}</h2>
          <center>
            <span className="card__description text-black font-normal">
              {event.smallDescription && event.smallDescription}
            </span>
            <Link to={`/endeavour/events/${event._id}`} className="h-10 w-10">
              <Button data={"Register"} />
            </Link>
          </center>
        </div>
      </article>
    ));
  }, [events]);

  return (
    <div className=" text-black dark:text-white pb-10">
      <h1
        data-aos="fade-up"
        className="md:text-5xl hover:text-shadow-glow transition-shadow duration-300 ease-in-out text-5xl mb-10 lg:mb-6 md:mt-8 text-black dark:text-white text-center font-bold "
      >
        All <span className="text-[#00FCB8] ">Events</span>
      </h1>
      <div className="mx-auto px-4 w-full">
        <div className="flex flex-wrap w-full justify-center items-center gap-4 mx-3 mt-4">
          {renderedCards}
          <Suspense fallback={<div>Loading...</div>}>
            <Card />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default AllEvents;
