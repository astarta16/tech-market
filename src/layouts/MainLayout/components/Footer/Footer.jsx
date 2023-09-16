import React from 'react';
import { Link } from 'react-router-dom';

import FacebookIcon from '../../../../assets/images/footer/FacebookIcon';
import InstaIcon from '../../../../assets/images/footer/InstaIcon';
import LinkedinIcon from '../../../../assets/images/footer/LinkedinIcon';

//note: footerList & footerListHead & footerListLink are custom classes located in ./assets/styles/global.css

export function Footer() {
  return (
    <div className='container flex justify-between border-t-[0.1px] border-black mt-[6rem] pt-[10px]'>
      <div className='flex gap-[6rem]'>
        <ul className=' footerList'>
          <li className='footerListHead'>
            <h3>მენიუ</h3>
          </li>
          <li className='footerListLink'>
            <Link to='#'>მთავარი</Link>
          </li>
          <li className='footerListLink'>
            <Link to='#'>ხშირად დასმული კითხვები</Link>
          </li>
        </ul>

        <ul className=' footerList'>
          <li className='footerListHead'>
            <h3>ჩემი გვერდი</h3>
          </li>
          <li className='footerListLink'>
            <Link to='#'>ჩემი განცხადებები</Link>
          </li>
          <li className='footerListLink'>
            <Link to='#'>ანგარიშის რედაქტირება</Link>
          </li>
        </ul>

        <ul className=' footerList'>
          <li className='footerListHead'>
            <h3>კონტაქტი</h3>
          </li>
          <li className='footerListLink'>
            <Link to='mailto:techmarket@gmail.com'>techmarket@gmail.com</Link>
          </li>
          <li className='footerListLink'>
            <Link to='callto://+995123456789'>+995123456789</Link>
          </li>
        </ul>
      </div>
      <div className='flex gap-2 p-[0.625rem]'>
        <Link to='#'>
          <FacebookIcon />
        </Link>
        <Link to='#'>
          <InstaIcon />
        </Link>
        <Link to='#'>
          <LinkedinIcon />
        </Link>
      </div>
    </div>
  );
}
