import { Typography } from "@/components/shared/typography";
import Image from "next/image";
import PricingForm from "./hero-form";

const HeroSection = () => {
  return (
    <div className="w-full bg-yellow flex justify-center items-center py-20">
     <div className="max-w-site lg:w-[90%] w-[95%] flex lg:flex-row flex-col justify-between items-center lg:gap-0 gap-12 ">
        {/* content section */}
      <div className="w-full flex flex-col justify-center items-start gap-12">
        <div className="flex flex-col  justify-center lg:items-start sm:items-center text-naval-blue gap-4">
        <Typography as={'p'} className="text-[15px] uppercase">
          Prospect Route  
        </Typography>
        <Typography as={'h1'} size={'h1'} weight={'bold'} className="lg:text-start md:text-center">
          High volume, pristine, exclusive leads.  
        </Typography>
        <Typography as={'p'} size={'xl'}>
          Up to 50 web leads per day, exclusive and high quality.
        </Typography>
        </div>
        <div className="w-full flex lg:justify-start md:justify-center lg:items-start items-center">
        <Image src={"/assets/images/home/lady-employee.webp"} width={415} height={342} alt={"man-exploring"} className="w-full lg:max-w-[415px] max-w-[415px]" />
        </div>
     </div>
        {/* form section */}
      <div className="w-full  flex flex-col justify-center lg:items-end items-center">
        <PricingForm />
     </div>
     <div>

     </div>
      
     </div>
    
    </div>
  );
};

export default HeroSection;