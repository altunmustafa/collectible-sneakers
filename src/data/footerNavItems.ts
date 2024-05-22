import { GlobeAltIcon } from "@heroicons/react/24/outline";

export interface IFooterNavItem {
  text: string,
  path: string,
  icon?: typeof GlobeAltIcon
  showIcon?: boolean
  subItems?: IFooterNavSubItem[]
}

export interface IFooterNavSubItem {
  text: string,
  icon?: typeof GlobeAltIcon
  showIcon?: boolean
  path: string,
}

const footerNavItems: IFooterNavItem[] = [
  {
    text: "Product",
    path: "#",
    icon: GlobeAltIcon,
    showIcon: true,
    subItems: [
      {
        text: "Pricing",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
      {
        text: "Overview",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
      {
        text: "Browse",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
      {
        text: "Accessibility",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
      {
        text: "Five",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      }
    ],
  },
  {
    text: "Solutions",
    path: "#",
    icon: GlobeAltIcon,
    showIcon: false,
    subItems: [
      {
        text: "Brainstorming",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
      {
        text: "Ideation",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
      {
        text: "Wireframing",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
      {
        text: "Research",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
      {
        text: "Design",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
    ],
  },
  {
    text: "Support",
    path: "#",
    icon: GlobeAltIcon,
    showIcon: false,
    subItems: [
      {
        text: "Contact Us",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
      {
        text: "Developers",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
      {
        text: "Documentation",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
      {
        text: "Integrations",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
      {
        text: "Reports",
        path: "#",
        icon: GlobeAltIcon,
        showIcon: false,
      },
    ],
  },
];

export default footerNavItems;