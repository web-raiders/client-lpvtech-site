import { useState } from 'react'
import { PortableText } from '@portabletext/react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoIosArrowUp } from "react-icons/io";
import serializers from './serializers';


const Policy = ({ policies }: any) => {
    const [isActive, setIsActive] = useState<any>(Array.from(policies, () => false));

    function handleToggle(idx: number){
        setIsActive((prev: any) => {
            const toggledCard = [...prev];
            toggledCard[idx] = !toggledCard[idx]
            return toggledCard;
        })
    }
  return (
    <div className='flex-col'>
        {
            policies.map((item: any, i: number) => (
                <div className='flex-col mt-5' key={i}>
                    <div className='flex gap-x-5'>
                        <span className='text-[20px] font-bold text-[#0fcc7c]'>{item.title}</span>
                        <span onClick={() => handleToggle(i)} className='cursor-pointer'>{isActive[i] ? <IoIosArrowUp size={'24px'} color='#0FCC7C' className='mt-1' /> : <MdKeyboardArrowDown size={'24px'} color='#0FCC7C' className='mt-1' />}</span>
                    </div>
                    {
                        isActive[i] && (
                            <article className='mt-3 text-[14px]'>
                                <PortableText value={item.content} components={serializers} />
                            </article>
                        )
                    }
                </div>
            ))
        }
    </div>
  )
}

export default Policy