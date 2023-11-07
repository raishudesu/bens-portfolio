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
      <div className="w-full max-w-screen-xl">
        <Button
          variant={"outline"}
          className="p-2"
          onClick={() => router.back()}
        >
          <ArrowLeft color="#2563eb" />
        </Button>
      </div>
    </section>
  );
};

export default Prev;
