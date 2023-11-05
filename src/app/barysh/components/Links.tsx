import Link from "next/link";
import { links } from "./data";

const Links = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Links
      </h3>
      <ul className=" ml-6 list-disc [&>li]:mt-2">
        {links.map(({ name, link }, index) => (
          <li key={index}>
            <Link
              href={link}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Links;
