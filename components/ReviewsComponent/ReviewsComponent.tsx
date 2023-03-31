import React, { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Review, ReviewProps } from "./ReviewsComponent.interface";

const ReviewerAvatar: FC<Review> = ({ image, name }) => {
  return (
    <Image
      className="absolute -top-0 z-10"
      src={image}
      alt={name}
      height={56}
      width={56}
    />
  );
};

export const ReviewsComponent: FC<ReviewProps> = ({ reviews }) => {
  const [viewportWidth, setViewportWidth] = React.useState<number>(0);
  React.useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    setViewportWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-16">
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900">
        What they&apos;ve said
      </h2>
      <div>
        <Swiper
          className="flex flex-row items-center w-full"
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={viewportWidth > 768 ? 3 : 1}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
        >
          {reviews?.map((review) => {
            return (
              <SwiperSlide key={review.id} className="relative py-8 w-full">
                <div className="bg-[#fafafa] text-center flex flex-col items-center gap-4 p-5 min-h-[210px]">
                  <ReviewerAvatar {...review} />
                  <p className="text-sm font-semibold mt-4">{review.name}</p>
                  <p className="text-center text-gray-400">{review.review}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#f26641] hover:opacity-80 px-6 py-2.5 w-auto rounded-full text-sm text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};
