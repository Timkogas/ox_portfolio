import { useState } from "react";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import LazyVideo from "@/components/lazy-video";
import { kasperskyData } from "./kaspersky-data";

export default function KasperskyPage() {
  const {
    heroImage,
    projectInfo,
    context,
    process,
    hypotheses,
    darkSections,
    results,
  } = kasperskyData;

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader
        title="Mobile Security by Kaspersky | Оксана Бакулина"
        description="Кейс Mobile Security by Kaspersky. Дипломная работа по продуктовому дизайну."
        breadcrumbs={[
          { label: "О себе", to: "/" },
          { label: "Kaspersky" },
        ]}
      />

      {/* Hero Image */}
      <section className="w-full h-[268px] max-lg:h-auto bg-black">
        <img
          src={heroImage}
          alt="Kaspersky — hero"
          className="w-full h-full object-cover max-lg:h-auto max-lg:object-contain"
        />
      </section>

      {/* Project Info Grid */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <section className="grid grid-cols-4 h-[58px] items-center max-lg:grid-cols-1 max-lg:h-auto max-lg:gap-[16px] max-lg:pt-[24px]">
          <div>
            <p className="text-[14px] text-neutral-900 font-medium leading-[1.2] tracking-[-0.14px]">
              Бренд: <br />
              {projectInfo.brand}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-neutral-900 font-medium leading-[1.2] tracking-[-0.14px]">
              Роль: <br />
              {projectInfo.role}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-neutral-900 font-medium leading-[1.2] tracking-[-0.14px]">
              Сфера: <br />
              {projectInfo.sphere}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-neutral-900 font-medium leading-[1.2] tracking-[-0.14px]">
              Год: <br />
              {projectInfo.year}
            </p>
          </div>
        </section>

        {/* Context + Process */}
        <div className="grid grid-cols-4 py-[64px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[64px]">
            <section className="flex flex-col gap-[16px]">
              <p className="font-medium text-[14px] text-kaspersky-muted-text leading-[1.2] tracking-[-0.14px]">
                {context.title}
              </p>
              <p className="text-size-m text-neutral-900 whitespace-pre-line">
                {context.content}
              </p>
            </section>

            <section className="flex flex-col gap-[16px]">
              <p className="font-medium text-[14px] text-kaspersky-muted-text leading-[1.2] tracking-[-0.14px]">
                {process.title}
              </p>
              <p className="text-size-m text-neutral-900">
                {process.content}
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Hypotheses Diagram */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px] pb-[32px]">
        {/* Desktop layout — relative container, everything positioned via data */}
        <div className="relative max-lg:hidden">
          {/* Phone image — centered, defines container height */}
          <div
            className="relative mx-auto"
            style={{ width: `${hypotheses.imageWidth || 35}%` }}
          >
            <img
              src={hypotheses.image}
              alt="Анализ интерфейса приложения"
              loading="lazy"
              className="w-full h-auto"
            />
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-b from-transparent via-white/70 to-white transition-opacity duration-300" />
            )}
          </div>

          {/* Hypothesis cards — absolute, positions from data */}
          {hypotheses.items.map((h, i) => (
            <div
              key={`card-${i}`}
              className="absolute bg-kaspersky-card-bg rounded-[10px] p-[16px] flex flex-col gap-[12px]"
              style={{
                left: `${h.card.position.x}%`,
                top: `${h.card.position.y}%`,
                width: `${h.card.width || 24}%`,
              }}
            >
              <p className="text-[12px] font-medium text-neutral-900 leading-[1.2]">
                {h.title}
              </p>
              <p className="text-[14px] text-neutral-900 leading-[1.2]">
                {h.text}
              </p>
            </div>
          ))}

          {/* Arrows — absolute, positions from data */}
          {hypotheses.items.map((h, i) => (
            <img
              key={`arrow-${i}`}
              src={h.arrow.image}
              alt=""
              role="presentation"
              className="absolute pointer-events-none"
              style={{
                left: `${h.arrow.position.x}%`,
                top: `${h.arrow.position.y}%`,
                width: h.arrow.width
                  ? `${h.arrow.width}%`
                  : undefined,
              }}
            />
          ))}

          {/* Arrow between — same container, same positioning */}
          {hypotheses.arrowBetween && (
            <img
              src={hypotheses.arrowBetween.image}
              alt=""
              role="presentation"
              className="absolute pointer-events-none max-lg:hidden"
              style={{
                left: `${hypotheses.arrowBetween.position.x}%`,
                top: `${hypotheses.arrowBetween.position.y}%`,
                width: hypotheses.arrowBetween.width
                  ? `${hypotheses.arrowBetween.width}%`
                  : undefined,
              }}
            />
          )}
        </div>

        {/* Mobile layout — image with markers, caption, then hypothesis cards */}
        <div className="hidden max-lg:flex flex-col gap-4">
          {/* Clipping wrapper — max-height animates, overflow clips */}
          <div
            className="overflow-hidden transition-[max-height] duration-500"
            style={{ maxHeight: expanded ? "2000px" : "360px" }}
          >
            {/* Inner relative — sized by image, markers stay in place */}
            <div className="relative">
              <img
                src={hypotheses.image}
                alt="Анализ интерфейса приложения"
                loading="lazy"
                className="w-full h-auto"
              />
              {hypotheses.items.map((h, i) =>
                h.mobileMarker ? (
                  <span
                    key={i}
                    className="absolute w-[20px] h-[20px] rounded-full bg-neutral-900 text-white text-[11px] font-medium leading-none flex items-center justify-center"
                    style={{
                      left: `${h.mobileMarker.x}%`,
                      top: `${h.mobileMarker.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {i + 1}
                  </span>
                ) : null,
              )}
            </div>
          </div>
          {/* Gradient overlay — outside clipping wrapper, pinned to its bottom edge */}
          {!expanded && (
            <div className="relative -mt-[180px] h-[180px] bg-gradient-to-b from-transparent via-white/70 to-white pointer-events-none" />
          )}

          {/* Caption — toggle (on mobile, under the image) */}
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="w-full text-center text-[14px] text-kaspersky-muted-text py-[8px] cursor-pointer hover:opacity-70 transition-opacity"
          >
            {expanded ? "\u2191" : "\u2193"}
            <br />
            {hypotheses.caption}
          </button>

          {/* Hypothesis cards — gray blocks */}
          <div className="flex flex-col gap-[12px]">
            {hypotheses.items.map((h, i) => (
              <div
                key={i}
                className="bg-kaspersky-card-bg rounded-[10px] p-[16px] flex flex-col gap-[10px]"
              >
                <p className="text-[12px] font-medium text-neutral-900 leading-[1.2]">
                  {h.title}
                </p>
                <p className="text-[14px] text-neutral-900 leading-[1.2]">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Caption + Conclusion — overlaps phones when collapsed (desktop only for caption) */}
      <div
        className={`w-full max-w-[1440px] mx-auto px-[24px] relative z-10 bg-white transition-[margin] duration-500 ${expanded ? "mt-0 max-lg:mt-0" : "-mt-[250px] max-lg:mt-0"}`}
      >
        {/* Caption — toggle gradient (desktop only) */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="w-full text-center text-[14px] text-kaspersky-muted-text py-[24px] cursor-pointer hover:opacity-70 transition-opacity max-lg:hidden"
        >
          {expanded ? "\u2191" : "\u2193"}
          <br />
          {hypotheses.caption}
        </button>

        <div className="grid grid-cols-4 pt-[48px] pb-[32px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <p className="text-size-m text-neutral-900">
              {hypotheses.conclusion}
            </p>

          </div>
        </div>
      </div>

      {/* Dark Sections */}
      {darkSections.map((section, index) => (
        <div key={index}>
          <section className={`w-full bg-kaspersky-dark-bg min-h-[400px] max-lg:min-h-0 relative z-20 ${section.videoId && !section.innerDescription ? "" : "pt-[64px] max-lg:pt-[32px]"}`}>
            <div className="w-full max-w-[1440px] mx-auto px-[24px]">
              <div className="grid grid-cols-4 max-lg:grid-cols-1">
                <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[36px]">
                  {section.innerDescription && (
                    <div className="bg-[rgba(243,243,243,0.08)] rounded-[10px] p-[16px]">
                      <p className="text-[14px] text-white leading-[1.2]">
                        {section.innerDescription}
                      </p>
                    </div>
                  )}
                  {section.image && (
                    <img
                      src={section.image}
                      alt={section.title || ""}
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  )}
                  {section.videoId && (
                    <div className="flex justify-center">
                      <LazyVideo
                        videoId={section.videoId}
                        aspectRatio="9/19.5"
                        className="w-full max-w-[260px] overflow-hidden"
                        iframeClassName="block"
                        iframeStyle={{ width: "300%", height: "100%", marginLeft: "-100%" }}
                        background
                        eager
                      />
                    </div>
                  )}
                </div>
              </div>

              {section.videoIds && (
                <div className="flex justify-center pt-[36px] pb-[64px] max-lg:pb-[24px]">
                  <div className="flex gap-[20px] max-lg:gap-[10px] w-full max-w-[690px]">
                    {section.videoIds.map((vid, i) => (
                      <LazyVideo
                        key={i}
                        videoId={vid}
                        aspectRatio="9/19.5"
                        className="flex-1 overflow-hidden rounded-[20px] max-lg:rounded-[10px] bg-kaspersky-dark-bg"
                        iframeClassName="block"
                        iframeStyle={{ width: "300%", height: "100%", marginLeft: "-100%" }}
                        background
                        eager
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {section.afterDescription && (
            <div className="w-full max-w-[1440px] mx-auto px-[24px]">
              <div className="grid grid-cols-4 py-[64px] max-lg:grid-cols-1">
                <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
                  <p className="text-size-m text-neutral-900">
                    {section.afterDescription}
                    {section.afterHighlight && (
                      <>
                        <span className="text-kaspersky-accent">
                          {section.afterHighlight}
                        </span>
                        , которые со&nbsp;временем начинают восприниматься как
                        шум и&nbsp;игнорируются
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Results */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <section className="pt-[64px] flex flex-col gap-[16px]">
              <p className="font-medium text-[14px] text-kaspersky-muted-text leading-[1.2] tracking-[-0.14px]">
                {results.title}
              </p>
              <ul className="list-disc ml-[27px] space-y-1">
                {results.items.map((item, index) => (
                  <li key={index} className="text-size-m text-neutral-900">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-4 py-[64px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
