"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const MyCard = ({
  title,
  author,
  image,
  link,
}: {
  title: string;
  author: string;
  image: StaticImageData;
  link: string;
}) => {
  const router = useRouter();
  return (
    <Card className="max-w-[600px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>by: {author}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center">
        <Image
          src={image}
          alt="baryshpicture"
          className="rounded-full w-full max-w-[200px]"
        />
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button
          className="self-stretch md:self-center"
          onClick={() => router.push(link)}
        >
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MyCard;
