import type { IconType } from "react-icons";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiYoutube,
} from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

export const EMAIL = "shokirovbotirjon2003@gmail.com";

export type SocialKey = "instagram" | "telegram" | "channel" | "youtube" | "linkedin" | "github" | "email";

export interface Social {
  key: SocialKey;
  label: string;
  handle: string;
  href: string;
  icon: IconType;
}

// The one place social links live. Hero, footer and contact all read from here.
export const socials: Record<
  "instagram" | "telegram" | "channel" | "youtube" | "linkedin" | "github" | "email",
  Social
> = {
  instagram: {
    key: "instagram",
    label: "Instagram",
    handle: "@botirjon_swe",
    href: "https://www.instagram.com/botirjon_swe/",
    icon: FiInstagram,
  },
  telegram: {
    key: "telegram",
    label: "Telegram",
    handle: "@botirjon_sh",
    href: "https://t.me/botirjon_sh",
    icon: FaTelegramPlane,
  },
  channel: {
    key: "channel",
    label: "Telegram channel",
    handle: "botirjon_log",
    href: "https://t.me/botirjon_log",
    icon: FaTelegramPlane,
  },
  youtube: {
    key: "youtube",
    label: "YouTube",
    handle: "BI Code",
    href: "https://www.youtube.com/@mrbicode",
    icon: FiYoutube,
  },
  linkedin: {
    key: "linkedin",
    label: "LinkedIn",
    handle: "botirjon-shokirov",
    href: "https://www.linkedin.com/in/botirjon-shokirov/",
    icon: FiLinkedin,
  },
  github: {
    key: "github",
    label: "GitHub",
    handle: "Botirjon777",
    href: "https://github.com/Botirjon777",
    icon: FiGithub,
  },
  email: {
    key: "email",
    label: "Email",
    handle: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FiMail,
  },
};

/** Icon row used in the hero and footer. */
export const socialRow: Social[] = [
  socials.instagram,
  socials.telegram,
  socials.youtube,
  socials.linkedin,
  socials.github,
  socials.email,
];

/** Where the content lives: shown as large cards on the home page. */
export const contentChannels = [socials.instagram, socials.youtube, socials.channel] as const;
