const SectionTitle = ({ title, subtitle, highlight }) => {
  return (
    <div className="mt-10 md:mt-16">
      <div className="relative">
        <h1 className="absolute -top-14 left-0 text-[120px] font-bold opacity-10 md:block hidden">
          {title}
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold">
          {subtitle}
          <span className="text-red-600"> {highlight}</span>
        </h1>
        <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded md:mb-14">
          <div className="flex-1 h-2 bg-[#DF826C]"></div>
          <div className="flex-1 h-2 bg-red-400"></div>
          <div className="flex-1 h-2 bg-[#DF826C]"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
