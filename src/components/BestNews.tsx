import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";
import { CiCalendarDate } from "react-icons/ci";
import { GiBackwardTime } from "react-icons/gi";
import { MdArrowOutward } from "react-icons/md";

const BestNews = () => {
  return (
    <div className="mt-[20px]">
      <div className="mycon flex justify-between">
        <div>
          <div className="spotlight-left h-[50px] w-[908px]">
            <div className="relative w-full flex items-center mt-8 mb-0">
              <div className="w-full border-[1px] border-gray-300 h-[5px]"></div>
              <div className="absolute">
                <span className="inline-block w-[230px] h-[40px] text-center bg-[#F4796C] text-white text-[20px] font-semibold px-4 py-1 rounded-[4px] skew-x-[-12deg]">
                  <span className="inline-block skew-x-[12deg]">
                    Weekly Best News
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="w-[440px] flex gap-x-[15px]">
              <img src={image1} alt="car img" className="rounded-[6px]" />
              <div className="flex flex-col gap-y-[10px] py-2">
                <button className="w-[73px] text-[13px] rounded-[3px] py-1 px-2 text-[white] bg-[#F4796C]">
                  FIGHTER
                </button>
                <p className="w-[430px] text-[28px] font-bold leading-tight text-[#183354] mt-[10px]">
                  Taking The Stress Out Of Design System Management
                </p>
                <div className="flex items-center text-[16px] text-[#6D757F] gap-x-4 font-semibold">
                  <div className="flex items-center gap-x-[6px]">
                    <button className="text-[16px]">
                      <CiCalendarDate />
                    </button>
                    27 August, 2024
                  </div>
                  <div className="flex items-center gap-x-[6px]">
                    <button className="text-[16px]">
                      <GiBackwardTime />
                    </button>
                    20 MINS
                  </div>
                </div>
                <p className="text-[16px] text-[#545E69]">
                  Browned butter and brown sugar caramelly oodness crispy
                  edgesthick and soft centers and melty little puddles of
                  chocolate y first favorite.
                </p>
                <button className=" w-[140px] relative flex items-center justify-between px-4 py-2 border border-[#ccc] rounded-[6px] text-[#183354] font-bold text-sm group">
                  READ MORE
                  <span className="relative w-4 h-4 ml-2">
                    <MdArrowOutward className="absolute top-0 left-0 text-[#F4796C] text-[16px]" />
                    <MdArrowOutward className="absolute top-[10px] right-3 text-[#F4796C] opacity-40 text-[16px]" />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[440px] flex gap-x-[15px]">
              <img src={image2} alt="car img" className="rounded-[6px]" />
              <div className="flex flex-col gap-y-[10px] py-2">
                <button className="w-[73px] text-[13px] rounded-[3px] py-1 px-2 text-[white] bg-[#F4796C]">
                  RACING
                </button>
                <p className="w-[430px] text-[28px] font-bold leading-tight text-[#183354] mt-[10px]">
                  Boosting Productivity For Designers With Efficient Tools
                </p>
                <div className="flex items-center text-[16px] text-[#6D757F] gap-x-4 font-semibold">
                  <div className="flex items-center gap-x-[6px]">
                    <button className="text-[16px]">
                      <CiCalendarDate />
                    </button>
                    27 August, 2024
                  </div>
                  <div className="flex items-center gap-x-[6px]">
                    <button className="text-[16px]">
                      <GiBackwardTime />
                    </button>
                    20 MINS
                  </div>
                </div>
                <p className="text-[16px] text-[#545E69]">
                  Browned butter and brown sugar caramelly oodness crispy
                  edgesthick and soft centers and melty little puddles of
                  chocolate y first favorite.
                </p>
                <button className=" w-[140px] relative flex items-center justify-between px-4 py-2 border border-[#ccc] rounded-[6px] text-[#183354] font-bold text-sm group">
                  READ MORE
                  <span className="relative w-4 h-4 ml-2">
                    <MdArrowOutward className="absolute top-0 left-0 text-[#F4796C] text-[16px]" />
                    <MdArrowOutward className="absolute top-[10px] right-3 text-[#F4796C] opacity-40 text-[16px]" />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[440px] flex gap-x-[15px]">
              <img src={image3} alt="car img" className="rounded-[6px]" />
              <div className="flex flex-col gap-y-[10px] py-2">
                <button className="w-[73px] text-[13px] rounded-[3px] py-1 px-2 text-[white] bg-[#F4796C]">
                  ACTION
                </button>
                <p className="w-[430px] text-[28px] font-bold leading-tight text-[#183354] mt-[10px]">
                  How To Prioritize User Security When Collecting Offline Data{" "}
                </p>
                <div className="flex items-center text-[16px] text-[#6D757F] gap-x-4 font-semibold">
                  <div className="flex items-center gap-x-[6px]">
                    <button className="text-[16px]">
                      <CiCalendarDate />
                    </button>
                    27 August, 2024
                  </div>
                  <div className="flex items-center gap-x-[6px]">
                    <button className="text-[16px]">
                      <GiBackwardTime />
                    </button>
                    20 MINS
                  </div>
                </div>
                <p className="text-[16px] text-[#545E69]">
                  Browned butter and brown sugar caramelly oodness crispy
                  edgesthick and soft centers and melty little puddles of
                  chocolate y first favorite.
                </p>
                <button className=" w-[140px] relative flex items-center justify-between px-4 py-2 border border-[#ccc] rounded-[6px] text-[#183354] font-bold text-sm group">
                  READ MORE
                  <span className="relative w-4 h-4 ml-2">
                    <MdArrowOutward className="absolute top-0 left-0 text-[#F4796C] text-[16px]" />
                    <MdArrowOutward className="absolute top-[10px] right-3 text-[#F4796C] opacity-40 text-[16px]" />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[440px] flex gap-x-[15px]">
              <img src={image4} alt="car img" className="rounded-[6px]" />
              <div className="flex flex-col gap-y-[10px] py-2">
                <button className="w-[85px] text-[13px] rounded-[3px] py-1 px-2 text-[white] bg-[#F4796C]">
                  ANIMATION
                </button>
                <p className="w-[430px] text-[28px] font-bold leading-tight text-[#183354] mt-[10px]">
                  The Anatomy Of Themed Design System Components{" "}
                </p>
                <div className="flex items-center text-[16px] text-[#6D757F] gap-x-4 font-semibold">
                  <div className="flex items-center gap-x-[6px]">
                    <button className="text-[16px]">
                      <CiCalendarDate />
                    </button>
                    27 August, 2024
                  </div>
                  <div className="flex items-center gap-x-[6px]">
                    <button className="text-[16px]">
                      <GiBackwardTime />
                    </button>
                    20 MINS
                  </div>
                </div>
                <p className="text-[16px] text-[#545E69]">
                  Browned butter and brown sugar caramelly oodness crispy
                  edgesthick and soft centers and melty little puddles of
                  chocolate y first favorite.
                </p>
                <button className=" w-[140px] relative flex items-center justify-between px-4 py-2 border border-[#ccc] rounded-[6px] text-[#183354] font-bold text-sm group">
                  READ MORE
                  <span className="relative w-4 h-4 ml-2">
                    <MdArrowOutward className="absolute top-0 left-0 text-[#F4796C] text-[16px]" />
                    <MdArrowOutward className="absolute top-[10px] right-3 text-[#F4796C] opacity-40 text-[16px]" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="spotlight-right w-[330px] flex flex-col gap-y-[30px]">
          <div className="relative w-full flex items-center mt-8 mb-4">
            <div className="w-full border-[1px] border-gray-300 h-[5px]"></div>
            <div className="absolute">
              <span className="inline-block w-[180px] h-[40px] text-center bg-[#F4796C] text-white text-[20px] font-semibold px-4 py-1 rounded-[4px] skew-x-[-12deg]">
                <span className="inline-block skew-x-[12deg]">Hot News</span>
              </span>
            </div>
          </div>
          <div className="w-[330px] flex flex-col gap-y-[20px]">
            <img src={image5} alt="car img" className="rounded-[6px]" />
            <div className="flex flex-col gap-y-[10px] py-2">
              <button className="w-[73px] border-[1px] border-[#6D757F] text-[13px] rounded-[3px] py-1 px-2 text-[#6D757F] ">
                FIGHTER
              </button>
              <p className="w-[324px] text-[20px] font-bold leading-tight text-[#183354]">
                Racing Games Browned Buttadert Cookies Daily Breakfast
              </p>
              <div className="flex items-center text-[16px] text-[#6D757F] gap-x-4 font-semibold">
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <CiCalendarDate />
                  </button>
                  27 August, 2024
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <GiBackwardTime />
                  </button>
                  20 MINS
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-[10px] py-2">
              <button className="w-[73px] border-[1px] border-[#6D757F] text-[13px] rounded-[3px] py-1 px-2 text-[#6D757F] ">
                ACTION
              </button>
              <p className="w-[324px] text-[20px] font-bold leading-tight text-[#183354]">
                The Anatomy Of Themed Design System Components
              </p>
              <div className="flex items-center text-[16px] text-[#6D757F] gap-x-4 font-semibold">
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <CiCalendarDate />
                  </button>
                  27 August, 2024
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <GiBackwardTime />
                  </button>
                  20 MINS
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-[10px] py-2">
              <button className="w-[73px] border-[1px] border-[#6D757F] text-[13px] rounded-[3px] py-1 px-2 text-[#6D757F] ">
                STORY
              </button>
              <p className="w-[324px] text-[20px] font-bold leading-tight text-[#183354]">
                Taking The Stress Out Of Design System Management{" "}
              </p>
              <div className="flex items-center text-[16px] text-[#6D757F] gap-x-4 font-semibold">
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <CiCalendarDate />
                  </button>
                  27 August, 2024
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <GiBackwardTime />
                  </button>
                  20 MINS
                </div>
              </div>
            </div>
            <img src={image6} alt="" className="rounded-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestNews;
