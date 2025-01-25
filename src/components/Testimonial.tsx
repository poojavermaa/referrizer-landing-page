import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import 'swiper/swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Marshell B.",
        role: "Lead Developer",
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        image: "./images/testimonial-1.png"
    },
    {
        id: 2,
        name: "Sarah L.",
        role: "Product Manager",
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        image: "./images/testimonial-1.png"
    },
    {
        id: 3,
        name: "Michael R.",
        role: "Senior Designer",
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        image: "./images/testimonial-1.png"
    }
];

// Navigation Buttons Component
const SlideNavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="flex justify-center gap-4 mt-8 sm:mt-6">
            <button
                onClick={() => swiper.slidePrev()}
                className="w-12 h-12 sm:w-8 sm:h-8 rounded-full bg-white shadow-md flex items-center justify-center
                    hover:bg-[#377DFF] group transition-all duration-300 border border-[#377DFF]"
            >
                <FaArrowLeft className="text-[#377DFF] group-hover:text-white text-sm" />
            </button>
            <button
                onClick={() => swiper.slideNext()}
                className="w-12 h-12 sm:w-8 sm:h-8 rounded-full bg-white shadow-md flex items-center justify-center
                    hover:bg-[#377DFF] group transition-all duration-300 border border-[#377DFF]"
            >
                <FaArrowRight className="text-[#377DFF] group-hover:text-white text-sm" />
            </button>
        </div>
    );
};

const Testimonial = () => {
    return (
        <div className="w-full py-[7%] px-[8%] sm:py-[8%] sm:px-[5%]">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-6">
                <span className="text-[#377DFF] text-sm font-semibold sm:text-xs">Testimonials</span>
                <h2 className="text-[#23283B] text-4xl font-bold mt-4 mb-4 sm:text-2xl sm:mt-2 sm:mb-2">
                    What partners says about us
                </h2>
                <p className="text-[#6B7B9C] text-base sm:text-sm max-w-2xl mx-auto">
                    We Create dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod...
                </p>
            </div>

            {/* Testimonial Slider */}
            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    className="testimonial-swiper"
                    loop={true}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="flex flex-col md:flex-row items-center gap-12 
                                md:gap-12 sm:gap-6">
                                {/* Image with background */}
                                <div className="relative w-full md:w-1/2">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="relative w-full h-full z-10 object-scale-down
                                            sm:max-h-[400px]"
                                    />
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 flex flex-col justify-start items-start 
                                    md:pr-12">
                                    <h3 className="text-[#23283B] text-3xl font-bold mb-2 
                                        sm:text-xl sm:mb-1">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-[#6B7B9C] text-lg mb-6 
                                        sm:text-base sm:mb-4">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-[#6B7B9C] text-base leading-relaxed 
                                        sm:text-sm sm:leading-relaxed">
                                        {testimonial.content}
                                    </p>
                                    <SlideNavButtons />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;