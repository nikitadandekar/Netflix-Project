import React from "react";

function Left(props) {
  return (
    <div>
      <div>
        <div className="bg-black shadow-md sticky top-0 z-0 ">
          <div className="flex">
            <div className=" flex mt-60">
              <div className=" ">
                <div className="text-white font-bold text-5xl text-start pl-72">
                  {props.title}
                </div>
                <div className="text-white font-bold text-xl text-start  mt-4 pl-72 ">
                  {props.para}
                </div>
                <div className="text-white font-bold text-xl text-start  pl-72">
                  {props.next}
                </div>
              </div>

              <div className=" w-80 h-60 mb-80 mr-80 absolute bottom-0 right-56">
                <img src="https://filmfare.wwmindia.com/thumb/content/2016/May/y1_1464687926.jpg?width=1200&height=900"></img>
              </div>
              <div className=" ml-50 mb-48">
                <div className="  ">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
