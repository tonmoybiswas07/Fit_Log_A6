
import Image from "next/image";
import footerImg from "@/app/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 bg-[#222630]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          
          
          <div className="flex justify-center items-center gap-3">
            <Image
              src={footerImg}
              alt="FitLog logo"
              width={35}
              height={35}
              className="object-contain"
            />

            <h3 className="font-extrabold text-2xl text-white tracking-wide">
              FIT<span className="text-[#c2f800]">LOG</span>
            </h3>
          </div>

         
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm md:text-base">
              © 2026 FitLog — Workout Library.
              <span className="text-[#c2f800] font-semibold ml-1">
                Train hard, log honest.
              </span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
