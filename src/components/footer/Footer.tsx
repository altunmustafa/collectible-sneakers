import React from "react";
import footerNavItems from "@/data/footerNavItems";
import FooterCol from "./FooterCol";
import FooterLink from "./FooterLink";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from 'next/image'
import getByGooglePlay from '/public/images/getByGooglePlay.png'
import getByAppStore from '/public/images/getByAppStore.png'
import facebook from '/public/icons/facebook.svg'
import twitter from '/public/icons/twitter.svg'
import instagram from '/public/icons/instagram.svg'
import youtube from '/public/icons/youtube.svg'
import linkedin from '/public/icons/linkedin.svg'

const Footer: React.FC = () => {

  return (
    <footer className="flex flex-col justify-center w-full bg-slate-900 px-4 md:px-20 text-white">
      <div className="flex flex-col md:flex-row gap-12 w-full py-12 border-t border-b border-solid border-slate-700">

        {footerNavItems.map((navItem, index) => (
          <FooterCol key={index}>
            <FooterLink text={navItem.text} path={navItem.path} isBold Icon={navItem.icon} showIcon={navItem.showIcon} className="text-white" />
            {navItem.subItems && navItem.subItems.map((subNavItem, index) => (
              <FooterLink key={index} text={subNavItem.text} path={subNavItem.path} Icon={subNavItem.icon} showIcon={subNavItem.showIcon} className="text-slate-200" />
            ))}
          </FooterCol>
        ))}

        <FooterCol className='gap-2'>
          <FooterLink text="Get the App" path="#" isBold Icon={GlobeAltIcon} showIcon={false} className="text-white" />
          <div className="h-[46px] max-md:m-auto">
            <Image src={getByAppStore} alt="Get the App from the App Store" />
          </div>
          <div className="h-[46px] max-md:m-auto">
            <Image src={getByGooglePlay} alt="Get the App from the Google Play" />
          </div>
          <div className="pt-12 pb-3 text-slate-200 max-md:text-center">
            Fallow Us
          </div>

          <div className="flex max-md:justify-center gap-4">
            <Image src={youtube} alt="youtube" />
            <Image src={facebook} alt="facebook" />
            <Image src={twitter} alt="twitter" />
            <Image src={instagram} alt="instagram" />
            <Image src={linkedin} alt="linkedin" />
          </div>
        </FooterCol>

      </div>
      <div className="flex justify-between items-center max-md:flex-col py-6 max-md:py-12 gap-12 max-md:gap-6 text-slate-200">
        <div className="text-base">Collers @ 2023. All rights reserved.</div>
        <div className="flex gap-8">
          <FooterLink
            text="Terms"
            path="#"
          />
          <FooterLink
            text="Privacy"
            path="#"
          />
          <FooterLink
            text="Contact"
            path="#"
          />
          <FooterLink className="text-slate-200"
            text="EN"
            path="#"
            Icon={GlobeAltIcon}
            showIcon={true}
          />
        </div>
      </div>
    </footer>

  );
}

export default Footer;