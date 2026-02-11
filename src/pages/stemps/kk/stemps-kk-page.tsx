import { useRef, useState, useEffect } from "react";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import { stempsKKData } from "./stemps-kk-data";

function HeroVideo({ videoId }: { videoId: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full bg-black flex justify-center py-[44px] max-lg:py-[24px] px-[24px]">
      <div className="w-full max-w-[690px]" style={{ aspectRatio: "690/398" }}>
        {visible && (
          <iframe
            src={`https://kinescope.io/embed/${videoId}?autoplay=1&muted=1&loop=1&controls=0&t=0&quality=1080p`}
            className="w-full h-full"
            allow="autoplay; fullscreen; encrypted-media"
            loading="lazy"
            style={{ border: "none" }}
          />
        )}
      </div>
    </div>
  );
}

function LazyVideo({ videoId, background = false }: { videoId: string; background?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const params = background
    ? "autoplay=1&muted=1&loop=1&controls=0&t=0&quality=1080p"
    : "quality=1080p";
  const src = `https://kinescope.io/embed/${videoId}?${params}`;

  return (
    <div ref={ref} className="w-full bg-[#1d1d22] flex justify-center py-[44px] max-lg:py-[24px] px-[24px]">
      <div className="w-full max-w-[690px]" style={{ aspectRatio: "690/398" }}>
        {visible && (
          <iframe
            src={src}
            className="w-full h-full"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            loading="lazy"
            style={{ border: "none" }}
          />
        )}
      </div>
    </div>
  );
}

function ScalableSection({
  children,
  referenceWidth = 1392,
}: {
  children: React.ReactNode;
  referenceWidth?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !contentRef.current) return;
      const w = containerRef.current.offsetWidth;
      const s = Math.min(1, w / referenceWidth);
      setScale(s);
      setHeight(contentRef.current.offsetHeight * s);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(containerRef.current!);
    return () => ro.disconnect();
  }, [referenceWidth]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden" style={{ height }}>
      <div
        ref={contentRef}
        style={{
          width: referenceWidth,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function StempsKKPage() {
  const {
    task,
    process,
    hypotheses,
    beforeEditor,
    videoId,
    detailsLabel,
    detailsImages,
    editorAnnotations,
    structureText,
    mobileLabel,
    mobileImages,
    feedbackText,
    feedbackMockup,
    metrics,
    certificatesText,
    certificatesMockup,
    results,
  } = stempsKKData;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader
        title="Конструктор курсов — STEMPS | Оксана Бакулина"
        description="Кейс Конструктор курсов STEMPS — раздел для запуска обучения под задачи бизнеса. Продуктовый дизайн от исследования до релиза."
        breadcrumbs={[
          { label: "Главная", to: "/" },
          { label: "Проект", to: "/stemps" },
          { label: "Конструктор курсов" },
        ]}
      />

      {/* Hero — full-width background video (autoplay, no controls) */}
      <HeroVideo videoId={videoId} />

      {/* Задача + Процесс + Гипотезы */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 py-[64px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[64px]">
            {/* Задача */}
            <section className="flex flex-col gap-[16px]">
              <p className="font-medium text-[14px] text-[rgba(51,51,51,0.6)] leading-[1.2] tracking-[-0.14px]">
                {task.title}
              </p>
              <p className="text-size-m text-neutral-900">
                {task.content}
              </p>
            </section>

            {/* Процесс */}
            <section className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-medium text-[14px] text-[rgba(51,51,51,0.6)] leading-[1.2] tracking-[-0.14px]">
                  {process.title}
                </p>
                {process.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-size-m text-neutral-900"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Hypothesis cards — 2x2 grid */}
              <div className="flex flex-col gap-[12px]">
                <div className="grid grid-cols-2 gap-[12px] max-lg:grid-cols-1">
                  {hypotheses.slice(0, 2).map((h, i) => (
                    <div
                      key={i}
                      className="bg-[rgba(51,51,51,0.06)] rounded-[10px] p-[16px]"
                    >
                      <p className="text-[14px] text-neutral-900 leading-[1.2]">
                        <span className="font-medium">
                          {h.label}
                        </span>{" "}
                        {h.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-[12px] max-lg:grid-cols-1">
                  {hypotheses.slice(2, 4).map((h, i) => (
                    <div
                      key={i + 2}
                      className="bg-[rgba(51,51,51,0.06)] rounded-[10px] p-[16px]"
                    >
                      <p className="text-[14px] text-neutral-900 leading-[1.2]">
                        <span className="font-medium">
                          {h.label}
                        </span>{" "}
                        {h.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Gray section — editor screenshots + annotations (scales proportionally) */}
      <section className="w-full bg-[rgba(51,51,51,0.06)]">
        <ScalableSection referenceWidth={1392}>
          <div style={{ width: 1392 }}>
            <div className="relative px-[24px] py-[44px]">
              {/* Editor screenshot — center columns */}
              <div className="ml-[25%] w-[50%]">
                <img
                  src={detailsImages.editor}
                  alt="Редактор конструктора курсов"
                  loading="lazy"
                  className="w-full h-auto rounded-[10px]"
                />
              </div>

              {/* Templates panel — offset from content area */}
              <img
                src={detailsImages.templatesPanel}
                alt="Панель шаблонов"
                loading="lazy"
                className="absolute w-[31%] h-auto rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),4px_2px_8px_0px_rgba(0,0,0,0.06)]"
                style={{
                  left: `calc(25% + ${detailsImages.panelOffset.left}px)`,
                  top: `calc(44px + ${detailsImages.panelOffset.top}px)`,
                }}
              />

              {/* Annotations — from data, positioned with percentages */}
              {editorAnnotations.map((annotation, i) => (
                <div key={i}>
                  <p
                    className="absolute text-[14px] text-neutral-900 leading-[1.2]"
                    style={{
                      left: `${annotation.position.x}%`,
                      top: `${annotation.position.y}%`,
                      width: annotation.width ? `${annotation.width}%` : undefined,
                    }}
                  >
                    {annotation.text}
                  </p>
                  {annotation.arrow && (
                    <img
                      src={annotation.arrow.image}
                      alt=""
                      role="presentation"
                      className="absolute pointer-events-none"
                      style={{
                        left: `${annotation.arrow.position.x}%`,
                        top: `${annotation.arrow.position.y}%`,
                        width: annotation.arrow.width
                          ? `${annotation.arrow.width}%`
                          : undefined,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Structure text */}
            <div className="px-[24px] pb-[64px]">
              <div className="ml-[25%] w-[50%]">
                <p className="text-[14px] text-neutral-900 leading-[1.2]">
                  {structureText.split("курс \u2192")[0]}
                  <span className="font-medium">
                    курс &rarr; версия курса &rarr; модуль &rarr; тип
                    урока &rarr; блок
                  </span>
                </p>
              </div>
            </div>
          </div>
        </ScalableSection>
      </section>

      {/* "Ниже покажу..." text */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 py-[64px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <p className="text-size-m text-neutral-900">
              {beforeEditor}
            </p>
          </div>
        </div>
      </div>

      {/* Video with player controls */}
      <LazyVideo videoId="4vGeVCoA4JH3WE9JUJAufG" />

      {/* Детали label */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 pt-[64px] pb-[32px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <p className="text-size-m text-neutral-900">
              {detailsLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile screenshots — gray section */}
      <section className="w-full bg-[rgba(51,51,51,0.06)]">
        <div className="w-full max-w-[1440px] mx-auto px-[24px]">
          <div className="grid grid-cols-4 max-lg:grid-cols-1">
            <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 py-[64px]">
              <div className="flex items-end justify-between gap-[12px]">
                {mobileImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Мобильная версия ${i + 1}`}
                    loading="lazy"
                    className="w-[174px] h-auto max-lg:w-[calc((100%-24px)/3)]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile label — UNDER the screenshots */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 py-[16px]">
            <p className="text-[14px] text-neutral-900 leading-[1.2]">
              {mobileLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Feedback text */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 py-[64px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <p className="text-size-m text-neutral-900">
              {feedbackText}
            </p>
          </div>
        </div>
      </div>

      {/* Feedback mockup + metrics */}
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[20px] items-center">
          <img
            src={feedbackMockup}
            alt="Шаблоны обратной связи"
            loading="lazy"
            className="w-full max-w-[690px] h-auto px-[24px]"
          />

          {/* Metrics cards — overflow hidden on mobile, no side padding */}
          <div className="w-full overflow-hidden px-[24px] max-lg:px-0 max-lg:pl-5 pb-5">
            <div className="flex gap-[20px] min-w-[1100px]">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className="flex-1 bg-white border border-[#f3f3f4] rounded-[10px] p-[20px] flex flex-col gap-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),4px_2px_8px_0px_rgba(0,0,0,0.06)]"
                >
                  <p className="text-[16px] font-medium text-[#1d1d22] leading-[20px]">
                    {m.title}
                  </p>
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-[2px]">
                      <span
                        className={`text-[14px] leading-[18px] ${
                          m.direction === "up"
                            ? "text-[#5dbe6f]"
                            : "text-[#e86541]"
                        }`}
                      >
                        {m.direction === "up" ? "\u25B2" : "\u25BC"}{" "}
                        {m.change}
                      </span>
                      <span className="text-[20px] text-[#1d1d22] leading-[24px]">
                        {m.value}
                      </span>
                    </div>
                    <div className="bg-[#f3f3f4] rounded-[4px] pl-[12px] pr-[18px] py-[6px] h-[32px] flex items-center gap-[6px]">
                      <img
                        src="/images/stemps/kk/comments-icon.svg"
                        alt=""
                        className="w-[16px] h-[16px]"
                      />
                      <span className="text-[16px] text-[#1d1d22] leading-[20px]">
                        {m.count}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificates text + mockup */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 py-[64px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[64px]">
            <p className="text-size-m text-neutral-900">
              {certificatesText}
            </p>
            <img
              src={certificatesMockup}
              alt="Настройка сертификатов"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <div className="flex flex-col gap-[16px]">
              <p className="font-medium text-[14px] text-[rgba(51,51,51,0.6)] leading-[1.2] tracking-[-0.14px]">
                {results.title}
              </p>
              <ul className="list-disc pl-[27px]">
                {results.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-size-m text-neutral-900 leading-[1.2]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 py-[64px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
