"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFire, FaStar, FaRegClock } from "react-icons/fa";
import { IExercise } from "@/app/type";

interface PlanCardProps {
  data: IExercise;
  onRemove?: (id: number) => void;
}

const TodaysPlanCard = ({ data, onRemove }: PlanCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-[#292e38] bg-[#11151b] transition-all duration-300 hover:border-[#00d9c6] hover:shadow-[0_10px_35px_rgba(0,217,198,0.06)]">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-[#c2ff29]" />

      <div className="flex flex-col gap-4 p-3 sm:flex-row sm:items-center sm:p-4">

        {/* ================= IMAGE ================= */}

        <div className="relative h-[110px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[88px] sm:w-[155px]">

          <Image
            src={data.image}
            alt={data.name}
            fill
            sizes="155px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* ================= INFO ================= */}

        <div className="min-w-0 flex-1">

          {/* Exercise Name */}

          <h2 className="truncate text-lg font-black uppercase text-white">
            {data.name}
          </h2>

          {/* Equipment */}

          <p className="mt-0.5 truncate text-sm font-semibold text-gray-400">
            {data.equipment}
          </p>

          {/* Stats */}

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">

            {/* Duration */}

            <div className="flex items-center gap-1.5 text-sm text-gray-300">
              <FaRegClock
                size={13}
                className="text-[#c2ff29]"
              />

              <span>
                {data.duration} min
              </span>
            </div>

            {/* Calories */}

            <div className="flex items-center gap-1.5 text-sm text-gray-300">
              <FaFire
                size={13}
                className="text-[#c2ff29]"
              />

              <span>
                {data.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}

            <div className="flex items-center gap-1.5 text-sm text-gray-300">
              <FaStar
                size={13}
                className="text-[#c2ff29]"
              />

              <span>
                {data.rating}
              </span>
            </div>

          </div>
        </div>

        {/* ================= ACTIONS ================= */}

        <div className="flex w-full shrink-0 items-center gap-2 sm:w-auto">

          {/* View Details */}

          <Link
            href={`/fitlogs/${data.id}`}
            className="flex h-10 flex-1 items-center justify-center rounded-full border border-[#343944] px-4 text-xs font-bold text-white transition-all duration-300 hover:border-[#c2ff29] hover:text-[#c2ff29] sm:flex-none sm:px-5 sm:text-sm"
          >
            View Details
          </Link>

          {/* Mark Done */}

          <button
            type="button"
            onClick={() => onRemove?.(data.id)}
            className="flex h-10 flex-1 items-center justify-center rounded-full bg-[#c2ff29] px-4 text-xs font-bold text-black transition-all duration-300 hover:bg-[#b4ef20] hover:shadow-[0_0_18px_rgba(194,255,41,0.2)] sm:flex-none sm:px-6 sm:text-sm"
          >
            Mark as Done
          </button>

        </div>

      </div>
    </div>
  );
};

export default TodaysPlanCard;