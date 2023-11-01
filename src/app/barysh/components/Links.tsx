import Link from "next/link";

const Links = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Links
      </h3>
      <ul className=" ml-6 list-disc [&>li]:mt-2">
        <li>
          <Link
            href={"https://github.com/raishudesu"}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            href={"https://www.upwork.com/freelancers/~01f820ee60c225abf9"}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Upwork
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Links;
