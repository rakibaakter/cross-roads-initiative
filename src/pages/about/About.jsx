import SectionTitle from "../../components/SectionTitle";

import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div
      className="px-4 md:px-8 lg:px-20 mt-8 md:mt-16 lg:mt-32"
      data-aos="fade-right"
    >
      {/* title */}
      <SectionTitle title={"About"} subtitle={"About"} highlight={"Us"} />

      {/* flex div for description and image */}
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        {/* description */}
        <p className="lg:w-1/2 lg:pr-12 text-gray-500 font-medium tracking-wide text-justify">
          Every-year, more than 700,000 high-school students in Bangladesh don't
          get the opportunity to receive university education after HSC exams
          and most of them remain unemployed. Not because of their lack of
          talent or potential, but because we have inadequate seats in
          universities to teach them. CrossRoads Initiative connects Bangladeshi
          students studying in universities (home and abroad) with 700,000
          dropout High-school students every year, to create a P2P mentorship
          platform.
          <br />
          Our Team is from 8 countries including America, Korea, India, Germany,
          Argentina, England, Taiwan and Singapore - which gives us a unique
          positioning to scale and helps thousands of students worldwide.
          <br />
          Since May 2019, we organized 18+ seminars to mentor 3200+ People
          physically and 39,000+ people digitally in Facebook Live.
          <br />
          CrossRoads' pilot project called ‘Super 50’ trains 50 students in each
          division of Bangladesh in a 4-month long bootcamp to help all of them
          receive scholarships and university education.
          <br />
          Furhermore, our Facebook Page reached 5000+ organic student growth
          each month in March 2020. Collaborating with Prothom Alo Education USA
          and Bangladesh Ministry of Education to reach out to GrassRoot Level
          Students. Through Winning Student to StartUp Bangladesh, we are
          supported by StartUp Bangladesh, a2i Bangladesh, where we have access
          to 5500 digital centers through ICT Ministry Bangladesh. Radio Foorti
          helps us reach thousands of audio customers, whereas our FB group has
          ~40,000 members/customers.
        </p>
        {/* image */}
        <div data-aos="fade-left" className="lg:w-1/2">
          <img src={about} alt="CrossRoad Inintiative" />
        </div>
      </div>

      {/* out of the flex div */}
      <div className="mt-8 flex flex-wrap text-gray-500 gap-8 md:gap-16 lg:gap-24">
        <div data-aos="fade-right">
          <h2 className="text-xl font-semibold">Industry</h2>
          <p>Higher Education</p>
        </div>
        <div data-aos="fade-right">
          <h2 className="text-xl font-semibold">Founded</h2>
          <p>2018</p>
        </div>
        <div data-aos="fade-left">
          <h2 className="text-xl font-semibold">Headquarters</h2>
          <p>San Francisco, California</p>
        </div>

        <div data-aos="fade-left">
          <h2 className="text-xl font-semibold">Company Size</h2>
          <p>51-200 employees</p>
        </div>
      </div>
      <div className="text-gray-500 mt-4 font-medium tracking-wide ">
        <h2 data-aos="fade-top" className="text-xl font-semibold">
          Specialities
        </h2>
        <p data-aos="fade-top">
          Online Education, Visa Application, University Application,
          Scholarship Opportunities, Scholarship Application, International
          Students, Mentorship, Career Guideline, USA Top Universities, and
          Bangladesh
        </p>
      </div>
    </div>
  );
};

export default About;
