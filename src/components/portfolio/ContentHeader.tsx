import { TContentHeader } from "@/lib/types";

const ContentHeader = ({ title, author, lastUpdated }: TContentHeader) => {
  return (
    <>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {title}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-3 text-muted-foreground">
        by: {author}
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-3 text-muted-foreground">
        last updated: {lastUpdated}
      </p>
    </>
  );
};

export default ContentHeader;
