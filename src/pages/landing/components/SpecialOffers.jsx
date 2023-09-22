export const SpecialOffers = ({ images, title, amount, width, height }) => (
  <div className="flex flex-col items-center justify-center  ">
    <div
      className="bg-speacial-bg-gray rounded-full mb-5 w-[159px] h-[149px]"
      style={{
        backgroundImage: `url(${images})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: `${width}px ${height}px`,
        backgroundOrigin: "content-box",
      }}
    />
    <div className="flex flex-col items-center">
      <h4 className="text-special_offers p-[10px] mb-[-12px] font-semibold">
        {title}
      </h4>
      <h5 className="text-special_offers opacity-[0.6] p-[10px]">{amount}</h5>
    </div>
  </div>
);
