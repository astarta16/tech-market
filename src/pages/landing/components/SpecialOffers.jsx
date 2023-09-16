import laptop from '../../../assets/images/specialOffers/laptop.png';
import hairdrayer from '../../../assets/images/specialOffers/hairdrayer.png';
import Iphone from '../../../assets/images/specialOffers/iphone.png';
import TV from '../../../assets/images/specialOffers/TV.png';
import vacuumcleaner from '../../../assets/images/specialOffers/vacuumcleaner.png';
import washingmachine from '../../../assets/images/specialOffers/washingmachine.png';

export const SPOferrs = [
  {
    id: 1,
    images: laptop,
    title: 'ნოუთბუქები',
    amount: '20 პროდუქტი',
  },
  {
    id: 2,
    images: Iphone,
    title: 'მობილურები',
    amount: '1 პროდუქტი',
  },
  {
    id: 3,
    images: vacuumcleaner,
    title: 'მტვერსასრუტი',
    amount: '23 პროდუქტი',
  },
  {
    id: 4,
    images: TV,
    title: 'ტელევიზორები',
    amount: '23 პროდუქტი',
  },
  {
    id: 5,
    images: washingmachine,
    title: 'სარეცხი მანქანა',
    amount: '40 პროდუქტი',
  },
  {
    id: 6,
    images: hairdrayer,
    title: 'თავის მოვლა',
    amount: '4 პროდუქტი',
  },
];

export function SpecialOffers() {
  return (
    <div className='flex items-center justify-between gap-6'>
      {SPOferrs.map((item) => {
        return (
          <div
            key={item.id}
            className='flex flex-col items-center justify-center  '
          >
            <div className=' bg-speacial-bg-gray rounded-full mb-5'>
              <img
                src={item.images}
                alt={item.title}
                height={114}
                width={122}
                className='pt-[28px] pb-[27px] pl-[23px] pr-[24px]'
              />
            </div>
            <div className='flex flex-col items-center '>
              <h4 className='text-special_offers p-[10px] mb-[-12px] font-semibold'>
                {item.title}
              </h4>
              <h5 className='text-special_offers opacity-[0.6] p-[10px]'>
                {item.amount}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
