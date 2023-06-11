import React from "react";

function Right(props) {
  return (
    <div>
      <div>
        <div className="bg-black shadow-md sticky top-0 z-0 ">
          <div className="flex ">
            <div>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"></img>
            </div>
            <div>
              <div className="text-white font-bold text-5xl text-start  ">
                {props.title}
              </div>
              <div className="text-white font-bold text-5xl text-start ">
                {props.para}
              </div>
              <div className="text-white font-bold text-xl text-start  ">
                {props.next}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
