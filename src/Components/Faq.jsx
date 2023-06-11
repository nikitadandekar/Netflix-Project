import React, { useState } from "react";
import { question } from "./Qestion-answer";
import Accoradtion from "./Accoradtion";
function Faq() {
  const [data, setaData] = useState(question);
  return (
    <>
      <section className="main-div bg-black shadow-md sticky top-0 z-0 text-gray-200 mb-44">
        <div className="  text-white  font-bold text-5xl text-center  pt-12  ">
          Frequently Asked Questions
        </div>
        {data.map((currELEM) => {
          const { id } = currELEM;
          return <Accoradtion key={id} {...currELEM} />;
        })}
        <div className="text-center mt-6 text-white text-2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="flex justify-center mt-8">
          <div className=" ">
            <input
              className="w-96 h-16 rounded-sm pl-3 mr-2 bg-slate-900 text-white mb-48"
              type="email "
              id="email"
              placeholder="Email address"
            />
          </div>
          <button className="text-white w-60 h-16 text-2xl bg-red-500 rounded-sm ">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}

export default Faq;
