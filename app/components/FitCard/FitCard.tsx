"use client"

import { IExercise } from "@/app/type";
import Image from "next/image";
import Link from "next/link";
import { FaFire, FaRegClock, FaStar } from "react-icons/fa";

interface ExerciseCardProps {
  data: IExercise;
}

const ExerciseCard = ({ data }: ExerciseCardProps) => {
  console.log("IMAGE:", data.image[0]);
  return (
    <Link href={`/fitlogs/${data.id}`}>
      <div className="group relative w-full max-w-[535px] overflow-hidden rounded-[22px] border border-[#292d35] bg-[#15171c] shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#baff00]/50 hover:shadow-[0_20px_60px_rgba(186,255,0,0.12)]">
        {/* Glow Effect */}
        <div className="pointer-events-none absolute -inset-px rounded-[22px] bg-gradient-to-r from-[#baff00]/0 via-[#baff00]/10 to-[#baff00]/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Image */}
        <div className="relative w-full overflow-hidden">
          <Image
  src={data.image}
  alt={data.name}
  width={500}
  height={300}
  className="h-auto w-full object-cover"
/>
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

          {/* Top Corner Accent */}
          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition-all duration-500 group-hover:rotate-12 group-hover:border-[#baff00]/60 group-hover:bg-[#baff00]">
            <FaFire className="text-white transition-colors duration-300 group-hover:text-black" />
          </div>

          {/* Hover View Text */}
        </div>

        {/* Content */}
        <div className="relative px-8 py-8">
          {/* Muscle Groups */}
          <div className="mb-5 flex flex-wrap gap-3">
            {data.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#baff00] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(186,255,0,0.25)]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Exercise Name */}
          <h2 className="text-[25px] font-extrabold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-[#baff00]">
            {data.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-[16px] text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
            {data.equipment}
          </p>

          {/* Stats */}
          <div className="mt-6 flex h-[42px] items-center rounded-lg border border-[#282c34] bg-[#101216] px-3 transition-all duration-300 group-hover:border-[#baff00]/30 group-hover:bg-[#191c20]">
            {/* Duration */}
            <div className="flex items-center gap-2 text-gray-400 transition-colors duration-300 group-hover:text-white">
              <FaRegClock className="text-[17px] transition-colors group-hover:text-[#baff00]" />
              <span>{data.duration} min</span>
            </div>

            <div className="mx-5 h-5 w-px bg-[#292d35]" />

            {/* Calories */}
            <div className="flex items-center gap-2 text-gray-400 transition-colors duration-300 group-hover:text-white">
              <FaFire className="text-[16px] transition-colors group-hover:text-[#baff00]" />
              <span>{data.caloriesBurned} kcal</span>
            </div>

            <div className="mx-5 h-5 w-px bg-[#292d35]" />

            {/* Rating */}
            <div className="flex items-center gap-2 text-gray-400 transition-colors duration-300 group-hover:text-white">
              <FaStar className="text-[17px] transition-colors group-hover:text-[#baff00]" />
              <span>{data.rating}</span>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-gradient-to-r from-[#baff00] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
