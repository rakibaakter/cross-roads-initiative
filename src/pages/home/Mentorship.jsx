import team from "../../assets/team.jpg";

const Mentorship = () => {
  return (
    <div className=" px-4 md:px-8 lg:px-20 mt-8  md:mt-16 lg:mt-20">
      <div className="text-center"></div>
      <div className="mt-8 md:mt-12 flex flex-col-reverse md:flex-row md:items-end">
        <div className="md:w-1/2 lg:font-medium tracking-wider  md:pr-4 lg:pr-16 ">
          <h2 className="text-2xl lg:text-4xl font-medium tracking-wider ">
            Mentorship Platform For Higher Education Abroad
          </h2>
          <h3 className="mt-4 lg:text-2xl text-red-600 font-medium lg:font-semibold">
            Are you looking for a scholarship to study abroad?
            <br /> You are in the right place!
          </h3>
          <div className="lg:space-y-3 mt-6 text-gray-600">
            <p>
              We connect international university students with high school
              students, providing one-on-one mentoring for studying abroad with
              scholarships.
            </p>
            <p>
              Our platform allows university & high-school student from any
              country of the world to sign-up and receive mentoring by a student
              from their desired university program.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={team} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
