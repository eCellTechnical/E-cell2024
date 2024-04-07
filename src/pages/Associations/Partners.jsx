import "./Partners.css";
import sponsor1 from "../../assets/associations/BLUE LEAVES.png";
import sponsor2 from "../../assets/associations/CAMPUS MEDIA.png";
import sponsor3 from "../../assets/associations/DONALDS PASTRY SHOP.jpeg";
import sponsor4 from "../../assets/associations/IMG-20240323-WA0024.jpg";
import sponsor5 from "../../assets/associations/IMG-20240323-WA0025.jpg";
import sponsor6 from "../../assets/associations/IMG-20240323-WA0026.png";
import sponsor7 from "../../assets/associations/IMG-20240323-WA0027.jpg";
import sponsor8 from "../../assets/associations/IMG-20240323-WA0028.jpg";
import sponsor9 from "../../assets/associations/IMG-20240323-WA0029.jpg";
import sponsor10 from "../../assets/associations/IMG-20240323-WA0030.jpg";
import sponsor11 from "../../assets/associations/IMG-20240323-WA0031.jpg";
import sponsor12 from "../../assets/associations/IMG-20240323-WA0032.jpg";
import sponsor13 from "../../assets/associations/IMG-20240323-WA0033.jpg";
import sponsor14 from "../../assets/associations/IMG-20240323-WA0034.jpg";
import sponsor15 from "../../assets/associations/IMG-20240323-WA0035.jpg";
import sponsor16 from "../../assets/associations/IMG-20240323-WA0036.jpg";
import sponsor17 from "../../assets/associations/IMG-20240323-WA0037.jpg";
import sponsor18 from "../../assets/associations/IMG-20240323-WA0052.jpg";
import sponsor19 from "../../assets/associations/IMG-20240323-WA0057.jpg";
import sponsor20 from "../../assets/associations/IMG-20240323-WA0056.jpg";
import sponsor21 from "../../assets/associations/IMG-20240323-WA0053.jpg";

function Partners() {
  const logos = [
    {
      src: sponsor1,
    },
    {
      src: sponsor2,
    },
    {
      src: sponsor3,
    },
    {
      src: sponsor4,
    },
    {
      src: sponsor5,
    },
    {
      src: sponsor6,
    },
    {
      src: sponsor7,
    },
    {
      src: sponsor8,
    },
    {
      src: sponsor9,
    },
    {
      src: sponsor10,
    },
    {
      src: sponsor11,
    },
    {
      src: sponsor12,
    },
    {
      src: sponsor13,
    },
    {
      src: sponsor14,
    },
    {
      src: sponsor15,
    },
    {
      src: sponsor16,
    },
    {
      src: sponsor17,
    },
    {
      src: sponsor18,
    },
    {
      src: sponsor19,
    },
    {
      src: sponsor20,
    },
    {
      src: sponsor21,
    },
  ];
  return (
    <section>
      <div className="slider  before:bg-gradient-to-l before:from-transparent before:to-white before:dark:to-black after:bg-gradient-to-r after:from-transparent after:to-white after:dark:to-black">
        <ul className="brands">
          {logos.map((logo, index) => (
            <li key={index} className="brand-logo">
              <img src={logo.src} alt="logo" />
            </li>
          ))}
          {logos.map((logo, index) => (
            <li key={index} className="brand-logo">
              <img src={logo.src} alt="logo" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Partners;
