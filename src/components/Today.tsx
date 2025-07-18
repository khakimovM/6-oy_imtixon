import Button from "./Button";
import Hero from "../assets/Container(7).svg";

const Today = () => {
  return (
    <section className="bg-[#FFFFFF] pt-[70px] ">
      <div className="mycon h-[1272px] bg-[red] flex gap-[70px]">
        <div className="left w-[920px] h-full bg-[green] px-[5px]">
          <div className=" relative">
            <Button
              color="orange"
              size="large"
              className="z-10 relative"
              variant="romb"
            >
              <h1 className="text-[#FFFFFF] text-[20px] font-[800]">
                Today’s Spotlight
              </h1>
            </Button>
            <div className="border-y-[1px] z-0 absolute w-[72%] top-[50%] left-[230px] border-[#DFDFDF] h-[5px]"></div>
          </div>

          <div className="today h-[481px] w-full bg-[purple] mt-[30px] flex gap-[15px]">
            <div className="left h-full w-[489px] bg-[white]">
              <img src={Hero} alt="" />
              <Button
                color="whiter"
                size="small"
                variant="rectangle"
                className="mt-[23.5px]"
              >
                <h1 className="text-[#6D757F] text-[13px] font-[600]">
                  RACING
                </h1>
              </Button>
              <h1 className="text-[28px] mt-[6px] text-[#183354] font-[700]">
                How To Build A Magazine Layout With CSS Grid Areas
              </h1>
            </div>
            <div className="right h-full w-[489px] bg-[white]"></div>
          </div>
        </div>

        <div className="right w-[330px] h-full bg-[yellow]"></div>
      </div>
    </section>
  );
};

export default Today;
