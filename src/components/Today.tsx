import Button from "./Button";
import Hero from "../assets/Container(7).svg";
import Time from "./Time";
import Action from "../assets/Container(9).svg";
import TimeSmall from "./TimeSmall";
import Fighter from "../assets/Container(10).svg";
import Gaming from "../assets/Container(11).svg";
import RacingImg from "../assets/Container(12).svg";
import TimeMedium from "./TimeMedium";
import ActionImg from "../assets/Container(13).svg";
import FighterImg from "../assets/Container(14).svg";
import AnimationImg from "../assets/Container(15).svg";
import StoryImg from "../assets/Container(16).svg";
import Facebook from "../assets/Symbol.svg";
import Twitter from "../assets/Symbol(1).svg";
import instagram from "../assets/Symbol(2).svg";
import YouTube from "../assets/Symbol(3).svg";
import LinkedIn from "../assets/Symbol(4).svg";
import Pinterest from "../assets/Symbol(5).svg";
import Sms from "../assets/Vector(4).svg";
import Vektor from "../assets/Vector(5).svg";
import RacingSvg from "../assets/Container(17).svg";
import StorySvg from "../assets/Container(18).svg";
import AnimationSvg from "../assets/Container(19).svg";
import FighterSvg from "../assets/Container(20).svg";
import RacingTop from "../assets/Container(21).svg";

