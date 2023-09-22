/**
 * Reuseable FAQ component
 * 
 * Test Cases:
 * There should be 6 questions
 * There must be an answer for every question
*/
"use client"

import FaqItem from "./faqComponent";

export default function FAQ() {
    return (
        <div className="flex flex-col lg:items-start items-center gap-6 w-full">
            <h1 className="font-bold clash lg:w-[380px] text-center lg:text-left md:text-lg text-[20px] md:w-[390px] w-[249px]">
                Frequently Asked <span className="text-purple">Question</span>
            </h1>
            <p className="lg:w-[342px] lg:text-[14px] lg:leading-[27.5px] text-center lg:text-left text-sm">
                We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
            </p>
            <div className="lg:w-10/12 w-full">
                <div className="w-full flex flex-col items-center justify-center">
                    <FaqItem
                        question="Can I work on a project I started before the hackathon?"
                        answer='lorem ipsum'
                        />
                    <FaqItem
                        question="What happens if I need help during the hackathon?"
                        answer="lorem ipsum"
                        />
                    <FaqItem
                        question="What happens if I don't have an idea for a project?"
                        answer="lorem ipsum"
                        />
                    <FaqItem
                        question="Can I join a team or do I have to come with one?"
                        answer="lorem ipsum"
                        />
                    <FaqItem
                        question="What happens after the hackathon ends"
                        answer="lorem ipsum"
                        />
                    <FaqItem
                        question="Can I work on a project I started before the hackathon?"
                        answer="lorem ipsum"
                        />
                </div>
            </div>
        </div>
    );
}