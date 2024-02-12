import { IoGlobeOutline } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { BiCollapse } from "react-icons/bi";
import { TbLockAccess } from "react-icons/tb";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <div className=" px-4 md:px-8 lg:px-20 mt-8 md:mt-16 lg:mt-32 lg:flex flex-row-reverse  ">
      <div className="lg:w-1/2 ">
        <h2 className="text-3xl md:text-4xl font-medium tracking-wider">
          Why Choose Us
        </h2>

        <p className="mt-6 text-gray-600 ">
          Choose CrossRoads Initiative for a global approach to education. We
          bridge the gap between 700,000 Bangladeshi high-school dropouts and
          university students worldwide through our P2P mentorship platform. Our
          diverse team from eight countries facilitates a unique global
          perspective. Since May 2019, we've mentored over 3,200 individuals
          physically and 39,000+ digitally. Our 'Super 50' project empowers
          students for scholarships and university education. Collaborations
          with Prothom Alo, the Ministry of Education, and support from StartUp
          Bangladesh showcase our impact. Join us in transforming lives through
          accessible education and global connections.
        </p>
        <Link
          to="/about"
          className="btn mt-4 bg-red-600 text-white uppercase hover:bg-black "
        >
          Explore More
        </Link>
      </div>
      <div className="lg:w-1/2 lg:pr-16 space-y-6 mt-8 lg:mt-0">
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
