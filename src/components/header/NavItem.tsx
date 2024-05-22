import { INavItem } from "@/data/navItems";

interface INavItemProps {
  navItem: INavItem
}

const NavItem: React.FC<INavItemProps> = ({ navItem }) => {
  const { text, isBorder = false } = navItem;

  return <a className={`block px-2 py-3 whitespace-nowrap text-base font-medium tracking-wide ${isBorder ? "border-2 border-amber-900" : ""} rounded-lg`} href="#">{text}</a>;
};

export default NavItem;