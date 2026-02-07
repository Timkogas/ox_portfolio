import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import Footer from "@/components/footer";
import { drugoeData } from "./drugoe-data";

export default function DrugoePage() {
  const { projects } = drugoeData;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>Другое | Оксана Бакулина</title>
        <meta
          name="description"
          content="Учебные проекты. Портфолио продуктового дизайнера."
        />
      </Helmet>

      {/* Breadcrumbs */}
      <div className="w-full max-w-[1440px] mx-auto px-[24px] pt-[17px] pb-[17px]">
        <div className="flex items-center gap-[10px] text-size-s">
          <Link to="/" className="text-neutral-900 hover:underline">
            О себе
          </Link>
          <span className="text-[rgba(51,51,51,0.06)]">/</span>
          <span className="text-neutral-900">Другое</span>
        </div>
      </div>

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

          {/* Dark block — placeholder */}
          <div
            className="w-full bg-black"
            style={{ height: `${project.darkBlock.height}px` }}
          />
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
