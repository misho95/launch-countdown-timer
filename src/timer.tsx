const Timer = ({ time, title, both }) => {
  return (
    <div className="flex flex-col gap-5 select-none">
      <div className="w-w70 sm:w-w148 h-h70 sm:h-h132 bg-purple3  rounded-lg relative ">
        <div className="absolute top-0 left-0 h-1/2 w-full bg-black/20 rounded-t-lg z-20">
          <div className="w-1 h-2 sm:w-2 sm:h-3 bg-purple4 absolute right-0 -bottom-1 sm:-bottom-1.5 rounded-l-full"></div>
          {both && (
            <div className="w-1 h-2 sm:w-2 sm:h-3 bg-purple4 absolute left-0 -bottom-1 sm:-bottom-1.5 rounded-r-full"></div>
          )}
        </div>
        <span className="text-pink absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-bold text-4xl sm:text-7xl">
          {time}
        </span>
      </div>
      <div className="text-purpleLight text-center font-semibold">{title}</div>
    </div>
  );
};

export default Timer;
