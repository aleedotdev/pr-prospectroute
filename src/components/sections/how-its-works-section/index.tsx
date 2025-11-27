import { Button } from "@/components/shared/button";
import { Typography } from "@/components/shared/typography";
import { howItWorksCard } from "@/constants";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";

const HowItsWorksSection = () => {
      const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(prev => !prev);
  };

  return (
   <div id="how-its-works" className="w-full flex justify-center items-center pt-10">
     <div className="max-w-site lg:w-[90%] w-[95%] flex lg:flex-row flex-col justify-between items-center gap-12">
       <div className="md:w-1/2 w-full flex flex-col gap-2">

      <Typography as="p" weight="medium" size="md" className="text-yellow">
        {howItWorksCard.title}
      </Typography>

      <Typography
        as="h2"
        weight="bold"
        size="h2"
        className="text-naval-blue"
      >
        {howItWorksCard.heading}
      </Typography>

      {howItWorksCard.paragraphs
        .slice(0, showMore ? howItWorksCard.paragraphs.length : 2)
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

      {howItWorksCard.showButtons && (
        <div className="flex sm:flex-row flex-col justify-start items-start md:gap-6 gap-4 text-black">

          <Button
            className="border-2 border-yellow w-full lg:h-[50px] min-h-[50px] hover:bg-yellow gap-4"
            onClick={toggleShowMore}
          >
            {showMore ? (
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
    <div className="md:w-1/2 w-full flex flex-col gap-4">
        <Image src={'/assets/images/home/man-exploring.webp'} width={577} height={485} alt="man" className="w-full max-w-[577px]" />
         <Typography as={'p'} weight={'normal'} className="text-light-blue">
The PR-CRM prioritizes calls in many ways but what really makes it amazing when it’s used with ProspectRoute. This is because when PR generates a lead, the PR-CRM immediately connects your producer with the prospect by phone when it comes in. This means it’s the fastest way to get prospects on the phone. For each minute that passes from when a prospect expresses interest and a producer makes their first contact attempt, the likelihood of a sale decreases by 50%. Using PR with the PR-CRM.
       
        </Typography>
           <Typography as={'p'} weight={'normal'} className="text-light-blue">
You can connect any lead vendor with the PR-CRM so you can use it even when you’re not actively using ProspectRoute for your marketing. But between the volume of high quality leads we can produce and our award-winning PR-CRM, we don’t think you’ll want to use any other vendors. 
       
        </Typography>

    </div>
    </div>
    </div>
  );
};






export default HowItsWorksSection;


