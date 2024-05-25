import Button from "@/components/button";
import SectionText from "@/components/section-text";
import ContentBox from "@/components/content-box";
import ShoppingCartSvg from "@/assets/vectors/shopping-cart-svg";
import Image from "next/image";

import products from "@/data/products";

interface IProductsSectionProps {
}

const ProductsSection: React.FC<IProductsSectionProps> = () => {

  return (
    <section className="flex flex-col justify-center gap-8 md:gap-20 px-4 py-12 md:p-20 w-full bg-slate-900 text-white">
      {/* Row */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 w-full">
        <SectionText colorTheme="dark" headline2="The best of the best" />
        <Button parentTheme="dark" text="Sign up now" size="xl" />
      </div>
      {/* Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 p-0 w-full" >
        {products.map((product, index) => (
          <ContentBox
            key={index}
            density="comfortable"
            image={<Image src={product.image} alt="product image" />}
            title={product.title}
            text={product.text}
            buttons={[{ parentTheme: "dark", text: "Buy Now", style: "outline", size: "l", icon: <ShoppingCartSvg />, iconPosition: "left" }]}
            border
            shadow
            colors={{ theme: "dark" }}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductsSection;