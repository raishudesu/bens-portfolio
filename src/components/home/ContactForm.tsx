"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { Textarea } from "../ui/textarea";
import { emailSubmit } from "@/stores/useEmail";
import { toast } from "../ui/use-toast";
import { Loader } from "lucide-react";

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Enter a valid email" }),
  message: z
    .string({ required_error: "Message is required" })
    .min(5, { message: "Message should be at least 5 characters" })
    .max(250, { message: "Message should be less than 250 characters" }),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    await emailSubmit(values);
    form.reset();
    toast({
      title: "Submitted!",
      description: "We will get back to you as soon as possible.",
    });
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[500px] flex flex-col gap-6 shadow-md p-6 rounded-lg mt-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="bens@gmail.com"
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message goes here"
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={loading}
          className="self-stretch md:self-center"
        >
          {loading ? (
            <div className="animate-spin">
              <Loader />
            </div>
          ) : (
            <>Submit</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
