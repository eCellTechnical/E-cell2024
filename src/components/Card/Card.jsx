import "./Card.css";
// import image from "../../assets/EVENTCARD SPRINTHACKS.jpg";
import Button from "../AllEvents/button/button";
import { Link } from "react-router-dom";
const Card = () => {
  const CardsData = [
    {
      src: "https://res.cloudinary.com/dl49ki1ob/image/upload/v1712496173/EVENTCARD_SPRINTHACKS_vdyweb.jpg",
      Title: "SprintHacks 2.0",
      Description: "24 Hours Hackathon",
      Link: "https://www.sprinthacks.in/",
      BtnData: "Register",
    },
  ];
  return (
    <>
      {CardsData.map((item, index) => (
        <article
          key={index}
          className="card__article relative w-[28%]"
          data-aos="fade-up"
        >
          <img src={item.src} alt="image" className="card__img" />
          <div className="card__data flex flex-col justify-center items-center">
            <h2 className="card__title font-semibold">{item.Title}</h2>
            <center>
              <span className="card__description text-black font-normal">
                {item.Description}
              </span>
              <Link
                to={item.Link}
                rel="noopener noreferrer"
                target="_blank"
                className="h-10 w-10"
              >
                <Button data={item.BtnData} />
              </Link>
            </center>
          </div>
        </article>
      ))}
    </>
  );
};

export default Card;
