"use client";
import { useRef } from "react";
import Button from "@/components/button";
import SectionText from "@/components/section-text";
import left_arrow_svg from "/public/vectors/left-arrow.svg"
import right_arrow_svg from "/public/vectors/right-arrow.svg"
import ContentBox from "@/components/content-box";
import Image from "next/image";
import userComments from "@/data/userComments";
// Swiper
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';

interface IUserCommentsSectionProps {
  className?: string
}

const UserCommentsSection: React.FC<IUserCommentsSectionProps> = ({ className = "" }) => {
  const refSwipper = useRef<SwiperRef>(null);

  const onClickPrev = () => {
    refSwipper?.current?.swiper?.slidePrev(700);
  };

  const onClickNext = () => {
    refSwipper?.current?.swiper?.slideNext(700);
  };

  return (
    <section className="relative flex flex-col w-full gap-8 md:gap-20 px-4 py-12 md:p-20 justify-center items-start overflow-clip">
      {/* Row */}
      <div className="w-full md:flex md:items-center md:gap-12">
        <SectionText headline2="Because they love us" />
        {/* Arrows */}
        <div className="hidden md:flex gap-6">
          <Button
            style="outline"
            size="m"
            leftIcon={left_arrow_svg}
            className="!rounded-full"
            onClick={onClickPrev}
          />
          <Button
            style="outline"
            size="m"
            leftIcon={right_arrow_svg}
            className="!rounded-full"
            onClick={onClickNext}
          />
        </div>
      </div>
      {/* Slider */}
      <Swiper
        ref={refSwipper}
        className='w-full py-4 select-none z-10 !overflow-visible'
        slidesPerView="auto"
        // slidesPerView={3.5}
        spaceBetween={25}
        modules={[FreeMode]}
        freeMode={true}
      >
        {userComments.map((comment, index) => (
          <SwiperSlide key={index} className="!w-96 flex-shrink-0 py-5 z-10">
            <ContentBox
              className="bg-white !rounded-[20px] "
              icon={<Image src={comment.icon} alt="brand logo" />}
              text={comment.text}
              author={comment.user}
              density="x-comfortable"
              textSize="l"
              shadow
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute w-[calc(100%-80px)] h-[421px] max-md:w-full max-md:left-0 left-[40px] top-[182px] max-md:top-[99px] bg-amber-200 z-[-1]">

      </div>
    </section>
  )
}

export default UserCommentsSection;