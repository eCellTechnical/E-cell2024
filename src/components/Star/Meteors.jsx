import { cn } from "../../utils/cn";

const Meteors = ({ number = 100, className }) => {
  const meteors = new Array(number).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-black shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:translate-y-[100%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#ffffff] before:black ",
            className
          )}
          style={{
            top: Math.random() * 180 + "vh",
            left: Math.random() * 180 + "vw",
            animationDelay: Math.random() * (2 - 0.5) + 0.5 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 1) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};

export default Meteors;
