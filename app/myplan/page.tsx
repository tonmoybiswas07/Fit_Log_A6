"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { useFitLog } from "../Context/FitlogContext";
import TodaysPlanCard from "../components/PlanCard/TodaysPlanCard";
import SaveCard from "../components/PlanCard/SaveCard";


const MyPlan = () => {
  const { todaysPlan, savedExercises } = useFitLog();

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");


  const currentExercises =
    activeTab === "today" ? todaysPlan : savedExercises;



  const sortedExercises = useMemo(() => {
    const data = [...currentExercises];

    if (sortBy === "duration") {
      data.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      data.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    if (sortBy === "rating") {
      data.sort((a, b) => b.rating - a.rating);
    }

    return data;
  }, [currentExercises, sortBy]);

  

  const totalMinutes = useMemo(() => {
    return currentExercises.reduce(
      (total, exercise) => total + exercise.duration,
      0
    );
  }, [currentExercises]);


  const totalCalories = useMemo(() => {
    return currentExercises.reduce(
      (total, exercise) => total + exercise.caloriesBurned,
      0
    );
  }, [currentExercises]);

 

  const handleRemove = (id: number) => {
    console.log("Remove exercise:", id);
  };

  return (
    <main className="min-h-screen bg-[#0d0f13] px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        

        <div className="mb-7">
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

       

        <div className="rounded-2xl border-2 border-[#00d9c6] bg-[#11151b] p-5 sm:p-7">
          <div className="grid grid-cols-1 overflow-hidden border border-[#202630] sm:grid-cols-3">

            {/* Exercises */}

            <div className="px-5 py-3 sm:border-r sm:border-[#202630]">
              <p className="text-sm text-gray-400">
                Exercises
              </p>

              <p className="mt-1 text-4xl font-black leading-none text-[#c2ff29]">
                {currentExercises.length}
              </p>
            </div>

            {/* Minutes */}

            <div className="border-t border-[#202630] px-5 py-3 sm:border-t-0 sm:border-r">
              <p className="text-sm text-gray-400">
                Minutes
              </p>

              <p className="mt-1 text-4xl font-black leading-none text-white">
                {totalMinutes}
              </p>
            </div>

            {/* Calories */}

            <div className="border-t border-[#202630] px-5 py-3 sm:border-t-0">
              <p className="text-sm text-gray-400">
                Calories
              </p>

              <p className="mt-1 text-4xl font-black leading-none text-white">
                {totalCalories}
              </p>
            </div>

          </div>
        </div>

      

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Tabs */}

          <div className="tabs tabs-box bg-[#15181e] p-1">

            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`tab ${
                activeTab === "today"
                  ? "tab-active bg-[#20252e] font-bold text-white"
                  : "text-gray-400"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`tab ${
                activeTab === "saved"
                  ? "tab-active bg-[#20252e] font-bold text-white"
                  : "text-gray-400"
              }`}
            >
              Saved
            </button>

          </div>

          {/* Sort */}

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as
                    | "duration"
                    | "calories"
                    | "rating"
                )
              }
              className="select select-bordered h-10 min-h-0 w-32 border-[#292e38] bg-[#15181e] text-sm text-white focus:border-[#c2ff29] focus:outline-none"
            >
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </div>

        </div>

       

        {activeTab === "today" && (
          <>
            {sortedExercises.length > 0 ? (

              <div className="mt-7 space-y-4">

                {sortedExercises.map((exercise) => (
                  <TodaysPlanCard
                    key={exercise.id}
                    data={exercise}
                    onRemove={handleRemove}
                  />
                ))}

              </div>

            ) : (

              <div className="mt-7 flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#292e38] bg-[#0f1116] px-5 text-center">

                <h2 className="text-2xl font-black uppercase text-white">
                  Nothing Here Yet
                </h2>

                <p className="mt-2 max-w-lg text-sm text-gray-500">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/fitlog"
                  className="btn mt-6 rounded-full border-none bg-[#c2ff29] px-7 text-sm font-bold text-black hover:bg-[#b4ef20]"
                >
                  Go to workouts
                </Link>

              </div>
            )}
          </>
        )}

        {/* ================= SAVED ================= */}

        {activeTab === "saved" && (
          <>
            {sortedExercises.length > 0 ? (

              <div className="mt-7 space-y-4">

                {sortedExercises.map((exercise) => (
                  <SaveCard
                    key={exercise.id}
                    data={exercise}
                  />
                ))}

              </div>

            ) : (

              <div className="mt-7 flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#292e38] bg-[#0f1116] px-5 text-center">

                <h2 className="text-2xl font-black uppercase text-white">
                  No Saved Exercises
                </h2>

                <p className="mt-2 max-w-lg text-sm text-gray-500">
                  Save an exercise from the workout details page and it will appear here.
                </p>

                <Link
                  href="/fitlog"
                  className="btn mt-6 rounded-full border-none bg-[#c2ff29] px-7 text-sm font-bold text-black hover:bg-[#b4ef20]"
                >
                  Go to workouts
                </Link>

              </div>
            )}
          </>
        )}

      </div>
    </main>
  );
};

export default MyPlan;