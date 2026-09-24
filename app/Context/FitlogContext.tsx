"use client";

import { createContext, useContext, useState } from "react";
import { IExercise } from "../type";

interface FitLogContextType {
  savedExercises: IExercise[];
  setSavedExercises: React.Dispatch<React.SetStateAction<IExercise[]>>;

  todaysPlan: IExercise[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
}

const FitLogContext = createContext<FitLogContextType | null>(null);

export const FitLogProvider = ({ children }: { children: React.ReactNode }) => {
  const [savedExercises, setSavedExercises] = useState<IExercise[]>([]);
  const [todaysPlan, setTodaysPlan] = useState<IExercise[]>([]);

  return (
    <FitLogContext.Provider
      value={{
        savedExercises,
        setSavedExercises,
        todaysPlan,
        setTodaysPlan,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
};
