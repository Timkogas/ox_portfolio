import { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import LazyVideo from "@/components/lazy-video";
import { bureauDushiData } from "./bureau-dushi-data";

function LightboxControls({ onClose }: { onClose: () => void }) {
  const { zoomIn, zoomOut } = useControls();
  return (
    <div className="absolute top-6 right-6 z-50 flex gap-2">
      <button type="button" onClick={() => zoomOut()} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white text-xl cursor-pointer">&minus;</button>
      <button type="button" onClick={() => zoomIn()} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white text-xl cursor-pointer">+</button>
      <button type="button" onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white text-xl cursor-pointer">&times;</button>
    </div>
  );
}

export default function BureauDushiPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  const {
    heroImage,
    projectInfo,
    context,
    process,
    structure,
    afterStructure,
    keyPagesImage,
    afterKeyPages,
    problemSolutions,
    visualSystem,
    referencesImage,
    wireframesImage,
    darkBlock,
  } = bureauDushiData;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader
        title="Бюро Души | Оксана Бакулина"
        description="Кейс Бюро Души — сервис психологической помощи. MVP, айдентика, продуктовый дизайн."
        breadcrumbs={[
          { label: "О себе", to: "/" },
          { label: "Бюро Души" },
        ]}
      />

      {/* Hero Image */}
      <section className="w-full h-[268px] max-lg:h-auto bg-black">
        <img
          src={heroImage}
          alt="Бюро Души — hero"
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
              <p className="font-medium text-[14px] text-[rgba(51,51,51,0.6)] leading-[1.2] tracking-[-0.14px]">
                {context.title}
              </p>
              <p className="text-size-m text-neutral-900 whitespace-pre-line">
                {context.content}
              </p>
            </section>

            <section className="flex flex-col gap-[16px]">
              <p className="font-medium text-[14px] text-[rgba(51,51,51,0.6)] leading-[1.2] tracking-[-0.14px]">
                {process.title}
              </p>
              <p className="text-size-m text-neutral-900">
                {process.content}
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Structure blocks — each block as a row with dividers */}
      <div className="w-full max-w-[690px] mx-auto">
        <div className="bg-[#f3f3f3] rounded-[10px]">
          {structure.blocks.map((block, i) => (
            <div key={i}>
              <div className="grid grid-cols-2 gap-[24px] items-start max-lg:grid-cols-1">
                <div className="flex flex-col gap-[8px] p-5">
                  <p className="text-[18px] font-semibold text-neutral-900 leading-[1.2]">
                    {block.title}
                  </p>
                  <p className="text-[14px] text-neutral-900 leading-[1.4]">
                    {block.text}
                  </p>
                </div>
                <img
                  src={block.image}
                  alt={block.title}
                  loading="lazy"
                  className={`w-full h-auto max-lg:px-5 ${i === 0 ? "" : "-mt-5 max-lg:mt-0"}`}
                />
              </div>
              {i < structure.blocks.length - 1 && (
                <div
                  className="h-3.5 w-full relative z-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(-45deg, #FF85E3 10%, transparent 10%, transparent 50%, #FF85E3 50%, #FF85E3 60%, transparent 60%)",
                    backgroundSize: "8px 8px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* After structure text */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 pt-[64px] pb-[24px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <p className="text-size-m text-neutral-900">
              {afterStructure}
            </p>
          </div>
        </div>
      </div>

      {/* Key pages image */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group relative block w-full rounded-[10px] overflow-hidden cursor-pointer"
            >
              <img
                src={keyPagesImage}
                alt="Архитектура и ключевые страницы"
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[rgba(243,243,243,0.8)] backdrop-blur-[6px] opacity-0 group-hover:opacity-100 transition-opacity max-lg:hidden">
                <span className="font-medium text-[14px] text-neutral-900">
                  Посмотреть
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-hidden"
          onClick={(e) => { if (e.target === e.currentTarget) setLightboxOpen(false); }}
        >
          <TransformWrapper
            initialScale={isMobile ? 3 : 1.5}
            minScale={0.5}
            maxScale={8}
            centerOnInit
            wheel={{ step: 0.15 }}
            panning={{ velocityDisabled: false }}
          >
            <LightboxControls onClose={() => setLightboxOpen(false)} />
            <TransformComponent
              wrapperStyle={{ width: "100%", height: "100vh" }}
              contentStyle={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img
                src="/images/bureau-dushi/key-pages-full.svg"
                alt="Полная схема архитектуры"
                className="max-h-[90vh] w-auto"
                draggable={false}
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      )}

      {/* After key pages text */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 pt-[64px] pb-[24px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <p className="text-size-m text-neutral-900">
              {afterKeyPages}
            </p>
          </div>
        </div>
      </div>

      {/* Problem / Solution cards */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px] pb-[64px]">
        <div className="grid grid-cols-4 max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[24px] max-lg:gap-[50px]">
            {problemSolutions.map((ps, i) => (
              <div key={i} className="flex items-stretch gap-[16px] max-lg:flex-col max-lg:gap-[24px]">
                <div className="flex-1 bg-[#f3f3f3] rounded-[10px] p-[16px]">
                  <p className="text-size-sm text-neutral-900 font-medium">
                    Проблема / запрос
                  </p>
                  <p className="text-size-sm  leading-5 text-neutral-900">
                    {ps.problem}
                  </p>
                </div>
                <img
                  src="/images/bureau-dushi/arrow-right.svg"
                  alt=""
                  className="w-[38px] h-[15px] shrink-0 self-center max-lg:rotate-90"
                />
                <div className="flex-1 bg-[#f3f3f3] rounded-[10px] p-[16px]">
                  <p className="text-size-sm  text-neutral-900 font-medium">
                    {i < 2 ? "Предложение / решение" : "Гипотеза решения"}
                  </p>
                  <p className="text-size-sm leading-5  text-neutral-900">
                    {ps.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual system text */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 pb-[64px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <p className="text-size-m text-neutral-900">
              {visualSystem}
            </p>
          </div>
        </div>
      </div>

      {/* Референсы */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[16px]">
            <p className="font-medium text-[14px] text-[rgba(51,51,51,0.6)] leading-[1.2] tracking-[-0.14px]">
              Референсы
            </p>
            <img
              src={referencesImage}
              alt="Референсы"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Визуал */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px] py-[32px]">
        <div className="grid grid-cols-4 max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[16px]">
            <p className="font-medium text-[14px] text-[rgba(51,51,51,0.6)] leading-[1.2] tracking-[-0.14px]">
              Визуал
            </p>
            <img
              src={wireframesImage}
              alt="Визуальная система"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Результат */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px] py-[32px]">
        <div className="grid grid-cols-4 max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <p className="font-medium text-[14px] text-[rgba(51,51,51,0.6)] leading-[1.2] tracking-[-0.14px]">
              Результат:
            </p>
          </div>
        </div>
      </div>

      {/* Dark block — video + phone screens */}
      <section className="w-full bg-black">
        {/* Video */}
        <div className="flex justify-center py-[44px] max-lg:pt-[24px] max-lg:pb-[54px] px-[24px]">
          <LazyVideo videoId={darkBlock.videoId} background />
        </div>

        {/* Phone screenshots */}
        <div className="w-full max-w-[1440px] mx-auto px-[24px]">
          <div className="grid grid-cols-4 max-lg:grid-cols-1">
            <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 pb-[64px]">
              <div className="flex items-end justify-between gap-[12px]">
                {darkBlock.phoneImages.map((src, i) => (
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
