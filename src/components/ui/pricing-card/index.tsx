import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";
import { Typography } from "@/components/shared/typography";
import { PricingCardProps } from "@/types";

export const PricingCard = ({ callsRange, features, price }: PricingCardProps) => {
  return (
    <Card className="flex flex-col h-full border-border bg-white ">
      {/* Header */}
      <div className="p-8 border-b border-borde flex flex-col justify-center items-center">
        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{callsRange}</h3>
        <p className="text-light-blue text-base">Calls/Week</p>
      </div>

      {/* Features */}
      <div className="flex-1 p-8 space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-pricing-text text-base">{feature.label}</span>
            <span className={`text-base font-bold ${feature.emphasized ? 'text-foreground' : 'text-foreground'}`}>
              {feature.value}
            </span>
          </div>
        ))}
      </div>

      {/* Price and CTA */}
      <div className="p-8 bg-light-gray/10 border-t-1 border-light-blue">
        <div className="mb-6 text-center flex justify-center items-center">
          <Typography as={'p'} weight={'bold'} className="text-4xl md:text-5xl font-bold text-foreground">${price.toLocaleString()}</Typography>
          <Typography as={'p'} weight={'normal'} className="text-pricing-text text-light-blue text-base ml-2">Per week</Typography>
        </div>
       <Button className="border-2 border-yellow w-full h-[50px]   min-h-[10px] hover:bg-yellow gap-4">             
          Sign up. 
        </Button>
      </div>
    </Card>
  );
};
