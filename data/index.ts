import { Feature } from "@/components/FeatureComponent/FeatureComponent.interface";
import { Navigation, Social } from "@/components/Footer/Footer.interface";
import { NavItem } from "@/components/Navbar/Navbar.interface";
import { Review } from "@/components/ReviewsComponent/ReviewsComponent.interface";

export const navItems: NavItem[] = [
  {
    id: "1",
    name: "Pricing",
    link: "#pricing",
  },
  {
    id: "2",
    name: "Product",
    link: "#product",
  },
  {
    id: "3",
    name: "About Us",
    link: "#about-us",
  },
  {
    id: "4",
    name: "Careers",
    link: "#careers",
  },
  {
    id: "5",
    name: "Community",
    link: "#community",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to  the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: "2",
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: "3",
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers on all-in-one team productivity solutions.",
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Anisha Li",
    image: "/avatar-anisha.png",
    review:
      "Manage has supercharged our team's workflow. The maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    id: "2",
    name: "Ali Bravo",
    image: "/avatar-ali.png",
    review:
      "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    id: "3",
    name: "Richard Watts",
    image: "/avatar-richard.png",
    review:
      "Manage allows us to provide structure and process keeps us organized and focused. I can't stop reconnect them to everyone I talk to!",
  },
  {
    id: "4",
    name: "Shanai",
    image: "/avatar-shanai.png",
    review:
      "Manage allows us to provide structure and process keeps us organized and focused. I can't stop reconnect them to everyone I talk to!",
  },
];

export const socials: Social[] = [
  {
    id: "1",
    icon: "/icon-facebook.svg",
    title: "Facebook",
  },
  {
    id: "2",
    icon: "/icon-twitter.svg",
    title: "Twitter",
  },
  {
    id: "3",
    icon: "/icon-pinterest.svg",
    title: "Pinterest",
  },
  {
    id: "4",
    icon: "/icon-youtube.svg",
    title: "YouTube",
  },
  {
    id: "5",
    icon: "/icon-instagram.svg",
    title: "Instagram",
  },
];

export const navigations: Navigation[] = [
  {
    id: "1",
    name: "Home",
    url: "#",
  },
  {
    id: "2",
    name: "Pricing",
    url: "#",
  },
  {
    id: "3",
    name: "Products",
    url: "#",
  },
  {
    id: "4",
    name: "About Us",
    url: "#",
  },
];

export const otherNavigations: Navigation[] = [
  {
    id: "1",
    name: "Careers",
    url: "#",
  },
  {
    id: "2",
    name: "Community",
    url: "#",
  },
  {
    id: "3",
    name: "Privacy Policy",
    url: "#",
  },
];
