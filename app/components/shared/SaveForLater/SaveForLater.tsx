"use client";

import { useFitLog } from "@/app/Context/FitlogContext";
import { IExercise } from "@/app/type";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

interface SaveForLaterProps {
  exercise: IExercise;
}

const SaveForLater = ({ exercise }: SaveForLaterProps) => {
  const { savedExercises, setSavedExercises } = useFitLog();

  const handleSaveForLater = () => {
    const alreadySaved = savedExercises.some(
      (item) => item.id === exercise.id
    );

    if (alreadySaved) {
      toast.info(`${exercise.name} is already saved!`);
      return;
    }

    setSavedExercises((prev) => [...prev, exercise]);

    toast.success(`${exercise.name} saved for later!`);
  };

  return (
    <div>
      <button
        onClick={handleSaveForLater}
        className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-[#3a404c] px-7 py-4 font-medium text-white transition hover:bg-[#191c22]"
      >
        <FaBookmark />
        Save for later
      </button>
    </div>
  );
};

export default SaveForLater;