import { Button } from "@/components/shared/button";
import { Typography } from "@/components/shared/typography";
import { cardData } from "@/constants";
import { Icon } from "@iconify/react";
import { useState } from "react";

const CardSection = () => {
  
  const [showMore, setShowMore] = useState<boolean[]>(
    cardData.map(() => false)
  );

  const toggleShowMore = (i: number) => {
    setShowMore(prev => {
      const updated = [...prev];
      updated[i] = !updated[i];
      return updated;
    });
  };

  return (
    <div id="pr-crm" className="w-full relative flex justify-center items-center py-20">
      <div  className="bg-[#F7F8F9] absolute top-70 w-full z-0"></div>

      <div id="our-leads" className="max-w-site relative z-3 lg:w-[90%] w-[95%] flex lg:flex-row flex-col justify-between items-center lg:gap-12 gap-12 ">
        
        <div  className="w-full flex md:flex-row flex-col gap-12 z-4">
          {cardData.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 shadow-lg p-6 bg-white border-t-6 border-yellow w-full max-w-[581px] h-full"
            >
              <Typography as="p" weight="medium" size="md" className="text-yellow">
                {card.title}
              </Typography>

              <Typography
                as="h2"
                weight="bold"
                size="h3"
                className="text-naval-blue"
              >
                {card.heading}
              </Typography>

              {/* Show paragraphs based on toggle */}
              {card.paragraphs
                .slice(0, showMore[i] ? card.paragraphs.length : 2)
                .map((para, index) => (
                  <Typography
                    key={index}
                    as="p"
                    weight="normal"
                    className="text-light-blue"
                  >
                    {para}
                  </Typography>
                ))}

              {card.showButtons && (
                <div  className="flex sm:flex-row flex-col justify-start items-start md:gap-6 gap-4 text-black py-2">
                  
                  <Button
                    className="border-2 border-yellow w-full lg:h-[50px] min-h-[50px] hover:bg-yellow gap-4"
                    onClick={() => toggleShowMore(i)}
                  >
                    {showMore[i] ? (
                      <>
                        Show less <Icon icon="ep:top" width="20" height="20" />
                      </>
                    ) : (
                      <>
                        Show more <Icon icon="ep:bottom" width="20" height="20" />
                      </>
                    )}
                  </Button>

                  <Button className="border-2 border-yellow w-full lg:h-[50px] min-h-[50px] bg-yellow">
                    Get pricing
                  </Button>
                
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CardSection;
