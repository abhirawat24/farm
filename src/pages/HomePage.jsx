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
        <div className="container mx-auto px-6 md:px-12">
          {/* Footer Top - Branding and Description */}
          <div className="flex flex-col md:flex-row justify-between mb-10">
            {/* Left: Logo & Description */}
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-bold">Beat Farm</h1>
              <p className="text-gray-300 text-sm mt-2">
                Discover and purchase high-quality beats from talented producers
                worldwide.
              </p>
            </div>

            {/* Right: Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-white hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.93 4.93 0 002.163-2.724 10.007 10.007 0 01-3.13 1.196 4.918 4.918 0 00-8.384 4.482 13.955 13.955 0 01-10.141-5.15 4.902 4.902 0 001.523 6.573A4.903 4.903 0 012.4 8.867v.05a4.918 4.918 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.922 4.922 0 004.596 3.417A9.868 9.868 0 010 21.54a13.919 13.919 0 007.548 2.212c9.056 0 14.01-7.506 14.01-14.01 0-.214-.005-.428-.015-.64a10.018 10.018 0 002.46-2.549l-.047-.02z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-white hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.75 2h8.5A5.752 5.752 0 0122 7.75v8.5A5.752 5.752 0 0116.25 22h-8.5A5.752 5.752 0 012 16.25v-8.5A5.752 5.752 0 017.75 2zm0 1.5A4.253 4.253 0 003.5 7.75v8.5A4.253 4.253 0 007.75 20.5h8.5A4.253 4.253 0 0020.5 16.25v-8.5A4.253 4.253 0 0016.25 3.5h-8.5zm7.125 1.875h1.875a.75.75 0 110 1.5h-1.875a.75.75 0 110-1.5zm-4.125 2.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-white hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.197 21v-9.335H6.584V9.293h2.613V7.036c0-2.49 1.38-3.875 3.638-3.875.746 0 1.517.068 2.277.132v2.643H14.28c-1.225 0-1.435.582-1.435 1.425v1.934h2.85l-.457 2.372H12.845V21H9.197z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Bottom - Navigation Links */}
          <div className="flex flex-col md:flex-row justify-between border-t border-gray-700 pt-8 text-sm text-gray-400">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-6 md:mb-0">
              <a href="/about" className="hover:text-gray-200">
                About Us
              </a>
              <a href="/contact" className="hover:text-gray-200">
                Contact
              </a>
              <a href="/faq" className="hover:text-gray-200">
                FAQs
              </a>
              <a href="/privacy" className="hover:text-gray-200">
                Privacy Policy
              </a>
            </div>
            <p className="text-center md:text-right">
              &copy; {new Date().getFullYear()} Beat Farm. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
