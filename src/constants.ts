import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconInstagram from "@/assets/icons/IconInstagram.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";

import IconPinterest from "@/assets/icons/IconPinterest.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import { translateFor } from "@/i18n/utils";
import type { Props } from "astro";

type Translator = ReturnType<typeof translateFor>;

interface Social {
  name: string;
  href: string;
  linkTitle: (t: Translator) => string;
  icon: (_props: Props) => Element;
}

interface ShareParams {
  url: string;
  title?: string;
  description?: string;
  media?: string;
}

interface ShareSocial {
  name: string;
  href: (params: ShareParams) => string;
  linkTitle: (t: Translator) => string;
  icon: (_props: Props) => Element;
}

/**
 * Configuração de Redes Sociais do Perfil (Rodapé e Página Sobre)
 */
export const SOCIALS: Social[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/teoriadapermissao.oficial/",
    linkTitle: (t: Translator) => t("socials.instagram"),
    icon: IconInstagram,
  },
  {
    name: "X",
    href: "https://x.com/francildoalves",
    linkTitle: (t: Translator) => t("socials.x"),
    icon: IconBrandX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/francildoalves/",
    linkTitle: (t: Translator) => t("socials.linkedin"),
    icon: IconLinkedin,
  },
] as const;

/**
 * Configuração de Compartilhamento (Final dos Artigos)
 */
export const SHARE_LINKS: ShareSocial[] = [
  {
    name: "LinkedIn",
    href: ({ url }) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    linkTitle: (t: Translator) => t("sharePost.on", { media: "LinkedIn" }),
    icon: IconLinkedin,
  },
  {
    name: "WhatsApp",
    href: ({ url, title }) =>
      `https://wa.me/?text=${encodeURIComponent(`${title ? title + " - " : ""}${url}`)}`,
    linkTitle: (t: Translator) => t("sharePost.via", { media: "WhatsApp" }),
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: ({ url }) =>
      `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`,
    linkTitle: (t: Translator) => t("sharePost.on", { media: "Facebook" }),
    icon: IconFacebook,
  },
  {
    name: "X",
    href: ({ url, title }) =>
      `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || "")}`,
    linkTitle: (t: Translator) => t("sharePost.on", { media: "X" }),
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: ({ url, title }) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || "")}`,
    linkTitle: (t: Translator) => t("sharePost.via", { media: "Telegram" }),
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: ({ url, description, media }) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}${media ? `&media=${encodeURIComponent(media)}` : ""}${description ? `&description=${encodeURIComponent(description)}` : ""}`,
    linkTitle: (t: Translator) => t("sharePost.on", { media: "Pinterest" }),
    icon: IconPinterest,
  },
] as const;
