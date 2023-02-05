import React from "react";
import FlashcardMain from "./FlashcardMain";

export default function Main() {
  // returns the flash card main component
  return (
    <div className="main mx-[10%]">
      <div className="main__header">
        <h1 className="text-4xl font-[750] my-10">Create Flashcard</h1>
      </div>
      <div className="main__editor">
        <FlashcardMain />
      </div>
    </div>
  );
}
