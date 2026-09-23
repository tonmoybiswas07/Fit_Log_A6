
import Image from "next/image";
import bannerImg from "@/app/assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto my-20 px-4">
      <div className="min-h-[500px] rounded-3xl bg-[#222630] flex flex-col lg:flex-row justify-between items-center gap-12 px-8 md:px-14 lg:px-16 py-12 overflow-hidden">
        
        
        <div className="flex-1 max-w-2xl">
          <p className="text-[#c2f800] font-bold tracking-[3px] text-sm mb-6">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white mb-8">
            TRAIN WITH INTENT. LOG <br className="hidden md:block" />
            EVERY SET.
          </h1>

          <p className="text-gray-400 font-semibold text-base md:text-lg leading-7 max-w-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <div className="mt-10">
            <button className="bg-[#c2f800] text-black px-8 py-4 rounded-xl border-2 border-[#c2f800] font-bold tracking-wide transition-all duration-300 hover:bg-transparent hover:text-[#c2f800] hover:scale-105">
              BROWSE WORKOUTS
            </button>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src={bannerImg}
            alt="Workout banner image"
            width={500}
            height={500}
            priority
            className="w-full max-w-[420px] md:max-w-[480px] object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;
