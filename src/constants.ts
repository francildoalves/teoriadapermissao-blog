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

/**
 * Configuração de Redes Sociais do Perfil (Rodapé e Página Sobre)
 * Edite abaixo para adicionar/remover links para seus perfis pessoais/comerciais.
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
 * Edite abaixo para definir quais plataformas os leitores podem usar para compartilhar seus posts.
 */
export const SHARE_LINKS: Social[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/teoriadapermissao.oficial/",
    linkTitle: (t: Translator) => t("sharePost.via", { media: "Instagram" }),
    icon: IconInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=",
    linkTitle: (t: Translator) => t("sharePost.on", { media: "LinkedIn" }),
    icon: IconLinkedin,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: (t: Translator) => t("sharePost.via", { media: "WhatsApp" }),
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: (t: Translator) => t("sharePost.on", { media: "Facebook" }),
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: (t: Translator) => t("sharePost.on", { media: "X" }),
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: (t: Translator) => t("sharePost.via", { media: "Telegram" }),
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: (t: Translator) => t("sharePost.on", { media: "Pinterest" }),
    icon: IconPinterest,
  },
] as const;
