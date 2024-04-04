import Link from "next/link";


const HeroContact = () => {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-8 md:px-14 md:py-10 mb-8 md:mb-20">
        <h3 className="text-[#FF4D00] text-lg md:text-xl">Contact Us</h3>
        <h1 className="relative bg-clip-text font-black text-transparent bg-gradient-to-r leading-tight mb-6 text-2xl md:text-4xl text-center from-[#ffffff] to-[rgba(255,255,255,0.42)]">
          Lets Work Together
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-col lg:flex-row md:gap-6">
          <p className="w-full sm:w-[33%] text-[14px] text-white/[0.6] text-center sm:text-left">
            Find out whether Cypro Studios can be fit for your next digital
            initiative
          </p>
          <Link href='/contact' className="redbtn bg-gradient-to-r from-[#FF6053] via-[#FF1D60] to-[#C71869] px-8 py-3 rounded-[3px] btn hover:border-white max-md:px-6 max-md:py-3">
            <span className="spani text-white font-semibold text-base md:text-xl">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    );
  };
  
  export default HeroContact;