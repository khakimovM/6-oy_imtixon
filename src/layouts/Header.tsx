import { Link } from "react-router-dom";
import Logo from "../assets/w_logo.png.svg";
import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <div className="top bg-[#12253E] h-[100px]">
        <div className="mycon h-full flex items-center justify-between">
          <div className="left flex items-center gap-[30px]">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>

            <button className="text-white text-3xl">
              <HiBars3 />
            </button>
          </div>
          <div className="right flex h-full items-center gap-[20px] justify-between">
            <form
              action=""
              className="flex items-center border-[1px] border-[#3A506B] bg-[#12253E] rounded-[30px] w-[425px] gap-5 h-[45px]"
            >
              <input
                type="text"
                placeholder="Search here ..."
                className="w-[80%]  bg-[#12253E] ml-5 border-none focus:outline-none text-[#a7b2bf]"
              />
              <button className="text-white w-[20px] h-[20px] size-[20px]">
                <IoIosSearch className="size-[20px]" />
              </button>
            </form>
            <nav className="flex items-center gap-[15px] text-white text-lg">
              <button>
                <FaFacebookF />
              </button>
              <button>
                <FaXTwitter />
              </button>
              <button>
                <LuInstagram />
              </button>
              <button>
                <FaLinkedinIn />
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className="bottom bg-[#183354] h-[60px]">
        <div className="mycon flex items-center h-full justify-between">
          <div className="left text-[#FFFFFF] font-[700] text-[14px] flex items-center justify-between w-[494px] h-full">
            <div className="flex text-[#F4796C] transition-colors duration-200 items-center justify-between gap-1">
              <Link to={"/"}>Home</Link>
              <button className="flex font-[900] items-center justify-center pt-[4px]">
                <IoChevronDown />
              </button>
            </div>
            <Link to={"/"} className="transition-colors duration-200">
              About us
            </Link>
            <div className="flex items-center  justify-between gap-1">
              <Link to={"/"} className="">
                Features
              </Link>
              <button className="flex text-[#6D757F]  font-[900] items-center justify-center pt-[4px]">
                <IoChevronDown />
              </button>
            </div>
            <div className="flex items-center justify-between gap-1 ">
              <Link to={"/"}>Categories</Link>
              <button className="flex text-[#6D757F] font-[900] items-center justify-center pt-[4px]">
                <IoChevronDown />
              </button>
            </div>
            <Link to={"/"}>Contact</Link>
          </div>

          <div className="right pr-[70px] flex items-center justify-between gap-[25px]">
            <Link to={"/"}>
              <div className="text-[#8aa1bd] relative">
                <FaRegHeart className="size-7" />
                <div className="w-[18px] text-white text-[11px] flex items-center justify-center h-[18px] bg-[#F4796C] rounded-[50%] absolute top-[-1px] right-[-11px]">
                  0
                </div>
              </div>
            </Link>
            <Link to={"/"}>
              <div className="text-[#8aa1bd] relative">
                <RiShoppingBasket2Line className="size-7" />
                <div className="w-[18px] text-white text-[11px] flex items-center justify-center h-[18px] bg-[#F4796C] rounded-[50%] absolute top-[-1px] right-[-9px]">
                  0
                </div>
              </div>
            </Link>
            <Link to={"/"}>
              <div className="flex items-center gap-[10px] justify-between text-[#8aa1bd]">
                <IoPersonCircleOutline className="size-8" />
                <h1 className="text-[#FFFFFF] text-[14px] font-[700]">
                  Sign in
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
