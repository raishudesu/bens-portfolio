import Image from "next/image";
import mapping from "../../../assets/barysh/mapping.jpg";
import { Skeleton } from "@/components/ui/skeleton";

const Mapping = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Customer journey mapping
      </h3>
      <figure className="flex flex-col items-center mt-3">
        <Image
          src={mapping}
          alt="sitex-home"
          className="shadow-md rounded-lg"
          loading="lazy"
        />
        <figcaption className="text-muted-foreground text-sm">
          Customer journey mapping
        </figcaption>
      </figure>
    </>
  );
};

export default Mapping;
