import Image from "next/image";
import { notFound } from "next/navigation";


import { IExercise } from "@/app/type";

import TodaysPlanBtn from "@/app/components/shared/TodaysPlanBtn/TodaysPlanBtn";
import SaveForLater from "@/app/components/shared/SaveForLater/SaveForLater";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}



const getExercises = async (): Promise<IExercise[]> => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return res.json();
};

const ExerciseDetails = async ({ params }: PageProps) => {
  const { id } = await params;

  const exercises = await getExercises();

  const exercise = exercises.find(
    (item) => item.id === Number(id)
  );

  if (!exercise) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d0f13] px-5 py-8 text-white md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">

       
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">

          
          <div className="relative h-[500px] overflow-hidden rounded-2xl border border-[#343944] sm:h-[600px] lg:h-[790px]">
            <Image
              src={exercise.image}
              alt={exercise.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          
          <div className="flex flex-col">

           
            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
              {exercise.name}
            </h1>

            
            <p className="mt-4 max-w-2xl text-base leading-6 text-gray-400 sm:text-lg">
              {exercise.description}
            </p>

            
            <div className="mt-5 flex flex-wrap gap-3">
              {exercise.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#c2ff29] px-4 py-1.5 text-sm font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

           
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#292e38] bg-[#15181e]">

             
              <div className="flex items-center justify-between border-b border-[#292e38] px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Equipment
                </span>

                <span className="text-sm font-medium text-gray-200">
                  {exercise.equipment}
                </span>
              </div>

             
              <div className="flex items-center justify-between border-b border-[#292e38] px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Difficulty
                </span>

                <span className="text-sm font-medium text-gray-200">
                  {exercise.difficulty}
                </span>
              </div>

              
              <div className="flex items-center justify-between border-b border-[#292e38] px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Sets
                </span>

                <span className="text-sm font-medium text-gray-200">
                  {exercise.sets}
                </span>
              </div>

             
              <div className="flex items-center justify-between border-b border-[#292e38] px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Reps
                </span>

                <span className="text-sm font-medium text-gray-200">
                  {exercise.reps}
                </span>
              </div>

              
              <div className="flex items-center justify-between border-b border-[#292e38] px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Duration
                </span>

                <span className="text-sm font-medium text-gray-200">
                  {exercise.duration} min
                </span>
              </div>

              
              <div className="flex items-center justify-between border-b border-[#292e38] px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Calories
                </span>

                <span className="text-sm font-medium text-gray-200">
                  {exercise.caloriesBurned} kcal
                </span>
              </div>

              
              <div className="flex items-center justify-between px-6 py-5">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Rating
                </span>

                <span className="text-sm font-medium text-gray-200">
                  {exercise.rating}
                </span>
              </div>

            </div>

           
            <div className="mt-9">

              <h2 className="text-xl font-extrabold uppercase">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {exercise.instructions.map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-4 text-sm leading-6 text-gray-300 sm:text-base"
                    >
                      <span className="shrink-0 text-gray-500">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>

            </div>

            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <TodaysPlanBtn exercise={exercise}></TodaysPlanBtn>

              <SaveForLater exercise={exercise}></SaveForLater>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ExerciseDetails;