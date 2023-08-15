"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects_info from "@/app/utils/projects_info";
// Import Swiper styles

export default function AvtPage() {
  const avt = projects_info[0];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-100">
      <div>
        <Slider {...settings}>
          {avt.images.map((image) => {
            return (
              <div className="">
                <Image
                  src={image}
                  width={0}
                  height={0}
                  alt={image}
                  sizes="100vw"
                  style={{ width: "100%" }}
                  objectFit="contain"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
