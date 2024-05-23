import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

interface IButtonOfSectionTextProps {
  style?: "filled" | "outline" | "disabled" | "link" | "danger"
  size?: "s" | "m" | "l" | "xl"
  text?: string
  icon?: string | StaticImport
  iconPosition?: "left" | "right"
}

/* button of section text */
const ButtonOfSectionText: React.FC<IButtonOfSectionTextProps> = ({ style = "outline", size = "m", text, icon, iconPosition = "left" }) => {
  var buttonClassName = "";
  var textClassName = "";

  if (style == "filled") {
    buttonClassName += " bg-amber-900 border-2 border-amber-900";
    textClassName += " text-white";
  } else if (style == "outline") {
    buttonClassName += " border-2 border-amber-900";
  } else if (style == "disabled") {
    buttonClassName += " bg-slate-300 border-2 border-slate-300";
    textClassName += " text-white";
  } else if (style == "link") {
    buttonClassName += "";
    textClassName += " text-amber-900";
  } else if (style == "danger") {
    buttonClassName += " bg-red-600 border-2 border-red-600";
    textClassName += " text-white";
  }

  if (size == "s") {
    buttonClassName += " px-3 py-2";
    textClassName += " text-sm";
  } else if (size == "m") {
    buttonClassName += " px-3 py-3";
    textClassName += " text-base";
  } else if (size == "l") {
    buttonClassName += " px-3 py-3";
    textClassName += " text-xl";
  } else if (size == "xl") {
    buttonClassName += " px-6 py-5";
    textClassName += " text-2xl";
  }


  return (
    <button className={`flex w-fit h-fit text-base rounded-lg ${buttonClassName}`}>
      <div className="flex px-4 gap-2">
        {icon &&
          <Image src={icon} alt="icon" />
        }
        {text &&
          <div className={` ${textClassName}`}>
            {text}
          </div>
        }
      </div>
    </button>
  )
}

interface ISectionTextProps {
  colorTheme?: "light" | "dark"
  aligment?: "left" | "right" | "center"
  caption?: string
  headline1?: string
  headline2?: string
  text?: string
  buttons?: IButtonOfSectionTextProps[]
  className?: string
}

const SectionText: React.FC<ISectionTextProps> = ({ colorTheme = "light", aligment = "left", caption, headline1, headline2, text, buttons, className = "", }) => {
  const primaryColor = colorTheme == "light" ? "text-slate-900" : "text-white";
  const secondaryColor = colorTheme == "light" ? "text-slate-600" : "text-white";

  return (
    <div className={`flex flex-col gap-8 w-full ${className}`}>
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
            <ButtonOfSectionText
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