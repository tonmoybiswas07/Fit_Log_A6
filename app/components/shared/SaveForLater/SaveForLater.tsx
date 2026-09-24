"use client";


import { useFitLog } from "@/app/Context/FitlogContext";
import { IExercise } from "@/app/type";
import { FaBookmark } from "react-icons/fa";

interface SaveForLaterProps {
  exercise: IExercise;
}

const SaveForLater = ({ exercise }: SaveForLaterProps) => {
  const { savedExercises, setSavedExercises } = useFitLog();

  const handleSaveForLater = () => {
    setSavedExercises((prev) => {
      const alreadySaved = prev.some(
        (item) => item.id === exercise.id
      );

      if (alreadySaved) {
        return prev;
      }

      return [...prev, exercise];
    });
  };

  return (
    <div>
      <button
        onClick={handleSaveForLater}
        className="flex items-center justify-center gap-3 rounded-xl border border-[#3a404c] px-7 py-4 cursor-pointer font-medium text-white transition hover:bg-[#191c22]"
      >
        <FaBookmark />
        Save for later
      </button>
    </div>
  );
};

export default SaveForLater;
