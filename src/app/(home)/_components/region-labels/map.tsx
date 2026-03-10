"use client";

import jsVectorMap from "jsvectormap";
import { useEffect, useRef } from "react";

import "@/js/us-aea-en";

export default function Map() {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    mapRef.current = new jsVectorMap({
      selector: "#mapOne",
      map: "us_aea_en",
      zoomButtons: true,
      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },
      regionLabelStyle: {
        initial: {
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },
      labels: {
        regions: {
          render(code: string) {
            return code.split("-")[1];
          },
        },
      },
    });

    return () => {
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="h-auto min-h-[300px] lg:min-h-[422px]">
      <div id="mapOne" className="mapOne map-btn" />
    </div>
  );
}
