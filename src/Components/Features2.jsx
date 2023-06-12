import React from "react";

function Features2(props) {
  return (
    <div>
      <div>
        <div className="bg-black shadow-md sticky top-0 z-0 ">
          <div className="flex ">
            <div className=" ml-40 mb-24 mt-16">
              <img src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"></img>
            </div>
            <div className="mt-60 ml-32">
              <div className="text-white font-bold text-5xl text-start  ">
                {props.title}
              </div>
              <div className="text-white font-bold text-xl text-start mt-2 ">
                {props.para}
              </div>
              <div className="text-white font-bold text-xl text-start  mt-2">
                {props.next}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features2;
