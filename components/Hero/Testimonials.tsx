"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testmonials() {
	return (
		<div className="h-[50rem] py-14 my-8 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
			<h3 className="text-[#FF4D00] text-xl">What others say</h3>
			<h1 className="relative bg-clip-text font-black text-transparent bg-gradient-to-r leading-tight mb-12 text-4xl text-center from-[#ffffff] to-[rgba(255,255,255,0.42)]">
				TESTIMONAILS
			</h1>
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
			/>
            <InfiniteMovingCards
				items={testimonials}
				direction="left"
				speed="slow"
			/>
		</div>
	);
}


const testimonials = [
    {
        quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
    {
        quote: "Argon Software delivered exceptional web development services! Their team's expertise and dedication transformed our vision into a stunning reality. As the CEO of our company, I highly recommend their services.",
        name: "John Smith",
        title: "CEO",
    },
    {
        quote: "Seguro Amigo surpassed our expectations with their web development prowess. Their attention to detail and seamless execution impressed our entire team. I'm proud to endorse Seguro Amigo's services.",
        name: "Emily Davis",
        title: "Head of Operations",
    },
    {
        quote: "Cryptodox proved to be an invaluable partner in our web development journey. Their innovative solutions and professionalism exceeded our expectations. I wholeheartedly recommend Cryptodox for any web development needs.",
        name: "Michael Johnson",
        title: "Chief Technology Officer",
    },
    {
        quote: "RightToLiveCA's web development expertise played a pivotal role in our digital success. Their commitment to excellence and timely delivery made them a pleasure to work with. As the Head of Marketing, I confidently endorse RightToLiveCA.",
        name: "Sarah Thompson",
        title: "Head of Marketing",
    },
    {
        quote: "TechFusion's web development team demonstrated professionalism and expertise at every step of the project. Their ability to understand our requirements and translate them into reality is commendable. I highly recommend TechFusion.",
        name: "David Roberts",
        title: "Chief Operating Officer",
    },
];



