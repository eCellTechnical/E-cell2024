import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export default function GlobeComponent() {
  const [countries, setCountries] = useState({ features: [] });
  const [line, setLine] = useState({ flights: [] });
  const [lineHistory, setLineHistory] = useState({ airports: [] });

  useEffect(() => {
    fetch("/data/custom.geojson")
      .then((res) => res.json())
      .then(setCountries);
    fetch("/data/line.json")
      .then((res) => res.json())
      .then(setLine);
    fetch("/data/LineHistory.json")
      .then((res) => res.json())
      .then(setLineHistory);
  }, []);

  const globeRef = useRef();

  useEffect(() => {
    const globe = globeRef.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = -3;
  }, []);

  return (
    <Globe
      ref={globeRef}
      height={window.innerHeight}
      width={800}
      waitForGlobeReady={true}
      backgroundColor={"#00000000"}
      animateIn={true}
      globeImageUrl="/assets/color.jpg"
      enableGlobeGlow={true}
      hexPolygonsData={countries.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.4}
      showAtmosphere={true}
      atmosphereColor={"#FFF"}
      atmosphereAltitude={0.3 / 2}
      hexPolygonColor={(e) => {
        if (["INDIA"].includes(e.properties.ISO_A3)) {
          return "rgba(255,255,255, 1)";
        } else return "rgba(255,255,255, 0.7)";
      }}
      arcsData={line.flights}
      arcColor={(e) => (e.status ? "rgb(238,199,42)" : "rgba(255,147,22,0.78)")}
      arcAltitude={(e) => e.arcAlt}
      arcStroke={(e) => (e.status ? 0.5 : 0.3)}
      arcDashLength={0.9}
      arcDashGap={4}
      arcDashAnimateTime={1000}
      arcsTransitionDuration={1000}
      arcDashInitialGap={(e) => e.order * 1}
      labelsData={lineHistory.airports}
      labelColor={() => "rgb(255,147,22)"}
      labelDotOrientation={(e) => (e.text === "ALA" ? "top" : "right")}
      labelDotRadius={0.3}
      labelSize={(e) => e.size}
      labelText={"city"}
      labelResolution={6}
      labelAltitude={0.01}
      pointsData={lineHistory.airports}
      pointColor={() => "#FFF"}
      pointsMerge={true}
      pointAltitude={0.07}
      pointRadius={0.05}
    ></Globe>
  );
}
