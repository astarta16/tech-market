import noImage from '../assets/images/card/no-image.jpg';
import HeartIcon from '../assets/images/card/HeartIcon';
import CartIcon from '../assets/images/card/CartIcon';
import { Link } from 'react-router-dom';

const TestProduct = {
  name: 'I Phone 14 Pro Max midnight purple grey blue brown iphone watch',
  price: 150,
  discount: 20,
  id: 24,
  image: './src/assets/images/card/iphone-image.jpg',
  favourite: false,
  inCart: false,
};

export function Card({ product }) {

  if (!product) product = TestProduct; // მხოლოდ საცდელად

  return (
    <div className=' w-36 sm:w-52 text-[0.75rem] sm:text-base leading-3 sm:leading-4 px-3 py-4 rounded-2xl bg-white children:mb-[3px]'>
      <img
        className=' w-32 sm:w-40 h-32 sm:h-44 mb-0 p-1 sm:p-2 mx-auto object-cover'
        src={product?.image || noImage}
        alt={product?.name + ' picture'}
      />

      <div className='flex justify-between mx-4 children:font-medium'>
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

      <Link
        to={`/product_page/${product.id}`}
        className='block sm:py-2 px-4'
      >
        <h3 className='font-semibold'>
          {product.name.length > 27
            ? product.name.slice(0, 26) + '...'
            : product.name}
        </h3>
      </Link>

      <div className='flex justify-between mx-3 children:px-1 children:w-5 children:sm:w-auto'>
        <button>
          <HeartIcon active={product.favourite} />
        </button>

        <button>
          <CartIcon active={product.inCart} />
        </button>
      </div>
    </div>
  );
}
