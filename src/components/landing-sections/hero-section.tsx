import Image from "next/image";
import SectionText from "@/components/section-text";
import pexelsPhotoByRayPiedra from "/public/images/pexelsPhotoByRayPiedra.png"
import play_circle_svg from "/public/vectors/play-circle.svg"

const HeroSection: React.FC = () => {

  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 lg:gap-20 px-4 py-12 md:p-20 w-full overflow-hidden">
      {/* Col 1 */}
      <div className="flex flex-col gap-12">
        <SectionText
          aligment="left"
          headline1="Collectible Sneakers"
          text="Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet."
          buttons={[
            { text: "Sign up now", style: "outline", size: "m" },
            { text: "Watch Demo", style: "link", size: "m", leftIcon: play_circle_svg },
          ]}
        />
      </div>

      {/* Col 2 */}
      <div className="relative w-[361px] h-[314.2px] md:w-[423px] md:h-[368px] lg:w-[486px] lg:h-[423px] shrink-0">
        <Image
          src={pexelsPhotoByRayPiedra}
          alt="Pexels Photo by Ray Piedra"
          className="absolute z-10 w-[361px] h-[288.21px] md:w-[423px] md:h-[338px] lg:w-[486px] lg:h-[388px] object-contain object-left-top top-0 left-0"
        />
        <div className="absolute w-[272.61px] h-[276.32px] md:w-[319px] md:h-[324px] lg:w-[367px] lg:h-[372px] bg-amber-400 rounded-[50px] object-left-bottom bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <svg className="md:hidden absolute left-0 bottom-0 z-[-1] w-full h-[350px] fill-amber-100" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,5 2,100 100,100" />
      </svg>
    </section>
  )
}

export default HeroSection;