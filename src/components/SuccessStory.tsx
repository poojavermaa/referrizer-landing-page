import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";

interface Story {
    id: number;
    title: string;
    content: string;
    author: {
        name: string;
        role: string;
        company: string;
        image: string;
    };
}

const stories: Story[] = [
    {
        id: 1,
        title: "Helped me grow my small business...",
        content: "It makes it easy to communicate and send out marketing campaigns through email and text templates.",
        author: {
            name: "Jason King",
            role: "Owner at",
            company: "Core & More Fitness",
            image: "./images/profile-1.png",
        },
    },
    {
        id: 2,
        title: "All-in-one Marketing Automation...",
        content:
            "Prior to using Referrizer I was paying over 8 different companies a monthly fee for individual services. I have been able to save over $1,200 a month by streamlining all of my services by just using Referrizer.",
        author: {
            name: "Meteus Felipe",
            role: "Owner at",
            company: "Goosebumps Cryotherapy",
            image: "./images/profile-2.png",
        },
    },
    {
        id: 3,
        title: "We're able to spread the word about our new promos...",
        content:
            "Being able to create custom offers that you can email & text to your clients is wonderful! You have so much flexibility in selecting which clients to send the offers to.",
        author: {
            name: "Meteus Felipe",
            role: "Owner at",
            company: "Goosebumps Cryotherapy",
            image: "./images/profile-3.png",
        },
    },
];

const SuccessStory = () => {
    return (
        <div className='w-full py-[2%] px-[8%] sm:py-[4%] sm:px-[8%]'>
            <div className='text-center mb-12'>
                <span className='text-primary text-sm font-semibold'>Success Stories</span>
                <h2 className='text-secondary text-4xl font-bold mt-4 mb-4 sm:text-2xl'>Success Stories</h2>
                <p className='text-secondary-light text-base sm:text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam, massa nec hendrerit laoreet.
                </p>
            </div>

            {/* Desktop View */}
            <div className='hidden md:grid md:grid-cols-3 gap-6'>
                {stories.map((story) => (
                    <StoryCard key={story.id} story={story} />
                ))}
            </div>

            {/* Mobile View with Swiper */}
            <div className='md:hidden'>
                <Swiper modules={[Pagination]} spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }} className='mySwiper'>
                    {stories.map((story) => (
                        <SwiperSlide key={story.id}>
                            <StoryCard story={story} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='text-center mt-12'>
                <button
                    className='text-primary font-semibold border-2 border-primary px-8 py-3 rounded-lg
                    hover:bg-primary hover:text-white transition-all duration-300'
                >
                    Read All Stories
                </button>
            </div>
        </div>
    );
};

const StoryCard = ({ story }: { story: Story }) => (
    <div className='bg-white '>
        <div className='relative max-w-lg mx-auto'>
            {/* Background image with content */}
            <div className='relative'>
                <img src='./images/Union.png' alt='background' width={500} height={300} className='w-full rounded-lg' />

                <div className='absolute top-0 left-6 w-16 h-16 bg-white flex justify-center items-center'>
                    <div className='absolute top-[-30px] left-4 text-[#377DFF] text-[4.5rem] text-center mb-4'>❝</div>
                </div>

                <div className='absolute inset-0 flex flex-col justify-start items-start p-6'>
                    <h3 className='text-[#23283B] text-xl font-semibold mb-4 mt-4'>{story.title}</h3>
                    <p className='text-[#6B7B9C] text-base mb-8'>{story.content}</p>

                    <div className='flex items-center w-full mt-auto mb-2 '>
                        <div className='flex items-center gap-2 mr-6'>
                            <BsLinkedin className='text-[#377DFF] text-xl' />
                            <span className='text-[#377DFF] text-sm p-4'>LinkedIn</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <HiOutlineEye className='text-[#377DFF] text-xl' />
                            <span className='text-[#377DFF] text-sm'>View Story</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex items-center gap-4 mt-2'>
            <img src={story.author.image} alt={story.author.name} className='w-14 h-14 rounded-full object-cover' />
            <div>
                <h4 className='text-secondary font-semibold'>{story.author.name}</h4>
                <p className='text-secondary-light text-sm'>
                    {story.author.role} <span className='font-semibold'>{story.author.company}</span>
                </p>
            </div>
        </div>
    </div>
);

export { SuccessStory };
