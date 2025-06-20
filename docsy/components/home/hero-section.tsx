import { Button } from "../ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <div>
        <div className="flex ">
          <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-group-x group">
            <Badge
              variant="secondary"
              className="relative  px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-rose-100 transition-colors duration-200"
            >
              {" "}
              <Sparkles className="w-6 h-6 mr-2 text-rose-600 animate-pulse" />
              <p className="text-base text-rose-600">Powered by AI</p>
            </Badge>
          </div>
        </div>
      </div>
      <h1 className="font-bold py-6 text-center">
        {" "}
        Transform PDFs into concise summaries
      </h1>
      <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
        Get a beautiful summary reel of the document in seconds.
      </h2>
      <div className="">
        {" "}
        <Button
          variant={"link"}
          className="w-40 lg:w-56 text-white mt-6  text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-4 sm:py-6 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 front-bold hover:no-underline shadow-lg transition-all duration-300"
        >
          <Link href={"/#pricing"} className="gap-2 flex item-center">
            {" "}
            Try Docsy
          </Link>
          <ArrowRight className="animate-pulse" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
