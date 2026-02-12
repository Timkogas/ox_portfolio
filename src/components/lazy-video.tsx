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
}

export default function LazyVideo({
  videoId,
  aspectRatio = "690/398",
  className = "w-full max-w-[690px]",
  iframeStyle,
  iframeClassName = "w-full h-full",
  background = false,
  eager = false,
}: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(eager);

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
    ? "background=1&quality=360&preload=1&playsinline=1"
    : "quality=360&preload=1&muted=1";

  return (
    <div
      ref={ref}
      className={`${className} bg-black`}
      style={{ aspectRatio }}
    >
      {visible && (
        <iframe
          src={`https://kinescope.io/embed/${videoId}?${params}`}
          className={iframeClassName}
          allow="autoplay *; fullscreen; encrypted-media"
          allowFullScreen
          style={{ border: "none", ...iframeStyle }}
        />
      )}
    </div>
  );
}
