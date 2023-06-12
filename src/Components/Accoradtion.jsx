import React, { useState } from "react";

function Accoradtion({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="  mt-20">
        <div className="main heading bg-slate-600 flex justify-center w-4/6 ml-48 h-14 rounded-s-md">
          <div className="text-2xl">{question}</div>

          <p onClick={() => setShow(!show)}>{show ? "-" : "+"}</p>
        </div>

        <div className=" main heading bg-slate-800 flex justify-center w-4/6 ml-48  rounded-s-md">
          {show && (
            <h2 className="text-2xl text-start pl-4 pt-4 pb-5">{answer}</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accoradtion;
