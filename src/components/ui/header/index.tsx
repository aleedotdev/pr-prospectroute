"use client";
import { Typography } from "@/components/shared/typography";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, {useState } from "react";
import Sidebar from "../sidebar";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { navmenu } from "@/constants";
import { Button } from "@/components/shared/button";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const getPagePath = usePathname();
 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="flex flex-col justify-center items-center">
          {/* topbar */}
        <div className="w-full  flex justify-center items-end  bg-naval-blue">
          <div className="lg:w-[90%] w-[95%] max-w-site text-white md:text-md text-sm flex md:justify-end justify-center items-center gap-2 p-2">
        <Icon icon="ic:baseline-phone" width="24" height="24"  className="text-white" />
        Get in touch with us: <Link href={'tel:(888) 775-8857'}>(888) 775-8857</Link>
        </div>
        </div>
          {/* nav */}
        <nav
          className={`max-w-site bg-white lg:w-[90%] w-[95%] flex justify-center items-center transition-transform duration-500 z-40 `}
        >
          <div className="w-full flex justify-center items-center">
            <div className="w-full py-2 flex justify-between items-center md:gap-12 gap-6">
              <div>
              <Link
                className="flex-shrink-0"
                href="/"
              >
                <Image
                  src="/assets/svg/logo.svg"
                  width={126}
                  height={57}
                  alt="logo"
                  className="lg:w-[126px] w-[60px]" 
                />
              </Link>
              </div>
                <div className="hidden lg:flex w-full justify-start gap-7 items-center">
                {navmenu?.map((item, index) => {
                  return (
                    <Link href={item.href} key={index}>
                    <button
                    key={index}
                      className="cursor-pointer"
                    >
                      <Typography
                        size="md"
                        as="p"
                        className={`font-light hover:text-yellow transition-colors duration-300 py-1 ${getPagePath === item.href ? 'text-yellow font-bold before:scale-x-100' : 'text-black'}  hover:before:scale-x-100 hover:before:origin-left text-4xl relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0`}
                      >
                        {item.label}
                      </Typography>
                    </button>
                    </Link>
                  )
                })}
              </div>
            
              {/* Desktop Navigation */}
              <div className="w-full flex justify-end lg:gap-20 gap-0">
               <div className="xl:flex hidden">
                <Image src={"/assets/images/home/trustpilot.webp"} width={116} height={57} alt={"logo"} className="xl:w-[116px] w-[80px]" />
               </div>
              <div className="flex justify-center items-center md:gap-6 gap-4 text-black">
               <Button className="border-2 border-yellow md:w-[120px] w-[80px] lg:h-[50px] h-[30px] hover:bg-yellow">Login</Button>
               <Button className="border-2 border-yellow md:w-[139px] w-[80px] lg:h-[50px] h-[30px] bg-yellow">Signup</Button>
              </div> 

               {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-black hover:text-gray-300 transition-colors"
                onClick={toggleSidebar}
                aria-label="Toggle menu"
              >
                <Icon
                  icon={isSidebarOpen ? "mdi:close" : "mdi:menu"}
                  className={`w-6 h-6 transition-transform duration-300 ${isSidebarOpen ? "rotate-90" : "" }`}
                />
              </button>
           
              </div>
             
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
