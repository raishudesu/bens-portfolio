import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

type TLinks = {
  github: string;
  live: string;
};

type TProjects = {
  title: string;
  summary: string;
  image: StaticImageData;
  links: TLinks;
};

const ProjectCard = ({ title, summary, image, links }: TProjects) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={image} alt="project" className="rounded-lg" />
      </CardContent>
      <CardFooter className="flex justify-center gap-2">
        <Link href={links.github} className="text-[#2563eb]">
          <AiFillGithub size={30} />
        </Link>
        <Link href={links.live} className="text-[#2563eb]">
          <AiOutlineLink size={30} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
