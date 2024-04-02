import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
    const faqItems = [
        {
            question: "What services does Cypro Studio offer?",
            answer: "Cypro Studio offers a wide range of services including web development, UI/UX design, digital marketing, and branding solutions.",
        },
        {
            question: "How can a well-designed website benefit my business?",
            answer: "A well-designed website can enhance your online presence, attract more visitors, improve user experience, and ultimately drive conversions and revenue for your business.",
        },
        {
            question: "How does Cypro Studio approach web development?",
            answer: "Cypro Studio follows a comprehensive approach to web development, focusing on understanding client requirements, utilizing cutting-edge technologies, and ensuring scalability and performance.",
        },
        {
            question: "Does Cypro Studio provide ongoing support for websites?",
            answer: "Yes, Cypro Studio offers ongoing support and maintenance services to ensure your website remains secure, up-to-date, and optimized for performance.",
        },
        {
            question: "How can I order from Cypro Studio?",
            answer: "You can easily place an order with Cypro Studio by contacting our team through our website, email, or phone. We'll guide you through the process and ensure a seamless experience.",
        },
    ];

	return (
		<div className="flex flex-col justify-center px-20 py-14 max-md:py-2 max-md:px-3">
			<h3 className="text-[#FF4D00] text-center text-xl">Our Expertise, Your Success</h3>
			<h1 className="relative bg-clip-text font-black text-transparent bg-gradient-to-r leading-tight mb-2 text-4xl text-center from-[#ffffff] to-[rgba(255,255,255,0.42)] max-md:mt-2">
				FREQUENTLY ASKED QUESTIONS
			</h1>
			<Accordion type="single" collapsible className="text-white px-16 py-14 flex flex-col justify-center max-md:px-4">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-2xl text-slate-50/[.8] max-md:text-start">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-xl text-slate-50/[.5] ">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
			</Accordion>
		</div>
	);
};

export default Faq;
