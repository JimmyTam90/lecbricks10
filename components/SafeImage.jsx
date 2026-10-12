"use client";
import { useState } from "react";

// Plain <img> with a graceful fallback. Never swaps in a different product's image.
export default function SafeImage({ src, alt, className = "", fit = "cover", priority = false }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div role="img" aria-label={`${alt} (image unavailable)`} className={`stud-bg flex items-center justify-center text-sm text-slate-400 ${className}`}>
        Image unavailable
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={800}
      height={600}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer-when-downgrade"
      onError={() => setFailed(true)}
      className={`${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
    />
  );
}
