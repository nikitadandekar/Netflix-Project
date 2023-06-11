import React from "react";

function Footer() {
  return (
    <div>
      <div>
        <div className="bg-black shadow-md sticky top-0 z-0 text-slate-50 ">
          <div className="ml-8"> Questions? Call 000-800-919-1694</div>
          <div className="flex justify-items-center gap-44 mt-10 ml-8 gap-y-44 ">
            <ul>
              <li>FAQ</li>
              <li>Media Centre </li>
              <li>Ways to Watch</li>
              <li>Cookies preferences </li>
              <li>Speed Test</li>
            </ul>
            <ul>
              <li>Help Centre </li>
              <li>Investor Relation</li>
              <li>Corporate Information </li>
              <li>Terms of Use</li>

              <li>Legal Notices</li>
            </ul>
            <ul>
              <li>Account </li>
              <li>Jobs</li>
              <li>Privacy</li>
              <li>Contact us</li>
              <li>only on Netflix</li>
            </ul>
          </div>

          <div className="mt-8 pr-7 ">
            <button className="text-white  bg-slate-900 rounded-sm w-44 h-10 pr-11 ml-10">
              English
            </button>
          </div>
          <div className="ml-10 mt-8 ">Netflix India</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
