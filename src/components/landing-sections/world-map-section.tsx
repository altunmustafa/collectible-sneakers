import SectionText from "@/components/section-text";
import Image from "next/image";

import map_svg from "/public/vectors/map.svg";
import ellipses_svg from "/public/vectors/ellipses.svg";
import ellipse_filled_svg from "/public/vectors/ellipse-filled.svg";
import cool_shoes_png from "/public/images/cool-shoes.png";
import map_png from "/public/images/map.png";

const WordMapSection: React.FC = () => {

  return (
    <section className="relative flex flex-col justify-center items-center w-full h-[717px] gap-20 p-20 bg-amber-900 overflow-hidden">
      <Image className="absolute w-[1049px] h-[633px] left-[21px] top-[36px] md:left-[196px] md:top-[42px] object-none object-left-top"
        src={map_svg}
        alt="World Map"
      />
      <Image className="absolute w-[724px] h-[455px] left-[233px] top-[99.8px] md:left-[406px] md:top-[109px] object-none object-left-top"
        src={ellipses_svg}
        alt="ellipses"
      />
      <SectionText className="z-10"
        aligment="center"
        headline1="11,658,467"
        headline2="World Map"
        colorTheme="dark"
      />
      {/* Col */}
      <div className="absolute flex flex-col justify-center items-center w-auto h-auto gap-[-8px] left-[69px] top-[10.8px] md:left-[225px] md:top-[20px] ">
        <Image className="absolute object-none left-[112px] top-[250px]"
          src={ellipse_filled_svg}
          alt="ellipses"
          width={32}
          height={32}
        />
        {/* Tooltip - Toggletip */}
        <div className="absolute flex flex-col w-[250px] h-auto left-[3px] top-[197px] rounded-[5px] bg-slate-200 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),_0_0_15px_0_rgba(0,0,0,0.07)]">
          <div className="flex px-4 pt-4 pb-2 w-full h-auto text-slate-900">
            Emma Simpson collected one pair of Cool Shoes.
          </div>

        </div>
        <Image className="object-none z-10 left-[112px] top-[250px] rounded-[10px] border-[5px] border-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),_0_0_10px_0_rgba(0,0,0,0.07)]"
          src={cool_shoes_png}
          alt="ellipses"
          width={256}
          height={200}
        />
      </div>
    </section>
  )
}

export default WordMapSection;