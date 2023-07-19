import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import "owl.carousel/dist/owl.carousel";
import OwlCarousel from "react-owl-carousel";

const CarouselPage = () => {
  const slides = [
    {
      id: 1,
      img: "https://hously-react.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg",
      personName: "Calvin Carlo",
      job: "Manager",
      text: " Hously made the processes so easy. Hously instantly increased the amount of interest and ultimately saved us over $10,000.",
    },
    {
      id: 2,
      img: "https://hously-react.vercel.app/static/media/04.35463172278c4051b5f4.jpg",
      personName: "Christa Smith",
      job: "Manager",
      text: " Great experience all around! Easy to use and efficient. ",
    },
    {
      id: 3,
      img: "https://hously-react.vercel.app/static/media/02.7df14e12e444ad660802.jpg",
      personName: "Christina Jalk",
      job: "Manager",
      text: " I highly recommend Hously as the new way to sell your home by owner.My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. ",
    },
    {
      id: 4,
      img: "https://hously-react.vercel.app/static/media/03.ba5f8794c055cc1488b5.jpg",
      personName: "Lily June",
      job: "Manager",
      text: " My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable!",
    },
  ];

  const options = {
    nav: true,

    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    autoplaySpeed: 500,
    // navContainer: ".custom-nav", // Specify the navigation container selector
    navText: ["<", ">"], // Specify the custom navigation text (previous and next buttons)
    responsive: {
      0: {
        items: 1, // Show one item on smaller screens
      },
      768: {
        items: 1, // Show three items on screens larger than 768px
      },
      1024: {
        items: 3, // Show five items on screens larger than 1024px
      },
    },
  };

  return (
    <div className="  container mx-auto w-[200px] relative">
      <OwlCarousel {...options}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <img
              className=" max-w-[200px]"
              src={slide.img}
              alt={slide.personName}
            />
            <h3>{slide.personName}</h3>
            <p>{slide.text}</p>
          </div>
        ))}
        {/* <div>hello</div>
        <div>hello2</div>
        <div>hello3</div>
        <div>hello4</div> */}
      </OwlCarousel>
    </div>
  );
};

export default CarouselPage;
