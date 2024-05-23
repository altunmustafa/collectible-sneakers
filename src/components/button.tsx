import Image from "next/image"

interface IButtonProps {
  parentTheme?: "light" | "dark"
  style?: "filled" | "outline" | "disabled" | "link" | "danger"
  size?: "s" | "m" | "l" | "xl"
  text?: string
  icon?: string
  iconPosition?: "left" | "right"
  className?: string
}

const Button: React.FC<IButtonProps> = ({ parentTheme = "light", style = "outline", size = "m", text, icon, iconPosition = "left", className = "" }) => {
  var buttonClassName = "";
  var textClassName = "";

  if (style == "filled") {
    buttonClassName += " bg-amber-900 border-2 border-amber-900";
    textClassName += " text-white";
  } else if (style == "outline") {
    buttonClassName += ` border-2 ${parentTheme == "light" ? "border-amber-900" : "white"}`;
    textClassName += ` ${parentTheme == "light" ? "text-amber-900" : "white"}`;
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
    <button className={`flex justify-center w-fit h-fit text-base rounded-lg ${buttonClassName} ${className}`}>
      <div className="flex px-4 gap-2">
        {icon &&
          <Image src={icon} alt="icon" />
        }
        {text &&
          <div className={`tracking-[0.5px] leading-[24px] whitespace-nowrap ${textClassName}`}>
            {text}
          </div>
        }
      </div>
    </button>
  )
}

export default Button;