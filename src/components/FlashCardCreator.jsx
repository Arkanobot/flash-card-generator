import React, { useState, useEffect } from "react";

//react-icons
import { TbFileUpload } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { mobileVal } from "../redux/isMobile";
import { cardVal } from "../redux/flashcards";

//variable to set key for the redux group - this is set outside the function so that it does not sent to 0 every time the state changes
let grpId = 0;
let slNo = 0;

export default function FlashCardCreator() {
  //isMobile check , responsive for small screens to check if screen width less than 900px
  const { isMobile } = useSelector((state) => state.mobile);
  const dispatch = useDispatch();
  //useEffect to handle resize of the window html - if window size smaller than 900
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

  //state for storing card infos
  // const { cards } = useSelector((state) => state.cards);

  const [group, setGroup] = useState();
  //card group data goes here
  // let groupName;
  const handleCardGroup = (event) => {
    // groupName = event.target.value;
    let grp = { name: event.target.value, desc: "", img: "" };
    setGroup(grp);
  };

  // card image and description goes here
  // let groupImg;
  const handleGroupImg = () => {
    let img = document.getElementById("file-upload").files[0];
    // groupImg = URL.createObjectURL(img)
    let grpimg = URL.createObjectURL(img);
    let grp = { ...group };
    grp.img = grpimg;
    setGroup(grp);
  };

  // let groupDesc;
  const handleGroupDesc = (event) => {
    // groupDesc = event.target.value;
    let grp = { ...group };
    grp.desc = event.target.value;
    setGroup(grp);
  };
  // state to manage terms

  const [term, setTerm] = useState([
    { no: slNo, name: "", defination: "", img: "" },
  ]);
  const handleAdd = () => {
    ++slNo;
    const tr = [...term, { no: slNo, name: "", defination: "", img: "" }];
    setTerm(tr);
  };

  const deleteTerm = (i) => {
    const tr = [...term];
    if (tr.length > 1) {
      tr.splice(i, 1);
      setTerm(tr);
    }
  };
  // functions relating to terms go here
  const handleTermName = (e, i) => {
    let terms = Array.from(term);
    terms[i].name = e.target.value;
    setTerm(terms);
  };

  const handleTermDef = (e, i) => {
    let terms = Array.from(term);
    terms[i].defination = e.target.value;
    setTerm(terms);
  };

  // this function seems to be causing a reload...idk why

  const handleTermImg = (i) => {
    let termImgFile = document.getElementById(`img-upload${i}`).files[0];
    let termImg = URL.createObjectURL(termImgFile);
    let trm = Array.from(term);
    trm[i].img = termImg;
    setTerm(trm);
  };

  //create group function goes here

  const handleGroupCreate = () => {
    // bring the redux and put in the group name, grp img, grp desc and terms and dispatch ! :D
    console.log(grpId);
    if (group.img.length < 1) {
      window.alert("Please fill values!");
    } else {
      console.log("Entered Function");
      let cardGroup = {};
      cardGroup[grpId] = {
        id: grpId,
        name: group.name,
        desc: group.desc,
        img: group.img,
        terms: term,
      };
      grpId++;
      console.log(cardGroup);
      dispatch(cardVal(cardGroup));
      setTerm([{ no: "1", name: "", defination: "", img: "" }]);
    }
  };

  return (
    <div className="flashCardCreator my-14 grid grid-cols-1">
      {/*everything about the flashcard creator goes here */}
      <form action="">
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
              onChange={(e) => handleCardGroup(e)}
            />
          </div>
          <div className="groupImage m-2 p-1.5 py-4" id="group-image">
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
              onChange={handleGroupImg}
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
              onChange={(e) => {
                handleGroupDesc(e);
              }}
            ></textarea>
          </div>
        </div>

        {/*Term Creator Goes here */}
        <div
          className={`group__terms groupHeading grid ${
            isMobile ? "grid-cols-1" : "grid-cols-9"
          } col-span-1 rounded-lg border-2 my-14 py-14 px-8 bg-white shadow-lg shadow-gray 
      }`}
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
                    onChange={(e) => handleTermName(e, i)}
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
                    onChange={(e) => handleTermDef(e, i)}
                  />
                </div>
                <div
                  className={`termImage ${
                    isMobile ? "col-span-1" : "col-span-2"
                  }`}
                >
                  <div className="groupImage m-2 mt-8 p-1.5 py-4">
                    <label
                      for={`img-upload${i}`}
                      className="flex p-2 py-4 border-solid border-2 border-blue-600 rounded-lg shadow-inner shadow-gray  cursor-pointer justify-center"
                    >
                      <TbFileUpload size={40} style={{ color: "#2563eb" }} />
                      <p className={`p-2 text-blue-600`}>Select Image</p>
                    </label>
                    <input
                      className="hidden"
                      id={`img-upload${i}`}
                      type="file"
                      label="img-upload"
                      required
                      onChange={() => handleTermImg(i)}
                    />
                  </div>
                </div>
              </>
            );
          })}
          <div className={`addMore ${isMobile ? "col-span-1" : "col-span-2"}`}>
            <button onClick={() => handleAdd()} className="text-blue-600">
              <div className="flex p-2">
                <IoMdAdd className="m-1" />
                Add More
              </div>
            </button>
          </div>
        </div>
        <div className="createGroup col-span-1 grid place-items-center">
          <button
            className="p-3 border-2 border-solid border-red-700 bg-red-700 rounded-md text-white font-bold text-xl"
            onClick={handleGroupCreate}
            type="submit"
          >
            Create Group
          </button>
        </div>
      </form>
    </div>
  );
}
