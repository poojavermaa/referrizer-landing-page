import React from 'react';
import { BsTrophy } from 'react-icons/bs';
import { HiPlay } from 'react-icons/hi2';

const Header = () => {
    return (
        <div className="relative w-full h-[120vh] 
            bg-[url('./images/header-mobile.png')] bg-no-repeat bg-cover bg-center
            sm:bg-[url('./images/header.png')]">
            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 pt-32 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6
                        sm:text-4xl sm:leading-tight">
                        Become a Referrizer<br />
                        API Integration Partner
                    </h1>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto
                        sm:text-base">
                        Join our API Integration Partner Program and Grow Your Business.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 
                        sm:flex-row sm:gap-6">
                        <button className="bg-white text-[#377DFF] px-8 py-3 rounded-lg font-semibold
                            hover:bg-opacity-90 transition-all duration-300
                            sm:w-full sm:max-w-[200px]">
                            Get Started
                        </button>
                        <button className="flex items-center gap-2 text-white px-8 py-3 rounded-lg
                            hover:bg-white/10 transition-all duration-300
                            sm:w-full sm:max-w-[200px] sm:justify-center">
                            <span className="bg-[#fff] p-2 rounded-full">
                                <HiPlay className="text-2xl text-[#377DFF]" />
                            </span>
                            <span>Play Video</span>
                        </button>
                    </div>
                </div>

                {/* Code Editor Image */}
                <div className="relative max-w-2xl mx-auto">
                    <img
                        src="./images/editor-1.png"
                        alt="Code Editor"
                        className="w-full"
                    />

                    {/* Floating Cards */}
                    <div className="absolute bg-[url('./images/stats.png')] bg-no-repeat bg-contain left-[-15rem] bottom-[20.5rem]
                        bg-white p-4 rounded-2xl shadow-[0_0_0_9px_rgba(0,0,0,0.05)]
                        sm:scale-[50%] sm:origin-bottom-left w-[300px] h-[173px]">

                        <div className="flex items-center gap-3">
                            <h4 className="text-base font-bold">
                                <span className="text-[#377DFF]">Response</span><br />
                                <span className="text-[#23283B]">Stats</span>
                            </h4>
                        </div>
                    </div>

                    <div className="absolute bottom-[25rem]  sm:right-[-15.5rem]
                        bg-white p-4 rounded-2xl shadow-[0_0_0_9px_rgba(0,0,0,0.05)]
                        sm:scale-[90%] sm:origin-bottom-right">
                        <div className="flex items-center gap-3 ">
                            <BsTrophy className="text-4xl text-[#377DFF]" />
                            <h4 className="text-lg font-bold">
                                <span className="text-[#377DFF]">Award</span>
                                <span className="text-[#23283B]"> winning</span>
                            </h4>
                        </div>
                    </div>

                    <div className="absolute left-[-18rem] bottom-[6rem]
                        bg-white px-6  py-4 rounded-2xl shadow-[0_0_0_9px_rgba(0,0,0,0.05)]
                        sm:scale-[90%] sm:origin-bottom-left">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold mb-1 sm:text-6xl">
                                <span className="text-[#377DFF]">65</span>
                                <span className="text-[#23283B]">%</span>
                            </h2>
                            <p className="text-[#6B7B9C] text-base">Get 65% More leads</p>
                        </div>
                    </div>

                    <div className="absolute bottom-[10rem] sm:right-[-17rem]
                        bg-white   sm:scale-20 px-4 py-5 rounded-2xl shadow-[0_0_0_9px_rgba(0,0,0,0.05)]">
                        <div className="text-center ">
                            <h2 className="text-2xl font-bold mb-1 sm:text-4xl">
                                <span className="text-[#377DFF] ">Free</span>
                                <span className="text-[#23283B]"> Account</span>
                            </h2>
                            <p className="text-[#6B7B9C] text-base">Create Free Account for developers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Header };