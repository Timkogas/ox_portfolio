import { useState } from "react";
import { homeData } from "./home-data";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import { prefetchVideos } from "@/lib/prefetch-video";

export default function HomePage() {
  const { hero, links, projects } = homeData;
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader
        title="Оксана Бакулина — продуктовый дизайнер"
        description="Продуктовый дизайнер с опытом 2+ года: EdTech, e-commerce, сложные интерфейсы."
      />
      {/* Container with max-width 1390px and 25px side padding */}
      <div className="w-full max-w-[1390px] mx-auto px-[25px] pt-[100px] pb-[70px]">
        {/* Hero Section */}
        <section className="mb-[100px] max-lg:mb-12">
          <div className="flex gap-[12px] max-lg:flex-col max-lg:gap-6">
            {/* Image */}
            <div className="w-[338px] h-[558px] bg-neutral-800 shrink-0 max-lg:w-full max-lg:h-[400px]">
              {hero.imageUrl && (
                <img
                  src={hero.imageUrl}
                  alt={hero.name}
                  className="w-full h-full object-cover"
                  width={338}
                  height={558}
                />
              )}
            </div>

            {/* Content - aligned to top and bottom */}
            <div className="flex flex-col justify-between flex-1 max-lg:gap-8">
              {/* Top content */}
              <div>
                <h1 className="text-size-m mb-6 max-w-[500px]">
                  {hero.name}
                </h1>
                <p className="text-size-s text-neutral-900 max-w-[500px] whitespace-pre-line">
                  {hero.description}
                </p>
              </div>

              {/* Bottom links */}
              <div className="flex gap-[100px] max-lg:gap-8 max-lg:flex-wrap">
                {links.map((link) => {
                  const isEmail = link.href.startsWith("mailto:");
                  if (isEmail) {
                    const email = link.href.replace("mailto:", "");
                    return (
                      <span key={link.label} className="relative">
                        {copied && (
                          <span className="absolute -top-1 left-1/2 text-xs text-neutral-500 animate-toast-up pointer-events-none whitespace-nowrap">
                            Скопировано
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(email);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 1200);
                          }}
                          className="text-semibold text-neutral-900 underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 cursor-pointer"
                        >
                          {link.label}
                        </button>
                      </span>
                    );
                  }
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-semibold text-neutral-900 underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} (откроется в новой вкладке)`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid - Full width of container */}
        <section>
          <div className="grid grid-cols-2 gap-x-[12px] gap-y-[48px] max-lg:grid-cols-1 max-lg:gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.href}
                className="group block no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                onMouseEnter={prefetchVideos}
                onTouchStart={prefetchVideos}
              >
                <div className="relative bg-black h-[338px] overflow-hidden max-lg:h-[250px] w-full">
                  {project.images ? (
                    <div className="relative w-full h-full">
                      {project.images.map((img, i) => (
                        <img
                          key={i}
                          src={img.src}
                          alt={i === 0 ? project.title : ""}
                          loading="lazy"
                          className={`absolute top-0 bottom-0 h-full object-contain ${
                            img.position === "center"
                              ? "right-[6px] max-lg:right-auto max-lg:left-[calc(50%-38px)] max-lg:-translate-x-1/2"
                              : img.position === "left"
                                ? "left-0"
                                : "right-[8px]"
                          }`}
                        />
                      ))}
                    </div>
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-black" />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-size-m">
                      Подробнее →
                    </span>
                  </div>
                </div>
                <h3 className="text-semibold text-neutral-900 mt-[16px]">
                  {project.title}
                </h3>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Footer with same container structure */}
      <div className="w-full max-w-[1390px] mx-auto px-[25px] pb-[70px]">
        <Footer />
      </div>
    </div>
  );
}
