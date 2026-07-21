import type { ReactNode } from "react";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import LazyVideo from "@/components/lazy-video";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { stempsData } from "./stemps-data";

/** Centred content column (columns 2–3 of the 4-col / 339-12 grid). */
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
    <p className="font-medium text-[14px] text-[var(--stemps-muted-text)] leading-[1.2] tracking-[-0.14px]">
      {children}
    </p>
  );
}

/** Full-bleed video band (autoplay poster or player), black background.
 *  Sized to the Figma macbook width (~1189px), not the default 690. */
function VideoBand({
  videoId,
  background = false,
}: {
  videoId: string;
  background?: boolean;
}) {
  return (
    <div className="w-full bg-black flex justify-center py-[64px] max-lg:py-[24px] px-[24px]">
      <LazyVideo
        videoId={videoId}
        background={background}
        className="w-full max-w-[1189px]"
        aspectRatio="1189/697"
      />
    </div>
  );
}

export default function StempsPage() {
  const {
    projectInfo,
    heroCover,
    context,
    task,
    results,
    heroVideoId,
    process,
    custdevImage,
    comments,
    solution,
    hypotheses,
    hypothesisImages,
    structureText,
    videoIntro,
    demoVideoId,
    students,
    details,
    certificates,
    moreDetails,
    conclusion,
    blob,
  } = stempsData;

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <PageHeader
        title="STEMPS — конструктор курсов | Оксана Бакулина"
        description="Кейс STEMPS: конструктор курсов для корпоративного университета. Продуктовый дизайн от исследования до релиза."
        breadcrumbs={[{ label: "Главная", to: "/" }, { label: "STEMPS" }]}
      />

      {/* Hero — purple wordmark cover */}
      <section className="w-full bg-[var(--stemps-hero)]">
        <div className="w-full max-w-[1440px] mx-auto">
          <img
            src={heroCover}
            alt="STEMPS"
            className="w-full h-auto"
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

      {/* Top demo video */}
      <VideoBand videoId={heroVideoId} background />

      {/* Процесс */}
      <div className="pt-[64px] max-lg:pt-[40px]">
        <Content className="flex flex-col gap-[16px]">
          <SectionTitle>{process.title}</SectionTitle>
          <p className="text-size-m text-neutral-900">{process.text}</p>
        </Content>
      </div>

      {/* CustDev blurred call */}
      <div className="py-[40px]">
        <Content>
          <img
            src={custdevImage}
            alt="CustDev-интервью с девелоперами"
            loading="lazy"
            className="w-full h-auto rounded-[10px]"
          />
        </Content>
      </div>

      {/* Target-audience quotes */}
      <Carousel
        opts={{ align: "start", dragFree: true }}
        className="w-full pb-[64px] max-lg:pb-[40px]"
      >
        <CarouselContent className="ml-0 pl-[calc((100vw-min(100vw,1440px))/2+12px)] pr-[24px]">
          {comments.map((quote, i) => (
            <CarouselItem
              key={i}
              className="pl-[12px] basis-[339px] max-lg:basis-[280px]"
            >
              <div className="h-[200px] bg-[var(--stemps-card-bg)] rounded-[10px] p-[24px] flex flex-col justify-between select-none">
                <p className="text-[14px] text-neutral-900 leading-[1.3]">
                  {quote}
                </p>
                <span className="text-[12px] text-[var(--stemps-muted-text)]">
                  Комментарий ЦА
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Решение */}
      <div className="pb-[64px] max-lg:pb-[40px]">
        <Content className="flex flex-col gap-[24px] max-lg:gap-[20px]">
          <p className="text-size-m text-neutral-900">{solution.intro}</p>
          <p className="text-size-m text-neutral-900">
            <span className="text-[var(--stemps-accent)]">«…»</span>{" "}
            {solution.quote}
          </p>
          <p className="text-size-m text-neutral-900">{solution.conclusion}</p>
        </Content>
      </div>

      {/* Гипотезы — screenshots + scattered cards + connector arrows */}
      <section className="w-full bg-[var(--stemps-section-bg)] py-[64px] max-lg:py-[40px] overflow-x-clip">
        {/* Desktop: scattered layout with curved connectors (positions from Figma) */}
        <div className="hidden lg:block w-full max-w-[1440px] mx-auto">
          <div className="relative w-full aspect-[1440/850]">
            {/* Connector arrows */}
            <svg
              viewBox="0 0 1440 850"
              fill="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="hyp-arrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M0,0 L10,5 L0,10" fill="none" stroke="#333333" strokeWidth="1.5" />
                </marker>
              </defs>
              <g stroke="#333333" strokeWidth="1.5" markerEnd="url(#hyp-arrow)">
                {/* №3 top-left → editor */}
                <path d="M322,120 C382,120 372,178 452,200" />
                {/* №1 left → courses */}
                <path d="M278,332 C362,332 402,384 470,404" />
                {/* №5 top-right → editor */}
                <path d="M1296,232 C1198,232 1176,282 1062,288" />
                {/* №2 right → editor */}
                <path d="M1298,556 C1182,556 1150,500 1068,482" />
                {/* №4 bottom → courses */}
                <path d="M858,600 C806,562 786,540 762,516" />
              </g>
            </svg>

            {/* Screenshots */}
            <img
              src={hypothesisImages.editor}
              alt="Редактор конструктора курсов"
              loading="lazy"
              className="absolute rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              style={{ left: "26.04%", top: "11.3%", width: "47.9%" }}
            />
            <img
              src={hypothesisImages.courses}
              alt="Каталог курсов"
              loading="lazy"
              className="absolute rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              style={{ left: "12.2%", top: "42.8%", width: "29.9%" }}
            />

            {/* Cards */}
            {hypotheses.map((h, i) => {
              const pos = [
                { left: "3.96%", top: "30.1%" }, // №1 left
                { left: "80%", top: "56.7%" }, // №2 right
                { left: "7.5%", top: "3.8%" }, // №3 top-left
                { left: "52.8%", top: "69.2%" }, // №4 bottom
                { left: "80.3%", top: "14.9%" }, // №5 top-right
              ][i];
              return (
                <div
                  key={i}
                  className="absolute bg-[var(--stemps-hyp-card)] rounded-[10px] p-[16px] flex flex-col gap-[8px]"
                  style={{ left: pos.left, top: pos.top, width: "15.07%" }}
                >
                  <span className="text-[12px] font-medium text-[var(--stemps-accent)] leading-[1.2]">
                    {h.label}
                  </span>
                  <p className="text-[12px] text-neutral-900 leading-[1.4]">
                    {h.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: screenshots stacked + cards column */}
        <div className="lg:hidden">
          <Content className="flex flex-col gap-[24px]">
            <img
              src={hypothesisImages.editor}
              alt="Редактор конструктора курсов"
              loading="lazy"
              className="w-full h-auto rounded-[10px]"
            />
            <img
              src={hypothesisImages.courses}
              alt="Каталог курсов"
              loading="lazy"
              className="w-[70%] h-auto rounded-[10px]"
            />
            <div className="flex flex-col gap-[12px]">
              {hypotheses.map((h, i) => (
                <div
                  key={i}
                  className="bg-[var(--stemps-hyp-card)] rounded-[10px] p-[20px] flex flex-col gap-[12px]"
                >
                  <span className="text-[14px] font-medium text-[var(--stemps-accent)]">
                    {h.label}
                  </span>
                  <p className="text-[14px] text-neutral-900 leading-[1.3]">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          </Content>
        </div>

        {/* Structure caption — centered under the hypotheses composite */}
        <p className="mt-[48px] max-lg:mt-[32px] px-[24px] text-center text-[14px] text-neutral-900 leading-[1.4]">
          {structureText.split("курс →")[0]}
          <span className="font-medium">
            курс &rarr; версия курса &rarr; модуль &rarr; тип урока &rarr; блок
          </span>
        </p>
      </section>

      {/* Video intro text */}
      <div className="pt-[64px] pb-[40px] max-lg:pt-[40px] max-lg:pb-[24px]">
        <Content>
          <p className="text-size-m text-neutral-900">{videoIntro}</p>
        </Content>
      </div>

      {/* Demo video (player) — on black */}
      <VideoBand videoId={demoVideoId} />

      {/* White strip between demo video and mobile section */}
      <div className="h-[100px] bg-white max-lg:h-[40px]" />

      {/* Student mobile views — on black; heading aligned to the text column, phones full-width */}
      <section className="w-full bg-black py-[64px] max-lg:py-[40px]">
        {/* Heading — same content column as "Детали"/"Шаблоны" (col-start-2) */}
        <div className="w-full max-w-[1440px] mx-auto px-[24px]">
          <div className="grid grid-cols-4 gap-x-[12px] max-lg:grid-cols-1">
            <p className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 text-[14px] text-white leading-[1.2] mb-[36px] max-lg:mb-[24px]">
              {students.label}
            </p>
          </div>
        </div>
        {/* Phones — full-width row */}
        <div className="w-full max-w-[1364px] mx-auto px-[24px]">
          <div className="flex items-start justify-between gap-[32px] max-lg:grid max-lg:grid-cols-2 max-lg:gap-[12px]">
            {students.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${students.label} ${i + 1}`}
                loading="lazy"
                className="w-[calc((100%-96px)/4)] h-auto rounded-[10px] max-lg:w-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Детали + feedback mockup */}
      <div className="pt-[64px] max-lg:pt-[40px]">
        <Content className="flex flex-col gap-[16px]">
          <SectionTitle>{details.title}</SectionTitle>
          <p className="text-size-m text-neutral-900">{details.text}</p>
        </Content>
      </div>
      <section className="w-full py-[40px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <img
            src={details.image}
            alt="Шаблоны обратной связи"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Сертификаты + mockup */}
      <div className="pt-[24px] max-lg:pt-[16px]">
        <Content className="flex flex-col gap-[32px]">
          <p className="text-size-m text-neutral-900">{certificates.text}</p>
          <img
            src={certificates.image}
            alt="Настройка сертификатов"
            loading="lazy"
            className="w-full h-auto rounded-[10px]"
          />
        </Content>
      </div>

      {/* More details */}
      <div className="py-[64px] max-lg:py-[40px]">
        <Content>
          <p className="text-size-m text-neutral-900">{moreDetails}</p>
        </Content>
      </div>

      {/* Conclusion card + blob + footer */}
      <section className="relative w-full pb-[70px] max-lg:pb-[40px] overflow-x-clip">
        <img
          src={blob}
          alt=""
          role="presentation"
          loading="lazy"
          className="absolute z-10 right-[calc((100vw-min(100vw,1440px))/2+40px)] top-[-40px] w-[300px] h-auto pointer-events-none max-lg:hidden"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <Content className="flex flex-col gap-[48px]">
          <section className="relative bg-[var(--stemps-card-bg)] rounded-[10px] p-[24px] pr-[48px] max-lg:pr-[24px] flex flex-col gap-[24px]">
            <p className="text-size-m text-neutral-900">{conclusion.text}</p>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[14px] font-medium text-[var(--stemps-muted-text)] leading-[1.2]">
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
