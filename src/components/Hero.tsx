import LeftHero from "../assets/Container.svg";
import RightHero from "../assets/Containerright.svg";
import Button from "./Button";
import Time from "./Time";

const Hero = () => {
  return (
    <section className="hero flex items-center justify-center w-full">
      <div
        className="h-full relative w-[50%] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: `url(${LeftHero})` }}
      >
        <div className="absolute flex flex-col gap-[13px] justify-center items-center top-[380px]">
          <Button color="orange" size="medium" variant="rectangle">
            <h1 className="text-[13px] text-[#FFFFFF] font-[600]">FIGHTER</h1>
          </Button>
          <h1 className="text-[#FFFFFF] text-center text-[28px] font-[700] w-[563px] flex justify-center">
            Mobile Apple Planning Big Mac Redesign ander Nigh HalfMacShare
          </h1>
          <Time></Time>
        </div>
      </div>
      <div
        className="h-full w-[50%] bg-cover bg-center relative flex justify-center"
        style={{ backgroundImage: `url(${RightHero})` }}
      >
        <div className="absolute flex flex-col gap-[13px] justify-center items-center top-[380px]">
          <Button color="orange" size="medium" variant="rectangle">
            <h1 className="text-[13px] text-[#FFFFFF] font-[600]">ACTION</h1>
          </Button>
          <h1 className="text-[#FFFFFF] text-center text-[28px] font-[700] w-[563px] flex justify-center">
            How To Build A Magazine Layout With CSS Grid Areas
          </h1>
          <Time></Time>
        </div>
      </div>
    </section>
  );
};

export default Hero;
