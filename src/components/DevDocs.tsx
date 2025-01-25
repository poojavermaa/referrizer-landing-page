import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { FaJava, FaAngular, FaAndroid, FaApple, FaChevronRight } from "react-icons/fa";
import { DiNodejs, DiPython } from "react-icons/di";
import { VscCode } from "react-icons/vsc";
import { HiDocumentText } from "react-icons/hi";

const technologies = [
    { name: 'Java', icon: FaJava },
    { name: 'Node.JS', icon: DiNodejs },
    { name: 'Angular', icon: FaAngular },
    { name: 'Python', icon: DiPython },
    { name: 'Android', icon: FaAndroid },
    { name: 'API Ref', icon: VscCode },
    { name: 'IOS', icon: FaApple },
];

const DevDocs = () => {
    const swiperRef = useRef<SwiperType>();

    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    return (
        <div className="w-full bg-[#F8F9FB] py-[2%] px-[8%] sm:py-[4%] sm:px-[4%]">
            <div className="text-center mb-8 sm:mb-6">
                <span className="text-[#377DFF] text-sm font-semibold sm:text-xs">Dev Docs</span>
                <h2 className="text-[#23283B] text-4xl font-bold mt-4 mb-4 
                    sm:text-2xl sm:mt-2 sm:mb-2">
                    Dev Documentation
                </h2>
                <h3 className="text-[#23283B] text-2xl font-bold mb-4 
                    sm:text-lg sm:mb-2">
                    Integrate your application in minutes
                </h3>
                <p className="text-[#6B7B9C] text-base sm:text-sm max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam, massa nec hendrerit laoreet.
                </p>
            </div>

            {/* Code Editor Image */}
            <div className="max-w-4xl mx-auto mb-12 sm:mb-8">
                <img
                    src="./images/editor-2.png"
                    alt="Code Editor"
                    className="w-full rounded-lg shadow-lg"
                />
            </div>

            {/* Technologies Slider */}
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 sm:gap-2">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={6}
                        loop={true}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 2.5,
                                spaceBetween: 10
                            },
                            480: {
                                slidesPerView: 3.5,
                                spaceBetween: 15
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 20
                            }
                        }}
                        className="tech-stack-swiper"
                    >
                        {technologies.map((tech, index) => {
                            const IconComponent = tech.icon;
                            return (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col items-center gap-3 p-3 sm:p-2
                                        bg-white hover:shadow-md rounded-lg transition-all duration-300">
                                        <IconComponent
                                            className="w-10 h-10 sm:w-8 sm:h-8 text-[#272847]"
                                        />
                                        <span className="text-[#23283B] font-semibold text-sm sm:text-xs">
                                            {tech.name}
                                        </span>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* More Button */}
                    <button
                        onClick={handleNext}
                        className="flex flex-col items-center gap-3 p-3 sm:p-2 
                            min-w-[100px] sm:min-w-[80px]
                            bg-white hover:shadow-md rounded-lg transition-all duration-300"
                    >
                        <FaChevronRight className="w-10 h-10 sm:w-8 sm:h-8 text-[#272847]" />
                        <span className="text-[#23283B] font-semibold text-sm sm:text-xs">More</span>
                    </button>
                </div>
            </div>

            {/* View Docs Button */}
            <div className="text-center mt-12 sm:mt-8">
                <button className="inline-flex items-center gap-2 text-[#377DFF] font-semibold 
                    border-2 border-[#377DFF] px-8 py-3 sm:px-6 sm:py-2 rounded-lg
                    hover:bg-[#377DFF] hover:text-white transition-all duration-300
                    text-base sm:text-sm">
                    <HiDocumentText className="w-5 h-5 sm:w-4 sm:h-4" />
                    View Dev Docs
                </button>
            </div>
        </div>
    );
};

export default DevDocs;