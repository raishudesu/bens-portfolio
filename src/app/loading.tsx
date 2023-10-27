import { Loader } from "lucide-react";

const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="min-h-[80vh] flex justify-center items-center">
      <div className="animate-spin">
        <Loader color="#16BC25" />
      </div>
    </main>
  );
};

export default Loading;
