import Image from "next/image";
import home from "../../../assets/justine/home.jpg";

const Snapshot = () => {
  return (
    <div className="flex flex-col gap-6 mt-3">
      <figure className="flex flex-col items-center">
        <Image src={home} alt="sitex-home" className="shadow-md rounded-lg" />
        <figcaption className="text-muted-foreground text-sm">
          Sign in page
        </figcaption>
      </figure>
    </div>
  );
};

export default Snapshot;
