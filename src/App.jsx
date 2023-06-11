import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Left from "./Components/Left";
import Right from "./Components/Right";
import Feature1 from "./Components/Feature1";
import Features2 from "./Components/Features2";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header
        title="Unlimited movies,Tv shows and more"
        para="Watch anywhere. Cancle anytime "
        next="Ready to watch? Enter your email to create or restart your membership."
      />
      <div className="bg-slate-700 h-2.5 w-full"></div>
      <Left
        title="Enjoy on your TV"
        para="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,"
        next=" Blu-ray players and more."
      />
      <div className="bg-slate-700 h-2.5 w-full"></div>
      <Right
        title="Download your shows to"
        para="watch offline"
        next=" Save your favourites easily and always have something to watch."
      />
      <div className="bg-slate-700 h-2.5 w-full"></div>
      <Feature1
        title="Watch everywhere"
        para="Stream unlimited movies and TV shows on your phone, tablet,"
        next="laptop, and TV."
      />
      <div className="bg-slate-700 h-2.5 w-full"></div>
      <Features2
        title="Create profiles for kids"
        para="Send children on adventures with their favourite characters in a"
        next="space made just for them—free with your membership."
      />
      <div className="bg-slate-700 h-2.5 w-full"></div>
      <Faq />
      <div className="bg-slate-700 h-2.5 w-full"></div>
      <Footer />
    </div>
  );
}

export default App;
