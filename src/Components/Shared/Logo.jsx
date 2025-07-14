import { Link } from "react-router-dom";

const Logo = ({ sm }) => {
  if (sm) {
    return (
      <Link to="/" className="flex flex-col items-center  mx-2">
        <div className="text-center">
          <h1 className="text-sm leading-none font-bold text-white drop-shadow-[0_0_1.5px_#ffffff]">
            Premier League
          </h1>
          <h2 className="text-sm font-bold text-white drop-shadow-[0_0_1.5px_#ffffff] leading-none">
            Lotto
          </h2>
        </div>
        {/* Glowing horizontal line */}
        <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent" />
      </Link>
    );
  }

  return (
    <Link to="/" className="flex flex-col items-center gap-2 mx-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white drop-shadow-[0_0_6px_#ffffff] leading-5">
          Premier League
        </h1>
        <h2 className="text-2xl font-bold text-white drop-shadow-[0_0_6px_#ffffff] leading-4">
          Lotto
        </h2>
      </div>
      {/* Glowing horizontal line */}
      <div className="w-52 h-[4px] bg-gradient-to-r from-transparent via-white to-transparent" />
    </Link>
  );
};

export default Logo;
