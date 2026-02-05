import { homeData } from "./home-data";
import Footer from "@/components/footer";

export default function HomePage() {
  const { hero, links, projects } = homeData;

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-semibold text-neutral-900 underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
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
                className="group block no-underline"
              >
                <div className="relative bg-black h-[338px] overflow-hidden max-lg:h-[250px] w-full">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
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

      <Footer />
    </div>
  );
}
