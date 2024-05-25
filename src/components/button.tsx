import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

interface IButtonProps {
  parentTheme?: "light" | "dark"
  style?: "filled" | "outline" | "disabled" | "link" | "danger"
  size?: "s" | "m" | "l" | "xl"
  text?: string
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  // TODO: both left and right icon positon
  onClick?: () => void
  colors?: { primary?: string, secondary?: string }
  className?: string
}

const Button: React.FC<IButtonProps> = ({ parentTheme = "light", style = "outline", size = "m", text, icon, iconPosition = "left", onClick, colors, className = "" }) => {
  let buttonClassName = "";
  let textClassName = "";

  const primaryColor = colors?.primary ? `${colors.primary}` : parentTheme == "light" ? "amber-900" : "white";
  const secondaryColor = colors?.secondary ? `${colors.secondary}` : parentTheme == "light" ? "white" : "slate-900";

  if (style == "filled") {
    buttonClassName += ` bg-${primaryColor} border-2 border-${primaryColor} shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_0_4px_0_rgba(0,0,0,0.07)]`;
    textClassName += ` text-${secondaryColor}`;
  } else if (style == "outline") {
    buttonClassName += ` border-2 border-${primaryColor}`;
    textClassName += ` text-${primaryColor}`;
  } else if (style == "disabled") {
    buttonClassName += " bg-slate-300 border-2 border-slate-300";
    textClassName += " text-white";
  } else if (style == "link") {
    buttonClassName += "";
    textClassName += ` text-${primaryColor}`;
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
    <button
      className={`flex justify-center w-fit h-fit text-base rounded-lg ${buttonClassName} ${className}`}
      onClick={onClick}
    >
      {/* <div className="flex px-4 gap-2"> */}
      {icon}
      {
        text &&
        <div className={`tracking-[0.5px] leading-[24px] whitespace-nowrap ${textClassName}`}>
          {text}
        </div>
      }
      {/* </div> */}
    </button >
  )
}

export default Button;