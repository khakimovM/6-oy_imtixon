// Time.tsx
import Kalendar from "../assets/Vector(2).svg";
import Times from "../assets/Vector(3).svg";

interface TimeProps {
  className?: string;
}

const TimeMedium: React.FC<TimeProps> = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center  text-[#BACCE1] text-[13px] font-[600] justify-between gap-[15px] ${className}`}
    >
      <div className="flex items-center gap-[5px]">
        <img src={Kalendar} alt="calendar icon" />
        <h1>27 AUGUST, 2024</h1>
      </div>
      <div className="flex items-center gap-[5px]">
        <img src={Times} alt="time icon" />
        <h1>20 MINS</h1>
      </div>
    </div>
  );
};

export default TimeMedium;
