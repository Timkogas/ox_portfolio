import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import Footer from "@/components/footer";
import { stempsData } from "./stemps-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export default function StempsPage() {
  const {
    heroImage,
    projectInfo,
    context,
    process,
    pains,
    clients,
    structure,
    laptops,
    slider,
    results,
    betweenWork,
  } = stempsData;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>STEMPS — корпоративный университет | Оксана Бакулина</title>
        <meta name="description" content="Кейс STEMPS: образовательная онлайн-платформа для архитекторов, урбанистов и девелоперов. Продуктовый дизайн от исследования до релиза." />
      </Helmet>
      {/* Hero Image with Breadcrumbs Absolute */}
      <section className="relative w-full h-[268px] bg-[var(--stemps-hero)]">
        {heroImage ? (
          <img src={heroImage} alt="STEMPS — hero" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-size-m">
            Hero STEMPS
          </div>
        )}

        {/* Breadcrumbs Absolute Top with gradient */}
        <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-white from-0% via-white/95 via-80% to-transparent pt-4">
          <div className="w-full max-w-[1440px] mx-auto px-[25px]">
            <div className="grid grid-cols-4">
              <div className="col-start-1">
                <div className="flex items-center gap-[10px] text-size-s">
                  <Link to="/" className="text-neutral-900 hover:underline">О себе</Link>
                  <span className="text-neutral-400">/</span>
                  <span className="text-neutral-900">STEMPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Column Grid Container - max-w 1440px */}
      <div className="w-full max-w-[1440px] mx-auto px-[25px]">
        {/* Project Info Grid - 4 columns */}
        <section className="grid grid-cols-4 h-[58px] items-center max-lg:grid-cols-2">
          <div>
            <p className="text-[14px] text-neutral-900 text-semibold">
              Бренд: <br />{projectInfo.brand}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-neutral-900 text-semibold">
              Роль: <br />{projectInfo.role}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-neutral-900 text-semibold">
              Сфера: <br />{projectInfo.sphere}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-neutral-900 text-semibold">
              Год: <br />{projectInfo.year}
            </p>
          </div>
        </section>

        {/* Main Content - 4 column grid, content in columns 2-3 */}
        <div className="grid grid-cols-4 py-[64px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            {/* Context Section */}
            <section className="mb-[64px]">
              <p className="font-semibold text-[14px] text-[var(--stemps-muted-text)] mb-[16px]">
                {context.title}
              </p>
              <p className="text-size-m text-neutral-900 whitespace-pre-line">
                {context.content}
              </p>
            </section>

            {/* Process Section */}
            <section className="mb-[64px]">
              <p className="font-semibold text-[14px] text-[var(--stemps-muted-text)] mb-[16px]">
                {process.title}
              </p>
              <p className="text-size-m text-neutral-900">{process.content}</p>
            </section>

            {/* Pains Section */}
            <section className="mb-[64px]">
              <p className="text-size-m text-neutral-900 mb-[24px]">{pains.title}</p>
              <div className="space-y-[14px]">
                {/* First row - 3 cards */}
                <div className="grid grid-cols-3 gap-[12px] max-lg:grid-cols-1">
                  {pains.items.slice(0, 3).map((pain, index) => (
                    <div
                      key={index}
                      className={`bg-[var(--stemps-card-bg)] p-[20px] rounded-[14px] flex flex-col justify-between gap-4${index === 1 ? " pr-[19px]" : ""}`}
                    >
                      <p className="text-semibold text-neutral-900 text-[14px]">
                        {pain.title}
                      </p>
                      <p className={`text-[12px] text-neutral-900 leading-[1.2]${index === 0 ? " max-w-[170px]" : ""}`}>
                        <span className="font-semibold">Проблема бизнеса:</span> {pain.description}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Second row - 2 cards */}
                <div className="grid grid-cols-2 gap-[12px] max-lg:grid-cols-1">
                  {pains.items.slice(3, 5).map((pain, index) => (
                    <div
                      key={index + 3}
                      className="bg-[var(--stemps-card-bg)] p-[20px] rounded-[14px] flex flex-col gap-4"
                    >
                      <p className="text-semibold text-neutral-900 text-[14px]">
                        {pain.title}
                      </p>
                      <p className="text-[12px] text-neutral-900 leading-[1.2]">
                        <span className="font-semibold">Проблема бизнеса:</span> {pain.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Clients Section */}
            <section className="mb-[64px]">
              <p className="text-size-m text-neutral-900 mb-[24px]">
                {clients.title}
              </p>
              <div className="space-y-[12px]">
                {/* 3 Client cards */}
                <div className="grid grid-cols-3 gap-[12px] max-lg:grid-cols-1">
                  {clients.types.map((client, index) => (
                    <div key={index} className="bg-[var(--stemps-card-bg)] p-[20px] rounded-[14px]">
                      <p className="text-semibold text-neutral-900 text-[14px] leading-[1.2]">
                        {client.title} —{" "}
                        <span className="font-normal">{client.description}</span>
                      </p>
                    </div>
                  ))}
                </div>

                {/* Arrows */}
                <div className="grid grid-cols-3 gap-[12px] h-[37px]">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex justify-center items-center h-full">
                      <img
                        src="/images/arrow.svg"
                        alt=""
                        role="presentation"
                        className="h-full w-auto"
                      />
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="grid grid-cols-3 gap-[12px]">
                  {clients.types.map((client, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div className="flex gap-2 justify-center">
                        {client.badges.slice(0, 2).map((badge, badgeIndex) => (
                          <span
                            key={badgeIndex}
                            className="px-[14px] py-[5px] bg-[var(--stemps-card-bg)] border border-[var(--stemps-accent)] rounded-full text-[12px] text-[var(--stemps-accent)]"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      {client.badges.length > 2 && (
                        <div className="flex gap-2 justify-center">
                          {client.badges.slice(2, 4).map((badge, badgeIndex) => (
                            <span
                              key={badgeIndex + 2}
                              className="px-[14px] py-[5px] bg-[var(--stemps-card-bg)] border border-[var(--stemps-accent)] rounded-full text-[12px] text-[var(--stemps-accent)]"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Structure Section */}
            <section className="mb-[64px]">
              <p className="text-size-m text-neutral-900">{structure.content}</p>
            </section>

            {/* Laptops Section */}
            <section className="space-y-[36px]">
              {laptops.map((laptop, index) => (
                <div key={index} className="space-y-4">
                  <div className="bg-[var(--stemps-laptop-bg)] rounded-[10px] py-[60px] px-[105px] flex items-center justify-center">
                    {laptop.image ? (
                      <img
                        src={laptop.image}
                        alt={laptop.title}
                        loading="lazy"
                        className="w-full h-auto object-contain"
                      />
                    ) : (
                      <div className="text-neutral-400 text-size-s">
                        Ноутбук {index + 1}: {laptop.title}
                      </div>
                    )}
                  </div>
                  <div className="py-4">
                    <p className="text-semibold text-neutral-900 text-[14px] mb-2">
                      {laptop.title}{" "}
                      <span className="font-normal">— {laptop.description}</span>
                    </p>
                    <p className="text-[14px] text-neutral-900">
                      <span className="text-semibold">Роль:</span> {laptop.role}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>

      {/* Gray Section with Slider - Full Width */}
      <section className="w-full bg-[var(--stemps-section-bg)] py-[64px]">
        {/* Slider Dots - centered in grid */}
        <div className="w-full max-w-[1440px] mx-auto mb-[64px] px-[25px]">
          <div className="grid grid-cols-4">
            <div className="col-start-2 col-span-2">
              <div className="flex gap-2 justify-center">
                {slider.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-[6px] h-[6px] rounded-full transition-colors ${current === index ? "bg-white" : "bg-white/30"
                      }`}
                    aria-label={`Перейти к слайду ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slider Content - Full Width */}
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {slider.map((slide, index) => (
              <CarouselItem key={index} className="pl-0 basis-full">
                <div className="w-full max-w-[1440px] mx-auto px-[25px]">
                  <div className="grid grid-cols-4 max-lg:grid-cols-1">
                    <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
                      <div className="flex flex-col gap-4">
                        <div className="rounded-[10px] overflow-hidden">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            loading="lazy"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="py-4">
                          <p className="text-semibold text-neutral-900 text-[14px] mb-2">
                            {slide.title}{" "}
                            <span className="font-normal">— {slide.description}</span>
                          </p>
                          <p className="text-[14px] text-neutral-900">
                            <span className="text-semibold">Роль:</span> {slide.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Results and Footer Content */}
      <div className="w-full max-w-[1440px] mx-auto px-[25px]">
        <div className="grid grid-cols-4 py-[64px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            {/* Results Section */}
            <section className="mb-[64px]">
              <p className="font-semibold text-[14px] text-[var(--stemps-muted-text)] mb-[16px]">
                {results.title}
              </p>
              <ul className="space-y-2">
                {results.items.map((item, index) => (
                  <li key={index} className="text-size-m text-neutral-900 leading-[1.2]">
                    • {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Between Work Section */}
            <section className="mb-[64px]">
              <p className="font-semibold text-[14px] text-[var(--stemps-muted-text)] mb-[16px]">
                {betweenWork.title}
              </p>
              <div className="space-y-4">
                {betweenWork.images.map((image, index) => (
                  <div key={index} className="relative">
                    {image.src ? (
                      <>
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="w-full h-auto object-cover rounded"
                        />

                        {/* Стрелка и текст */}
                        {image.arrow && (
                          <>
                            <img
                              src={`/images/stemps/arrow-${image.arrow.direction}.svg`}
                              alt=""
                              role="presentation"
                              loading="lazy"
                              className="absolute max-lg:hidden"
                              style={{
                                left: `${image.arrow.position.x}%`,
                                top: `${image.arrow.position.y}%`,
                                width: image.arrow.width
                                  ? `${image.arrow.width}%`
                                  : undefined,
                              }}
                            />
                            <p
                              className="absolute w-[33%] text-[14px] text-neutral-900 leading-[1.4] max-lg:static max-lg:w-full max-lg:mt-4"
                              style={{
                                left: `${image.text?.position.x}%`,
                                top: `${image.text?.position.y}%`,
                              }}
                            >
                              {image.caption}
                            </p>
                          </>
                        )}
                      </>
                    ) : (
                      <div className="w-full bg-neutral-200 rounded h-[300px] flex items-center justify-center text-neutral-400 text-size-s p-8 text-center">
                        Фото {index + 1}: {image.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer in grid structure */}
        <div className="grid grid-cols-4 pb-[70px] max-lg:grid-cols-1">
          <div className="col-start-2 col-span-2 max-lg:col-start-1 max-lg:col-span-1">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
