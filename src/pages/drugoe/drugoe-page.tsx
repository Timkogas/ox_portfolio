import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import LazyVideo from "@/components/lazy-video";
import { drugoeData } from "./drugoe-data";

export default function DrugoePage() {
  const { projects } = drugoeData;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader
        title="Другое | Оксана Бакулина"
        description="Учебные проекты. Портфолио продуктового дизайнера."
        breadcrumbs={[
          { label: "О себе", to: "/" },
          { label: "Другое" },
        ]}
      />

      {/* Projects */}
      {projects.map((project, index) => (
        <div key={index} className={index > 0 ? "mt-[64px]" : ""}>
          {/* Project title */}
          <div className="w-full max-w-[1440px] mx-auto px-[24px]">
            <div className="grid grid-cols-4 max-lg:grid-cols-1">
              <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1 py-[16px]">
                <p className="text-[14px] leading-[1.2] tracking-[-0.14px]">
                  <span className="font-semibold text-neutral-900">
                    {project.title}
                  </span>
                  {project.titleMuted && (
                    <span className="font-normal text-[rgba(51,51,51,0.6)]">
                      {" "}| {project.titleMuted}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Dark block with video */}
          <div className="w-full bg-black py-[64px] max-lg:py-[24px] flex justify-center px-[24px]">
            <LazyVideo videoId={project.videoId} aspectRatio="691/488" className="w-full max-w-[691px]" background eager={index === 0} />
          </div>

          {/* Images */}
          {project.images && (
            <div className="w-full bg-black flex justify-center gap-[11px] max-lg:flex-col max-lg:items-center max-lg:gap-[16px] pb-[64px] max-lg:pb-[24px] px-[24px]">
              {project.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  width={340}
                  height={196}
                  alt=""
                  loading="lazy"
                  className="max-lg:w-full max-lg:h-auto"
                />
              ))}
            </div>
          )}
        </div>
      ))}

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
