import React, { useEffect, useState } from 'react'
import macbook from '../../../assets/images/specialCard/macbook-47642 1.png'
import SpecialBanner from './SpecialBanner/SpecialBanner'
import SpecialTimerBanner from './SpecialBanner/SpecialTimerBanner'

export function SpecialCard() {
    //სატესტო ველოდები ბექს

    const testBanner = [{
        id: 1,
        name: "Aurora Headset",
        description: "20",
        image: "./src/assets/images/specialCard/Daco_6064384 1.png",
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
        <div className='grid auto-cols-auto auto-rows-auto grid-cols  [&>*:nth-child(2)]:col-start-3 [&>*:nth-child(2)]:col-end-5
        sm:[&>*:nth-child(2)]:col-start-2 sm:[&>*:nth-child(2)]:col-end-4
        gap-2  my-[38px] sm:mx-[19px] '>
            <div className='col-start-1 col-end-3 row-start-1 row-end-3 sm:col-auto sm:row-auto rounded-lg bg-great-deals w-[580px] py-[27px] sm:p-0 sm:w-[136px] sm:h-[119px] '>
                <div className='text-[#FFF] font-firago font-normal leading-normal text-center'>
                    <h1 className='text-[36px] p-[10px] sm:p-[0] sm:text-[14px] sm:text-center'>იყიდე და გაყიდე ნივთები</h1>
                    <h4 className='text-center text-[15px] p-[10px] sm:hidden'>great deals on Mackbook, Ipad, IPhone and more</h4>
                    <div className='flex justify-center sm:hidden'>
                        <button className='bg-buyNowButtonColor p-[10px] text-[13px] w-[98px] rounded-lg'>shop now</button>
                    </div>
                </div>
                <div className='mt-[45px] sm:m-0 flex justify-center '>
                    <img src={macbook} alt='MacBook' className='object-contain w-[380px] h-[159px] sm:w-[84px] sm:h-[89px]' />
                </div>
            </div>
            <SpecialTimerBanner timerClass={timerClass} targetTime={targetTime} testBanner={testBanner} />
            {testBanner.slice(1, 3).map((item, index) => (
                <SpecialBanner key={index} testBanner={item} designClass={index === 0 ? '  bg-new-dual' : ' bg-instant-cameras'} />
            ))}
        </div>
    )
}

// sm:col-auto sm:row-auto 