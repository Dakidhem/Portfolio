const RightBar = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:m.kadiri@esi-sba.dz" className="h-[30px]">
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
          m.kadiri@esi-sba.dz
        </p>
      </a>
      <span className="w-[2px] h-40 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightBar;
