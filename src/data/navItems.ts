export interface INavItem {
  text: string,
  isBorder?: boolean
}

const navItems: INavItem[] = [
  {
    text: "Products",
    isBorder: false,
  },
  {
    text: "Solutions",
    isBorder: false,
  },
  {
    text: "Pricing",
    isBorder: false,
  },
  {
    text: "Resources",
    isBorder: false,
  },
  {
    text: "Log In",
    isBorder: false,
  },
  {
    text: "Sign up now",
    isBorder: true,
  },
];

export default navItems;