import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface IContentBoxProps {
  // image?: string | StaticImport
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
  // buttons?: IButton[]
}

const ContentBox: React.FC<IContentBoxProps> = ({ icon, category, title, titleBadge, titleIcon, imageUnderTitle, text }) => {

  return (
    <div className="flex flex-col w-full h-fit text-center md:text-left">
      {/* Content */}
      <div className="flex flex-col gap-4 w-full h-fit">
        {/* Icon */}
        <div className="flex justify-center md:justify-start w-full h-fit">
          {icon &&
            <Image src={icon} alt="icon" />
          }
        </div>
      </div>
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
  )
}

export default ContentBox;