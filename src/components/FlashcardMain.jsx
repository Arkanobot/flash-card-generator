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
  };
  const { active } = useSelector((state) => state.active);
  const dispatch = useDispatch();

  const createNew = (
    <div className="flashCardCreator">
      <FlashCardCreator />
    </div>
  );

  const myFlashcard = (
    <div className="myFlashCard">
      <MyFlashCardPage />
    </div>
  );

  const body = () => {
    switch (sections[active]) {
      case sections.createNew:
        return createNew;

      case sections.myFlashcard:
        return myFlashcard;

      default:
        return null;
    }
  };

  return (
    <div className="flashCardMain">
      <div className="editor__header flex border-black border-solid border-b-2">
        {Object.keys(sections)?.map((key) => (
          <div
            className={`editor__sectionHeader mr-6 text-2xl font-semibold border-solid border-b-4 ${
              active === key ? "border-red-700" : ""
            }`}
            key={key}
            onClick={() => dispatch(activetab(key))}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className="editor__body">{body()}</div>
    </div>
  );
}

export default FlashcardMain;
