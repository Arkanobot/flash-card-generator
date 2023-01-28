import React from "react";
import FlashcardMain from "./FlashcardMain";

function Main() {
  return (
    <div className="main mx-[10%]">
      <div className="main__header">
        <h1 className="text-4xl font-[750] my-10 font-extrabold">
          Create Flashcard
        </h1>
      </div>
      <div className="main__editor">
        {" "}
        <FlashcardMain />
        {/* <Editor sections={sections} /> */}
      </div>
    </div>
  );
}

export default Main;
