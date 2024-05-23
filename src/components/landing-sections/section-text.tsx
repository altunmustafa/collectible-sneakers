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
    <div className={`flex flex-col gap-8 w-full text-center md:text-left ${className}`}>
      {/* Top */}
      <div>
        {caption &&
          <div className={`text-xl font-bold tracking-widest ${secondaryColor}}`}>
            {caption}
          </div>
        }
        {headline1 &&
          <div className={`text-7xl font-extrabold ${primaryColor}`}>
            {headline1}
          </div>
        }
        {headline2 &&
          <div className={`text-[32px] md:text-[56px] leading-[110%] font-bold md:font-extrabold ${primaryColor}`}>
            {headline2}
          </div>
        }
      </div>
      {/* Paragraph */}
      {text &&
        <div className={`text-lg ${primaryColor}`}>
          {text}
        </div>
      }
      {/* Buttons Group */}
      {buttons &&
        <div className="flex gap-4">
          {buttons.map((button) => (
            <Button
              style={button.style}
              size={button.size}
              text={button.text}
              icon={button.icon}
              iconPosition={button.iconPosition}
            />
          ))}
        </div>
      }
    </div>
  )
}

export default SectionText;