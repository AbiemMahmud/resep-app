import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const isFull = true;
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="-top-96 absolute flex transform -translate-x-1/2 start-1/2"
      >
        <div className="bg-gradient-to-r from-violet-300/50 dark:from-violet-900/50 to-purple-100 dark:to-purple-900 blur-3xl w-[25rem] h-[44rem] transform -translate-x-[10rem] rotate-[-60deg]"></div>
        <div className="bg-gradient-to-tl from-blue-50 dark:from-indigo-900/70 via-blue-100 dark:via-indigo-900/70 to-blue-50 dark:to-blue-900/70 blur-3xl rounded-fulls w-[90rem] h-[50rem] origin-top-left -translate-x-[15rem] -rotate-12"></div>
      </div>

      <div className="relative z-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 max-w-[85rem]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-block bg-clip-text bg-gradient-to-l from-blue-600 dark:from-blue-400 to-violet-500 dark:to-violet-400 font-medium text-sm text-transparent">
              Welcome, visitors
            </p>

            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-4xl text-gray-800 md:text-5xl lg:text-6xl dark:text-neutral-200">
                This website contains notes
              </h1>
            </div>

            <div className="mt-5 max-w-3xl">
              <p className="text-gray-600 text-lg dark:text-neutral-400">
                Here will be populated by many list of recipe that I have
                created
              </p>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              <Link
                className="inline-flex items-center gap-x-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-4 py-3 border border-transparent rounded-lg font-semibold text-sm text-white disabled:pointer-events-none"
                href="/dashboard"
              >
                Lets Go!!
                <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
