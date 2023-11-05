import Image from "next/image";
import { snapshots } from "../../components/data";

const Snapshot = () => {
  return (
    <>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Snapshots
      </h4>
      <div className="grid md:grid-cols-2 gap-12 mt-3">
        {snapshots.map(({ image, caption, alt }, index) => (
          <figure key={index} className="flex flex-col items-center">
            <Image
              src={image}
              alt={alt}
              className="shadow-md rounded-lg"
              loading="lazy"
            />
            <figcaption className="text-muted-foreground text-sm">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
};

export default Snapshot;
