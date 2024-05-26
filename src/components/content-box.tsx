import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Button from "@/components/button";
import { ComponentProps } from "react";
import UserCard from "@/components/user-card";

interface IAuthor {
  name: string
  role?: string
  avatar?: StaticImport | string
}

interface IContentBoxProps {
  density?: "compact" | "normal" | "comfortable" | "x-comfortable"
  image?: React.ReactNode
  // imageBadge?: string
  // imageThumb?: string | StaticImport
  icon?: React.ReactNode
  category?: string
  title?: string
  // TODO: Add Badge component
  titleBadge?: string
  titleIcon?: React.ReactNode
  imageUnderTitle?: React.ReactNode
  text?: string
  author?: IAuthor
  buttons?: ComponentProps<typeof Button>[]
  border?: boolean
  shadow?: boolean
  textSize?: "s" | "m" | "l"
  colors?: { theme?: string, primary?: string, secondary?: string }
  className?: string
}

const ContentBox: React.FC<IContentBoxProps> = ({ density = "normal", image, icon, category, title, titleBadge, titleIcon, imageUnderTitle, text, author, buttons, border, shadow, textSize = "m", colors = { theme: "light" }, className = "" }) => {
  let contentClassName = "";
  let textClassName = "";

  if (density == "compact") {
    contentClassName += " p-0";
  } else if (density == "normal") {
    contentClassName += " px-4 pt-4";
  } else if (density == "comfortable") {
    contentClassName += " px-8 pt-8";
  } else if (density == "x-comfortable") {
    contentClassName += " p-8";
  }

  if (textSize == "s") {
    textClassName += " text-md";
  } else if (textSize == "m") {
    textClassName += " text-lg";
  } else if (textSize == "l") {
    textClassName += " text-2xl";
  }

  let tailwindShadow = "";
  let tailwindBg = "";
  if (colors?.theme) {
    switch (colors.theme) {
      case "light":
        tailwindShadow = "shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),_0_0_6px_0_rgba(0,0,0,0.07)]";
        break;
      case "dark":
        tailwindShadow = "shadow-[0_25px_50px_-12px_rgba(255,255,255,0.25),_0_0_15px_0_rgba(255,255,255,0.07)]";
        tailwindBg = "bg-slate-900";
        break;
    }
  }

  return (
    <div className={`flex flex-col items-center overflow-hidden w-full h-fit rounded-[10px] text-center md:text-left ${shadow ? tailwindShadow : ""} ${border ? "border border-slate-900" : ""} ${tailwindBg} ${className}`}>
      {/* Image */}
      {image}
      {/* Content */}
      <div className={`flex flex-col gap-4 w-full ${contentClassName}`}>
        {/* Icon */}
        {icon &&
          <div className="flex justify-center md:justify-start w-full h-fit">
            {icon}
          </div>
        }
        {/* Title + Category */}
        <div className="flex flex-col gap-1 w-full h-fit">
          {category &&
            <div className="font-bold text-base">
              {category}
            </div>
          }
          {/* Title Container */}
          <div className="flex items-center gap-2">
            {title &&
              <div className="font-bold text-xl w-full h-fit">
                {title}
              </div>
            }
            {titleBadge &&
              <div>
                {titleBadge}
              </div>
            }
            {titleIcon &&
              <div>
                {titleIcon}
              </div>
            }
          </div>
          {imageUnderTitle &&
            <div className="w-full h-[220px]">
              {imageUnderTitle}
            </div>
          }
          {text &&
            <div className={`${textClassName} leading-[160%]`}>
              {text}
            </div>
          }
          {author &&
            <UserCard
              name={author.name}
              role={author.role}
              avatar={author.avatar ? <Image src={author.avatar} alt={author.name} /> : undefined}
              size="m"
              layout="horizontal"
            />
          }
        </div>
      </div>
      {/* Buttons Group*/}
      {buttons &&
        <div className="flex justify-center w-full gap-4 p-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button} className="w-full" />
          ))}
        </div>
      }
    </div>
  )
}

export default ContentBox;