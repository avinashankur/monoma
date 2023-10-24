import { GiFloatingPlatforms } from "react-icons/gi";
import { AiOutlineSolution, AiFillBulb, AiFillApi } from "react-icons/ai";
import { MdIntegrationInstructions } from "react-icons/md";
import { HiBeaker } from "react-icons/hi";
import Link from "next/link";

export const MobileMenu = () => {
  return (
    <div className="tex-white px-4 justify-between text-3xl flex items-center  md:hidden fixed bottom-0 z-20 bg-zinc-200 dark:bg-black border-t border-zinc-400 w-screen h-[4rem] shadow">
      <Link href="/" className="flex flex-col items-center mb-1 flex-1 ">
        <GiFloatingPlatforms />
        <p className="text-xs">Platform</p>
      </Link>
      <Link href="/" className="flex flex-col items-center mb-1 flex-1 ">
        <HiBeaker />
        <p className="text-xs">Solution</p>
      </Link>
      <Link href="/" className="flex flex-col items-center mb-1 flex-1 ">
        <MdIntegrationInstructions />
        <p className="text-xs">Integration</p>
      </Link>
      <Link href="/" className="flex flex-col items-center mb-1 flex-1 ">
        <AiFillBulb />
        <p className="text-xs">Plans</p>
      </Link>
      <Link href="/" className="flex flex-col items-center mb-1 flex-1 ">
        <AiFillApi />
        <p className="text-xs">Resources</p>
      </Link>
    </div>
  );
};
