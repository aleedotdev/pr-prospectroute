import { Typography } from "@/components/shared/typography";
import { PricingCard } from "@/components/ui/pricing-card";
import { pricingPlans } from "@/constants";
import PricingForm from "./price-form";

const PricingSection = () => {
  return (
      <div id="pricing" className="w-full flex flex-col justify-center items-center py-20 gap-12 bg-[#f8fdff]">
     <div className="max-w-site lg:w-[90%] w-[95%] flex flex-col justify-between items-center gap-8">
        <div className="flex flex-col justify-center items-center">
    <Typography as={'h2'} size={'md'} className="text-yellow">Pricing</Typography>
    <Typography as={'h3'} size={'h3'} weight={'bold'} >Choose your Package</Typography>
    <Typography as={'p'} size={'md'} className="text-light-blue text-center">No contracts. No commitments. Pay as you go each week.</Typography>
    </div>
    
     <div className="w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 md:grid hidden">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              callsRange={plan.callsRange}
              features={plan.features}
              price={plan.price}
              featured={plan.featured}
            />
          ))}
        </div>
        <div className="md:hidden ">
            <PricingForm />
        </div>
    </div>
    </div>

  );
};

export default PricingSection;