"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

const Prev = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-screen-lg">
        <Button
          variant={"outline"}
          className="p-2 rounded-full"
          onClick={() => router.back()}
        >
          <ArrowLeft />
        </Button>
      </div>
    </section>
  );
};

export default Prev;