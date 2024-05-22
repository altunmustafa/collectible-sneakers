import { IFooterNavItem, IFooterNavSubItem } from "@/data/footerNavItems";

interface IFooterLinkProps {
  // item: IFooterNavItem | IFooterNavSubItem
  text: string
  path: string,
  isBold?: boolean
  Icon?: React.ComponentType<React.ComponentProps<'svg'>>;
  showIcon?: boolean
  className?: string
}

const FooterLink: React.FC<IFooterLinkProps> = ({ text, path, isBold = false, Icon, showIcon = false, className }) => {
  // const Icon = item.icon;

  return (
    <div className={`flex items-center gap-2 py-3 ${className}`}>
      {Icon && showIcon && <Icon className="w-6 h-6" />}
      <button className={`justify-center ${isBold ? "font-bold" : ""}`}>
        {text}
      </button>
    </div>

  )
}

export default FooterLink;