import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  projectTitle: z.string().min(2, {
    message: "Project title must be at least 2 characters.",
  }),
  budget: z.string(),
  email: z.string().email(),
  description: z.string(),
  deadline: z.string(),
  attachments: z.string(), // Add attachments property to the schema
});

const OrderForm = ({ onClose }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectTitle: "",
      budget: "",
      email: "",
      description: "",
      deadline: "",
      attachments: "", // Add default value for attachments
    },
  });

  const onSubmit = (values : z.infer<typeof formSchema>) => {
    console.log(values);
    // You can perform further actions here, like submitting the form data to a server
  };

  return (
    <div className="fixed z-50 top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full mx-auto rounded-md p-4 md:p-8 shadow-input bg-zinc-900 dark:bg-black"
        >
          <FormField
            control={form.control}
            name="projectTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-xl text-slate-50 dark:text-neutral-200">
                  Project Title
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter project title"
                    {...field}
                    className="input-field bg-zinc-800 placeholder:text-slate-50/[.5] text-slate-50 border-none"
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
                <FormLabel className="font-bold text-xl text-slate-50 dark:text-neutral-200">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter email"
                    {...field}
                    className="bg-zinc-800 border-none placeholder:text-slate-50/[.5] dark:bg-black text-slate-50 dark:text-neutral-200 placeholder-slate-200 dark:placeholder-neutral-300 focus:ring-slate-300 dark:focus:ring-neutral-300"
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
                <FormLabel className="font-bold text-xl text-slate-50 dark:text-neutral-200">
                  Project Description
                </FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    placeholder="Enter Project description"
                    className="bg-zinc-800 text-slate-50 rounded-md p-3 placeholder:text-slate-50/[.5] dark:placeholder-neutral-300 focus:ring-slate-300 dark:focus:ring-neutral-300 h-40 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-xl text-slate-50 dark:text-neutral-200">
                  Budget
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter budget"
                    {...field}
                    className="bg-zinc-800 border-none dark:bg-black text-slate-50 placeholder:text-slate-50/[.5]"
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
                <FormLabel className="font-bold text-xl text-slate-50 dark:text-neutral-200">
                  Deadline
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="Enter deadline"
                    {...field}
                    className="bg-zinc-800 border-none dark:bg-black text-slate-50 dark:text-neutral-200 placeholder:text-slate-50/[.5]"
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
            </div>
          {/* Input field for file attachments */}
          <FormField
            control={form.control}
            name="attachments"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-xl text-slate-50 dark:text-neutral-200">
                  Attachments
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    {...field}
                    className="bg-zinc-800 border-none dark:bg-black text-slate-50 placeholder:text-slate-50/[.5]"
                    multiple
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center gap-3">
            <Button onClick={onClose} className="secondary">
              Cancel
            </Button>
            <Button type="submit" className="primary">
              Place Order
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OrderForm;