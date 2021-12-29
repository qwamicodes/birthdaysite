import React from "react";

const Boxes = ({
  prize,
  isCovered,
  setIsCovered,
  count,
  setCount,
  click,
  setBoxPrize,
}) => {
  setBoxPrize(prize);
  return (
    <div
      onClick={click}
      className={
        isCovered ? "presents__box presents__box--covered" : "presents__box "
      }
    >
      {isCovered ? null : prize}
    </div>
  );
};

export default Boxes;
