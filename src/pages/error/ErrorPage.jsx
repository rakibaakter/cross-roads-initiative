import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/error.jpg";
import { IoAirplaneOutline } from "react-icons/io5";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col items-center " id="error-page">
      <div className="text-center">
        <img className="md:w-1/2 lg:w-1/3 mx-auto" src={errorImg} alt="" />
        <Link
          to="/"
          className="btn mt-4 bg-[#DF826C] text-white uppercase hover:bg-black "
        >
          Back Home
          <IoAirplaneOutline />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
