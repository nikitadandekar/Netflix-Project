import React, { useState } from "react";
import { question } from "./Qestion-answer";
import Accoradtion from "./Accoradtion";
function Faq() {
  const [data, setaData] = useState(question);
  return (
    <>
      <section className="main-div bg-black shadow-md sticky top-0 z-0 text-gray-200">
        <h1 className="text-white font-bold text-5xl text-start ml-80 ">
          Frequently Asked Questions
        </h1>
        {data.map((currELEM) => {
          const { id } = currELEM;
          return <Accoradtion key={id} {...currELEM} />;
        })}
      </section>
    </>
  );
}

export default Faq;
