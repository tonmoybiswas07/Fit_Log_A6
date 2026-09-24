"use client";

import { useFitLog } from "@/app/Context/FitlogContext";
import { IExercise } from "@/app/type";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { toast } from "react-toastify";

interface TodaysPlanBtnProps {
  exercise: IExercise;
}

const TodaysPlanBtn = ({ exercise }: TodaysPlanBtnProps) => {
  const { todaysPlan, setTodaysPlan } = useFitLog();

  const handleTodaysPlanBtn = () => {
    const alreadyAdded = todaysPlan.some(
      (item) => item.id === exercise.id
    );

    if (alreadyAdded) {
      toast.info(`${exercise.name} is already in today's plan!`);
      return;
    }

    setTodaysPlan((prev) => [...prev, exercise]);

    toast.success(`${exercise.name} added to today's plan! `);
  };

  return (
    <div>
      <button
        onClick={handleTodaysPlanBtn}
        className="flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#c2ff29] px-7 py-4 font-bold text-black transition hover:bg-[#b1ed1e]"
      >
        <FaRegSquareCaretUp />
        Add to today's plan
      </button>
    </div>
  );
};

export default TodaysPlanBtn;