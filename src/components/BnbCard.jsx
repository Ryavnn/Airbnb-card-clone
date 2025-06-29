import Star from '../assets/star.svg';

const BnbCard = () => {
  return (
    <div className="w-70 h-80 rounded-2xl flex flex-col space-y-2 shadow-2xl aspect-auto">
      <img
        className="w-full h-2/4 rounded-t-2xl object-cover"
        src="https://l.icdbcdn.com/oh/60907f50-c4d6-4044-9422-b536a7fdabfa.jpg"
        alt=""
      />
      <div className="flex pl-2 ">
        <div
          className="flex mr-4 items-center
        "
        >
          <img src={Star} alt="" />
          <span className="text-black text-sm ml-1 font-bold">4.5</span>
        </div>
        <h3 className="text-black text-lg font-semibold">Westlands, Nairobi</h3>
      </div>
      <div className="pl-2 space-y-1">
        <p className="text-black text-md">Modern Studio in Nairobi</p>
        <p>Cozy, bright and close to everything</p>
        <p>KES 4,500 / night </p>
      </div>
    </div>
  );
}

export default BnbCard