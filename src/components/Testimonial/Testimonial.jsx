import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "David Calathan - Direktur Operasional Desain, New York",
    text: "Hasilnya luar biasa. Bersama Power Digital, rasanya seperti mereka ada di sisi kami, mendukung dan memahami kebutuhan kami. Mereka seperti mitra dan mentor yang membantu kami mencapai tujuan.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Jane Doe - Manajer Pemasaran, California",
    text: "Power Digital telah menjadi mitra yang sangat berharga bagi kami. Mereka tidak hanya memberikan hasil yang luar biasa, tetapi juga selalu siap membantu dan memberikan solusi kreatif.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "John Smith - Direktur Operasi, Texas",
    text: "Kami sangat puas dengan layanan Power Digital. Mereka benar-benar memahami bisnis kami dan memberikan strategi yang tepat untuk mencapai tujuan kami.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
