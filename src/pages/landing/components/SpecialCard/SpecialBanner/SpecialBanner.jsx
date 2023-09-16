import React from 'react'

const SpecialBanner = ({ testBanner, designClass }) => {
    //სატესტო ველოდები ბექს
    return (
        <div className={`${designClass} rounded-lg `}>
            <div className='flex flex-col justify-between leading-normal w-[260px] h-[165px] pl-[11px] pb-[9px] not-italic font-normal text-[#000]' >
                <div className='pt-[8px]'>
                    <h1 className='text-[18px] p-[10px]'>{testBanner.name}</h1>
                    <p className='text-[14px] p-[10px] opacity-[.6]'>{testBanner.description}</p>
                </div>
                <button className='p-[10px] text-[12px] w-[85px] rounded-lg bg-viewDetailsButtonColor'>Buy now</button>
                <div className='absolute ml-[116px] mt-[31px] mb-[14px] mr-[14px] '>
                    <img src={testBanner.image} alt={testBanner.name} className='w-[119px] h-[119px] object-contain' />
                </div>
            </div >
        </div>
    )
}

export default SpecialBanner