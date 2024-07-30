import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Data } from "@utils/index";


const Faqs = () => {
    const [isActive, setIsActive] = useState<any>(Data.faqs.map((_, index) => index < 2));

    function handleToggle(idx: number){
        setIsActive((prev: any) => {
            const toggledCard = [...prev];
            toggledCard[idx] = !toggledCard[idx]
            return toggledCard;
        })
    }
   
    return (
    <div className="grid grid-cols-2 gap-y-3 gap-x-5 mt-10">
        {
            Data.faqs.map((item, i) => (
            <div className="w-[100%] cursor-pointer" key={i}> 
                {/* Card Header     */}
                <div 
                className={`w-full transition-all duration-300 ${isActive[i] ? 'bg-[#0FCC7C]' : 'bg-[#e1f5ec]'} h-[50px] flex justify-between items-center gap-3 py-8 px-5 rounded-tr-2xl ${isActive[i] ? 'rounded-tl-2xl' : 'rounded-2xl'}`} 
                onClick={() => handleToggle(i)}
                >
                    <span className={isActive[i] ? "text-white font-bold" : "text-[#00384F] font-bold"}>
                        {item.header}
                    </span>
                    <span>
                        {
                            isActive[i] ? 
                            <IoIosArrowUp 
                            color={isActive[i] ? "#fff" : "#0FCC7C"} 
                            size={'24px'} 
                            /> : 
                            <IoIosArrowDown 
                            color={isActive[i] ? "#fff" : "#0FCC7C"} 
                            size={'24px'} 
                            />
                        }
                    </span>
                </div>
                {
                    isActive[i] && (
                        <div className="transition-all duration-1000 p-5 bg-[#e1f5ec]">
                            <p className="text-[16px] text-gray-600">
                                {item.content}
                            </p>
                        </div>
                    )
                }
            </div>  
            ))
        }
    </div>
  )
}

export default Faqs