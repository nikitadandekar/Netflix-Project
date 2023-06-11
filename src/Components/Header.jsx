import React from "react";

function Header(props) {
  return (
    <div>
      <div>
        <div className="bg-black shadow-md sticky top-0 z-0 ">
          <div className="flex justify-end ">
            <div className="mr-auto pl-28">
              <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
                className="w-full h-32 object-contain "
              ></img>
            </div>
            <div className="mt-8 pr-7 ">
              <button className="text-white bg-slate-500 rounded-sm w-44 h-10 pr-11">
                English
              </button>
            </div>
            <div className="mt-8 mr-56 ">
              <button className="text-white  bg-red-500 rounded-sm w-28 h-10">
                Sign In
              </button>
            </div>
          </div>
          <div className="text-white font-bold text-5xl text-center mt-32">
            {props.title}
          </div>
          <div className="text-white text-xl text-center mt-7">
            {props.para}
          </div>
          <div className="text-white text-xl text-center mt-7">
            {props.next}
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
              {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/73334647-ad51-42a9-b07b-93298cc2a8e1/2b0fca4f-c15c-4622-9efc-572c4a408c30/IN-en-20230605-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
