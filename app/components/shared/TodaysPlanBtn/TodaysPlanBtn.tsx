"use client"
import { FaRegSquareCaretUp } from 'react-icons/fa6';

const TodaysPlanBtn = () => {
    const handleTodaysPlanBtn=()=>{
        console.log("button clicked")
    }
    return (
        <div>
            <button onClick={()=>handleTodaysPlanBtn()} className="flex items-center justify-center gap-3 rounded-xl bg-[#c2ff29] px-7 py-4 font-bold text-black transition hover:bg-[#b1ed1e]">
                <FaRegSquareCaretUp />
                Add to today's plan
              </button>
        </div>
    );
};

export default TodaysPlanBtn;