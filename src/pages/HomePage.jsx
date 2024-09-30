// src/pages/HomePage.js
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import FilterTags from "../components/FilterTags";
import AudioList from "../components/AudioList";

const HomePage = () => {
  return (
    <div className="bg-lightBrown min-h-screen">
      <Header />
      <HeroSection />
      <SearchBar />
      <FilterTags />
      <div className="flex justify-center space-x-8">
        <h1 className="font-bold text-3xl font-lufga w-full justify-center flex">
          Here are some of the beats on Beat Farm
        </h1>
        {/* <BeatList /> */}
        {/* <Sidebar /> */}
      </div>
      <AudioList />
      <footer className="bg-[#4A3728] text-white py-12">
  <div className="container mx-auto px-6 text-center">
    {/* Branding and Description */}
    <h1 className="text-3xl font-bold">Beat Farm</h1>
    <p className="text-gray-300 text-sm mt-2">
      Discover and purchase high-quality beats from talented producers worldwide.
    </p>

    {/* Copyright Statement */}
    <p className="mt-8 text-sm text-gray-400">
      &copy; {new Date().getFullYear()} Beat Farm. All Rights Reserved.
    </p>
  </div>
</footer>

    </div>
  );<footer className="bg-[#4A3728] text-white py-12">
  <div className="container mx-auto px-6 text-center">
    {/* Branding and Description */}
    <h1 className="text-3xl font-bold">Beat Farm</h1>
    <p className="text-gray-300 text-sm mt-2">
      Discover and purchase high-quality beats from talented producers worldwide.
    </p>

    {/* Copyright Statement */}
    <p className="mt-8 text-sm text-gray-400">
      &copy; {new Date().getFullYear()} Beat Farm. All Rights Reserved.
    </p>
  </div>
</footer>

};

export default HomePage;
