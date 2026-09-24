"use client"
import { FaBookmark } from 'react-icons/fa';

const SaveForLater = ({exercise}) => {

    

    const handleSaveForLater=()=>{
        console.log("save for button clicked",exercise)
    }
    return (
        <div>
            <button onClick={()=>handleSaveForLater()} className="flex items-center justify-center gap-3 rounded-xl border border-[#3a404c] px-7 py-4 font-medium text-white transition hover:bg-[#191c22]">
                <FaBookmark />
                Save for later
              </button>
        </div>
    );
};

export default SaveForLater;