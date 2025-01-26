import React, { useState } from 'react';
import { HiPlay } from 'react-icons/hi2';
import { BsTools } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';

interface Tool {
    id: number;
    title: string;
    icon: React.ElementType;
    description: string;
    image: string;
    link?: string;
    linkText?: string;
}

const tools: Tool[] = [
    {
        id: 1,
        title: "Visual Builder",
        icon: BsTools,
        description: "Lorem ipsum dolor sit amet, consectetur laoreet. Video library of what our customer's say, Tutorials, App integration and more.",
        image: "./images/tool-1.png",
        link: "#",
        linkText: "View More"
    },
    {
        id: 2,
        title: "Videos library",
        icon: HiPlay,
        description: "Lorem ipsum dolor sit amet, consectetur laoreet. Video library of what our customer's say, Tutorials, App integration and more.",
        image: "./images/tool-1.png",
        link: "#",
        linkText: "View More"
    },
    {
        id: 3,
        title: "Quick Support",
        icon: BiSupport,
        description: "Lorem ipsum dolor sit amet, consectetur laoreet. Video library of what our customer's say, Tutorials, App integration and more.",
        image: "./images/tool-1.png",
        link: "#",
        linkText: "View More"
    }
];

const Tools = () => {
    const [hoveredId, setHoveredId] = useState<number>(2);

    return (
        <div className="w-full pb-[2%] px-[8%] sm:pb-[4%] sm:px-[8%]">
            {/* Header */}
            <div className="max-w-6xl mx-auto">

                {/* Content Container */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="w-full md:w-[45%] flex flex-col gap-6">
                        <div>

                            <span className="text-[#377DFF] text-sm font-semibold sm:text-xs">Tools & Resources</span>
                            <h2 className="text-[#23283B] text-4xl font-bold mt-2 mb-2 
                    sm:text-2xl sm:mt-2 sm:mb-2">
                                Tools & Other Resourses
                            </h2>
                            <p className="text-[#6B7B9C] text-base sm:text-sm mb-6">
                                Consectetur adipiscing elit, consectetur adipiscing amet.
                            </p>

                        </div>
                        {tools.map((tool) => {
                            const IconComponent = tool.icon;
                            const isActive = tool.id === hoveredId;

                            return (
                                <div
                                    key={tool.id}
                                    className={`group cursor-pointer transition-all duration-300 
                                        ${isActive ? 'border-l-4 border-[#377DFF]' : ''}`}
                                    onMouseEnter={() => setHoveredId(tool.id)}
                                >
                                    <div className="flex items-start gap-4 pl-4">
                                        <div className={`p-2 rounded-lg transition-colors duration-300
                                            ${isActive ? 'bg-[#377DFF]' : 'group-hover:bg-gray-100'}`}>
                                            <IconComponent
                                                className={`w-5 h-5 transition-colors duration-300
                                                    ${isActive ? 'text-white' : 'text-[#377DFF]'}`}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-[#23283B] text-xl font-bold mb-2 sm:text-lg
                                                transition-all duration-300 ${isActive ? 'text-[#377DFF]' : ''}`}>
                                                {tool.title}
                                            </h3>
                                            {isActive && tool.description && (
                                                <div className="animate-fadeIn">
                                                    <p className="text-[#6B7B9C] text-base mb-4 sm:text-sm">
                                                        {tool.description}
                                                    </p>
                                                    {tool.link && (
                                                        <a
                                                            href={tool.link}
                                                            className="text-[#377DFF] font-semibold text-sm hover:underline"
                                                        >
                                                            {tool.linkText}
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="w-full md:w-[55%] relative">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                            {tools.map((tool) => (
                                <img
                                    key={tool.id}
                                    src={tool.image}
                                    alt={tool.title}
                                    className={`absolute inset-0 w-full h-full object-contain 
                                        transition-opacity duration-500 
                                        ${tool.id === hoveredId ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Tools };