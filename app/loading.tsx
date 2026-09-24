const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0f13]">
      <div className="flex flex-col items-center">

        
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-20 w-20 animate-spin rounded-full border-4 border-[#252a32] border-t-[#c2ff29]" />

          <div className="text-lg font-black uppercase text-white">
            FL
          </div>
        </div>

       
        <h1 className="mt-6 text-3xl font-black uppercase tracking-[0.25em] text-white">
          Fit<span className="text-[#c2ff29]">Log</span>
        </h1>

        
        <div className="mt-3 flex items-center gap-1 text-sm text-gray-500">
          <span>Loading</span>

          <span className="animate-bounce [animation-delay:0ms]">
            .
          </span>

          <span className="animate-bounce [animation-delay:150ms]">
            .
          </span>

          <span className="animate-bounce [animation-delay:300ms]">
            .
          </span>
        </div>

      </div>
    </div>
  );
};

export default Loader;