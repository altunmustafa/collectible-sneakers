import SectionText from "../section-text";
import ContentBox from "./content-box";
import tunnel from "/public/icons/tunnel.svg"
import trophy from "/public/icons/trophy.svg"
import tv from "/public/icons/tv.svg"
import Image from "next/image";

const ServicesSection: React.FC = () => {

  return (
    <section className="flex flex-col justify-center align-items-center gap-20 p-20 w-full text-slate-900">
      <SectionText headline2="Expanding Services" className="max-md:hidden"></SectionText>
      {/* Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 w-full">
        {/* Group */}
        <div className="flex flex-col gap-[10px] w-full h-fit">
          <ContentBox
            icon={<Image src={trophy} alt="trophy" />}
            // category="Category"
            title="Nibh viverra"
            text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
          />
        </div>
        {/* Group */}
        <div className="flex flex-col gap-[10px] w-full h-fit">
          <ContentBox
            icon={<Image src={tunnel} alt="trophy" />}
            // category="Category"
            title="Cursus amet"
            text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
          />
        </div>
        {/* Group */}
        <div className="flex flex-col gap-[10px] w-full h-fit">
          <ContentBox
            icon={<Image src={tv} alt="trophy" />}
            // category="Category"
            title="Ipsum fermentum"
            text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
          />
        </div>

      </div>
    </section>
  )
}

export default ServicesSection;