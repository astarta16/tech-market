import React from 'react'

const SpecialBanner = ({ testBanner, designClass }) => {
    //სატესტო ველოდები ბექს
    return (
        <div className={`${designClass}  rounded-lg sm:w-[136px]`}>
            <div className='flex box-border  sm:flex-col sm:items-center leading-normal w-[260px]  sm:w-[136px]   pl-[11px] pb-[9px] sm:p-0 not-italic font-normal text-[#000]' >
                <div className='pt-[8px] sm:pt-0'>
                    <h1 className='text-[18px] p-[10px] w-[147px] text-start sm:text-center sm:text-[14px]  sm:p-0'>{testBanner.name}</h1>
                    <p className='text-[14px] p-[10px] opacity-[.6] sm:hidden'>{testBanner.description}</p>
                    <button className=' p-[10px] text-[12px] w-[85px] rounded-lg bg-viewDetailsButtonColor sm:hidden'>Buy now</button>
                </div>
                <div className='pt-[32px] pr-[14px] sm:p-0'>
                    <img src={testBanner.image} alt={testBanner.name} className='w-[119px] h-[119px] object-contain sm:w-[84px] sm:h-[89px]' />
                </div>
            </div >
        </div>
    )
}

export default SpecialBanner