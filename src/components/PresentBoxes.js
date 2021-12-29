import React, { useEffect, useState } from "react";
import presents from "../json/presents.json";
import Boxes from "./Boxes";
import PresentBox from "./PresentBox";

const PresentBoxes = ({ isAuth }) => {
  const [presentsData, setPresentsData] = useState();
  const [isCovered, setIsCovered] = useState(true);
  const [count, setCount] = useState(0);
  const [selPrize, setSelPrize] = useState();
  const [boxPrize, setBoxPrize] = useState();

  const handleBoxSel = (present) => {
    if (count > 1) {
      return;
    }

    setIsCovered(!isCovered);
    setCount((old) => old + 1);
    setSelPrize(present);
  };

  useEffect(() => {
    if (!isAuth) {
      return;
    }

    const shuffledArray = presents.presents.sort((a, b) => 0.5 - Math.random());

    setPresentsData(shuffledArray);
  }, [isAuth]);

  return (
    <div
      className={
        selPrize ? "presents__boxes " : "presents__boxes presents__grid"
      }
    >
      {selPrize ? (
        <PresentBox prize={boxPrize} />
      ) : (
        presentsData &&
        presentsData.map((present, index) => (
          <Boxes
            click={() => handleBoxSel(present)}
            key={index}
            prize={present.prize}
            isCovered={isCovered}
            setIsCovered={setIsCovered}
            count={count}
            setCount={setCount}
            setBoxPrize={setBoxPrize}
          />
        ))
      )}
    </div>
  );
};

export default PresentBoxes;
