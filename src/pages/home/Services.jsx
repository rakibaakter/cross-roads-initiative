import SectionTitle from "../../components/SectionTitle";

import { FaGraduationCap } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { BiSolidShoppingBags } from "react-icons/bi";

const Services = () => {
  return (
    <div className=" px-4 md:px-8 lg:px-20 mt-8 md:mt-16 lg:mt-32 ">
      <section data-aos="fade-top" className="flex justify-center">
        <SectionTitle
          title={"Services"}
          subtitle={"What We"}
          highlight={"Do"}
        />
      </section>
      {/* services grid section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 md:mt-16">
        {/* service 1 */}
        <div data-aos="fade-right" className="card bg-base-100 pt-4 shadow-xl">
          <div className=" flex justify-center ">
            <FaGraduationCap size={72} color="#DF826C" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Step By Step University Applcation</h2>
            <p>Find the right person for you and your academic applications.</p>
          </div>
        </div>
        {/* service 2 */}
        <div data-aos="fade-right" className="card bg-base-100 pt-4 shadow-xl">
          <div className=" flex justify-center ">
            <GrNotes size={72} color="#DF826C" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Guided through Application process</h2>
            <p>
              Provide SAT one month crash course, IELTS one month crash course .
            </p>
          </div>
        </div>
        {/* service 3*/}
        <div data-aos="fade-left" className="card bg-base-100 pt-4 shadow-xl">
          <div className=" flex justify-center ">
            <LiaPlaneDepartureSolid size={72} color="#DF826C" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Maximize your chooses of being granted your visa
            </h2>
            <p>
              Assistance in eight countries: America, South Korea, Germany,
              London, Australia, Argentina, Singapore, and Taiwan.
            </p>
          </div>
        </div>
        {/* service 4*/}
        <div data-aos="fade-left" className="card bg-base-100 pt-4 shadow-xl">
          <div className=" flex justify-center ">
            <BiSolidShoppingBags size={72} color="#DF826C" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Get support all the way to your first day in college/university
            </h2>
            <p>
              Assistance in eight countries: America, South Korea, Germany,
              London, Australia, Argentina, Singapore, and Taiwan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
