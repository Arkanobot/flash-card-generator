import React, { useState, useEffect } from "react";

//react-icons
import { TbFileUpload } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
// import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../redux/index";
// function FlashCardCreator() {
//   return <div>FlashCardCreator</div>;
// }

// export default FlashCardCreator;

export default function FlashCardCreator() {
  const [term, setTerm] = useState([{ no: "1", name: "", defination: "" }]);
  const handleAdd = () => {
    const tr = [...term, { no: "", name: "", defination: "" }];
    setTerm(tr);
  };

  const deleteTerm = (i) => {
    const tr = [...term];
    if (tr.length > 1) {
      tr.splice(i, 1);
      setTerm(tr);
    }
  };

  //isMobile check , responsive for small screens
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 900;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();

  // const { createCardGroup, deleteCardGroup, createCardTerm } =
  //   bindActionCreators(actionCreators, dispatch);

  //state for checking if the window size is smaller than 500 px

  //useEffect to handle resize of the window html - if window size smaller than 500

  return (
    <div className="flashCardCreator my-14 grid grid-cols-1">
      {/*everything about the flashcard creator goes here */}

      {/*Group Creator goes here */}
      <div className="groupHeading grid grid-cols-3 col-span-1 rounded-lg border-2 py-14 px-8 bg-white shadow-lg shadow-gray">
        <strong className="text-slate-500 text-xl my-3 col-span-3">
          Create Group *
        </strong>
        <div className="groupTitle flex flex-col col-span-2">
          <input
            className="form-control block w-full px-3 py-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded-lg transition ease-in-out my-6 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
            type="text"
            label="groupTitle"
            spellCheck
            required
            placeholder="Please Enter a Group Name (max 40 chars)"
            minLength="1"
            maxLength="40"
          />
        </div>
        <div className="groupImage m-2 p-1.5 py-4">
          <label
            for="file-upload"
            className="flex p-2 py-4 border-solid border-2 border-slate-400 rounded-lg shadow-inner shadow-gray  cursor-pointer justify-center"
          >
            <TbFileUpload size={40} />
            <p className={`${isMobile ? "hidden" : ""} p-2`}>Upload Image</p>
          </label>
          <input
            className="hidden"
            id="file-upload"
            type="file"
            lable="groupImage"
            required
          />
        </div>
        <div className="groupDescription col-span-3 mr-5">
          <strong className="text-slate-500 text-xl my-3 col-span-3">
            Add Description
          </strong>
          <textarea
            className="form-control block w-full px-3 py-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out my-6 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
            type="text"
            label="groupDescription"
            spellCheck
            required
            placeholder="Please Enter the description (max 350 chars)"
            row="5"
            maxLength="350"
          ></textarea>
        </div>
      </div>

      {/*Term Creator Goes here */}
      <div
        className={`group__terms groupHeading grid ${
          isMobile ? "grid-cols-1" : "grid-cols-9"
        } col-span-1 rounded-lg border-2 my-14 py-14 px-8 bg-white shadow-lg shadow-gray`}
      >
        {/*creating more terms based on click */}
        {term.map((data, i) => {
          return (
            <>
              <div className=" termNumber col-span-1 p-2 py-12">
                <strong
                  className="text-white text-xl p-5 bg-red-600 rounded-full "
                  onClick={() => deleteTerm(i)}
                >
                  {i + 1}
                </strong>
              </div>
              <div
                className={`termName mr-3 ${
                  isMobile ? "col-span-1" : "col-span-3"
                }`}
              >
                <strong className="text-slate-500 text-l my-3 ">
                  Enter Term*
                </strong>
                <input
                  className="form-control block w-full px-3 py-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded-lg transition ease-in-out my-6 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  type="text"
                  label="termName"
                  spellCheck
                  required
                  minLength="1"
                  maxLength="40"
                />
              </div>
              <div
                className={`termDefinition mr-3 ${
                  isMobile ? "col-span-1" : "col-span-3"
                }`}
              >
                <strong className="text-slate-500 text-l my-3 ">
                  Enter Defination*
                </strong>
                <input
                  className="form-control block w-full px-3 py-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded-lg transition ease-in-out my-6 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  type="text"
                  label="termDefination"
                  spellCheck
                  required
                  minLength="1"
                />
              </div>
              <div
                className={`termImage ${
                  isMobile ? "col-span-1" : "col-span-2"
                }`}
              >
                <div className="groupImage m-2 mt-8 p-1.5 py-4">
                  <label
                    for="img-upload"
                    className="flex p-2 py-4 border-solid border-2 border-slate-400 rounded-lg shadow-inner shadow-gray  cursor-pointer justify-center"
                  >
                    <TbFileUpload size={40} />
                    <p className={`p-2`}>Select Image</p>
                  </label>
                  <input
                    className="hidden"
                    id="img-upload"
                    type="file"
                    lable="groupImage"
                    required
                  />
                </div>
              </div>
            </>
          );
        })}
        <div className={`addMore ${isMobile ? "col-span-1" : "col-span-2"}`}>
          <button onClick={() => handleAdd()} className="text-sky-600">
            <div className="flex p-2">
              <IoMdAdd className="m-1" />
              Add More
            </div>
          </button>
        </div>
      </div>
      <div className="createGroup col-span-1 grid place-items-center">
        <button className="p-3 border-2 border-solid border-red-700 bg-red-700 rounded-md text-white font-bold text-xl">
          Create Group
        </button>
      </div>
    </div>
  );
}
