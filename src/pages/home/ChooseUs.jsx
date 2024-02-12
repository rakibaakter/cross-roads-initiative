import { IoGlobeOutline } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { BiCollapse } from "react-icons/bi";
import { TbLockAccess } from "react-icons/tb";

const ChooseUs = () => {
  return (
    <div className=" px-4 md:px-8 lg:px-20 mt-8 md:mt-16 lg:flex justify-between items-center">
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-medium tracking-wider">
          Why Choose Us
        </h2>
        <h3 className="mt-4 text-xl text-gray-500 font-semibold">
          Are you looking for a scholarship to study abroad?
          <br /> You are in the right place!
        </h3>
      </div>
      <div className="lg:w-1/2 space-y-6 mt-8 lg:mt-0">
        <div className="flex gap-4 bg-base-100 shadow-md">
          <div className="bg-gray-200 py-2 px-6 flex items-center">
            <IoGlobeOutline size={36} color="red" />
          </div>
          <div className="py-2">
            <h2 className="font-medium">We working with 8 countries</h2>
            <p className="text-gray-500">
              America, Korea, India, Germany, Argentina, England, Taiwan and
              Singapore.
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-base-100 shadow-md">
          <div className="bg-gray-200 py-2 px-6 flex items-center">
            <BsPersonWorkspace size={36} color="red" />
          </div>
          <div className="py-2">
            <h2 className="font-medium">18+ seminers since 2019</h2>
            <p className="text-gray-500">
              Organized seminars to mentor people physically and digitally in
              Facebook Live.
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-base-100 shadow-md">
          <div className="bg-gray-200 py-2 px-6 flex items-center">
            <BiCollapse size={36} color="red" />
          </div>
          <div className="py-2">
            <h2 className="font-medium">
              Prothom Alo Education USA and Bangladesh Ministry of Education
            </h2>
            <p className="text-gray-500">
              Collaborating with Prothom Alo Education USA and Bangladesh
              Ministry of Education to reach out to GrassRoot Level Students.
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-base-100 shadow-md">
          <div className="bg-gray-200 py-2 px-6 flex items-center">
            <TbLockAccess size={36} color="red" />
          </div>
          <div className="py-2">
            <h2 className="font-medium">
              5500 digital centers through ICT Ministry Bangladesh
            </h2>
            <p className="text-gray-500">
              Supported by StartUp Bangladesh, a2i Bangladesh, where we have
              access to 5500 digital centers through ICT Ministry Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;