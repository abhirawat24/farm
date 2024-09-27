// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import FilterTags from '../components/FilterTags';
import BeatList from '../components/BeatList';
import Sidebar from '../components/Sidebar';
import AudioList from '../components/AudioList';

const HomePage = () => {
  return (
    <div className="bg-lightBrown min-h-screen">
      <Header />
      <HeroSection />
      <SearchBar />
      <FilterTags />
      <div className="flex justify-center space-x-8">

        <h1 className='font-bold text-3xl font-lufga w-full justify-center flex'>Here are some of the beats on Beat Farm</h1>
        {/* <BeatList /> */}
        {/* <Sidebar /> */}
      </div>
        <AudioList/>
    </div>
  );
};

export default HomePage;
