import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ btnText, className }) => {
  return (
    <button
      className={`group py-3.5 px-5 rounded-[100px] bg-transparent text-[#02033B] border-2 border-[#02033B] hover:bg-[#FFC247] hover:border-[#FFC247] hover:text-[#02033B] duration-400 font-extrabold flex items-center gap-x-3 ${className}`}
    >
      {btnText}
      <FaArrowRightLong className="max-w-0 opacity-0 group-hover:max-w-full group-hover:opacity-100 duration-400" />
    </button>
  );
};

export default Button;
