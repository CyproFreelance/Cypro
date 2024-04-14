"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import "./contact.css";
import { sendDiscordNotification } from "./discordNoti";
import { motion } from "framer-motion";

type Tag =
	| "Web Development"
	| "UI/UX Design"
	| "Development"
	| "Fullstack Web"
	| "Ecommerce Website"
	| "Branding"
	| "App from Scratch"
	| "Rebranding";

const ContactPage = () => {
	const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		budgetRange: "",
		projectDescription: "",
		selectedTags: [] as Tag[],
	});

	const toggleTag = (tag: Tag) => {
		if (selectedTags.includes(tag)) {
			setSelectedTags(selectedTags.filter((t) => t !== tag));
		} else {
			setSelectedTags([...selectedTags, tag]);
		}
	};

	const isTagSelected = (tag: Tag) => selectedTags.includes(tag);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormData({ ...formData, selectedTags: selectedTags });

		const message = `
        # New message received from the WEBSITE contact form:

        > **Name:** ${formData.firstName} ${formData.lastName}
        > **Email:** ${formData.email}
        > **Budget Range:** ${formData.budgetRange}
        > **Project Description:** ${formData.projectDescription}
        **Selected Tags:**${selectedTags.join(", ")}\n\n
		## <@726293592376606770> <@853525881032933376> DM THIS GUY FAST
		btw if he is spam then ignore lol also u got this same in email also
    	`;

		emailjs
			.send(
				"service_8ensb2d",
				"template_rgvjfj4",
				formData,
				"XgJemIiJfTh4DI0yE"
			)
			.then(() => {
				toast("Message sent successfully!");
				sendDiscordNotification(message);
				clearForm();
			})
			.catch((error) => {
				console.error("Error sending email:", error);
				toast("Error sending message. Please try again later.", {
					action: {
						label: "try again",
						onClick: () => {
							console.log("try again");
						},
					},
				});
			});
	};

	const clearForm = () => {
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			budgetRange: "",
			projectDescription: "",
			selectedTags: [] as Tag[],
		});
		setSelectedTags([]);
	};

	return (
		<>
			<div className="flex flex-col items mt-40  w-full px-28 max-md:px-1 ">
				<div className="flex text-5xl">
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2 }}
						className="max-md:px-2 font-black mb-10 text-6xl max-md:text-4xl overflow-hidden"
					>
						<span className="bg-clip-text text-transparent bg-gradient-to-r leading-none text-left from-[#ffffff] to-[rgba(255,255,255,0.42)] italic">
							HEY!&nbsp;
							<span className="bg-clip-text text-transparent bg-gradient-to-r leading-none text-left from-[#ffffff] to-[rgba(255,255,255,0.42)]">
								{" "}
								Tell us all the things
								<br />
								you need{" "}
							</span>
						</span>
						👋
					</motion.h1>
				</div>
				<motion.h3
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2 }}
					className="text-[#FF4D00] text-xl"
				>
					I&apos;m interested in
				</motion.h3>

				<div className="tags flex items-center justify-start gap-3 flex-wrap w-[60%] max-md:w-[100%] mt-4">
					{[
						"Web Development",
						"UI/UX Design",
						"Development",
						"Fullstack Web",
						"Ecommerce Website",
						"Branding",
						"App from Scratch",
						"Rebranding",
					].map((tag: string) => (
						<TagButton
							key={tag}
							tag={tag as Tag}
							selected={isTagSelected(tag as Tag)}
							onClick={() => toggleTag(tag as Tag)}
						/>
					))}
				</div>

				<div className=" ">
					<div className="containerContact">
						<form onSubmit={handleSubmit}>
							<div className="form-row">
								<div className="input-data">
									<input
										type="text"
										name="firstName"
										value={formData.firstName}
										onChange={handleChange}
										required
									/>
									<div className="underline" />
									<label htmlFor="">First Name</label>
								</div>
								<div className="input-data">
									<input
										type="text"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
										required
									/>
									<div className="underline" />
									<label htmlFor="">Last Name</label>
								</div>
							</div>
							<div className="form-row">
								<div className="input-data">
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
									<div className="underline" />
									<label htmlFor="">Email Address</label>
								</div>
								<div className="input-data">
									<input
										type="text"
										name="budgetRange"
										value={formData.budgetRange}
										onChange={handleChange}
										placeholder=""
										onKeyPress={(event) => /[0-9]/i.test(event.key)}
										required
									/>
									<div className="underline" />
									<label htmlFor="">Budget Range</label>
								</div>
							</div>

							<div className="form-row">
								<div className="input-data textarea">
									<textarea
										rows={60}
										cols={180}
										name="projectDescription"
										value={formData.projectDescription}
										onChange={handleChange}
										required
										defaultValue={""}
									/>
									<br />
									<div className="underline" />
									<label htmlFor="">Description Of the Project</label>
									<br />
									<div className="form-row ">
										<div className="input-data">
											<div className="inner" />
											<motion.button
												whileTap={{ scale: 0.95 }}
												transition={{ duration: 0.1 }}
												type="submit"
												className={`flex-center bg-transparent text-6xl mb-32 px-24 max-md:px-12 max-md:py-6 transition-all max-md:text-4xl py-12 rounded-full text-center border ${
													Object.values(formData).every((value) => value !== "")
														? "hover:bg-white hover:text-black text-white border-white border-2 cursor-default"
														: "bg-transparent text-gray-500 border-gray-500 cursor-not-allowed"
												}`}
											>
												Submit
											</motion.button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

const TagButton = ({
	tag,
	selected,
	onClick,
}: {
	tag: Tag;
	selected: boolean;
	onClick: () => void;
}) => {
	return (
		<motion.button
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			whileTap={{ scale: 0.95 }}
			transition={{ duration: 0.1 }}
			className={`redbtn mt-3 px-4 py-2 rounded-full text-xl max-md:text-sm ${
				selected
					? "bg-white text-black border border-white"
					: "bg-transparent border border-white text-white"
			}`}
			onClick={onClick}
		>
			<span className="spani">{tag}</span>
		</motion.button>
	);
};

export default ContactPage;
