export type NavItem = {
  id: string;
  name: string;
  link: string;
};

export type NavProps = {
  navItems: NavItem[];
};

export type ButtonProps = {
  onClick: () => void;
};
