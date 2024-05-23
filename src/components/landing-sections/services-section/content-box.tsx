import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Button from "@/components/button";
import { ComponentProps } from "react";

interface IContentBoxProps {
  density?: "compact" | "normal" | "comfortable"
  image?: string | StaticImport
  // imageBadge?: string
  // imageThumb?: string | StaticImport
  icon?: string | StaticImport
  category?: string
  title?: string
  // TODO: Add Badge component
  titleBadge?: string
  titleIcon?: string | StaticImport
  imageUnderTitle?: string | StaticImport
  text?: string
  // author?: IAuthor
  buttons?: ComponentProps<typeof Button>[]
  border?: boolean
  shadow?: boolean
}

const ContentBox: React.FC<IContentBoxProps> = ({ density = "normal", image, icon, category, title, titleBadge, titleIcon, imageUnderTitle, text, buttons, border, shadow }) => {
  var contentClassName = "";

  if (density == "compact") {
    contentClassName += " p-0";
  } else if (density == "normal") {
    contentClassName += " px-4 pt-4";
  } else if (density == "comfortable") {
    contentClassName += " px-8 pt-8";
  }

  return (
    <div className={`flex flex-col overflow-hidden w-full h-fit rounded-[10px] ${shadow ? "shadow-2xl shadow-[rgba(255,255,255,0.25)]" : ""} ${border ? "border border-slate-900" : ""}`}>
      {/* Image */}
      {image &&
        <Image src={image} alt="image" className="w-full h-auto"/>
      }
      {/* Content */}
      <div className={`flex flex-col gap-4 w-full ${contentClassName}`}>
        {/* Icon */}
        {icon &&
          <div className="flex justify-center md:justify-start w-full h-fit">
            <Image src={icon} alt="icon" />
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
                <Image src={titleIcon} alt="title icon" width={24} height={24} />
              </div>
            }
          </div>
          {imageUnderTitle &&
            <div className="w-full h-[220px]">
              <Image src={imageUnderTitle} alt="image under title" fill />
            </div>
          }
          {text &&
            <div className="text-lg">
              {text}
            </div>
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