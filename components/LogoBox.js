const LogoBox = ({ imageUrl, downloadFile, index }) => {
  return (
    <button
      onClick={() => downloadFile(imageUrl, index)}
      className="relative z-50 flex items-center justify-center w-full bg-white border border-transparent cursor-pointer group h-60 hover:border-neutral-900"
    >
      <img src={imageUrl} className="w-32" />
      <div className="absolute bottom-0 flex justify-between w-full p-3 opacity-0 group-hover:opacity-100">
        <span className="text-sm font-normal text-black font-inter">
          No.{index}
        </span>
        <span className="text-sm font-normal text-black font-inter">
          Download SVG
        </span>
      </div>
    </button>
  );
};

export default LogoBox;
