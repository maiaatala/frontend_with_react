import React from "react";
import SvgBrazilianStates from "./SVG/BrazilianStates";
import SvgBulletsWeaponsSvgrepoCom from "./SVG/BulletsWeaponsSvgrepoCom";
import SvgBrazilMatoGrossoLocationMap from "./SVG/BrazilMatoGrossoLocationMap";
// ! npx @svgr/cli src/Map/SVG --out-dir scr/Map --icon

const MapApp = () => {
  // const container = useRef

  const handleClick = (e) => {
    // console.log(e.target.id);
    // console.log(e.target.id === "Brazilian_States_svg__path56");
    if (e.target.id === "Brazilian_States_svg__path56") {
      window.open("https://en.wikipedia.org/wiki/Mato_Grosso", "_blank");
    } else if (e.target.id === "Brazilian_States_svg__path80") {
      window.open(
        "https://en.wikipedia.org/wiki/Federal_District_(Brazil)",
        "_blank"
      );
    } else if (e.target.id === "Brazilian_States_svg__path54") {
      window.open("https://en.wikipedia.org/wiki/Tocantins", "_blank");
    } else if (e.target.id === "Brazilian_States_svg__path58") {
      window.open("https://en.wikipedia.org/wiki/Goi%C3%A1s", "_blank");
    } else if (e.target.id === "Brazilian_States_svg__path60") {
      window.open("https://en.wikipedia.org/wiki/Mato_Grosso_do_Sul", "_blank");
    } else {
      console.log("mope");
    }
  };

  return (
    <>
      <div className="map">
        <SvgBrazilianStates onClick={handleClick} />
        {/* <SvgBrazilMatoGrossoLocationMap /> */}
        {/* <SvgBulletsWeaponsSvgrepoCom /> */}
      </div>
      <div className="bullets"></div>
    </>
  );
};

export default MapApp;
