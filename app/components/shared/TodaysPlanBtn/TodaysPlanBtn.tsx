"use client";


import { useFitLog } from "@/app/Context/FitlogContext";
import { IExercise } from "@/app/type";
import { FaRegSquareCaretUp } from "react-icons/fa6";

interface TodaysPlanBtnProps {
  exercise: IExercise;
}

const TodaysPlanBtn = ({ exercise }: TodaysPlanBtnProps) => {
  const { todaysPlan, setTodaysPlan } = useFitLog();

  const handleTodaysPlanBtn = () => {
    setTodaysPlan((prev) => {
      const alreadyAdded = prev.some((item) => item.id === exercise.id);

      if (alreadyAdded) {
        return prev;
      }

      return [...prev, exercise];
    });
  };

  return (
    <div>
      <button
        onClick={handleTodaysPlanBtn}
        className="flex items-center justify-center cursor-pointer gap-3 rounded-xl bg-[#c2ff29] px-7 py-4 font-bold text-black transition hover:bg-[#b1ed1e]"
      >
        <FaRegSquareCaretUp />
        Add to today's plan
      </button>
    </div>
  );
};

export default TodaysPlanBtn;