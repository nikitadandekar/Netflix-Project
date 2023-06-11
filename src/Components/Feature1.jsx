import React from "react";

function Feature1(props) {
  return (
    <div>
      <div>
        <div className="bg-black shadow-md sticky top-0 z-0 ">
          <div className="flex">
            <div className=" ">
              <div className="text-white font-bold text-5xl text-start ml-80 ">
                {props.title}
              </div>
              <div className="text-white font-bold text-xl text-start ml-80 mt-5">
                {props.para}
              </div>
              <div className="text-white font-bold text-xl text-start ml-80 ">
                {props.next}
              </div>
            </div>

            <div className="ml-80">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature1;
