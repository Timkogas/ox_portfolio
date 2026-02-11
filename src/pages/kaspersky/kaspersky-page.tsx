import { useState } from "react";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
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
      <section className="w-full h-[268px]">
        <img
          src={heroImage}
          alt="Kaspersky — hero"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Project Info Grid */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <section className="grid grid-cols-4 h-[58px] items-center max-lg:grid-cols-2">
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

        {/* Mobile layout — stacked cards, no arrows */}
        <div className="hidden max-lg:flex flex-col gap-4">
          <div className="relative">
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

      {/* Caption + Conclusion — overlaps phones when collapsed */}
      <div
        className={`w-full max-w-[1440px] mx-auto px-[24px] relative z-10 bg-white transition-[margin] duration-500 ${expanded ? "mt-0" : "-mt-[250px]"}`}
      >
        {/* Caption — toggle gradient */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="w-full text-center text-[14px] text-kaspersky-muted-text py-[24px] cursor-pointer hover:opacity-70 transition-opacity"
        >
          &uarr;
          <br />
          {hypotheses.caption}
        </button>

        <div className="grid grid-cols-4 max-lg:grid-cols-1">
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
          <section className="w-full bg-kaspersky-dark-bg pt-[64px] min-h-[400px] relative z-20">
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
                </div>
              </div>
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
