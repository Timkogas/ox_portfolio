import type { ReactNode } from "react";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { profiData } from "./profi-data";

/** Full-bleed composite section image. The image stays centred at 1440 while the
 *  section background bleeds to the viewport edges (case dark sections). */
function SectionImage({
  src,
  alt,
  bgClass = "bg-profi-dark-bg",
}: {
  src: string;
  alt: string;
  bgClass?: string;
}) {
  return (
    <section className={`w-full ${bgClass}`}>
      <div className="w-full max-w-[1440px] mx-auto">
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto" />
      </div>
    </section>
  );
}

/** Centred content column (columns 2–3 of the 4-col grid), padded top/bottom. */
function Content({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[24px]">
      <div className="grid grid-cols-4 gap-x-[12px] max-lg:grid-cols-1">
        <div
          className={`col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <p className="font-medium text-[14px] text-profi-muted-text leading-[1.2] tracking-[-0.14px]">
      {children}
    </p>
  );
}

export default function ProfiPage() {
  const {
    projectInfo,
    context,
    task,
    results,
    resultTeaser,
    process,
    oldInterface,
    solution,
    iteration1,
    video,
    secondIteration,
    iteration2,
    conclusion,
    blob,
  } = profiData;

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <PageHeader
        title="Профи.ру | Оксана Бакулина"
        description="Кейс Профи.ру — переработка раздела статистики для исполнителей маркетплейса услуг."
        breadcrumbs={[{ label: "Главная", to: "/" }, { label: "Профи.ру" }]}
      />

      {/* Hero — red band with wordmark + decorative circles */}
      <section className="w-full bg-profi-hero">
        <div className="w-full max-w-[1440px] mx-auto">
          <img
            src="/images/profi/hero.png"
            alt="Профи.ру"
            className="w-full h-auto max-lg:h-[140px] max-lg:object-cover max-lg:object-left"
          />
        </div>
      </section>

      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        {/* Project info grid */}
        <section className="grid grid-cols-4 gap-x-[12px] h-[58px] items-center max-lg:grid-cols-2 max-lg:h-auto max-lg:gap-[16px] max-lg:pt-[24px]">
          {[
            { label: "Бренд", value: projectInfo.brand },
            { label: "Роль", value: projectInfo.role },
            { label: "Сфера", value: projectInfo.sphere },
            { label: "Год", value: projectInfo.year },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[14px] text-neutral-900 font-medium leading-[1.2] tracking-[-0.14px]">
                {item.label}: <br />
                {item.value}
              </p>
            </div>
          ))}
        </section>

        {/* Intro — Контекст / Задача / Результаты */}
        <div className="grid grid-cols-4 gap-x-[12px] py-[64px] max-lg:py-[40px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[64px] max-lg:gap-[40px]">
            <section className="flex flex-col gap-[16px]">
              <SectionTitle>{context.title}</SectionTitle>
              <p className="text-size-m text-neutral-900">{context.text}</p>
            </section>

            <section className="flex flex-col gap-[16px]">
              <SectionTitle>{task.title}</SectionTitle>
              <p className="text-size-m text-neutral-900">{task.text}</p>
            </section>

            <section className="flex flex-col gap-[16px]">
              <SectionTitle>{results.title}</SectionTitle>
              <ul className="list-disc ml-[20px] space-y-[8px]">
                {results.items.map((item, i) => (
                  <li key={i} className="text-size-m text-neutral-900">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Result teaser — new interface composite */}
      <SectionImage src={resultTeaser} alt="Результат обновлённого интерфейса раздела «Статистика»" />

      {/* Процесс — intro */}
      <div className="pt-[64px] max-lg:pt-[40px]">
        <Content className="flex flex-col gap-[16px]">
          <SectionTitle>{process.title}</SectionTitle>
          <p className="text-size-m text-neutral-900">{process.intro}</p>
        </Content>
      </div>

      {/* Specialist quotes — draggable full-bleed carousel */}
      <Carousel
        opts={{ align: "start", dragFree: true }}
        className="w-full py-[40px]"
      >
        <CarouselContent className="ml-0 pl-[calc((100vw-min(100vw,1440px))/2+12px)] pr-[24px]">
          {process.comments.map((quote, i) => (
            <CarouselItem
              key={i}
              className="pl-[12px] basis-[339px] max-lg:basis-[280px]"
            >
              <div className="h-[200px] bg-profi-card-bg rounded-[10px] p-[24px] flex flex-col justify-between select-none">
                <p className="text-[14px] text-neutral-900 leading-[1.3]">
                  {quote}
                </p>
                <span className="text-[12px] text-profi-muted-text">
                  Отзыв специалиста
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Процесс — outro */}
      <div className="pb-[64px] max-lg:pb-[40px]">
        <Content>
          <p className="text-size-m text-neutral-900">{process.outro}</p>
        </Content>
      </div>

      {/* Old interface — composite with annotations */}
      <section className="w-full bg-profi-dark-bg">
        {/* Desktop: full composite */}
        <div className="w-full max-w-[1440px] mx-auto max-lg:hidden">
          <img
            src={oldInterface.image}
            alt="Старый интерфейс раздела «Статистика»"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>

        {/* Mobile: clean phone with numbered markers + numbered list */}
        <div className="hidden max-lg:flex flex-col items-center gap-[32px] px-[24px] py-[40px]">
          <p className="text-[14px] font-medium text-white/90 text-center">
            Старый интерфейс раздела «Статистика»
          </p>
          <div className="relative w-[260px] max-w-full">
            <img
              src={oldInterface.phone}
              alt="Раздел «Моя статистика»"
              loading="lazy"
              className="w-full h-auto"
            />
            {oldInterface.notes.map((note, i) => (
              <span
                key={i}
                className="absolute flex items-center justify-center size-[22px] rounded-full bg-profi-accent text-white text-[12px] font-medium leading-none -translate-x-1/2 -translate-y-1/2 ring-2 ring-profi-dark-bg"
                style={{ left: `${note.x}%`, top: `${note.y}%` }}
              >
                {i + 1}
              </span>
            ))}
          </div>
          <ol className="flex flex-col gap-[16px] w-full">
            {oldInterface.notes.map((note, i) => (
              <li key={i} className="flex gap-[12px]">
                <span className="flex-none flex items-center justify-center size-[22px] rounded-full bg-profi-accent text-white text-[12px] font-medium leading-none">
                  {i + 1}
                </span>
                <p className="text-[14px] text-white/80 leading-[1.35]">
                  {note.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Решение */}
      <div className="py-[64px] max-lg:py-[40px]">
        <Content>
          <p className="text-size-m text-neutral-900">{solution}</p>
        </Content>
      </div>

      {/* First iteration — analytics dashboards */}
      <SectionImage src={iteration1} alt="Первая итерация — аналитические дашборды" />

      {/* Video / interviews */}
      <div className="py-[64px] max-lg:py-[40px]">
        <Content className="flex flex-col gap-[36px] max-lg:gap-[24px]">
          <p className="text-size-m text-neutral-900">{video.heading}</p>
          <img
            src={video.image}
            alt="Тестирование интерфейса с пользователями"
            loading="lazy"
            className="w-full h-auto rounded-[20px] max-lg:rounded-[12px]"
          />
        </Content>
      </div>

      {/* Transition to second iteration + caption on white */}
      <div className="pb-[16px] max-lg:pb-[16px]">
        <Content className="flex flex-col gap-[48px] max-lg:gap-[32px]">
          <p className="text-size-m text-neutral-900">{secondIteration}</p>
          <p className="text-[14px] text-profi-muted-text leading-[1.2] tracking-[-0.14px]">
            2 итерация. Обновлённый интерфейс. Запуск в прод
          </p>
        </Content>
      </div>

      {/* Second iteration — final interface (black band) */}
      <SectionImage src={iteration2} alt="Вторая итерация — итоговый интерфейс" />

      {/* Conclusion card + blob + footer */}
      <section className="relative w-full pt-[64px] pb-[70px] max-lg:pt-[40px] max-lg:pb-[40px] overflow-x-clip">
        {/* Strip continuation — bleeds the лапка's strip to the viewport right edge */}
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-[200px] h-[200px] w-[calc((100vw-min(100vw,1440px))/2+114px)] pointer-events-none max-lg:hidden"
          style={{ background: "linear-gradient(90deg,#E0E6FF,#EEF1FF)" }}
        />
        {/* Decorative лапка — paw overlaps the card's right edge, strip bleeds right */}
        <img
          src={blob}
          alt=""
          role="presentation"
          loading="lazy"
          className="absolute z-10 right-[calc((100vw-min(100vw,1440px))/2+114px)] bottom-[145px] w-[430px] h-auto pointer-events-none max-lg:hidden"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <Content className="flex flex-col gap-[48px]">
          <section className="relative bg-profi-card-bg rounded-[10px] p-[24px] pr-[190px] max-lg:pr-[24px] flex flex-col gap-[24px]">
            <p className="text-size-m text-neutral-900">{conclusion.text}</p>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[14px] font-medium text-profi-muted-text leading-[1.2]">
                {conclusion.nextStepsTitle}
              </p>
              <ul className="list-disc ml-[20px] space-y-1">
                {conclusion.nextSteps.map((item, i) => (
                  <li
                    key={i}
                    className="text-[14px] text-neutral-900 leading-[1.3]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Footer />
        </Content>
      </section>
    </div>
  );
}
