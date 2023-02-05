import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mobileVal } from "../redux/isMobile";

import TitleCard from "./TitleCard";

export default function MyFlashCardPage() {
  const { isMobile } = useSelector((state) => state.mobile);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 900;
        if (ismobile !== isMobile) dispatch(mobileVal(ismobile));
      },
      false
    );
  }, [isMobile, dispatch]);
  // calling the cards store for data
  const { cards } = useSelector((state) => state.cards);
  const flashCards = Object.values(cards);

  return (
    <div className={` grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-1`}>
      {flashCards.map((card) => {
        return (
          //return title card component
          <TitleCard
            title={card.name}
            img={card.img}
            desc={card.desc}
            id={card.id}
          />
        );
      })}
    </div>
  );
}
