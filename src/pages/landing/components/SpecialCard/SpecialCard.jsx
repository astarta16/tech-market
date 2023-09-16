import React, { useEffect, useState } from 'react'
import macbook from '../../../../assets/images/specialCard/macbook-47642 1.png'
import SpecialBanner from './SpecialBanner/SpecialBanner'
import SpecialTimerBanner from './SpecialBanner/SpecialTimerBanner'

export function SpecialCard() {
    //სატესტო ველოდები ბექს

    const testBanner = [{
        id: 1,
        name: "Aurora Headset",
        description: "20",
        image: "./src/assets/images/specialCard/daco-headset.png",
        button: 'Buy now'
    }, {
        id: 2,
        name: "New Dual sense",
        description: "for playstation",
        image: "./src/assets/images/specialCard/image 3.png",
        button: 'Viev Details'
    }, {
        id: 3,
        name: "Instant cameras",
        description: "get a gift ",
        image: "./src/assets/images/specialCard/kisspng-playstation-camera-playstation-4-playstation-3-son-glacier-5b20ca6f792361 1.png",
        button: 'Viev Details'
    },]
    const [timerClass, setTimerClass] = useState('')
    const targetTime = Date.now() + 1223200000

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimerClass()
        }, targetTime - Date.now())
        return () => clearTimeout(timeout)
    }, [targetTime])

    return (
        <div className='flex justify-evenly my-[38px] mx-[193px] gap-x-2.5'>
            <div className='flex flex-col items-center rounded-lg bg-great-deals w-[1590px] h-[453px] py-[15px]'>
                <div className='flex flex-col text-[#FFF] font-firago font-normal leading-normal'>
                    <h1 className='text-[36px] p-[10px]'>იყიდე და გაყიდე ნივთები</h1>
                    <h4 className='text-center text-[15px] p-[10px]'>great deals on Mackbook, Ipad, IPhone and more</h4>
                    <div className='flex justify-center'>
                        <button className='bg-buyNowButtonColor p-[10px] text-[13px] w-[98px] rounded-lg'>shop now</button>
                    </div>
                </div>
                <div className='mt-[45px]'>
                    <img src={macbook} alt='MacBook' />
                </div>
            </div>
            <div className='flex  gap-2 flex-wrap '>
                <SpecialTimerBanner timerClass={timerClass} targetTime={targetTime} testBanner={testBanner} />
                {testBanner.slice(1, 3).map((item, index) => (
                    <SpecialBanner key={index} testBanner={item} designClass={index === 0 ? 'w-[263px] h-[165px] bg-new-dual' : 'w-[263px] h-[165px] bg-instant-cameras'} />
                ))}
            </div>
        </div>
    )
}

