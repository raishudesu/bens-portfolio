import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import StudyNav from "./StudyNav";

const ShowNavContent = () => {
  const pathname = usePathname();
  if (
    pathname === "/" ||
    pathname === "/barysh" ||
    pathname === "/justine" ||
    pathname === "/ric" ||
    pathname === "/raven"
  )
    return null;
  return (
    <div className="flex flex-col gap-4">
      <Separator />
      <StudyNav />
      <Separator />
    </div>
  );
};

export default ShowNavContent;
