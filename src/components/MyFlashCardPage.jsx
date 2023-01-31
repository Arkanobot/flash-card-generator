import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mobileVal } from "../redux/isMobile";

import TitleCard from "./TitleCard";

function MyFlashCardPage() {
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
  console.log(flashCards);

  // const flashCards = [
  //   {
  //     name: "Name Card",
  //     img: "https://images.unsplash.com/photo-1595790217471-cc501a17e15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80",
  //     description:
  //       "description of the card and the term bla bla blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  //   },
  //   {
  //     name: "Name Card",
  //     img: "https://images.unsplash.com/photo-1595790217471-cc501a17e15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80",
  //     description: "description of the card and the term bla bla bla",
  //   },
  //   {
  //     name: "Name Card",
  //     img: "https://images.unsplash.com/photo-1595790217471-cc501a17e15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80",
  //     description: "description of the card and the term bla bla bla",
  //   },
  //   {
  //     name: "Name Card",
  //     img: "https://images.unsplash.com/photo-1595790217471-cc501a17e15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80",
  //     description: "description of the card and the term bla bla bla",
  //   },
  //   {
  //     name: "Name Card",
  //     img: "https://images.unsplash.com/photo-1595790217471-cc501a17e15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80",
  //     description: "description of the card and the term bla bla bla",
  //   },
  //   {
  //     name: "Name Card",
  //     img: "https://images.unsplash.com/photo-1595790217471-cc501a17e15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80",
  //     description: "description of the card and the term bla bla bla",
  //   },
  // ]; //dummy data
  return (
    <div className={` grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-1`}>
      {flashCards.map((card) => {
        return (
          <TitleCard title={card.name} img={card.img} desc={card.description} />
        );
      })}
    </div>
  );
}

export default MyFlashCardPage;
