// Time.tsx
import Kalendar from "../assets/Vector(2).svg";

interface TimeProps {
  className?: string;
}

const TimeSmall: React.FC<TimeProps> = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center  text-[#BACCE1] text-[13px] font-[600] justify-between gap-[15px] ${className}`}
    >
      <div className="flex items-center gap-[5px]">
        <img src={Kalendar} alt="calendar icon" />
        <h1>27 AUGUST, 2024</h1>
      </div>
    </div>
  );
};

export default TimeSmall;
