import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import imageUser1 from "../../../../../assets/img/profile-img/user-1.png";
import imageUser2 from "../../../../../assets/img/profile-img/user-2.png";
import imageUser3 from "../../../../../assets/img/profile-img/user-3.png";
import arrowIconLeft from "../../../../../assets/img/icons/prev.png";
import arrowIconRight from "../../../../../assets/img/icons/next.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick, currentSlide, slideCount, slidesToShow } = props;
  const isLastSlideVisible = currentSlide + slidesToShow >= slideCount;
  return isLastSlideVisible ? null : (
    <img
      className="p-[10px] rounded-full bg-hirejob-purple-normal absolute -right-0 top-48 z-10"
      src={arrowIconRight}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick, currentSlide } = props;
  return currentSlide === 0 ? null : (
    <img
      className="p-[10px] rounded-full bg-hirejob-purple-normal absolute -left-0 top-48 z-10"
      src={arrowIconLeft}
      onClick={onClick}
    />
  );
}
const ReviewSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow slidesToShow={3} />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          nextArrow: <SampleNextArrow slidesToShow={2} />,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          nextArrow: <SampleNextArrow slidesToShow={1} />,
        },
      },
    ],
  };
  return (
    <div className="block px-4 md:px-16 xl:px-[150px] py-28 bg-hirejob-ice">
      <div className="text-center mb-[52px]">
        <h1 className="font-semibold text-4xl">Their opinion about peworld</h1>
      </div>
      <div className="w-11/12 m-auto">
        <div>
          <Slider {...settings}>
            {data.map((item) => (
              <div
                key={item.name}
                className="text-center flex flex-col h-[420px] px-[3%] py-[2%] bg-hirejob-white shadow-md"
              >
                <div className="my-3">
                  <img
                    className="mx-auto max-w-28 h-auto border-[10px] border-hirejob-yellow-dark rounded-full"
                    src={item.img}
                    alt={item.name}
                  />
                </div>
                <h1 className="font-semibold text-3xl">{item.name}</h1>
                <h2 className="font-normal text-lg text-hirejob-gray">
                  {item.jobdesk}
                </h2>
                <p className="font-normal text-lg leading-7 text-hirejob-slate px-[2%] py-3">
                  {item.review}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    name: `Harry Styles`,
    img: imageUser2,
    jobdesk: `Software Developer`,
    review: `Peworld offers a fantastic platform where IT professionals like
    myself can easily discover promising career paths.`,
  },
  {
    name: `Niall Horan`,
    img: imageUser3,
    jobdesk: `Computer Network Specialist`,
    review: `I'm impressed by Peworld's intuitive interface and their
    attentive customer service.`,
  },
  {
    name: `Louis Tomlinson`,
    img: imageUser1,
    jobdesk: `Data Analyst`,
    review: `Peworld's commitment to promoting diversity and inclusivity
    within the IT industry creates a welcoming and enriching
    experience for all users.`,
  },
];

export default ReviewSlider;
