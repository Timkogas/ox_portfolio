import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import { bureauDushiData } from "./bureau-dushi-data";

export default function BureauDushiPage() {
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
      <section className="w-full h-[268px]">
        <img
          src={heroImage}
          alt="Бюро Души — hero"
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

      {/* Structure diagram — blocks + sitemap */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <div className="flex gap-[12px] max-lg:flex-col">
              {/* Text blocks */}
              <div className="flex flex-col gap-[24px] flex-1">
                {structure.blocks.map((block, i) => (
                  <div key={i} className="flex flex-col gap-[8px]">
                    <p className="text-[14px] font-semibold text-neutral-900 leading-[1.2]">
                      {block.title}
                    </p>
                    <p className="text-[14px] text-neutral-900 leading-[1.2]">
                      {block.text}
                    </p>
                  </div>
                ))}
              </div>
              {/* Sitemap image */}
              <div className="w-[339px] shrink-0 max-lg:w-full">
                <img
                  src={structure.sitemapImage}
                  alt="Структура страницы"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* After structure text */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 py-[64px] max-lg:grid-cols-1">
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
            <img
              src={keyPagesImage}
              alt="Архитектура и ключевые страницы"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* After key pages text */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px]">
        <div className="grid grid-cols-4 py-[64px] max-lg:grid-cols-1">
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
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 flex flex-col gap-[24px]">
            {problemSolutions.map((ps, i) => (
              <div key={i} className="grid grid-cols-2 gap-[12px] max-lg:grid-cols-1">
                <div className="bg-[#f3f3f3] rounded-[10px] p-[16px] flex flex-col gap-[8px]">
                  <p className="text-[12px] font-medium text-[rgba(51,51,51,0.6)] leading-[1.2]">
                    {i < 2 ? "Проблема / запрос" : "Проблема / запрос"}
                  </p>
                  <p className="text-[14px] text-neutral-900 leading-[1.2]">
                    {ps.problem}
                  </p>
                </div>
                <div className="bg-[#f3f3f3] rounded-[10px] p-[16px] flex flex-col gap-[8px]">
                  <p className="text-[12px] font-medium text-[rgba(51,51,51,0.6)] leading-[1.2]">
                    {i < 2 ? "Предложение / решение" : "Гипотеза решения"}
                  </p>
                  <p className="text-[14px] text-neutral-900 leading-[1.2]">
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

      {/* Dark block — placeholder */}
      <div
        className="w-full bg-black"
        style={{ height: `${darkBlock.height}px` }}
      />

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
