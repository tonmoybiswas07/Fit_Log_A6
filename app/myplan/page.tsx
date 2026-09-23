
const MyPlanPage = () => {
  return (
    <div className="container mx-auto px-5 my-10">
      <div className="bg-[#222630] rounded-2xl px-6 md:px-10 py-8 border border-gray-700">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <p className="text-[#c2f800] text-sm font-bold tracking-[3px] mb-2">
              TODAY'S WORKOUT
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              MY PLAN
            </h1>

            <p className="text-gray-400 mt-2">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </div>

         
        </div>

      </div>
    </div>
  );
};

export default MyPlanPage;