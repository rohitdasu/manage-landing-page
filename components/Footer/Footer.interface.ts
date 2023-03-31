export interface FooterProps {
  socials: Social[];
  navigations: Navigation[];
  otherNavigations: Navigation[];
}

export type Social = {
  id: string;
  title: string;
  icon: string;
};

export type Navigation = {
  id: string;
  name: string;
  url: string;
};

export interface SocialProps {
  socials: Social[];
}

export interface NavigationProps {
  navigations: Navigation[];
}