const Today = () => {
  return (
    <section className="bg-[#FFFFFF] pt-[70px] ">
      <div className="mycon h-[1272px] flex gap-[70px]">
        <div className="left w-[920px] h-full px-[5px]">
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

          <div className="today h-[481px] w-full  mt-[30px] flex gap-[15px]">
            <div className="left h-full w-[489px]">
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
              <Time className="w-[80%] text-[#6D757F] mt-[18px]" />
            </div>
            <div className="right h-full w-[489px] flex gap-[20px] flex-col justify-around">
              <div className="w-full h-[140px] flex justify-between ">
                <div className="h-full flex flex-col justify-around">
                  <Button
                    size={"small"}
                    variant={"rectangle"}
                    color={"whiter"}
                    className="text-[#6D757F] text-[13px] font-[600]"
                  >
                    ACTION
                  </Button>
                  <h1 className="text-[#183354] text-[20px] font-[700]">
                    Fortnite Ratings are Skyrocketing
                  </h1>
                  <TimeSmall className="mb-[5px]" />
                </div>
                <img src={Action} alt="" />
              </div>
              <div className="w-full h-[140px] flex justify-between ">
                <div className="h-full flex flex-col justify-around">
                  <Button
                    size={"small"}
                    variant={"rectangle"}
                    color={"whiter"}
                    className="text-[#6D757F] text-[13px] font-[600]"
                  >
                    FIGHTER
                  </Button>
                  <h1 className="text-[#183354] text-[20px] font-[700]">
                    Everything You Need To Know About
                  </h1>
                  <TimeSmall className="mb-[5px]" />
                </div>
                <img src={Fighter} alt="" />
              </div>
              <div className="w-full h-[140px] flex justify-between ">
                <div className="h-full flex flex-col justify-around">
                  <Button
                    size={"small"}
                    variant={"rectangle"}
                    color={"whiter"}
                    className="text-[#6D757F] text-[13px] font-[600]"
                  >
                    GAMING
                  </Button>
                  <h1 className="text-[#183354] text-[20px] font-[700]">
                    We Can’t Wait to Try This Gaming Area
                  </h1>
                  <TimeSmall className="mb-[5px]" />
                </div>
                <img src={Gaming} alt="" />
              </div>
            </div>
          </div>
          <div className=" relative mt-[30px]">
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

          <div className="w-full h-[610px] mt-[35px] flex gap-[20px] gap-y-[10px] flex-wrap">
            <div className=" h-[300px] relative w-[440px] mr-[10px]">
              <img src={RacingImg} alt="" />
              <div className="absolute top-[146px] left-[30px]">
                <Button color="blur1" variant="rectangle" size="small">
                  <h1 className="text-[13px] text-[#FFFFFF] font-[600]">
                    RACING
                  </h1>
                </Button>
                <h1 className="text-[#FFFFFF] text-[20px] font-[700] mt-[14.5px]">
                  Racing Games Browned Butte Roadert Cookies Daily Breakfast
                </h1>
                <TimeMedium className="w-[230px] mt-[15px]"></TimeMedium>
              </div>
            </div>
            <div className=" h-[300px] relative w-[440px]">
              <img src={ActionImg} alt="" />
              <div className="absolute top-[146px] left-[30px]">
                <Button color="blur1" variant="rectangle" size="small">
                  <h1 className="text-[13px] text-[#FFFFFF] font-[600]">
                    ACTION
                  </h1>
                </Button>
                <h1 className="text-[#FFFFFF] w-[325px] text-[20px] font-[700] mt-[14.5px]">
                  How To Host A WordPress Site On Amazon Lightsail
                </h1>
                <TimeMedium className="w-[230px] mt-[15px]"></TimeMedium>
              </div>
            </div>
            <div className=" h-[300px] relative w-[290px]">
              <img src={FighterImg} alt="" />
              <div className="absolute top-[146px] left-[30px]">
                <Button color="blur1" variant="rectangle" size="small">
                  <h1 className="text-[13px] text-[#FFFFFF] font-[600]">
                    FIGHTER
                  </h1>
                </Button>
                <h1 className="text-[#FFFFFF] w-[250px] text-[20px] font-[700] mt-[14.5px]">
                  The Magic Of February 2024 Wallpapers
                </h1>
                <TimeSmall className="w-[230px] mt-[15px]"></TimeSmall>
              </div>
            </div>
            <div className=" h-[300px] relative w-[290px]">
              <img src={AnimationImg} alt="" />
              <div className="absolute top-[146px] left-[30px]">
                <Button color="blur1" variant="rectangle" size="small">
                  <h1 className="text-[13px] text-[#FFFFFF] font-[600]">
                    ANIMATION
                  </h1>
                </Button>
                <h1 className="text-[#FFFFFF] w-[250px] text-[20px] font-[700] mt-[14.5px]">
                  Customization And Animation
                </h1>
                <TimeSmall className="w-[230px] mt-[15px]"></TimeSmall>
              </div>
            </div>
            <div className=" h-[300px] relative w-[290px]">
              <img src={StoryImg} alt="" />
              <div className="absolute top-[146px] left-[30px]">
                <Button color="blur1" variant="rectangle" size="small">
                  <h1 className="text-[13px] text-[#FFFFFF] font-[600]">
                    STORY
                  </h1>
                </Button>
                <h1 className="text-[#FFFFFF] w-[250px] text-[20px] font-[700] mt-[14.5px]">
                  Better ROI For Your Digital Products
                </h1>
                <TimeSmall className="w-[230px] mt-[15px]"></TimeSmall>
              </div>
            </div>
          </div>
        </div>

        <div className="right w-[330px] h-full flex flex-col ">
          <div className="top w-full h-[532px] ">
            <div className=" relative">
              <Button
                color="orange"
                size="large"
                className="z-10 relative !w-[150px]"
                variant="romb"
              >
                <h1 className="text-[#FFFFFF] text-[20px] font-[800]">
                  Follow Us
                </h1>
              </Button>
              <div className="border-y-[1px] z-0 absolute w-[70%] top-[50%] left-[100px] border-[#DFDFDF] h-[5px]"></div>
            </div>

            <div className="grid grid-cols-2 gap-1 mt-[30px]">
              <div className="w-[162px] h-[44.5px] rounded-[4px] bg-[#E8F1F1] flex items-center gap-1 justify-center">
                <img src={Facebook} alt="" className="size-[18px]" />
                <h1 className="text-[14px] text-[#183354] font-[500]">
                  Facebook
                </h1>
              </div>
              <div className="w-[162px] h-[44.5px] rounded-[4px] bg-[#E8F1F1] flex items-center gap-1 justify-center">
                <img src={Twitter} alt="" className="size-[18px]" />
                <h1 className="text-[14px] text-[#183354] font-[500]">
                  Twitter
                </h1>
              </div>
              <div className="w-[162px] h-[44.5px] rounded-[4px] bg-[#E8F1F1] flex items-center gap-1 justify-center">
                <img src={instagram} alt="" className="size-[18px]" />
                <h1 className="text-[14px] text-[#183354] font-[500]">
                  Instagram
                </h1>
              </div>
              <div className="w-[162px] h-[44.5px] rounded-[4px] bg-[#E8F1F1] flex items-center gap-1 justify-center">
                <img src={YouTube} alt="" className="size-[18px]" />
                <h1 className="text-[14px] text-[#183354] font-[500]">
                  You Tube
                </h1>
              </div>
              <div className="w-[162px] h-[44.5px] rounded-[4px] bg-[#E8F1F1] flex items-center gap-1 justify-center">
                <img src={LinkedIn} alt="" className="size-[18px]" />
                <h1 className="text-[14px] text-[#183354] font-[500]">
                  LinkedIn
                </h1>
              </div>
              <div className="w-[162px] h-[44.5px] rounded-[4px] bg-[#E8F1F1] flex items-center gap-1 justify-center">
                <img src={Pinterest} alt="" className="size-[18px]" />
                <h1 className="text-[14px] text-[#183354] font-[500]">
                  Pinterest
                </h1>
              </div>
            </div>

            <div className="bg-[#183354] w-full flex flex-col justify-around items-center h-[270px] mt-[50px] rounded-[5px] relative">
              <img
                src={Sms}
                alt=""
                className="absolute top-[37px] left-[127px] opacity-[30%]"
              />
              <h1 className="text-[24px] mt-[25px] z-10 text-[#FFFFFF] font-[800]">
                Daily Newsletter
              </h1>
              <h1 className="text-[16px] text-center font-[500] text-[#FFFFFF] w-[218px]">
                Get all the top stories from Blogs to keep track.
              </h1>
              <Button
                color="orange"
                size="large"
                variant="rectangle"
                className="mb-[20px]"
              >
                <span className="text-[14px] mr-[90px] text-[#FFFFFF] font-[400]">
                  Enter your e-mail
                </span>
                <img src={Vektor} alt="" />
              </Button>
            </div>
          </div>

          <div className="bottom mt-[50px]">
            <div className=" relative">
              <Button
                color="orange"
                size="large"
                className="z-10 relative !w-[150px]"
                variant="romb"
              >
                <h1 className="text-[#FFFFFF] text-[20px] font-[800]">
                  Recent Posts
                </h1>
              </Button>
              <div className="border-y-[1px] z-0 absolute w-[70%] top-[50%] left-[100px] border-[#DFDFDF] h-[5px]"></div>
            </div>

            <div className="flex flex-col gap-[15px] mt-[30px]">
              <div className="w-full h-[110px] flex gap-[15px] ">
                <img src={RacingSvg} alt="" />
                <div className="h-full flex flex-col justify-between">
                  <Button color="whiter" size="small" variant="rectangle">
                    <h1 className="text-[13px] text-[#6D757F] font-[600]">
                      RACING
                    </h1>
                  </Button>
                  <h1 className="text-[18px] text-[#183354] font-[700]">
                    The Butter Chocolate Cookies Daily
                  </h1>
                  <TimeSmall></TimeSmall>
                </div>
              </div>
              <div className="w-full h-[110px] flex gap-[15px] ">
                <img src={StorySvg} alt="" />
                <div className="h-full flex flex-col justify-between">
                  <Button color="whiter" size="small" variant="rectangle">
                    <h1 className="text-[13px] text-[#6D757F] font-[600]">
                      STORY
                    </h1>
                  </Button>
                  <h1 className="text-[18px] text-[#183354] font-[700]">
                    Copying Designs Doesn’t Work
                  </h1>
                  <TimeSmall></TimeSmall>
                </div>
              </div>
              <div className="w-full h-[110px] flex gap-[15px] ">
                <img src={AnimationSvg} alt="" />
                <div className="h-full flex flex-col justify-between">
                  <Button color="whiter" size="small" variant="rectangle">
                    <h1 className="text-[13px] text-[#6D757F] font-[600]">
                      ANIMATION
                    </h1>
                  </Button>
                  <h1 className="text-[18px] text-[#183354] font-[700]">
                    Ollaboration Problems Go Away By Sharing
                  </h1>
                  <TimeSmall></TimeSmall>
                </div>
              </div>
              <div className="w-full h-[110px] flex gap-[15px] ">
                <img src={FighterSvg} alt="" />
                <div className="h-full flex flex-col justify-between">
                  <Button color="whiter" size="small" variant="rectangle">
                    <h1 className="text-[13px] text-[#6D757F] font-[600]">
                      FIGHTER
                    </h1>
                  </Button>
                  <h1 className="text-[18px] text-[#183354] font-[700]">
                    Level Up Your CSS Skills With The
                  </h1>
                  <TimeSmall></TimeSmall>
                </div>
              </div>
              <div className="w-full h-[110px] flex gap-[15px] ">
                <img src={RacingTop} alt="" />
                <div className="h-full flex flex-col justify-between">
                  <Button color="whiter" size="small" variant="rectangle">
                    <h1 className="text-[13px] text-[#6D757F] font-[600]">
                      RACING
                    </h1>
                  </Button>
                  <h1 className="text-[18px] text-[#183354] font-[700]">
                    The Key To Good Component Design
                  </h1>
                  <TimeSmall></TimeSmall>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Today;
