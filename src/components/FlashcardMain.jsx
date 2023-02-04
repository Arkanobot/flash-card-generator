import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { activetab } from "../redux/activeTab";
//components
import FlashCardCreator from "./FlashCardCreator";
import MyFlashCardPage from "./MyFlashCardPage";

function FlashcardMain() {
  const sections = {
    createNew: "Create New",
    myFlashcard: "My Flashcard",
  }; // sections to store the values (name) of the sections
  const { active } = useSelector((state) => state.active); // state to store the current active section
  const dispatch = useDispatch(); // dispatch for react redux

  const createNew = (
    <div className="flashCardCreator">
      <FlashCardCreator />
    </div>
  ); // create new tab for rendering the flash card creator

  const myFlashcard = (
    <div className="myFlashCard">
      <MyFlashCardPage />
    </div>
  ); // flashcards tab to render the created flashcards

  const body = () => {
    switch (sections[active]) {
      case sections.createNew:
        return createNew;

      case sections.myFlashcard:
        return myFlashcard;

      default:
        return null;
    }
  }; // switch case for body so that it renders the active section function

  return (
    <div>
      <div className="flex border-black border-solid border-b-2">
        {Object.keys(sections)?.map(
          (
            key // returns the active Tab via body function
          ) => (
            <div
              className={`editor__sectionHeader mr-6 text-2xl font-semibold border-solid border-b-4 ${
                active === key ? "border-red-700" : ""
              }`}
              key={key}
              onClick={() => dispatch(activetab(key))} // stores the current active tab in redux in case the user wants to return back to the current active tab
            >
              {sections[key]}
            </div>
          )
        )}
      </div>
      <div className="editor__body">{body()}</div>
    </div>
  );
}

export default FlashcardMain;
