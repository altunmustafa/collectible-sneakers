import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import Button from "@/components/button";
import { ComponentProps } from "react";

interface ISectionTextProps {
  colorTheme?: "light" | "dark"
  aligment?: "left" | "right" | "center"
  caption?: string
  headline1?: string
  headline2?: string
  text?: string
  buttons?: ComponentProps<typeof Button>[]
  className?: string
}

const SectionText: React.FC<ISectionTextProps> = ({ colorTheme = "light", aligment = "left", caption, headline1, headline2, text, buttons, className = "", }) => {
  const primaryColor = colorTheme == "light" ? "text-slate-900" : "text-white";
  const secondaryColor = colorTheme == "light" ? "text-slate-600" : "text-white";

  return (
    <div className={`flex flex-col gap-8 w-full ${aligment == "left" ? "text-center md:text-left" : aligment == "right" ? "text-center md:text-right" : "text-center"} ${className}`}>
      {/* Top */}
      <div className="flex flex-col gap-2 ">
        {caption &&
          <div className={`text-[12px] mg:text-[16px] lg:text[20px] font-bold tracking-widest ${secondaryColor}}`}>
            {caption}
          </div>
        }
        {headline1 &&
          <div className={`text-[56px] mg:text-[64px] lg:text[72px] font-extrabold leading-[110%] ${primaryColor}`}>
            {headline1}
          </div>
        }
        {headline2 &&
          <div className={`text-[32px] md:text-[44px] lg:text-[56px] leading-[110%] font-bold md:font-extrabold ${primaryColor}`}>
            {headline2}
          </div>
        }
      </div>
      {/* Paragraph */}
      {text &&
        <div className={`text-lg leading-[160%] ${primaryColor}`}>
          {text}
        </div>
      }
      {/* Buttons Group */}
      {buttons &&
        <div className="flex gap-4 max-md:justify-center">
          {buttons.map((button, index) => (
            <Button
              key={index}
              style={button.style}
              size={button.size}
              text={button.text}
              leftIcon={button.leftIcon}
              rightIcon={button.rightIcon}
            />
          ))}
        </div>
      }
    </div>
  )
}

export default SectionText;