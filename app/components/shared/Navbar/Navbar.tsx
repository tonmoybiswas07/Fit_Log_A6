
const Navbar = () => {
  const links = (
    <>
      <li>
        <a className="font-semibold hover:text-[#c2f800] transition-colors duration-200">
          Workouts
        </a>
      </li>

      <li>
        <a className="font-semibold hover:text-[#c2f800] transition-colors duration-200">
          My Plan
        </a>
      </li>
    </>
  );

  return (
    <div className="container mx-auto px-4">
      <div className="navbar min-h-[80px] border-b border-gray-700">
        
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#222630] text-white rounded-xl z-10 mt-3 w-52 p-3 shadow-xl"
            >
              {links}
            </ul>
          </div>

          <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide">
            FIT<span className="text-[#c2f800]">LOG</span>
          </h3>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 text-lg px-1">
            {links}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3 md:gap-5">
          <button className="font-bold flex items-center gap-2 hover:text-[#c2f800] transition-colors">
            Plan
            <span className="bg-[#c2f800] text-black rounded-full min-w-8 h-8 flex items-center justify-center px-2">
              0
            </span>
          </button>

          <button className="font-bold flex items-center gap-2 hover:text-[#c2f800] transition-colors">
            Saved
            <span className="text-white border border-gray-500 rounded-full min-w-8 h-8 flex items-center justify-center px-2">
              0
            </span>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
