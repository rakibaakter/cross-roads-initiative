import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero h-[80vh] relative"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="absolute flex items-center justify-end bg-gradient-to-l from-black to-[rgba(21, 21, 21, 0.00)] h-full w-full">
        <div className="text-white text-right  w-full md:w-3/5 lg:w-1/2 pr-4 md:pr-8 lg:pr-20">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase tracking-widest">
            Cr
            <span className="text-red-600">o</span>
            ssRoads
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-4xl font-medium uppercase tracking-widest">
            Initiative
          </h3>
          <p className=" mt-2 md:text-xl tracking-widest opacity-90">
            We are here to help Bangladeshi students pursue higher education
            degrees & programs abroad.
          </p>
        </div>
      </div>
      {/* <div className="hero-content text-white ">
        <div className=" bg-black bg-opacity-60 ">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
