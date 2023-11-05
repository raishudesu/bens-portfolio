import Image from "next/image";
import { snapshots } from "../../components/data";

const Snapshot = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-3">
      {snapshots.map(({ image, caption }, index) => (
        <figure key={index} className="flex flex-col items-center">
          <Image
            src={image}
            alt="image"
            className="shadow-md rounded-lg"
            loading="lazy"
          />
          <figcaption className="text-muted-foreground text-sm">
            {caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Snapshot;
