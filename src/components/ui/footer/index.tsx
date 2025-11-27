import { Typography } from "@/components/shared/typography";
import { navmenu } from "@/constants";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
      const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full max-w-container  bg-yellow flex flex-col pt-20 justify-center items-center  text-white">
      <div className="lg:w-[90%] w-[95%] max-w-site  text-black">
        <div className="w-full max-width-section bg-gradient-dark-yellow  rounded-none md:rounded-4xl">
          {/* Top Section */}
          <div className="grid lg:grid-cols-2 grid-cols-1 mb-10 justify-end gap-4 ">
            {/* Logo + contact */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/assets/svg/footer-logo.svg"
                  alt="Black Gold"
                  width={128}
                  height={83}
                  className=""
                />
              </div>
         
               <div className="w-full flex flex-col justify-start items-start ">
         
                  <ul className="space-y-3 text-black ">
                    <li className="flex items-center gap-2">
                      <Icon icon="mdi:phone" className="text-black w-5 h-5" />
                      <a
                        href="tel:(888) 775-8857"
                        className="hover:text-light-blue font-medium"
                      >
                        Get in touch: (888) 775-8857
                      </a>
                    </li>
                    <li className="flex items-start gap-2 w-full">
                      <Icon
                        icon="mdi:map-marker"
                        className="text-black text-wrap w-5 h-5"
                      />
                      <Typography
                        as={"p"}
                        size={"md"}
                        weight={"medium"}
                        className="text-wrap"
                      >
                        Hospital Colony, Bramas, Gilgit, Pakistan
                      </Typography>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="flex lg:justify-end justify-start items-center w-full">
              <div className="flex sm:flex-row flex-col xl:gap-24 gap-12 w-full">
                {/* Links */}
                <div className="w-full ">
                  <ul className="space-y-2">
                     {navmenu.map((item, Index) => (
                    <li key={Index}>
                      <Link
                        href={item.href}
                        className="hover:text-light-blue transition font-medium"
                      >
                        {item.label}
                      </Link>
                    </li>
                     ))}
                    <li>
                  
                    </li>
                  </ul>
                </div>

                {/* Contact */}
               
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t p-4 border-grey flex flex-col justify-center items-center">
            {/* Social Links */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
            <div>
        <Typography
          as={"p"}
          size={"sm"}
          className="text-lighter-grey  text-center"
        >
          Copyright {currentYear} – All Rights Reserved
        </Typography>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
      </div>
     
    </footer>
  );
}
export default Footer;
