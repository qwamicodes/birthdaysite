import React, { useEffect } from "react";

const Boxes = ({ prize, isCovered, click, setBoxPrize }) => {
  useEffect(() => {
    setBoxPrize(prize);
  }, [setBoxPrize, prize]);

  return (
    <div
      className={
        isCovered ? "presents__box presents__box--covered" : "presents__box "
      }
      onClick={click}
    >
      {isCovered ? null : prize}
    </div>
  );
};

export default Boxes;
