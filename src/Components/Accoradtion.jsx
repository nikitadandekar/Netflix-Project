import React from "react";

function Accoradtion({ question, answer }) {
  return (
    <>
      <h1 className="bg-slate-600 w-40">{question}</h1>
      <h2 className="bg-gray-400 w-auto">{answer}</h2>
    </>
  );
}

export default Accoradtion;
