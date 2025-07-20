import { Link } from "react-router-dom";
import reklama2 from "../assets/advertisement04.svg";

export const Reklama2 = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="py-[60px]">
        <Link to={"/"}>
          {" "}
          <img src={reklama2} alt="" />
        </Link>
      </div>
    </div>
  );
};
