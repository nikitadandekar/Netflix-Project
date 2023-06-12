import React from "react";

function Feature1(props) {
  return (
    <div>
      <div>
        <div className="bg-black shadow-md sticky top-0 z-0 ">
          <div className="flex ">
            <div className=" ">
              <div className="text-white font-bold text-5xl text-start ml-80 mt-44">
                {props.title}
              </div>
              <div className="text-white font-bold text-xl text-start ml-80 mt-5">
                {props.para}
              </div>
              <div className="text-white font-bold text-xl text-start ml-80 ">
                {props.next}
              </div>
            </div>
            <div className="w-80 h-60 mb-80 mr-80 absolute bottom-0 right-56">
              <img src="https://m.economictimes.com/thumb/msid-96758008,width-1600,height-900,resizemode-4,imgsize-105322/rrr-3.jpg"></img>
            </div>

            <div className="mr-28 mt-24 mb-36">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature1;
