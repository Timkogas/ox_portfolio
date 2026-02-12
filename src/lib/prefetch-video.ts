let preconnected = false;

/**
 * On hover/touch of a project card, preconnect to all kinescope domains
 * and preload the player script. This shaves ~300-500ms off video load
 * because DNS+TCP+TLS handshakes happen before the page even loads.
 */
export function prefetchVideos() {
  if (preconnected) return;
  preconnected = true;

  // Preconnect to kinescope domains used during video playback
  const domains = [
    "https://kinescope.io",
    "https://cdn.kinescope.io",
    "https://player.kinescope.io",
    "https://fast.kinescope.io",
  ];

  for (const href of domains) {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = href;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }

  // Preload the player script so it's cached when iframe loads
  const script = document.createElement("link");
  script.rel = "preload";
  script.as = "script";
  script.href = "https://player.kinescope.io/latest/iframe.player.js";
  document.head.appendChild(script);
}
