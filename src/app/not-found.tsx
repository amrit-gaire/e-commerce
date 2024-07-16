import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col  h-screen"
      style={{
        backgroundImage: "url(/not-found.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bottom-[120px] right-[410px] absolute">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">
          Oops! Senpai, Page Not Found~
        </h2>
        <p className="text-lg text-white mb-8">
          It seems you&apos;ve wandered off the path. <br /> There&apos;s
          nothing here, b-baka!
        </p>
        <Button
          className="text-base font-medium text-pink-600 hover:text-black hover:bg-pink-300"
          asChild
          variant={"outline"}
        >
          <Link href="/">Take me Home, Senpai~</Link>
        </Button>
      </div>
    </div>
  );
}
