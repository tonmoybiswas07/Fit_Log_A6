
import Link from "next/link";
import { FaDumbbell, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d0f13] px-5 text-white">
      <div className="w-full max-w-2xl text-center">

        
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#292e38] bg-[#11151b] shadow-[0_0_40px_rgba(194,255,41,0.08)]">
          <FaDumbbell className="text-3xl text-[#c2ff29]" />
        </div>

        
        <h1 className="text-[100px] font-black leading-none tracking-tighter text-[#c2ff29] sm:text-[140px]">
          404
        </h1>

        
        <h2 className="mt-4 text-2xl font-black uppercase tracking-wide sm:text-3xl">
          Workout Not Found
        </h2>

        
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
          Looks like this workout took a rest day. The page you are looking
          for doesn&apos;t exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#c2ff29] px-7 text-sm font-bold text-black transition-all duration-300 hover:bg-[#b4ef20] hover:shadow-[0_0_25px_rgba(194,255,41,0.15)]"
          >
            <FaArrowLeft size={13} />
            Back Home
          </Link>

          

        </div>

        <div className="mt-12 border-t border-[#202630] pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-600">
            FITLOG • TRAIN • TRACK • IMPROVE
          </p>
        </div>

      </div>
    </main>
  );
};

export default NotFound;
