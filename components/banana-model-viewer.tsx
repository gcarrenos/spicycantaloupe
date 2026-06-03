"use client";

import { useEffect, useState } from "react";

const MODEL_SRC = "/models/banana/banana.glb";

export function BananaModelViewer() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void import("@google/model-viewer").then(() => setReady(true));
  }, []);

  if (!ready) {
    return (
      <div className="flex h-full min-h-[280px] items-center justify-center text-sm text-muted">
        Loading 3D preview…
      </div>
    );
  }

  return (
    <model-viewer
      src={MODEL_SRC}
      alt="3D banana model preview"
      camera-controls
      touch-action="pan-y"
      auto-rotate
      rotation-per-second="18deg"
      shadow-intensity="1"
      exposure="1.1"
      environment-image="neutral"
      className="model-viewer-embed h-full w-full rounded-2xl"
    />
  );
}
