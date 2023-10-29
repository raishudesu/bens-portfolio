import Image from "next/image";
import proto from "../../../assets/raven/prototype.jpg";

const Snapshot = () => {
  return (
    <figure className="flex flex-col items-center">
      <Image
        src={proto}
        alt="sitex-home"
        className="shadow-md rounded-lg"
        loading="lazy"
      />
      <figcaption className="text-muted-foreground text-sm">
        Protoype
      </figcaption>
    </figure>
  );
};

export default Snapshot;
