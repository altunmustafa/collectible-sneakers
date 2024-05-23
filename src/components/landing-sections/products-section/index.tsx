import Button from "@/components/button";
import SectionText from "../section-text";
import ContentBox from "../services-section/content-box";
import product1 from "/public/images/product1.png"
import product2 from "/public/images/product2.png"
import product3 from "/public/images/product3.png"
import shoppingCart from "/public/icons/shopping-cart.svg"

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
        <ContentBox
          density="comfortable"
          image={product1}
          title="Title"
          text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          buttons={[{ parentTheme: "dark", text: "Buy Now", style: "outline", size: "l", icon: shoppingCart, iconPosition: "left" }]}
          border
          shadow
        />
        <ContentBox
          density="comfortable"
          image={product2}
          title="Title"
          text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          buttons={[{ parentTheme: "dark", text: "Buy Now", style: "outline", size: "l", icon: shoppingCart, iconPosition: "left" }]}
          border
          shadow
        />
        <ContentBox
          density="comfortable"
          image={product3}
          title="Title"
          text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          buttons={[{ parentTheme: "dark", text: "Buy Now", style: "outline", size: "l", icon: shoppingCart, iconPosition: "left" }]}
          border
          shadow
        />
      </div>
    </section>
  )
}

export default ProductsSection;