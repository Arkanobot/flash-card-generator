import React, { useState } from "react";

//components
import FlashCardCreator from "./FlashCardCreator";
import MyFlashCardPage from "./MyFlashCardPage";

function FlashcardMain() {
  const sections = {
    createNew: "Create New",
    myFlashcard: "My Flashcard",
  };

  const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);

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
    switch (sections[activeSection]) {
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
              activeSection === key ? "border-red-700" : ""
            }`}
            key={key}
            onClick={() => setActiveSection(key)}
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
