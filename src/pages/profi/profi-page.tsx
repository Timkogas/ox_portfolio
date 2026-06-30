import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import { profiData } from "./profi-data";

/** Full-bleed composite section image. Scrolls horizontally on mobile so the
 *  baked-in phone screens stay legible instead of shrinking to nothing. */
function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full max-w-[1440px] mx-auto overflow-x-auto scrollbar-hide">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto max-lg:w-[900px] max-lg:max-w-none"
      />
    </div>
  );
}

/** Renders text with one substring highlighted in the accent blue. */
function Accented({ text, highlight }: { text: string; highlight: string }) {
  if (!text.includes(highlight)) return <>{text}</>;
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span className="text-profi-accent">{highlight}</span>
      {after}
    </>
  );
}

function Avatar({
  initial,
  className,
}: {
  initial?: string | null;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`flex items-center justify-center size-[24px] rounded-full text-[10px] font-medium leading-none ${
        initial ? "bg-profi-accent text-white" : "bg-profi-accent/45"
      } ${className ?? ""}`}
    >
      {initial}
    </span>
  );
}

export default function ProfiPage() {
  const {
    projectInfo,
    context,
    process,
    darkImage,
    firstIteration,
    chartsImage,
    video,
    testimonials,
    secondIteration,
    financeImage,
    summary,
    status,
    blob,
  } = profiData;

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <PageHeader
        title="Профи.ру | Оксана Бакулина"
        description="Кейс Профи.ру — переработка раздела статистики для исполнителей маркетплейса услуг."
        breadcrumbs={[{ label: "Главная", to: "/" }, { label: "Профи.ру" }]}
      />

      {/* Hero — red band with wordmark + decorative circles (exact Figma frame) */}
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
        <section className="grid grid-cols-4 h-[58px] items-center max-lg:grid-cols-2 max-lg:h-auto max-lg:gap-[16px] max-lg:pt-[24px]">
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

        {/* Context + Process */}
        <div className="grid grid-cols-4 py-[64px] max-lg:py-[40px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[64px] max-lg:gap-[40px]">
            <section className="flex flex-col gap-[16px]">
              <p className="font-medium text-[14px] text-profi-muted-text leading-[1.2] tracking-[-0.14px]">
                {context.title}
              </p>
              <div className="flex flex-col gap-[16px]">
                {context.paragraphs.map((p, i) => (
                  <p key={i} className="text-size-m text-neutral-900">
                    {p}
                  </p>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-[16px]">
              <p className="font-medium text-[14px] text-profi-muted-text leading-[1.2] tracking-[-0.14px]">
                {process.title}
              </p>
              <p className="text-size-m text-neutral-900">
                {process.spans.map((s, i) => (
                  <span key={i} className={s.accent ? "text-profi-accent" : ""}>
                    {s.text}
                  </span>
                ))}
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Dark section — Моя статистика phone + arrows + annotations */}
      <SectionImage src={darkImage} alt="Анализ текущего раздела «Моя статистика»" />

      {/* First iteration paragraph */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 py-[64px] max-lg:py-[40px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <p className="text-size-m text-neutral-900">{firstIteration}</p>
          </div>
        </div>
      </div>

      {/* First iteration — analytics phones */}
      <SectionImage src={chartsImage} alt="Прототип первой итерации" />

      {/* Video / interviews */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 py-[64px] max-lg:py-[40px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[36px] max-lg:gap-[24px]">
            <p className="text-size-m text-neutral-900">
              <Accented text={video.heading} highlight="6 глубинных" />
            </p>
            <img
              src={video.image}
              alt="Тестирование интерфейса с пользователями"
              loading="lazy"
              className="w-full h-auto rounded-[20px] max-lg:rounded-[12px]"
            />
          </div>
        </div>
      </div>

      {/* Testimonials — horizontal scroll row */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px] pb-[64px] max-lg:pb-[40px]">
        <div className="flex gap-[12px] overflow-x-auto scrollbar-hide">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-none w-[339px] max-lg:w-[280px] h-[200px] bg-profi-card-bg rounded-[10px] p-[24px] flex flex-col justify-between"
            >
              <p className="text-[14px] text-neutral-900 leading-[1.3]">
                {t.quote}
              </p>
              {t.author ? (
                <div className="flex items-center gap-[12px]">
                  <Avatar initial={t.initial} />
                  <span className="text-[14px] text-neutral-900">
                    {t.author}
                  </span>
                </div>
              ) : (
                <div className="flex">
                  {(t.avatars ?? []).map((init, j) => (
                    <Avatar
                      key={j}
                      initial={init}
                      className={
                        j > 0 ? "-ml-[4px] ring-2 ring-profi-card-bg" : ""
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Second iteration paragraph */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 pb-[64px] max-lg:pb-[40px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[16px]">
            {secondIteration.map((p, i) => (
              <p key={i} className="text-size-m text-neutral-900">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Second iteration — finance phones */}
      <SectionImage src={financeImage} alt="Финальный прототип" />

      {/* Summary + status + footer */}
      <div className="relative w-full max-w-[1440px] mx-auto px-[24px] pt-[64px] max-lg:pt-[40px]">
        {/* Decorative blob — bottom-right, overlapping */}
        <img
          src={blob}
          alt=""
          role="presentation"
          loading="lazy"
          className="absolute right-[-24px] bottom-[140px] w-[480px] max-w-[44%] h-auto pointer-events-none max-lg:hidden"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="grid grid-cols-4 max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[48px]">
            <section className="flex flex-col gap-[16px]">
              <p className="text-size-m text-neutral-900">{summary.title}</p>
              <ul className="list-disc ml-[27px] space-y-1">
                {summary.items.map((item, i) => (
                  <li key={i} className="text-size-m text-neutral-900">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Status card */}
            <section className="bg-profi-card-bg rounded-[10px] p-[24px] flex flex-col gap-[24px]">
              <p className="text-size-m text-neutral-900">{status.text}</p>
              <div className="flex flex-col gap-[16px]">
                {status.blocks.map((b, i) => (
                  <div key={i} className="flex flex-col gap-[8px]">
                    <p className="text-[14px] font-medium text-profi-muted-text leading-[1.2]">
                      {b.title}
                    </p>
                    <ul className="list-disc ml-[20px] space-y-1">
                      {b.items.map((item, j) => (
                        <li
                          key={j}
                          className="text-[14px] text-neutral-900 leading-[1.3]"
                        >
                          <Accented text={item} highlight="до 20% c 4+ заходами" />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-4 py-[64px] max-lg:py-[40px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
