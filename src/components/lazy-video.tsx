import { useRef, useState, useEffect } from "react";

interface LazyVideoProps {
  videoId: string;
  aspectRatio?: string;
  className?: string;
  /** Style overrides for the iframe (e.g. width/margin hacks for phone crops) */
  iframeStyle?: React.CSSProperties;
  iframeClassName?: string;
  background?: boolean;
  /** Load immediately without waiting for IntersectionObserver */
  eager?: boolean;
  /** Blurred placeholder image shown until the player has loaded (instead of a black screen) */
  poster?: string;
}

export default function LazyVideo({
  videoId,
  aspectRatio = "690/398",
  className = "w-full max-w-[690px]",
  iframeStyle,
  iframeClassName = "w-full h-full",
  background = false,
  eager = false,
  poster,
}: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(eager);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  const params = background
    ? "background=1&quality=720&preload=0&playsinline=1&dnt=1"
    : "quality=720&preload=0&muted=1&dnt=1";

  return (
    <div
      ref={ref}
      className={`${className} bg-black${poster ? " relative overflow-hidden" : ""}`}
      style={{ aspectRatio }}
    >
      {visible && (
        <iframe
          src={`https://kinescope.io/embed/${videoId}?${params}`}
          className={iframeClassName}
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
          style={{ border: "none", ...iframeStyle }}
          onLoad={() => setLoaded(true)}
        />
      )}
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={`pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover blur-xl transition-opacity duration-500 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </div>
  );
}
