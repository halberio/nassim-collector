import React from "react";
import gsap from "gsap";

export default function Images() {
  React.useEffect(() => {
    gsap.fromTo(
      ".animated",
      {
        x: -100,
        opacity: 0,
      },
      { scale: 1, x: 0, opacity: 1, ease: "elastic.out(.4, 0.3)", duration: 2 }
    );
  }, []);
  return (
    <>
      <img
        className="gift-bbox gift-box2 animated"
        src={require("../../img/gift-box-1.png")}
        alt="Nassim gift box"
      />
      <img
        className="gift-box animated"
        src={require("../../img/gift-box-2.png")}
        alt="Nassim gift box"
      />

      <img
        className="peche image2 animated"
        src={require("../../img/peche.png")}
        alt="Nassim gift box"
      />

      <img
        className="noix image3 animated"
        src={require("../../img/noix.png")}
        alt="Nassim gift box"
      />

      <img
        className="pomme image animated"
        src={require("../../img/pomme.png")}
        alt="Nassim gift box"
      />

      <img
        className="vanille image2 animated"
        src={require("../../img/vanille.png")}
        alt="Nassim gift box"
      />

      <img
        className="fraise image2 animated"
        src={require("../../img/fraise.png")}
        alt="Nassim gift box"
      />

      <img
        className="cerise image2 animated"
        src={require("../../img/cerise.png")}
        alt="Nassim gift box"
      />

      <img
        className="berries image animated"
        src={require("../../img/berries.png")}
        alt="Nassim gift box"
      />
    </>
  );
}
