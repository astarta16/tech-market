import noImage from '../assets/images/card/no-image.jpg';
import HeartIcon from '../assets/images/card/HeartIcon';
import CartIcon from '../assets/images/card/CartIcon';

const TestProduct = {
  name: 'I Phone 14 Pro Max midnight purple grey blue brown iphone watch',
  price: 150,
  discount: 20,
  image: './src/assets/images/card/iphone-image.jpg',
  favourite: false,
  inCart: false,
};

export function Card({ product }) {

  if (product == undefined) product = TestProduct; // მხოლოდ საცდელად

  return (
    <div className=' w-52 px-3 py-4 rounded-2xl bg-white leading-4 children:mb-[3px]'>
      <img
        className=' w-40 h-44 p-2 mx-auto object-cover'
        src={product?.image || noImage}
        alt={product?.name + ' picture'}
      />

      <div className='flex justify-between mx-6 children:font-medium'>
        <h3>
          {product?.price - (product?.price * product?.discount) / 100 || '---'}{' '}
          ₾
        </h3>

        {product?.discount > 0 && (
          <h3 className='line-through text-red-500'>
            {product?.price || '---'} ₾
          </h3>
        )}
      </div>

      <div className='py-2 mx-4'>
        <h3 className='relative font-medium h-8.5 overflow-hidden'>
          {product.name.length > 27
            ? product.name.slice(0, 26) + '...'
            : product.name}
        </h3>
      </div>

      <div className='flex justify-between px-4'>
        <button
          className={`p-1 ${product.favourite ? 'fill-red-600' : 'fill-black'}`}
        >
          <HeartIcon />
        </button>

        <button
          className={`p-1 ${product.inCart ? 'fill-cyan-400' : 'fill-black'}`}
        >
          <CartIcon />
        </button>
      </div>
    </div>
  );
}
