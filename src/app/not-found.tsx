import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: "url(/public/not-found.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image src={"/public/not-found.svg"} alt="" fill />
      <h2 className="text-3xl font-bold text-pink-600 mb-4">
        Oops! Senpai, Page Not Found~
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        It seems you've wandered off the path. There's nothing here, b-baka!
      </p>
      <Button
        className="text-base font-medium text-pink-600 hover:text-white-700 hover:bg-black"
        asChild
        variant={"outline"}
      >
        <Link href="/">Take me Home, Senpai~</Link>
      </Button>
    </div>
  );
}
