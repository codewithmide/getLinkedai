/* eslint-disable @next/next/no-img-element */
/**
 * Reuseable FAQ items
 * 
 * Test Cases:
 * There should be a question
 * There must be an answer
 * Answers should not be visible by default
*/
"use client"

import { useState } from "react";

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem:React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full flex flex-col border-b-purple border-b">
      <button className="flex justify-between w-full align-center py-5" onClick={toggleOpen}>
        <span className="font-medium text-left text-[14px]">{question}</span>
        <img src="/images/plus.png" alt='arrowDown' className={`my-auto transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <p className="md:text-[14px] sm:text-[.8rem] pt-1 pb-3 md:w-1/2 sm:w-full">{answer}</p>
      </div>
    </div>
  );
}

export default FaqItem;