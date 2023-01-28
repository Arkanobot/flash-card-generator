import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function TitleCard(props) {
  //calling the store
  const navigate = useNavigate();

  const redirectFlashCardPage = () => {
    navigate("/flashcard-page");
  };
  return (
    <div className="titleCard flex flex-col rounded-lg border-2 py-14 px-8 bg-white shadow-lg shadow-gray text-center relative my-20 p-10 w-3/4 col-span-1 mx-10">
      <div
        className={`titleCard__image justify-center absolute -top-[100%] bottom-0 left-0 right-0 w-20 h-20 m-auto`}
      >
        <img
          src={props.img}
          alt={props.name}
          className="w-20 h-20 rounded-full"
        />
      </div>
      <div className="titleCard__title my-5 text-2xl font-bold truncate">
        {props.title}
      </div>
      <div className="titleCard__desc h-20 truncate whitespace-normal">
        {props.desc}
      </div>
      <button
        className="m-5 mt-10 p-3 border-2 border-solid border-red-700 rounded-md text-red-700 font-semibold text-lg"
        onClick={redirectFlashCardPage}
      >
        View Cards
      </button>
    </div>
  );
}

export default TitleCard;
