const SectionTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-3 items-center font-[500] text-[14px] tracking-[1px] uppercase">
        <h2>{title}</h2>
        <div className="w-[120px] h-[1px] bg-main"></div>
      </div>
      {description && (
        <p className="font-poppins text-4xl text-white uppercase font-bold">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
