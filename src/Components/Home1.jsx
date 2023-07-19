import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiPlay1 } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { LuHexagon } from "react-icons/lu";
import { BiHomeAlt } from "react-icons/bi";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { addHeart, removeHeart } from "../Services/heart";
import CarouselPage from "./CarouselPage";
import ContactForHome from "./ContactForHome";

const cards = [
  {
    id: "1",
    title: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
    image:
      "https://hously-react.vercel.app/static/media/1.bfd273967d5b93df7a02.jpg",
  },
  {
    id: "2",
    title: "59345 STONEWALL DR, Plaquemine, LA 70764, USA",
    image:
      "https://hously-react.vercel.app/static/media/2.e5bc3d17749573c2fd3e.jpg",
  },
  {
    id: "3",
    title: "3723 SANDBAR DR, Addis, LA 70710, USA",
    image:
      "https://hously-react.vercel.app/static/media/3.c799274c67ecb7c94a70.jpg",
  },
  {
    id: "4",
    title: "Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA",
    image:
      "https://hously-react.vercel.app/static/media/4.1cefc41c08f3161f9c19.jpg",
  },
  {
    id: "5",
    title: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA",
    image:
      "https://hously-react.vercel.app/static/media/5.289f490cebbaef2f5f58.jpg",
  },
  {
    id: "6",
    title: "5133 MCLAIN WAY, Baton Rouge, LA 70809, USA",
    image:
      "https://hously-react.vercel.app/static/media/6.e926f8483d02a9e86342.jpg",
  },
];

