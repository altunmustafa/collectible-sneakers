"use client";
import { useRef } from "react";
import Button from "@/components/button";
import SectionText from "@/components/section-text";
import LeftArrowSvg from "@/assets/vectors/left-arrow-svg";
import RightArrowSvg from "@/assets/vectors/right-arrow-svg";
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
    <section className="flex flex-col w-full gap-8 md:gap-20 px-4 py-12 md:p-20 justify-center items-start ">
      {/* Row */}
      <div className="w-full md:flex md:items-center md:gap-12">
        <SectionText headline2="Because they love us" />
        {/* Arrows */}
        <div className="hidden md:flex gap-6">
          <Button
            style="outline"
            size="m"
            icon={<LeftArrowSvg />}
            className="!rounded-full"
            onClick={onClickPrev}
          />
          <Button
            style="outline"
            size="m"
            icon={<RightArrowSvg />}
            className="!rounded-full"
            onClick={onClickNext}
          />
        </div>
      </div>
      {/* Slider */}
      <div className="flex justify-center w-full gap-4 md:gap-6 overflow-x-auto">

      </div>

      <Swiper
        ref={refSwipper}
        className='w-full py-4 select-none'
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
    </section>


  )
}

export default UserCommentsSection;