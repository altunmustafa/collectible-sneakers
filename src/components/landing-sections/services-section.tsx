import ContentBox from "@/components/content-box";
import tunnel from "/public/icons/tunnel.svg"
import trophy from "/public/icons/trophy.svg"
import tv from "/public/icons/tv.svg"
import Image from "next/image";

const ServicesSection: React.FC = () => {

  return (
    <section className="flex flex-col justify-center align-items-center gap-20 p-20 w-full text-slate-900 max-md:bg-amber-100">
      {/* <SectionText headline2="Expanding Services" className="max-md:hidden"></SectionText> */}
      {/* Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 w-full">
        {/* Group */}
        <div className="relative flex flex-col gap-[10px] w-full h-fit">
          <ContentBox
            icon={<Image src={trophy} alt="trophy" />}
            // category="Category"
            title="Nibh viverra"
            text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
          />
          <svg className="absolute left-[44px] top-[0.43px] rotate-[-45deg] max-md:left-[50%]" width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M0.426392 10.5718C0.426392 1.66277 11.1978 -2.7989 17.4975 3.50075L43.3553 29.3586C49.655 35.6583 45.1933 46.4297 36.2843 46.4297H10.4264C4.90354 46.4297 0.426392 41.9525 0.426392 36.4297L0.426392 10.5718Z" fill="#0369A1" />
          </svg>


          {/* <Image src={rectangle25_svg} alt="rectangle25_svg" className="absolute left-[0px] top-[0.43px] rotate-[0deg]" /> */}
        </div>
        {/* Group */}
        <div className="relative flex flex-col gap-[10px] w-full h-fit">
          <ContentBox
            icon={<Image src={tunnel} alt="trophy" />}
            // category="Category"
            title="Cursus amet"
            text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
          />
          <svg className="absolute left-[40.67px] top-[15px] max-md:left-[50%]" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M21.9283 3.07106C28.228 -3.22859 38.9994 1.23309 38.9994 10.1421V29C38.9994 34.5229 34.5222 39 28.9994 39H10.1415C1.23244 39 -3.22922 28.2286 3.07043 21.9289L21.9283 3.07106Z" fill="#15803D" />
          </svg>

        </div>
        {/* Group */}
        <div className="relative flex flex-col gap-[10px] w-full h-fit">
          <ContentBox
            icon={<Image src={tv} alt="trophy" />}
            // category="Category"
            title="Ipsum fermentum"
            text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
          />
          <svg className="absolute left-[59px] top-[15px] max-md:left-[50%]" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.5" x="0.000671387" width="45" height="45" rx="20" fill="#A21CAF" />
          </svg>

        </div>

      </div>
    </section>
  )
}

export default ServicesSection;