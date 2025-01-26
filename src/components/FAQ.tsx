import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="w-full  py-[2%] px-[8%] sm:py-[4%] sm:px-[8%]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h5 className="text-primary text-xs font-semibold mb-5">FAQ's</h5>
          <h2 className="text-secondary text-4xl font-bold mb-5 sm:text-2xl">Frequently Asked Questions</h2>
          <p className="text-secondary-light text-base font-normal sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam, massa nec hendrerit laoreet.
          </p>
        </div>

        <div className="mt-12">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="mb-6">
              <div
                className="flex justify-between items-center bg-gray-50 p-6 rounded-lg cursor-pointer sm:p-3"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-secondary text-lg font-semibold sm:text-sm">
                  {getFAQQuestion(index)}
                </h3>
                <div className="text-primary transition-transform duration-300">
                  {activeIndex === index ?
                    <AiOutlineMinus className="text-4xl sm:text-2xl" /> :
                    <AiOutlinePlus className="text-4xl sm:text-2xl" />
                  }
                </div>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 py-5 text-secondary-light">
                    <p className="text-base font-normal sm:text-sm">
                      {getFAQAnswer(index)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getFAQQuestion = (index: number): string => {
  const questions = [
    "Lorem ipsum dummy text here",
    "Lorem ipsum dummy text here",
    "Lorem ipsum dummy text here",
    "Lorem ipsum dummy text here",
    "Lorem ipsum dummy text here",
    "Lorem ipsum dummy text here"
  ];
  return questions[index];
};

const getFAQAnswer = (index: number): string => {
  const answers = [
    "Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora expetenda democritum has. Ut sit prima laboramus eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis argumentum ullamcorper, velit habemus tibique an eos.",
    "Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora expetenda democritum has. Ut sit prima laboramus eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis argumentum ullamcorper, velit habemus tibique an eos.",
    "Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora expetenda democritum has. Ut sit prima laboramus eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis argumentum ullamcorper, velit habemus tibique an eos.",
    "Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora expetenda democritum has. Ut sit prima laboramus eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis argumentum ullamcorper, velit habemus tibique an eos.",
    "Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora expetenda democritum has. Ut sit prima laboramus eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis argumentum ullamcorper, velit habemus tibique an eos.",
    "Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora expetenda democritum has. Ut sit prima laboramus eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis argumentum ullamcorper, velit habemus tibique an eos.",
  ];
  return answers[index];
};

export { FAQ };

