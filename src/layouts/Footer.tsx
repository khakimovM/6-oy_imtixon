import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0B1623] text-white px-8 h-[520px]">
      <div className="max-w-7xl mx-auto flex  md:flex-row justify-between gap-10 flex-wrap h-[440px]  items-center">
        <div className="flex-1 min-w-[250px]">
          <img src={logo} alt="" />
          <p className="text-sm mt-4 text-gray-400 max-w-xs leading-relaxed">
            Browned Butter And Brown Sugar Caramelly Goodness, Crispy Edges,
            Thick And Soft Centers And Melty Little Puddles Of Chocolate.
          </p>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-lg font-semibold mb-2">Company</h2>
          <div className="w-6 h-[2px] bg-[#F4796C] mb-4" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About Us</li>
            <li>The Test Kitchen</li>
            <li>Podcast</li>
            <li>Events</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-lg font-semibold mb-2">Get Help</h2>
          <div className="w-6 h-[2px] bg-[#F4796C] mb-4" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Contact & FAQ</li>
            <li>Orders & Returns</li>
            <li>Gift Cards</li>
            <li>Register</li>
            <li>Catalog</li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-lg font-semibold mb-2">Explore</h2>
          <div className="w-6 h-[2px] bg-[#F4796C] mb-4" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li>The Shop</li>
            <li>Recipes</li>
            <li>Food</li>
            <li>Travel</li>
            <li>Hotline</li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-lg font-semibold mb-2">Follow Us On</h2>
          <div className="w-6 h-[2px] bg-[#F4796C] mb-4" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to={"/"}>Facebook</Link>
            </li>
            <li>
              <Link to={"/"}>Twitter</Link>
            </li>
            <li>
              <Link to={"/"}>Instagram</Link>
            </li>
            <li>
              <Link to={"/"}>Youtube</Link>
            </li>
            <li>
              <Link to={"/"}>Pinterest</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t mycon border-[#1f2a36] mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="space-x-4">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Site Credits</span>
        </div>
        <p>© 2023 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
