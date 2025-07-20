import Advertisement from "../components/Advertisement";
import BestNews from "../components/BestNews";
import Gaming from "../components/Gaming";
import Hero from "../components/Hero";
import HeroItems from "../components/HeroItems";
import { Reklama2 } from "../components/Reklama2";
import Subscribe from "../components/Suvscribe";
import Today from "../components/Today";

const Main = () => {
  return (
    <>
      <Hero />
      <HeroItems />
      <Advertisement />
      <Today />
      <Reklama2 />
      <Gaming />
      <BestNews />
      <Subscribe />
    </>
  );
};

export default Main;
