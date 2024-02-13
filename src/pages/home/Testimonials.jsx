import SectionTitle from "../../components/SectionTitle";
import Reviews from "../../components/testimonial/Reviews";

const Testimonials = () => {
  return (
    <div
      data-aos="fade-left"
      className=" px-4 md:px-8 lg:px-20 mt-8 md:mt-16 lg:mt-32 "
    >
      <section className="flex justify-center ">
        <SectionTitle subtitle={"Client"} highlight={"Reviews"} />
      </section>
      <Reviews data-aos="fade-bottom" />
    </div>
  );
};

export default Testimonials;
