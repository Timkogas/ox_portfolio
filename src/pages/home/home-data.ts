import type { HomeData } from "@/types/home";

export const homeData: HomeData = {
  hero: {
    name: "Оксана Бакулина",
    description:
      "Продуктовый дизайнер с 3-летним опытом в B2C, B2B и E2E проектировании, продуктовых исследованиях и работе с метриками. Обладаю гибким продуктовым мышлением, связываю интерфейсные решения с бизнес-целями, создаю дизайн-системы и быстро погружаюсь в сложные контексты. Имею общий 5-летний бэкграунд в дизайне и открыта к развитию в новых tech-направлениях.",
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
      id: "profi",
      title: "Профи.ру — сервис поиска специалистов / Статистика",
      subtitle: "Растим конверсию засчёт редизайна на 10%",
      image: "/images/profi/home-card.png",
      href: "/profi",
    },
    {
      id: "stemps",
      title: "STEMPS — корпоративный университет / Конструктор курсов",
      subtitle: "Ускорение Time to Proficiency на 40% через конструктор курсов",
      image: "/images/home/projects/stemps-cover.png",
      href: "/stemps",
    },
    {
      id: "kaspersky",
      title: "Mobile Security by Kaspersky / Концепция",
      subtitle: "Kaspersky как помощник в повседневных сценариях",
      image: "/images/home/projects/kaspersky-.jpg",
      href: "/kaspersky",
    },
    {
      id: "bureau-dushi",
      title: "Бюро души — сервис психологической помощи / Веб-сайт",
      subtitle: "UX-сценарии и визуальный стиль сервиса",
      images: [
        { src: "/images/home/projects/bureau-dushi-.png", position: "center" },
      ],
      href: "/bureau-dushi",
    },
    {
      id: "other",
      title: "Другое",
      subtitle: "Коллекция концепций / визуалов / набросков",
      images: [
        { src: "/images/home/projects/drugoe.png", position: "right" },
      ],
      href: "/drugoe",
    },
  ],
};
