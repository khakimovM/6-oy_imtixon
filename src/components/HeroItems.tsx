import Button from "./Button";
import img1 from "../assets/Container(1).svg";
import img2 from "../assets/Container(2).svg";
import img3 from "../assets/Container(3).svg";
import img4 from "../assets/Container(4).svg";
import img5 from "../assets/Container(5).svg";
import img6 from "../assets/Container(6).svg";

const HeroItems = () => {
  return (
    <section className="bg-[#FFFFFF] pt-[70px]">
      <div className="mycon h-[290px]">
        <div className=" relative">
          <Button
            color="orange"
            size="large"
            className="z-10 relative"
            variant="romb"
          >
            <h1 className="text-[#FFFFFF] text-[20px] font-[800]">
              Exciting Categories
            </h1>
          </Button>
          <div className="border-y-[1px] z-0 absolute w-[80%] top-[50%] left-[230px] border-[#DFDFDF] h-[5px]"></div>
        </div>
        <div className="flex mt-[40px] items-center justify-around">
          <div className="relative">
            <img src={img1} alt="" />
            <Button
              color="blur1"
              size="small"
              variant="rectangle"
              className="bottom-[40px] absolute left-1/2 -translate-x-1/2"
            >
              <h1 className="text-[13px] text-[#FFFFFF] opacity[100] font-[600]">
                ACTION
              </h1>
            </Button>
          </div>
          <div className="relative">
            <img src={img2} alt="" />
            <Button
              color="blur1"
              size="small"
              variant="rectangle"
              className="bottom-[40px] absolute left-1/2 -translate-x-1/2"
            >
              <h1 className="text-[13px] text-[#FFFFFF] opacity[100] font-[600]">
                GAMING
              </h1>
            </Button>
          </div>
          <div className="relative">
            <img src={img3} alt="" />
            <Button
              color="blur1"
              size="small"
              variant="rectangle"
              className="bottom-[40px] absolute left-1/2 -translate-x-1/2"
            >
              <h1 className="text-[13px] text-[#FFFFFF] opacity[100] font-[600]">
                RACING
              </h1>
            </Button>
          </div>
          <div className="relative">
            <img src={img4} alt="" />
            <Button
              color="blur1"
              size="small"
              variant="rectangle"
              className="bottom-[40px] absolute left-1/2 -translate-x-1/2"
            >
              <h1 className="text-[13px] text-[#FFFFFF] opacity[100] font-[600]">
                ANIMATION
              </h1>
            </Button>
          </div>
          <div className="relative">
            <img src={img5} alt="" />
            <Button
              color="blur1"
              size="small"
              variant="rectangle"
              className="bottom-[40px] absolute left-1/2 -translate-x-1/2"
            >
              <h1 className="text-[13px] text-[#FFFFFF] opacity[100] font-[600]">
                FIGHTER
              </h1>
            </Button>
          </div>
          <div className="relative">
            <img src={img6} alt="" />
            <Button
              color="blur1"
              size="small"
              variant="rectangle"
              className="bottom-[40px] absolute left-1/2 -translate-x-1/2"
            >
              <h1 className="text-[13px] text-[#FFFFFF] opacity[100] font-[600]">
                STORY
              </h1>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroItems;
