import React from "react";
import { FiSearch } from "react-icons/fi";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className=" bg-slate-900">
      <div className=" container mx-auto mt-24 relative py-16">
        <div className=" overflow-hidden shadow -top-[150px] relative  bg-white px-6 py-10 w-full">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div>
              <h3 className=" text-2xl md:text-3xl !leading-normal font-medium">
                Subscribe to Newsletter!
              </h3>

              <p className=" text-slate-400 max-w-xl mx-auto">
                Subscribe to get latest updates and information.
              </p>
            </div>
            <div>
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
          <div className=" absolute -top-5 -start-5">
            <Icon className=" lg:text-[150px] text-7xl text-black/5 -rotate-45" icon={"uil:envelope"} />
          </div>
          <div></div>
        </div>
        <div className=" -mt-14">
          <div className=" grid md:grid-cols-12 grid-cols-1 gap-[30px] ">
            <div className=" lg:col-span-4 md:col-span-12 text-white">
              hello
            </div>
            <div className=" lg:col-span-2  md:col-span-4 text-white">2</div>
            <div className=" lg:col-span-3 md:col-span-4 text-white">3</div>
            <div className=" lg:col-span-3 md:col-span-4 text-white">4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
