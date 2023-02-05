import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//react-icons
import { TbFileUpload } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
//react-redux
import { mobileVal } from "../redux/isMobile";

let slNo = 0;
export default function TermCreator() {
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
  //delete term img

  const deleteImg = (i) => {
    let tempterm = Array.from(term);
    tempterm[i].img = "";
    setTerm(tempterm);
  };

  return (
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
            <div className=" termNumber col-span-1 p-[30%] py-12">
              <div
                className={`text-white text-xl p-5 bg-red-600 rounded-full grid justify-center`}
                onClick={() => deleteTerm(i)}
              >
                {i + 1}
              </div>
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
              <textarea
                className="form-control block w-full px-3 py-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded-lg transition ease-in-out my-6 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                type="text"
                label="termDefination"
                spellCheck
                required
                minLength="1"
                rows={`${term[i].img === "" ? 1 : 2}`}
                onChange={(e) => handleTermDef(e, i)}
              ></textarea>
            </div>
            <div
              className={`termImage ${isMobile ? "col-span-1" : "col-span-2"}`}
            >
              <div
                className={`groupImage m-2 mt-8 p-1.5 py-4 ${
                  term[i].img === "" ? "" : "hidden"
                }`}
              >
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
              <div
                className={`flex m-2 mt-8 p-1.5 py-4 ${
                  term[i].img === "" ? "hidden" : ""
                }`}
              >
                <div className="h-[100px] w-[150px] border-solid border-2 border-slate-400 rounded-md overflow-auto">
                  <img src={term[i].img} alt={term[i].name} />
                </div>
                <div className="flex flex-col justify-around m-2">
                  <div
                    onClick={() => deleteImg(i)}
                    // onClick={() => deleteTerm(i)}
                    className={`cursor-pointer ${i === 0 ? "" : "hidden"}`}
                  >
                    <MdOutlineDeleteForever
                      size={33}
                      style={{ color: "#94a3b8" }}
                    />
                  </div>
                  <div
                    // onClick={() => deleteImg(i)}
                    onClick={() => deleteTerm(i)}
                    className={`cursor-pointer ${i === 0 ? "hidden" : ""}`}
                  >
                    <MdOutlineDeleteForever
                      size={33}
                      style={{ color: "#94a3b8" }}
                    />
                  </div>
                  <div>
                    <label for={`img-upload${i}`} className="cursor-pointer">
                      <BiEdit size={30} style={{ color: "#2563eb" }} />
                    </label>
                  </div>
                </div>
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
  );
}
