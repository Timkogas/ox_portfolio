import type { DrugoeData } from "@/types/drugoe";
import { typo } from "@/lib/typography";

export const drugoeData: DrugoeData = typo({
  projects: [
    {
      title: "Проект «Портал для развития карьеры дизайнера»",
      titleMuted: "Учебное",
      videoId: "sTDSmHw29QX1HoHKCq6xbX",
    },
    {
      title: "Проект «Формирование продуктовой корзины»",
      titleMuted: "Учебное",
      videoId: "aQAPhLLAWGSCGbqJcQNgqe",
    },
    {
      title: "Самокат. Карта вакансий",
      titleMuted: "Учебное",
      videoId: "tsAhESnG6dJMnWYmrLUEZg",
      images: [
        "/images/drugoe/samokat-1.png",
        "/images/drugoe/samokat-2.png",
      ],
    },
  ],
});
