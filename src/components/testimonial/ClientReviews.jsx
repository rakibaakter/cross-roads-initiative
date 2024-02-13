import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import StarRatings from "react-star-ratings";

const ClientReviews = ({ review }) => {
  const { rating, details, name, image } = review;

  return (
    <SwiperSlide className="px-4  space-y-4 text-center ">
      <div className="bg-base-200 px-4 py-8 md:mx-20 lg:mx-48">
        <div className="h-12 w-12 md:h-24 md:w-24 rounded-full mx-auto">
          <img
            src={image}
            alt=""
            className="h-12 w-12 md:h-24 md:w-24 rounded-full "
          />
        </div>
        <h2 className=" uppercase text-xl md:text-2xl font-semibold my-2">
          {name}
        </h2>
        <StarRatings
          rating={rating}
          starRatedColor="orange"
          starDimension="24px"
          starSpacing="2px"
          name="rating"
        />
        <br />

        <p className="w-full my-2">{details}</p>
      </div>
    </SwiperSlide>
  );
};

export default ClientReviews;
