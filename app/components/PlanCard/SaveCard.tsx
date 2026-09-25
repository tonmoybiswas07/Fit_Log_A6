
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFire,
  FaStar,
  FaRegClock,
  FaBookmark,
  FaTrash,
} from "react-icons/fa";
import { toast } from "react-toastify";

import { IExercise } from "@/app/type";
import { useFitLog } from "@/app/Context/FitlogContext";

interface PlanCardProps {
  data: IExercise;
}

const SaveCard = ({ data }: PlanCardProps) => {
  const { savedExercises, setSavedExercises } = useFitLog();

  const handleRemove = () => {
    // Remove from saved list
    const updatedExercises = savedExercises.filter(
      (exercise) => exercise.id !== data.id
    );

    setSavedExercises(updatedExercises);

    // Show toast
    toast.success(`${data.name} removed from saved exercises!`);
  };

  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-[#292e38] bg-[#11151b] transition-all duration-300 hover:-translate-y-1 hover:border-[#00d9c6] hover:shadow-[0_10px_35px_rgba(0,217,198,0.06)]">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-[#c2ff29]" />

      <div className="flex flex-col gap-4 p-3 sm:flex-row sm:items-center sm:p-4">

        {/* Image */}
        <div className="relative h-[110px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[88px] sm:w-[155px]">
          <Image
            src={data.image}
            alt={data.name}
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Bookmark */}
          <div className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#c2ff29] text-black shadow-lg">
            <FaBookmark size={13} />
          </div>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">

          <h2 className="truncate text-lg font-black uppercase text-white transition-colors duration-300 group-hover:text-[#c2ff29]">
            {data.name}
          </h2>

          <p className="mt-0.5 truncate text-sm font-semibold text-gray-400">
            {data.equipment}
          </p>

          {/* Stats */}
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">

            <div className="flex items-center gap-1.5 text-sm text-gray-300">
              <FaRegClock size={13} className="text-[#c2ff29]" />
              <span>{data.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5 text-sm text-gray-300">
              <FaFire size={13} className="text-[#c2ff29]" />
              <span>{data.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5 text-sm text-gray-300">
              <FaStar size={13} className="text-[#c2ff29]" />
              <span>{data.rating}</span>
            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex w-full shrink-0 gap-2 sm:w-auto">

          {/* View Details */}
          <Link
            href={`/fitlogs/${data.id}`}
            className="flex h-10 flex-1 items-center justify-center rounded-full border border-[#343944] px-4 text-xs font-bold text-white transition-all duration-300 hover:border-[#c2ff29] hover:bg-[#c2ff29] hover:text-black sm:flex-none sm:px-5 sm:text-sm"
          >
            View Details
          </Link>

          {/* Remove */}
          <button
            type="button"
            onClick={handleRemove}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-red-500/30 text-red-400 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
          >
            <FaTrash size={13} />
          </button>

        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#00d9c6] transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
};

export default SaveCard;