const Home1 = () => {
  const [showHomeIframe, setShowHomeIframe] = useState(true);
  const [btn, setBtn] = useState("buy");
  const dispatch = useDispatch();
  const { heart } = useSelector((state) => state.heart);
  console.log(heart);

  return (
    <div>
      <section>
        <div className=" bg-[#E7F6ED] h-fit py-20 lg:h-screen">
          {/* <div className=" lg:flex  lg:flow-row justify-between items-center container px-[13rem] mx-auto">
        <div className=" basis-6/12">
          <h1>Find Your</h1>{" "}
        </div>
        <div className={` basis-6/12`}>
          <div className=" relative w-fit z-0 ml-auto">
            <img
              src="https://hously-react.vercel.app/static/media/1.bfd273967d5b93df7a02.jpg"
              alt=""
              className=" border-[15px] rounded-t-full border-white  lg:w-[500px] h-[600px] object-cover object-center "
            />
            <div className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center item-end w-[70px] h-[70px] border-none rounded-full  bg-white">
              <button onClick={() => setShowHomeIframe(false)}>
                <CiPlay1 color="#16a34a" size={"2rem"} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${showHomeIframe ? "hidden" : ""} z-50 `}>
        <div
          className={`absolute inset-0 bg-black opacity-60 w-screen h-[2500px] xl:h-[5000px] z-20`}
        ></div>
        <div>
          <iframe
           
            src={`${
              showHomeIframe ? "" : "https://www.youtube.com/embed/yba7hPeTSjk"
            }`}
            title="YouTube video player"
            allow=" web-share"
            className={` ${
              showHomeIframe ? "hidden" : ""
            } z-50  fixed top-[50%] right-[10%] md:right-[50%] md:translate-x-[50%] translate-y-[-50%] w-[80%] lg:w-[50%] h-[40%]`}
          ></iframe>
          <button
            onClick={() => setShowHomeIframe(true)}
            className={`fixed top-[26%] lg:top-[20%] right-[9%] lg:right-[22%] w-10 h-10 p-2 border-0 text-white bg-[#16a34a] hover:bg-[#138a3f] rounded-full mx-1 z-50 `}
          >
            <AiOutlineClose size={"1.5rem"} color="white" />
          </button>
        </div>
      </div> */}

          <div className=" container mx-auto">
            <div className=" grid md:grid-cols-2 gap-[30px] mt-10 items-center">
              <div className=" text-center md:text-left">
                <h1 className="font-bold  !leading-normal text-4xl lg:text-5xl mb-6">
                  Find Your
                  <span className=" text-green-600">
                    Perfect
                    <br /> & Wonderful
                  </span>
                  Home
                </h1>
                <p className="text-slate-400 text-xl max-w-xl">
                  A great plateform to buy, sell and rent your properties
                  without any agent or commisions.
                </p>
                <div className=" bg-white w-fit flex p-4 rounded-t-xl border-b-[1px] mt-8">
                  <button
                    onClick={() => setBtn("buy")}
                    className={`${
                      btn === "buy" ? "bg-green-600 text-white" : ""
                    } w-full px-6 text-base font-medium transition-all duration-500 ease-in-out  py-2 rounded-md`}
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setBtn("sell")}
                    className={`${
                      btn === "sell" ? "bg-green-600 text-white" : ""
                    } w-full px-6 text-base font-medium transition-all duration-500 ease-in-out  py-2 rounded-md`}
                  >
                    Sell
                  </button>
                  <button
                    onClick={() => setBtn("rent")}
                    className={`${
                      btn === "rent" ? "bg-green-600 text-white" : ""
                    } w-full px-6 text-base font-medium transition-all duration-500 ease-in-out  py-2 rounded-md`}
                  >
                    Rent
                  </button>
                </div>
                <div className=" bg-white  p-6 rounded-b-xl shadow rounded-tr-xl">
                  <div className=" ">
                    <form className=" w-full rounded-full p-[2px] border flex items-center justify-between">
                      <div className=" flex items-center gap-1 ml-5">
                        <FiSearch className=" w-5 h-5" />
                        <input
                          className=" max-w-[80px] xxs:max-w-[130px] "
                          type="text"
                          placeholder="City, Address, Zip :"
                        />
                      </div>
                      <button className="btn bg-green-600 hover:bg-green-600 text-white rounded-full  ">
                        Find Out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className=" relative lg:ms-10">
                <div className="p-5 shadow relative  rounded-t-full bg-white ">
                  <img
                    src="https://hously-react.vercel.app/static/media/hero.d2024381e96556cf0577.jpg"
                    className=" shadow-md rounded-t-full"
                    alt=""
                  />
                </div>
                <div className=" absolute top-[50%] z-40 left-[45%]">
                  <div className=" p-5 bg-white rounded-full">
                    <CiPlay1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" relative md:pb-24 pb-16">
        <div className=" container mx-auto lg:mt-24 mt-16">
          <div className=" grid grid-cols-1 md:grid-cols-12 items-center gap-[30px]">
            <div className=" md:col-span-5 ">
              <div className=" relative">
                <img
                  className=" rounded-xl shadow-md "
                  src="https://hously-react.vercel.app/static/media/about.f67dcc77d84a6e14d5de.jpg"
                  alt=""
                />
                <div className=" absolute top-[50%] z-40 left-[45%]">
                  <div className=" p-5 bg-white rounded-full">
                    <CiPlay1 />
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:col-span-7">
              <div className=" lg:ms-4">
                <h4 className="mb-6 md:text-3xl text-2xl !leading-[1.8] font-semibold">
                  Efficiency. Transparency.
                  <br />
                  Control.
                </h4>
                <p className=" text-slate-400 max-w-xl">
                  Hously developed a platform for the Real Estate marketplace
                  that allows buyers and sellers to easily execute a transaction
                  on their own. The platform drives efficiency, cost
                  transparency and control into the hands of the consumers.
                  Hously is Real Estate Redefined.
                </p>
                <button className=" btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-7">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* for LuHexagon */}
        <div className=" container mx-auto lg:mt-24 mt-16">
          <div className=" grid grid-cols-1 pb-8 text-center">
            <div>
              <h3 className=" mb-4 text-2xl md:text-3xl !leading-normal font-semibold">
                How It Work
              </h3>
            </div>
            <div>
              <p className=" text-slate-400 max-w-xl mx-auto">
                A great plateform to buy, sell and rent your properties without
                any agent or commisions.
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 mt-8 gap-[30px] lg:grid-cols-3  ">
            <div>
              <div className=" relative">
                <LuHexagon className=" mx-auto  h-32 w-32 text-[#f3faf6] fill-[#f3faf6]" />

                <div className=" absolute top-2/4 start-0 end-0 -translate-y-2/4  flex  justify-center ">
                  <Icon
                    icon="uil:estate"
                    className=" text-5xl text-green-600"
                  />
                </div>
              </div>

              <div className=" mt-6">
                <h5 className=" text-xl font-medium text-center">
                  Evaluate Property
                </h5>
                <p className=" text-slate-400 mt-3 text-center">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div>
              <div className=" relative">
                <LuHexagon className=" mx-auto  h-32 w-32 text-[#f3faf6] fill-[#f3faf6]" />

                <div className=" absolute top-2/4 start-0 end-0 -translate-y-2/4  flex  justify-center ">
                  <Icon icon="uil:bag" className=" text-5xl text-green-600" />
                </div>
              </div>
              <div className=" mt-6">
                <h5 className=" text-xl font-medium text-center">
                  Meeting with Agent
                </h5>
                <p className=" text-slate-400 mt-3 text-center">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div>
              <div className=" relative">
                <LuHexagon className=" mx-auto  h-32 w-32 text-[#f3faf6] fill-[#f3faf6]" />

                <div className=" absolute top-2/4 start-0 end-0 -translate-y-2/4  flex  justify-center ">
                  <Icon
                    icon="uil:key-skeleton"
                    className=" text-5xl text-green-600"
                  />
                </div>
              </div>
              <div className=" mt-6">
                <h5 className=" text-xl font-medium text-center">
                  Close the Deal
                </h5>
                <p className=" text-slate-400 mt-3 text-center">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* for LuHexagon end*/}

        {/* card  */}
        <div className=" container mx-auto lg:mt-24 mt-16">
          <div className=" grid grid-cols-1 pb-8 text-center">
            <div>
              <h3 className=" mb-4 text-2xl md:text-3xl !leading-normal font-semibold">
                Featured Properties
              </h3>
            </div>
            <div>
              <p className=" text-slate-400 max-w-xl mx-auto">
                A great plateform to buy, sell and rent your properties without
                any agent or commisions.
              </p>
            </div>
          </div>

          {/* card */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-[30px]">
            {cards.map((item) => {
              return (
                <div
                  key={item?.id}
                  className=" rounded-xl bg-white shadow overflow-hidden"
                >
                  <div className=" relative ">
                    <img src={item.image} alt="" />
                    <div
                      // onClick={() =>
                      //   heart?.find((e) =>
                      //     e === item.id
                      //       ? dispatch(removeHeart(item?.id))
                      //       : dispatch(addHeart(item?.id))
                      //   )
                      // }
                      onClick={() =>
                        heart?.find((e) => e === item?.id)
                          ? dispatch(removeHeart(item?.id))
                          : dispatch(addHeart(item?.id))
                      }
                      className={` ${
                        heart?.find((e) => e === item?.id)
                          ? " text-red-500"
                          : ""
                      } absolute top-4 right-4`}
                    >
                      heart
                    </div>
                  </div>
                  <div className=" p-6">
                    <div className=" pb-6">
                      <p className=" text-lg font-medium">{item.title}</p>
                    </div>
                    <div>
                      <ul className=" border-y flex items-center py-6">
                        <li className=" flex items-center me-4">
                          <Icon
                            className=" text-2xl me-2 text-green-600"
                            icon={"uil:compress-arrows"}
                          />
                          <span>8000 sqf</span>
                        </li>
                        <li className=" flex items-center me-4">
                          <Icon
                            className=" text-2xl text-green-600 me-2"
                            icon={"uil:bed-double"}
                          />
                          <span>4 Beds</span>
                        </li>
                        <li className=" flex items-center">
                          <Icon
                            className=" text-2xl text-green-600 me-2"
                            icon={"uil:bath"}
                          />
                          <span>4 Baths</span>
                        </li>
                      </ul>
                      <ul className=" pt-6 flex justify-between items-center">
                        <li>
                          <span className=" text-slate-400">Price</span>
                          <p className=" text-lg font-medium">$5000</p>
                        </li>
                        <li>
                          <span className=" text-slate-400">Rating</span>
                          <ul className=" text-lg font-medium flex  text-amber-400">
                            <li className="  ms-1">
                              <Icon icon={"mdi:star"} />
                            </li>
                            <li className="  ms-1">
                              <Icon icon={"mdi:star"} />
                            </li>
                            <li className="  ms-1">
                              <Icon icon={"mdi:star"} />
                            </li>
                            <li className="  ms-1">
                              <Icon icon={"mdi:star"} />
                            </li>
                            <li className="  ms-1">
                              <Icon icon={"mdi:star"} />
                            </li>
                            <li className=" text-black">
                              <p>5(30)</p>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* card end */}
        {/* Carousel start */}
        {/* <CarouselPage/> */}

        {/* start Contact us */}
        <ContactForHome/>
      </section>
    </div>
  );
};

export default Home1;
