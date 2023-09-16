import React, { useEffect, useState } from 'react'

const SpecialTimerBanner = ({ timerClass, targetTime, testBanner }) => {
    //სატესტო ველოდები ბექს
    const [timeLeft, setTimeLeft] = useState(targetTime - Date.now())

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now()
            const timeRemaining = targetTime - now
            if (timeRemaining <= 0) {
                clearInterval(interval)
                setTimeLeft(0)
            } else {
                setTimeLeft(timeRemaining)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [targetTime])

    const days = Math.floor(timeLeft / 8640000).toString().padStart(3, '0')
    const hours = Math.floor(timeLeft / 3600000).toString().padStart(2, '0')
    const minutes = Math.floor((timeLeft % 3600000) / 60000).toString().padStart(2, '0')
    const seconds = Math.floor((timeLeft % 60000) / 1000).toString().padStart(2, '0')

    return (
        <div className={`${timerClass} flex w-[534px] h-[280px] bg-aurora-headset pt-[41px] pl-[22px] rounded-lg  `}>
            {testBanner.slice(0, 1).map(item =>
                <div key={item.id} className='flex flex-col justify-between  text-[#FFFFFF] w-[210px] h-[201px] leading-normal not-italic' >
                    <h1 className='font-bold text-[18px] p-[10px]'>{item.name}</h1>
                    <ul className='flex items-center text-center my-[31px]  text-[#000] '>
                        <li className='w-[58px] h-[53px] p-[4px] bg-[#fff] rounded-[10px] mr-[6px]'>
                            <span className='text-[18px] '>{days}</span>
                            <p className='text-[11px] opacity-[.6]'>Days</p>
                        </li>
                        <li className='w-[48px] h-[53px] p-[4px] bg-[#fff] rounded-[10px] mr-[6px] '>
                            <span className='text-[18px] '>{hours}</span>
                            <p className='text-[11px] opacity-[.6]'>Hr</p>
                        </li>
                        <li className='w-[48px] h-[53px] p-[4px] bg-[#fff] rounded-[10px] mr-[6px]'>
                            <span className='text-[18px] '>{minutes}</span>
                            <p className=' text-[11px] opacity-[.6]'>Min</p>
                        </li>
                        <li className='w-[48px] h-[53px]  p-[4px] bg-[#fff] rounded-[10px]'>
                            <span className='text-[18px] '>{seconds}</span>
                            <p className=' text-[11px] opacity-[.6]'>Sec</p>
                        </li>
                    </ul>
                    <button className='p-[10px] text-[13px] w-[98px] rounded-lg bg-buyNowButtonColor'>Buy now</button>
                    <div className=' absolute  rotate-29 py-[10px] pr-[10px]  ml-[300px]'>
                        <img src={item.image} alt={item.name} className='object-cover w-[213px] h-[226px]' />
                    </div>
                </div >
            )}</div>
    )
}

export default SpecialTimerBanner