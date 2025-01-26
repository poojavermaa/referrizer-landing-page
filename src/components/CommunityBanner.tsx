const CommunityBanner = () => {
    return (
        <div className="relative w-full py-[2%] sm:py-[4%] sm:px-[8%]">


            <div className="relative w-full bg-primary sm:rounded-lg">
                {/* Background Wire SVG */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="./images/wire.png"
                        alt="background pattern"
                        className="w-full h-full object-cover opacity-90"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <img className="absolute z-10 -top-18 w-96" src="./images/frame.png" alt="Frame" />{" "}
                </div>

                {/* Content Container */}
                <div className="z-10 flex flex-col items-center justify-center py-16 px-4 text-center">
                    {/* Text Content */}
                    <h2 className="text-white text-4xl font-bold mb-4 sm:text-2xl">
                        FREE Account for developers, No cost to join
                    </h2>
                    <p className="text-white/90 text-lg mb-8 sm:text-base">
                        Lorem ipsum dolor sit amet, ea vel bonorum facilisis.
                    </p>

                    {/* CTA Button */}
                    <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold 
                        hover:bg-opacity-90 transition-all duration-300">
                        Join the Community
                    </button>


                </div>

                {/* Decorative Elements */}
                <div className="z-20 absolute -left-3 top-24 w-10 h-10 bg-[#96D38C] rounded-full 
                        shadow-[0px_0px_50px_-5px_rgba(150,211,140,1)] sm:w-8 sm:h-8 
                        sm:top-16 sm:-left-4"></div>

                <div className="z-20 absolute left-10 -bottom-2 w-10 h-10 bg-[#FB3E05] rounded-full 
                        shadow-[0px_0px_40px_-5px_rgba(251,62,5,1)] sm:w-12 sm:h-12 
                        sm:left-16 sm:-bottom-2"></div>

                <div className="absolute right-16 -bottom-1 w-8 h-8 bg-[#FFC107] rounded-full 
                        shadow-[0px_0px_20px_-5px_rgba(255,193,7,1)] sm:w-10 sm:h-10 
                        sm:right-10 sm:-bottom-1"></div>
            </div>
        </div>
    );
};

export { CommunityBanner };
