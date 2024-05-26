"use client";
import Button from "@/components/button";
import SectionText from "@/components/section-text";
import Screen from "@/components/screen";
import video_png from "/public/images/video.png"
import product2 from "/public/images/product2.png"
import gyc_png from "/public/images/gyc.png"
import waves_svg from "/public/vectors/waves.svg"
import Image from "next/image";
import gyc1 from "/public/vectors/gyc1.svg"
import gyc2 from "/public/vectors/gyc2.svg"
import gyc3 from "/public/vectors/gyc3.svg"
import gyc4 from "/public/vectors/gyc4.svg"
import gyc5 from "/public/vectors/gyc5.svg"
import gyc6 from "/public/vectors/gyc6.svg"
import gyc7 from "/public/vectors/gyc7.svg"
// Swiper
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';

const CollectionSection: React.FC = () => {

  const buttons: React.ComponentProps<typeof Button>[] = [
    {
      text: "Bibendum tellus",
      style: "filled",
      leftIcon: gyc1,
      rightIcon: gyc2,
    },
    {
      text: "Cras eget",
      style: "link",
      leftIcon: gyc3
    },
    {
      text: "Dolor pharetra",
      style: "link",
      leftIcon: gyc4
    },
    {
      text: "Amet, fringilla",
      style: "link",
      leftIcon: gyc5
    },
    {
      text: "Amet nibh",
      style: "link",
      leftIcon: gyc6
    },
    {
      text: "Sed velit",
      style: "link",
      leftIcon: gyc7
    },
  ]

  return (
    <section className="relative flex flex-col justify-center items-center gap-20 px-20 pt-20 pb-32 w-full max-md:gap-8 max-md:px-4 max-md:py-12 overflow-clip">
      <SectionText
        headline2="Grow your collection"
        text="Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus."
      />
      {/* Row */}
      <div className="flex flex-col max-md:items-center md:flex-row gap-20 max-lg:gap-8 w-full">
        {/* Col 1 */}
        <div className="flex flex-col gap-4 w-[256px] max-md:hidden shrink-0">
          {buttons.map((button, index) => (
            <Button
              key={index}
              text={button.text}
              style={index == 0 ? "filled" : "link"}
              size="l"
              colors={{ primary: index == 0 ? "white" : "black", secondary: "black" }}
              className="font-medium text-[20px]"
              leftIcon={button.leftIcon}
              rightIcon={button.rightIcon}
            />
          ))}
        </div>
        <Swiper
          className='w-full py-4 select-none z-10 !overflow-visible md:!hidden'
          slidesPerView="auto"
          // slidesPerView={3.5}
          spaceBetween={16}
          modules={[FreeMode]}
          freeMode={true}
        >
          {buttons.map((button, index) => (
            <SwiperSlide key={index} className="!w-auto flex-shrink-0 py-5 z-10">
              <Button
                key={index}
                text={button.text}
                style={index == 0 ? "filled" : "link"}
                size="l"
                colors={{ primary: index == 0 ? "white" : "black", secondary: "black" }}
                className="font-medium text-[20px]"
                leftIcon={button.leftIcon}
                rightIcon={button.rightIcon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Col 2 */}
        <div className="relative flex flex-col gap-[10px] w-[355px] md:w-[800px] h-[556px] max-md:h-[259px]">
          <Screen image={video_png}
            size="l"
          />
          <Screen className="absolute lg:left-[94px] lg:top-[105px] md:left-[75px] md:top-[100px] left-[36px] top-[57px]"
            image={product2}
            size="l"
          />
          <Screen className="absolute lg:left-[688px] lg:top-[202px] md:left-[490px] md:top-[171px] left-[262px] top-[121px]"
            image={gyc_png}
            size="s"
            arrows={false}
            circles={false}
            addressBar={false}
          />
        </div>

      </div>
      <Image className="absolute z-[-1] left-[0px] bottom-[0px] w-full object-cover object-left-bottom"
        src={waves_svg}
        alt="Waves"
      />
    </section>
  )
}

export default CollectionSection;