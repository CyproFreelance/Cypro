import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const formSchema = z.object({
	projectTitle: z.string().min(3, {
		message: "Project title must be at least 3 characters.",
	}),
	yourname: z.string().min(3, { message: "Name must be atleast 3 digits" }),
	budget: z.string().min(2, { message: "Budget must be atleast 2 digits" }),
	description: z
		.string()
		.min(10, { message: "Description Must be at least 10 Characters." }),
	email: z.string().email(),
	deadline: z.string(),
	attachments: z.string(),
});

const OrderForm = ({ onClose }: { onClose: () => void }) => {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			projectTitle: "",
			budget: "",
			yourname: "",
			email: "",
			description: "",
			deadline: "",
			attachments: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-lg">
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0 }}
				transition={{ type: "spring", stiffness: 500, damping: 30 }}
				className="w-[60%] h-auto bg-zinc-900 rounded-md shadow-lg p-8"
			>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<div className="flex sm:flex-col md:flex-col lg:flex-row items-start justify-start gap-8">
							<FormField
								control={form.control}
								name="yourname"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-bold text-xl text-slate-50">
											Name
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Your Name"
												className="bg-zinc-800 text-slate-50 rounded-md p-3 placeholder:text-slate-50/[.5] border-none"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-bold text-xl text-slate-50">
											Email
										</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder="Enter email"
												{...field}
												className="bg-zinc-800 text-slate-50 rounded-md p-3 placeholder:text-slate-50/[.5] border-none"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="projectTitle"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="font-bold text-xl text-slate-50">
										Project Title
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="Enter project title"
											className="bg-zinc-800 text-slate-50 rounded-md p-3 placeholder:text-slate-50/[.5] border-none"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel className="font-bold text-xl text-slate-50">
										Project Description
									</FormLabel>
									<FormControl>
										<textarea
											{...field}
											placeholder="Enter Project description"
											className="bg-zinc-800 text-slate-50 rounded-md p-3 placeholder:text-slate-50/[.5] border-none h-28 resize-none"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex items-start justify-between">
							<FormField
								control={form.control}
								name="budget"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-bold text-xl text-slate-50">
											Budget
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter budget"
												className="bg-zinc-800 text-slate-50 rounded-md p-3 placeholder:text-slate-50/[.5] border-none"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="deadline"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-bold text-xl text-slate-50">
											Deadline
										</FormLabel>
										<FormControl>
											<Input
												className="bg-zinc-800 text-slate-50 rounded-md p-3 placeholder:text-slate-50/[.5] border-none"
												type="date"
												placeholder="Enter deadline"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="attachments"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-bold text-xl text-slate-50">
											Attachments
										</FormLabel>
										<FormControl>
											<div className="bg-zinc-800 border-dashed border-2 border-gray-300 rounded-md">
												<input
													type="file"
													{...field}
													className="bg-zinc-800 text-slate-50 rounded-md p-3 placeholder:text-slate-50/[.5] border-none"
													multiple
												/>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className="flex justify-end gap-4">
							<Button
								onClick={onClose}
								className="bg-white text-black hover:bg-slate-300 transition-all-0.3s"
							>
								Cancel
							</Button>
							<Button
								className="bg-white text-black hover:bg-slate-300 transition-all-0.3s"
								type="submit"
							>
								Place Order
							</Button>
						</div>
					</form>
				</Form>
			</motion.div>
		</div>
	);
};

export default OrderForm;
