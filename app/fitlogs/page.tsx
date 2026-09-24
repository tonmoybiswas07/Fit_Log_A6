import FitCard from "../components/FitCard/FitCard";
import { IExercise } from "../type";

const promiseData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = res.json();
  return data;
};
const FitLogs = async () => {
  const datas = await promiseData();

  return (
    <div className="container mx-auto">
      <div className="my-10 px-5">
        <p className="text-sm font-bold tracking-[3px] text-[#c2f800] mb-2">
          WORKOUT LIBRARY
        </p>

        <h1 className="text-[30px] md:text-4xl font-extrabold text-white">
          THE LIBRARY
        </h1>

        <p className="text-base text-gray-400 mt-2">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {datas.map((data:IExercise) => (
          <FitCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default FitLogs;
