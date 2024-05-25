import Screen from "@/components/screen";
import SectionText from "@/components/section-text";
import List from "@/components/list";
import Button from "@/components/button";
import video_png from "/public/images/video.png"
import decor_video_svg from "/public/vectors/decor-video.svg"
import decor_video1_svg from "/public/vectors/decor-video-1.svg"
import Image from "next/image";

interface IJoinUsSectionProps {

}

const JoinUsSection: React.FC<IJoinUsSectionProps> = () => {

  return (
    <section className="flex flex-col max-md:items-center px-4 pt-4 pb-14 gap-0 md:px-20 md:py-40 md:gap-20 w-full">
      {/* Container */}
      <div className="flex items-center justify-between z-[-2] max-lg:flex-col gap-8 md:gap-20 px-4 py-8 md:p-20 rounded-[30px] overflow-hidden bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_0_10px_0_rgba(0,0,0,0.07)]">
        {/* Col */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <SectionText headline2="Why join us" />
          <List listItems={[
            {
              text: "Est et in pharetra magna adipiscing ornare aliquam.",
              size: "m",
              icon: true,
            },
            {
              text: "Tellus arcu sed consequat ac velit ut eu blandit.",
              size: "m",
              icon: true,
            },
            {
              text: "Ullamcorper ornare in et egestas dolor orci.",
              size: "m",
              icon: true,
            }
          ]}
          />
          <Button style="outline" text="Sign up now" size="l" />
        </div>
        {/* Screen/Desktop */}
        <div className="relative">
          <Screen image={video_png}
            size="m"
          />
          <Image className="absolute bottom-[-20%] right-[-10%] z-[-1]"
            src={decor_video_svg}
            alt="decor-video"
          />
        </div>
      </div>
    </section>
  )
}

export default JoinUsSection;