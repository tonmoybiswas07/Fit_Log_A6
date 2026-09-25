
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaFire,
  FaStar,
  FaRegClock,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

import { IExercise } from "@/app/type";
import { toast } from "react-toastify";

interface PlanCardProps {
  data: IExercise;
  onRemove: (id: number) => void;
}

const TodaysPlanCard = ({ data, onRemove }: PlanCardProps) => {
  const [isDone, setIsDone] = useState(false);

  // Mark as Done
  const handleDone = () => {
    if (isDone) return;

    setIsDone(true);

    toast.success(`${data.name} completed!`, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Delete
  const handleRemove = () => {
    onRemove(data.id);

    toast.info(`${data.name} removed from your plan!`, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-[#292e38] bg-[#11151b] transition-all duration-300 hover:border-[#00d9c6] hover:shadow-[0_10px_35px_rgba(0,217,198,0.06)]">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-[#c2ff29]" />

      <div className="flex flex-col gap-4 p-3 sm:flex-row sm:items-center sm:p-4">

        {/* IMAGE */}
        <div className="relative h-[110px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[88px] sm:w-[155px]">
          <Image
            src={data.image}
            alt={data.name}
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="min-w-0 flex-1">

          {/* Exercise Name */}
          <h2
            className={`truncate text-lg font-black uppercase transition-colors duration-300 ${
              isDone
                ? "text-[#c2ff29]"
                : "text-white group-hover:text-[#c2ff29]"
            }`}
          >
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
              <span>{data.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5 text-sm text-gray-300">
              <FaFire
                size={13}
                className="text-[#c2ff29]"
              />
              <span>{data.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5 text-sm text-gray-300">
              <FaStar
                size={13}
                className="text-[#c2ff29]"
              />
              <span>{data.rating}</span>
            </div>

          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex w-full shrink-0 items-center gap-2 sm:w-auto">

          {/* View Details */}
          <Link
            href={`/fitlogs/${data.id}`}
            className="flex h-10 flex-1 items-center justify-center rounded-full border border-[#343944] px-4 text-xs font-bold text-white transition-all duration-300 hover:border-[#c2ff29] hover:bg-[#c2ff29] hover:text-black sm:flex-none sm:px-5 sm:text-sm"
          >
            View Details
          </Link>

          {/* Mark as Done */}
          <button
            type="button"
            onClick={handleDone}
            disabled={isDone}
            title={isDone ? "Workout completed" : "Mark as Done"}
            className={`flex h-10 flex-1 items-center justify-center gap-2 rounded-full px-4 text-xs font-bold transition-all duration-300 sm:flex-none sm:px-5 sm:text-sm ${
              isDone
                ? "cursor-not-allowed bg-gray-700 text-gray-400"
                : "bg-[#c2ff29] text-black hover:bg-[#b4ef20]"
            }`}
          >
            <FaCheck size={12} />

            <span>
              {isDone ? "Completed" : "Mark as Done"}
            </span>
          </button>

          {/* Delete */}
          <button
            type="button"
            onClick={handleRemove}
            title="Delete workout"
            aria-label={`Delete ${data.name} from your plan`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-500/30 text-red-400 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
          >
            <FaTimes size={14} />
          </button>

        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#00d9c6] transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
};

export default TodaysPlanCard;
