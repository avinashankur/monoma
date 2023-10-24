import { Hero } from "@/components/hero/hero";
import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Home() {
  return (
    <section className="margin">
      <h1 className="text-5xl font-bold md:font-semibold text-center mt-28 md:mt-10 mb-44 md:mb-0 max-w-2xl mx-auto">
        Welcome To The Future of Strategic Finance
      </h1>

      <div className="flex flex-col sm:flex-row mt-4 gap-1">
        <div className="lg:basis-[10%] basis-[20%] text-sm flex flex-row sm:flex-col justify-between gap-4 sm:gap-0">
          <div>
            <h2 className="font-bold text-xl">7x Faster</h2>
            <p className="dark:text-zinc-400">
              Analysis, Models, Ad Hoc and Board Decks.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl">60%</h1>
            <p className="dark:text-zinc-400">
              Increase Time Spent on Insights based Strategy
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:gap-2 mb-20 md:mb-0">
            <div className="flex flex-row sm:flex-col">
              <div className=" h-12 w-12 bg-black border-2 border-white dark:border-zinc-900 rounded-full"></div>
              <div className=" h-12 w-12 bg-black border-2 border-white dark:border-zinc-900 rounded-full sm:-translate-y-2 -translate-x-2 sm:translate-x-0"></div>
            </div>
            <p className="font-medium">Connect More People</p>
          </div>
        </div>

        <div className="lg:basis-[80%] basis-[60%] pt-4 mb-28 md:mb-0">
          <Hero />
        </div>

        <div className="lg:basis-[10%] basis-[20%] flex flex-col justify-between pb-4 sm:pb-20 pt-10 sm:pt-0">
          <div>
            <p className="py-3 border-b-2 border-black dark:border-white text-xs uppercase tracking-tight dark:text-zinc-400">
              Strategic Finance
            </p>
            <p className="text-sm font-medium mt-2 tracking-tight">
              Finace Teams has Spent the Majority.
            </p>
          </div>
          <Link
            href="/join"
            className="bg-teal-500 rounded-3xl sm:rounded-full h-20 w-[calc(100vw-2rem)] sm:w-20 grid place-items-center text-md sm:text-xs font-bold text-white sm:animate-bounce transition mx-auto mt-10 sm:mt-0 animate-pulse hover:animate-none"
          >
            Join Now
          </Link>
        </div>
      </div>

      <div className="flex justify-between gap-4 flex-wrap mt-4">
        <div className="flex gap-4 items-center">
          <div className="h-20 w-20 rounded-full bg-black"></div>
          <div>
            <h1 className="text-4xl font-bold">$449,600</h1>
            <p className="font-medium text-sm dark:text-zinc-400">
              Total Savings
            </p>
          </div>
        </div>

        <div className="flex flex-col mb-20 md:mb-0">
          <Link
            href=""
            className="pb-4 border-b-2 flex justify-between w-[calc(100vw-2rem)] sm:w-[30rem] items-center hover:border-black dark:hover:border-white dark:border-zinc-600 font-medium group"
          >
            Why Should I Use Mosaic?
            <AiOutlineArrowUp className="rotate-45 group-hover:rotate-90 duration-300" />
          </Link>
          <Link
            href=""
            className=" mt-4 pb-4 border-b-2 flex justify-between w-[calc(100vw-2rem)] sm:w-[30rem] items-center hover:border-black dark:hover:border-white dark:border-zinc-600 font-medium group"
          >
            How Long Does It Take To Start?
            <AiOutlineArrowUp className="rotate-45 group-hover:rotate-90 duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
