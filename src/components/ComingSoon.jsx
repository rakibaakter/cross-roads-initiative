import { IoAirplaneOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <h2 className="text-2xl font-bold tracking-widest">Coming Soon...</h2>
        <h2 className="mt-4 text-gray-500 text-xl font-medium">
          This page is under development.
        </h2>
        <Link
          to="/"
          className="btn mt-4 bg-[#DF826C] text-white uppercase hover:bg-black "
        >
          Home
          <IoAirplaneOutline />
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
