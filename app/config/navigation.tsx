import { FaHome } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaCircleDot } from "react-icons/fa6";

type NavLink = {
  kind: "link";
  label: string;
  href: string;
  icon: React.ReactNode;
};

export type NavGroup = {
  kind: "group";
  id: string;
  label: string;
  icon: React.ReactNode;
  items: NavLink[];
};

type NavItem = NavLink | NavGroup;

export const navigation: NavItem[] = [
  { kind: "link", label: "Home", href: "/", icon: <FaHome /> },

  {
    kind: "group",
    id: "loaders",
    label: "Loaders",
    icon: <FiLoader />,
    items: [
      {
        kind: "link",
        label: "Gradient Light Preloader",
        href: "/loaders/gradientLightPreloader",
        icon: <FaCircleDot />,
      },
      { kind: "link", label: "CSS Loader", href: "/loaders/cssLoader", icon: <FaCircleDot /> },
    ],
  },

  {
    kind: "group",
    id: "ui",
    label: "UI",
    icon: <AiOutlineAntDesign />,
    items: [
      { kind: "link", label: "Animated 404 Page", href: "/ui/animated404page", icon: <FaCircleDot /> },
      { kind: "link", label: "Social Media Hover Effect", href: "/ui/socialMediaHoverEffect", icon: <FaCircleDot /> },
      { kind: "link", label: "Login and Register", href: "/ui/loginAndRegister", icon: <FaCircleDot /> },
      { kind: "link", label: "Lavalamp CSS Menu", href: "/ui/lavalampCssMenu", icon: <FaCircleDot /> },
      { kind: "link", label: "Fun 404 Page", href: "/ui/fun404page", icon: <FaCircleDot /> },
      { kind: "link", label: "Animated Input", href: "/ui/animatedInput", icon: <FaCircleDot /> },
      { kind: "link", label: "Drawer Menu", href: "/ui/drawerMenu", icon: <FaCircleDot /> },
      { kind: "link", label: "Search Button Animation", href: "/ui/searchButtonAnimation", icon: <FaCircleDot /> },
      { kind: "link", label: "Tab Icon Animations", href: "/ui/tabIconAnimations", icon: <FaCircleDot /> },
      { kind: "link", label: "Login / Sign Up", href: "/ui/loginSignup", icon: <FaCircleDot /> },
      { kind: "link", label: "Retro Button", href: "/ui/retroButton", icon: <FaCircleDot /> },
    ],
  },
];