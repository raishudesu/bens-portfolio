import { StaticImageData } from "next/image";
import { z } from "zod";

export type THeading = {
  author: string;
  image: StaticImageData;
  role: string;
  bio: string;
  about: string;
  cv: string | undefined;
};

export type TContentHeader = {
  title: string;
  author: string;
  lastUpdated: string;
};

export type TMyCard = {
  author: string;
  image: StaticImageData;
  link: string;
  role: string;
};

export type TItem = {
  name: string;
  link: string;
};

export type FormValues = {
  email: string;
  message: string;
};

export const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Enter a valid email" }),
  message: z
    .string({ required_error: "Message is required" })
    .min(5, { message: "Message should be at least 5 characters" })
    .max(250, { message: "Message should be less than 250 characters" }),
});
