import bg from "../assets/bg.jpg";
import { MdArrowOutward } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import YouTube from "react-youtube";

export const YouTubeVideo = (
  videoId: string,
  height: string,
  width: string
) => {
  const opts = {
    height: { height },
    width: { width },
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

const Gaming = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-[730px] bg-cover flex items-center"
    >
      <div className="mycon flex flex-col">
        <div className="relative w-full flex items-center mt-8 mb-[30px]">
          <div className="w-full border-[1px] border-gray-300 h-[5px]"></div>
          <div className="absolute">
            <span className="inline-block w-[280px] h-[40px] text-center bg-[#F4796C] text-white text-[20px] font-semibold px-4 py-1 rounded-[4px] skew-x-[-12deg]">
              <span className="inline-block skew-x-[12deg]">
                Trending Gaming News
              </span>
            </span>
          </div>
          <div className="w-[120px] h-[35px] bg-[#FFFFFF33] px-3 py-[4px] ml-5 rounded-[3px]">
            <button className=" flex flex-row absolute w-[100px] gap-x-3 h-[20px] text-white text-4">
              VIEW ALL
              <button className="text-[#F4796C]">
                <MdArrowOutward />
              </button>
              <button className="absolute right-4 top-3 text-[#F4796C] opacity-40">
                <MdArrowOutward />
              </button>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3  gap-x-[65px] gap-y-[30px]">
          <div className="row-span-3 flex flex-col gap-y-[20px]">
            <div className="w-[630px] h-[380px] aspect-video mx-auto">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6sVEa7xPDzA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col gap-y-[14px]">
              <button className="border-[1px] border-solid bg-[#FFFFFF4D] bg-opacity-[30%] w-[73px] text-[13px] rounded-[3px] py-1 px-2 text-white">
                STORY
              </button>
              <p className="w-[555px] text-[28px] font-bold leading-tight text-white mt-[10px]">
                Exciting New Browned Chocolate Gaming Cookies Daily Breakfast
              </p>
              <div className="flex items-center  text-[16px] text-[#6D757F] gap-x-4 font-semibold">
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <IoPersonCircleOutline />
                  </button>
                  BY ADMIN
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <CiCalendarDate />
                  </button>
                  27 August, 2024
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-full max-w-[590px] h-[160px] items-start">
            <div className="w-[190px] aspect-video">
              <iframe
                className="w-full h-[160px] rounded"
                src="https://www.youtube.com/embed/wybKy_MyBXE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col gap-y-[16px] py-2">
              <button className="bg-[#FFFFFF4D] bg-opacity-[30%] w-[80px] text-[13px] rounded py-1 px-2 text-white">
                RACING
              </button>
              <p className="w-[260px] text-[22px] font-bold leading-tight text-white">
                The Key To Good Component Design
              </p>
              <div className="flex items-center  text-[16px] text-[#6D757F] gap-x-4 font-semibold">
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <IoPersonCircleOutline />
                  </button>
                  BY ADMIN
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <CiCalendarDate />
                  </button>
                  27 August, 2024
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-full max-w-[590px] h-[160px] items-start">
            <div className="w-[190px] aspect-video">
              <iframe
                className="w-full h-[160px] rounded"
                src="https://www.youtube.com/embed/wybKy_MyBXE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col gap-y-[16px] py-2">
              <button className="bg-[#FFFFFF4D] bg-opacity-[30%] w-[80px] text-[13px] rounded py-1 px-2 text-white">
                RACING
              </button>
              <p className="w-[361px] text-[22px] font-bold leading-tight text-white">
                Fluid Typography: Predicting A Problem With Your User’s Zoom-In
              </p>
              <div className="flex items-center  text-[16px] text-[#6D757F] gap-x-4 font-semibold">
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <IoPersonCircleOutline />
                  </button>
                  BY ADMIN
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <CiCalendarDate />
                  </button>
                  27 August, 2024
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-full max-w-[590px] h-[160px] items-start">
            <div className="w-[190px] aspect-video">
              <iframe
                className="w-full h-[160px] rounded"
                src="https://www.youtube.com/embed/wybKy_MyBXE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col gap-y-[16px] py-2">
              <button className="bg-[#FFFFFF4D] bg-opacity-[30%] w-[80px] text-[13px] rounded py-1 px-2 text-white">
                RACING
              </button>
              <p className="w-[260px] text-[22px] font-bold leading-tight text-white">
                The Key To Good Component Design
              </p>
              <div className="flex items-center  text-[16px] text-[#6D757F] gap-x-4 font-semibold">
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <IoPersonCircleOutline />
                  </button>
                  BY ADMIN
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <button className="text-[16px]">
                    <CiCalendarDate />
                  </button>
                  27 August, 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaming;
