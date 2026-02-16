import type { HomeData } from "@/types/home";

export const homeData: HomeData = {
  hero: {
    name: "Оксана Бакулина",
    description:
      "Продуктовый дизайнер с опытом 2+ года: работала в EdTech и\u00A0e\u2011commerce. Специализируюсь на сложных интерфейсах и веду задачи от исследования и формулировки проблемы до UI и релиза вместе\nс командой. Бэкграунд — 5+ лет в коммуникационном дизайне.",
    imageUrl: "/images/home/hero/photo.jpg",
  },
  links: [
    { label: "Резюме", href: "/Резюме_Бакулина_Оксана.pdf#zoom=50" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/oxana-bakulina" },
    { label: "Telegram", href: "https://t.me/oxanasvrv" },
    { label: "E-mail", href: "mailto:oxanasuvorova99@yandex.ru" },
  ],
  projects: [
    {
      id: "stemps",
      title: "STEMPS — корпоративный университет",
      images: [
        { src: "/images/home/projects/stemps-.png", position: "center" },
      ],
      href: "/stemps",
    },
    {
      id: "bureau-dushi",
      title: "Бюро души — сервис психологической помощи",
      images: [
        { src: "/images/home/projects/bureau-dushi-.png", position: "center" },
      ],
      href: "/bureau-dushi",
    },
    {
      id: "kaspersky",
      title: "Mobile Security by Kaspersky / Дипломная работа",
      image: "/images/home/projects/kaspersky-.jpg",
      href: "/kaspersky",
    },
    {
      id: "other",
      title: "Другое",
      images: [
        { src: "/images/home/projects/drugoe.png", position: "right" },
      ],
      href: "/drugoe",
    },
  ],
};
