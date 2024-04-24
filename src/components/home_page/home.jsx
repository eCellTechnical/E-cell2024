import Main from "./main-section/main";
import HeroParallax from "../EntertainmentEve/parallex";
import { products } from "../../endeavour/EntertainmentEve/data";
const Home = () => {
  return (
    <div>
      <HeroParallax products={products} />
      <Main />
    </div>
  );
};

export default Home;
