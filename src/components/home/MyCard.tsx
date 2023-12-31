"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { TMyCard } from "@/lib/types";

const MyCard = ({ author, image, link, role }: TMyCard) => {
  const router = useRouter();
  return (
    <Card className="w-full max-w-[600px]">
      <CardHeader>
        <CardTitle>{author}</CardTitle>
        <CardDescription>{role}</CardDescription>
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
          View portfolio
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MyCard;
