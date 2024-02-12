import team from "../../assets/team.jpg";

const Mentorship = () => {
  return (
    <div className=" px-4 md:px-8 lg:px-20 mt-8  md:mt-16 lg:mt-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-wider ">
          Mentorship Platform For Higher Education Abroad
        </h2>
      </div>
      <div className="mt-12 flex">
        <div className="w-1/2 font-medium tracking-wider   md:pr-16 mt-6">
          <h3 className="mt-4 text-xl text-red-600 font-semibold">
            Are you looking for a scholarship to study abroad?
            <br /> You are in the right place!
          </h3>
          <div className="space-y-3 mt-6 text-gray-600">
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
            <p>
              Last year, we helped students receive 70+ scholarships in top
              universities!
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <img src={team} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
