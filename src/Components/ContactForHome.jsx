import React from "react";
import { BsTelephone } from "react-icons/bs";

const ContactForHome = () => {
  return (
    <div className=" mx-auto container mt-16 lg:mt-24">
      <div className=" grid grid-cols-1 pb-6 text-center">
        <div>
          <h3 className=" mb-4 text-2xl md:text-3xl !leading-normal font-semibold">
            Have Question ? Get in touch!
          </h3>
        </div>
        <div>
          <p className=" text-slate-400 max-w-xl mx-auto">
            A great plateform to buy, sell and rent your properties without any
            agent or commisions.
          </p>
        </div>
        <div>
          <button className=" mt-6 btn bg-green-600 hover:bg-green-700 text-white rounded-md">
            <div className=" flex items-center gap-2">
              <BsTelephone className=" w-4" />
              <p> Contact us</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForHome;
