import { BsTrophy } from 'react-icons/bs';
import { HiPlay } from 'react-icons/hi2';

const Header = () => {
    return (
        <div
            className="header relative w-full min-h-screen
            bg-no-repeat bg-cover bg-center">
            <div className="relative sm:overflow-hidden max-w-7xl mx-auto px-4 pt-24 lg:pt-32 sm:px-6 lg:px-8">
                <div className="text-center mb-8 lg:mb-12">
                    <h1 className="text-white text-3xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6
                        px-4">
                        Become a Referrizer<br />
                        API Integration Partner
                    </h1>
                    <p className="text-white/90 text-sm lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto
                        px-4">
                        Join our API Integration Partner Program and Grow Your Business.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 
                        px-6">
                        <button className="w-full lg:w-auto bg-white text-primary px-8 py-3 rounded-lg 
                            font-semibold hover:bg-opacity-90 transition-all duration-300
                            max-w-[200px]">
                            Get Started
                        </button>
                        <button className="w-full lg:w-auto flex items-center justify-center gap-2 
                            text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300
                            max-w-[200px]">
                            <span className="bg-white p-2 rounded-full">
                                <HiPlay className="text-xl text-primary" />
                            </span>
                            <span>Play Video</span>
                        </button>
                    </div>
                </div>

                <div className="relative  max-w-md lg:max-w-2xl mx-auto mt-8">
                    <img
                        src="./images/editor-1.png"
                        alt="Code Editor"
                        className="w-full rounded-lg"
                    />


                    <div className="absolute hidden lg:block bg-[url('./images/stats.png')] bg-no-repeat bg-contain left-[-15rem] bottom-[20.5rem]
                        bg-white p-4 rounded-2xl shadow-[0_0_0_9px_rgba(0,0,0,0.05)]
                        sm:scale-[50%] sm:origin-bottom-left w-[300px] h-[173px]">

                        <div className="flex items-center gap-3">
                            <h4 className="text-base font-bold">
                                <span className="text-[#377DFF]">Response</span><br />
                                <span className="text-[#23283B]">Stats</span>
                            </h4>
                        </div>
                    </div>

                    <div className="hidden lg:block absolute right-[-15.5rem] bottom-[25rem]
                        bg-white p-4 rounded-2xl shadow-card">
                        <div className="flex items-center gap-3">
                            <BsTrophy className="text-2xl text-primary" />
                            <h4 className="text-sm font-bold">
                                <span className="text-primary">Award</span>
                                <span className="text-secondary"> winning</span>
                            </h4>
                        </div>
                    </div>

                    <div className="hidden lg:block absolute left-[-18rem] bottom-[6rem]
                        bg-white px-6 py-4 rounded-2xl shadow-card">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold mb-1">
                                <span className="text-primary">65</span>
                                <span className="text-secondary">%</span>
                            </h2>
                            <p className="text-secondary-light text-base">Get 65% More leads</p>
                        </div>
                    </div>

                    <div className="hidden lg:block absolute right-[-17rem] bottom-[10rem]
                        bg-white px-6 py-4 rounded-2xl shadow-card">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-1">
                                <span className="text-primary">Free</span>
                                <span className="text-secondary"> Account</span>
                            </h2>
                            <p className="text-secondary-light text-base">Create Free Account for developers</p>
                        </div>
                    </div>

                    <div className="lg:hidden absolute left-[-6rem] top-[19rem]
                        bg-white p-4 rounded-xl scale-[25%] shadow-card-sm   w-[300px] h-[173px] bg-[url('./images/stats.png')] bg-no-repeat bg-contain">
                        <div className="flex items-center gap-2">
                            <h4 className="text-xs font-bold">
                                <span className="text-primary">Response</span><br />
                                <span className="text-secondary">Stats</span>
                            </h4>
                        </div>
                    </div>

                    <div className="lg:hidden absolute left-[2rem] bottom-[-3rem]
                        bg-white p-2 rounded-xl shadow-card-sm scale-75">
                        <div className="flex items-center gap-2">
                            <BsTrophy className="text-xl text-primary" />
                            <h4 className="text-xs font-bold">
                                <span className="text-primary">Award</span>
                                <span className="text-secondary"> winning</span>
                            </h4>
                        </div>
                    </div>

                    <div className="lg:hidden absolute right-0 bottom-[-6rem]
                        bg-white p-3 rounded-xl shadow-card-sm scale-75">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">
                                <span className="text-primary">65</span>
                                <span className="text-secondary">%</span>
                            </h2>
                            <p className="text-secondary-light text-xs">Get 65% More leads</p>
                        </div>
                    </div>

                    <div className="lg:hidden absolute right-24 bottom-[-9rem]
                        bg-white p-3 rounded-xl shadow-card-sm scale-75">
                        <div className="text-center">
                            <h2 className="text-xl font-bold">
                                <span className="text-primary">Free</span>
                                <span className="text-secondary"> Account</span>
                            </h2>
                            <p className="text-secondary-light text-xs">Create Free Account for developers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Header };