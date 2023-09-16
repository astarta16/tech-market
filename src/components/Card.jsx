import noImage from '../assets/images/card/no-image.jpg';
import HeartIcon from '../assets/images/card/HeartIcon';
import CartIcon from '../assets/images/card/CartIcon';

const TestProduct = {
  name: 'I Phone 14 Pro Max midnight purple grey blue brown iphone watch',
  price: '150',
  discount: '20',
  image: './src/assets/images/card/iphone-image.jpg',
  favourite: false,
  inCart: false,
};

export function Card({ product }) {
  if (product == undefined) {
    // მხოლოდ საცდელად
    product = TestProduct;
  }

  return (
    <div className=' flex flex-col items-center gap-1 w-48 m-12 p-2 rounded-2xl bg-white leading-4'>
      <img
        className=' w-40 h-40 p-2 object-center'
        src={product?.image || noImage}
        alt={product?.name + ' picture'}
      />

      <div className=' flex justify-between w-32'>
        <h3 className=' font-medium'>
          {product?.price - (product?.price * product?.discount) / 100 || '---'}{' '}
          ₾
        </h3>

        {product?.discount > 0 && (
          <h3 className=' font-medium line-through text-red-500'>
            {product?.price || '---'} ₾
          </h3>
        )}
      </div>

      <div className='py-2 w-32'>
        <h3 className='relative font-medium h-8.5 overflow-hidden'>
          {product.name.length > 27
            ? product.name.slice(0, 26) + '...'
            : product.name}
        </h3>
      </div>

      <div className=' flex justify-between gap-20'>
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
