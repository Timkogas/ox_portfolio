import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import { stempsKKData } from "./stemps-kk-data";

export default function StempsKKPage() {
  const {
    task,
    process,
    hypotheses,
    beforeEditor,
    darkBlockHeight,
    detailsLabel,
    detailsImages,
    detailsAnnotations,
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
          { label: "Подпроект" },
        ]}
      />

      {/* Hero — gray block */}
      <section className="w-full h-[515px] bg-[#ebebeb]" />

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

      {/* Gray section — editor screenshots + annotations */}
      <section className="w-full bg-[rgba(51,51,51,0.06)]">
        <div className="w-full max-w-[1440px] mx-auto px-[24px] relative">
          <div className="grid grid-cols-4 max-lg:grid-cols-1">
            <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 py-[44px]">
              {/* Editor screenshot */}
              <img
                src={detailsImages.editor}
                alt="Редактор конструктора курсов"
                loading="lazy"
                className="w-full h-auto rounded-[10px]"
              />

              {/* Templates panel — overlapping below */}
              <div className="relative mt-[-80px] max-lg:mt-[16px]">
                <img
                  src={detailsImages.templatesPanel}
                  alt="Панель шаблонов"
                  loading="lazy"
                  className="w-[62%] h-auto rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),4px_2px_8px_0px_rgba(0,0,0,0.06)] max-lg:w-full"
                />
              </div>
            </div>
          </div>

          {/* Annotations — desktop only */}
          <div className="hidden lg:block">
            <p className="absolute left-[24px] top-[60px] text-[14px] text-neutral-900 leading-[1.2]">
              Быстрый доступ к предпросмотру
            </p>
            <p className="absolute left-[24px] top-[240px] w-[240px] text-[14px] text-neutral-900 leading-[1.2]">
              {detailsAnnotations.left}
            </p>
            <p className="absolute right-[24px] top-[154px] w-[223px] text-[14px] text-neutral-900 leading-[1.2]">
              {detailsAnnotations.topRight}
            </p>
            <p className="absolute right-[150px] top-[430px] w-[223px] text-[14px] text-neutral-900 leading-[1.2]">
              {detailsAnnotations.bottomRight}
            </p>
            <p className="absolute left-[50%] top-[630px] w-[223px] text-[14px] text-neutral-900 leading-[1.2]">
              {detailsAnnotations.bottomCenter}
            </p>
          </div>
        </div>

        {/* Structure text — inside gray section */}
        <div className="w-full max-w-[1440px] mx-auto px-[24px] pb-[64px]">
          <div className="grid grid-cols-4 max-lg:grid-cols-1">
            <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
              <p className="text-[14px] text-neutral-900 leading-[1.2]">
                {detailsAnnotations.structureText.split("курс \u2192")[0]}
                <span className="font-medium">
                  курс &rarr; версия курса &rarr; модуль &rarr; тип
                  урока &rarr; блок
                </span>
              </p>
            </div>
          </div>
        </div>
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

      {/* Dark block — video placeholder */}
      <div
        className="w-full bg-[#1d1d22]"
        style={{ height: `${darkBlockHeight}px` }}
      />

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
              <div className="flex items-end justify-between gap-[12px] max-lg:flex-col max-lg:items-center max-lg:gap-[24px]">
                {mobileImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Мобильная версия ${i + 1}`}
                    loading="lazy"
                    className="w-[174px] h-auto max-lg:w-[200px]"
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
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="flex flex-col gap-[20px] items-center">
          <img
            src={feedbackMockup}
            alt="Шаблоны обратной связи"
            loading="lazy"
            className="w-full max-w-[690px] h-auto"
          />

          {/* Metrics cards */}
          <div className="grid grid-cols-5 gap-[20px] w-full max-lg:grid-cols-2">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-white border border-[#f3f3f4] rounded-[10px] p-[20px] flex flex-col gap-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),4px_2px_8px_0px_rgba(0,0,0,0.06)]"
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
