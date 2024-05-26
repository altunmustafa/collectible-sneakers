import Button from "@/components/button";
import SectionText from "@/components/section-text";
import ContentBox from "@/components/content-box";
import Image from "next/image";
import shopping_cart_svg from "/public/vectors/shopping-cart.svg"

import products from "@/data/products";

const ProductsSection: React.FC = () => {

  const backlights = [
    {
      color: "bg-pink-700",
      size: "w-[271px] h-[271px] max-md:w-[202.09px] max-md:h-[202.09px]",
      position: "left-[-5%] top-[40%]",
    },
    {
      color: "bg-sky-700",
      size: "w-[161px] h-[161px] max-md:w-[120.06px] max-md:h-[120.06px]",
      position: "left-[31%] top-[-6%]",
    },
    {
      color: "bg-amber-700",
      size: "w-[130px] h-[130px] max-md:w-[96.95px] max-md:h-[96.95px]",
      position: "left-[53%] top-[64%]",
    },
    {
      color: "bg-fuchsia-700",
      size: "w-[202px] h-[202px] max-md:w-[150.64px] max-md:h-[150.64px]",
      position: "left-[72%] top-[64%]",
    },
    {
      color: "bg-green-900",
      size: "w-[232px] h-[232px] max-md:w-[173.01px] max-md:h-[173.01px]",
      position: "left-[80%] top-[8%]",
    }
  ]

  return (
    <section className="flex flex-col justify-center gap-8 md:gap-20 px-4 py-12 md:p-20 w-full bg-slate-900 z-[-2] text-white overflow-hidden">
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 w-full">
        <SectionText colorTheme="dark" headline2="The best of the best" />
        <Button parentTheme="dark" text="Sign up now" size="xl" />
      </div>
      {/* Row 2 */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 p-0 w-full" >
        {products.map((product, index) => (
          <ContentBox
            key={index}
            density="comfortable"
            image={<Image className="object-fill object-center w-full" src={product.image} alt="product image" />}
            title={product.title}
            text={product.text}
            buttons={[{ parentTheme: "dark", text: "Buy Now", style: "outline", size: "l", leftIcon: shopping_cart_svg }]}
            border
            shadow
            colors={{ theme: "dark" }}
            className="z-10"
          />

        ))}
        {backlights.map((backlight, index) => (
          <div
            key={index}
            className={`absolute z-[-1] rounded-[50px] opacity-80 ${backlight.color} ${backlight.size} ${backlight.position}`}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductsSection;