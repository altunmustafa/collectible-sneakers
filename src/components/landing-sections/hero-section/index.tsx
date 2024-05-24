import Image from "next/image";
import SectionText from "../section-text";
import pexelsPhotoByRayPiedra from "/public/images/pexelsPhotoByRayPiedra.png"
import PlayCircleSvg from "@/assets/vectors/play-circle-svg";

const HeroSection: React.FC = () => {

  return (
    <section className="flex justify-center align-items-center gap-20 p-20 w-full">
      {/* Col */}
      <div className="flex flex-col gap-12">
        <SectionText
          aligment="left"
          caption="CAPTION"
          headline1="Collectible Sneakers"
          headline2="Headline Two"
          text="Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet."
          buttons={[
            { text: "Sign up now", style: "outline", size: "m" },
            { text: "Watch Demo", style: "link", size: "m", icon: < PlayCircleSvg /> },
          ]}
        />
      </div>

      {/* Col */}
      <div className="flex flex-col gap-12">
        <Image
          src={pexelsPhotoByRayPiedra}
          alt="Pexels Photo by Ray Piedra"
          className="grow aspect-[1.15] max-md:mt-10 max-md:max-w-full w-[361px] h-[288px] md:w-[486px] md:h-[348px] "
        />
      </div>
    </section>
  )
}

export default HeroSection;