import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//react-icons
import { RiArrowGoForwardLine } from "react-icons/ri";
import { BsBoxArrowInDown, BsFacebook, BsLinkedin } from "react-icons/bs";
import { HiOutlinePrinter } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaWhatsappSquare, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

//redux
import { useSelector } from "react-redux";
import { mobileVal } from "../redux/isMobile";

//react-icons
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

// const Count = 0;

function FlashCardTerms(props) {
  // state stored in redux to manage mobile version of the App
  const { isMobile } = useSelector((state) => state.mobile);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 1177;
        if (ismobile !== isMobile) props.dispatch(mobileVal(ismobile));
      },
      false
    );
  }, [isMobile, props]);

  //id to get id from slug
  const { id } = useParams();
  //getting the cards state from redux store
  const { cards } = useSelector((state) => state.cards);
  const flashCards = Object.values(cards);

  // states to manage the Image, definition, active tab, print and share button
  const [img, setImg] = useState(); //flashCards[id].terms[0].img
  const [def, setDef] = useState(flashCards[id].terms[0].defination);
  const [active, setActive] = useState(Object.keys(flashCards[id].terms)[0]);
  const [print, setPrint] = useState("Normal");
  const [share, setShare] = useState("Normal");

  // on click of terms, sets the active image, definition to be displayed
  const handleClick = (i) => {
    setActive(i);
    setImg(flashCards[id].terms[i].img);
    setDef(flashCards[id].terms[i].defination);
  };

  // on click of next button, sets the active image, and defintion and also sets the active state
  const onClickNext = (active) => {
    if (keys.indexOf(active) + 1 < keys.length) {
      const index = keys.indexOf(active);
      const act = keys[index + 1];
      setActive(act);
      setImg(flashCards[id].terms[keys[keys.indexOf(active) + 1]].img);
      setDef(flashCards[id].terms[keys[keys.indexOf(active) + 1]].defination);
    }
  };

  // on click of back button, sets the previous image and defition as active and also changes the active state
  const onClickBack = (active) => {
    if (keys.indexOf(active) + 1 > 1) {
      const index = keys.indexOf(active);
      setActive(keys[index - 1]);
      setImg(flashCards[id].terms[keys[keys.indexOf(active) - 1]].img);
      setDef(flashCards[id].terms[keys[keys.indexOf(active) - 1]].defination);
    }
  };

  // keys to get the keys for the terms to display them
  const keys = Object.keys(flashCards[id].terms);

  //handle print - print button
  const handlePrint = () => {
    setPrint("Print");
    setTimeout(() => {
      window.print();
      setPrint("Normal");
    }, 500);
  };
  //handle Share button
  const handleShare = () => {
    setShare("Share");
  };

  // handle close button for modal close
  const handleShareClose = () => {
    setShare("Normal");
  };

  //modal- copy to clipboard
  const handleCopy = () => {
    window.navigator.clipboard.writeText(window.location.href);
    window.alert("Link Copied!");
  };

  //modal - Email
  const loc = window.location.href;
  const handleMailTo = () => {
    window.open(
      `mailto:?Subject=Hey,%20I%20found%20a%20qreally%20rinteresting%20flashcard!,%20take%20a%20look! &body= Link: ${loc}`
    );
  };

  return (
    <div
      className={`flashcardDetails grid ${
        isMobile
          ? "grid-cols-1"
          : print === "Print"
          ? "grid-cols-1"
          : "grid-cols-5 h-[70vh]"
      }  grid-rows-1  mx-[5%]`}
    >
      {/* Term Names show up here clickable */}
      <div
        className={`grid place-content-top ${
          isMobile ? "hidden" : print === "Print" ? "hidden" : " h-[10vh]"
        }`}
      >
        <div
          className={`termCount col-span-1 rounded-lg border-2 bg-white shadow-lg shadow-gray py-5`}
        >
          <span className=" m-5 text-2xl text-slate-500 font-semibold border-b-2 border-slate-400 overflow-auto w-full">
            Flashcards
          </span>
          {keys.map((name) => {
            return (
              <div
                onClick={() => handleClick(name)}
                className={`px-14 py-4  font-semibold hover:bg-slate-100 ${
                  active === name ? "text-red-700 text-3xl" : "text-2xl"
                }`}
              >
                {flashCards[id].terms[name].name}
              </div>
            );
          })}
        </div>
      </div>
      {/* term image and defination shows up here */}
      <div
        className={`container ${
          isMobile ? "col-span-1" : "col-span-3"
        } grid place-content-top`}
      >
        <div
          className={`termImg&Defination  rounded-lg border-2 bg-white shadow-lg shadow-gray grid ${
            isMobile
              ? "grid-cols-1 mx-2"
              : flashCards[id].terms[active].img === ""
              ? "grid-cols-1 mx-2"
              : "grid-cols-2 mx-12"
          } place-content-center`}
          id={`print-layout`}
        >
          <div
            className={`img grid place-content-center ${
              flashCards[id].terms[active].img === "" ? "hidden" : ""
            }`}
          >
            <img
              src={img}
              alt={active}
              className={`h-[80%] w-[80%] ${
                print === "Print" ? "mx-0 my-2" : "m-5"
              }`}
            />
          </div>
          <div className="def m-5 p-2 grid place-content-center">{def}</div>
        </div>
        <div
          className={`controlButtons flex place-content-center m-5 ${
            print === "Print" ? "hidden" : ""
          }`}
        >
          <div className="back mx-2">
            {keys.indexOf(active) + 1 <= 1 ? (
              <div
                onClick={() => onClickBack(active)}
                className="mx-10 text-2xl text-slate-300 font-bold"
              >{`<`}</div>
            ) : (
              <button
                onClick={() => onClickBack(active)}
                className="mx-10 text-2xl text-slate-500 font-bold"
              >{`<`}</button>
            )}
          </div>
          <div className="number mx-2 text-2xl text-slate-500 font-semibold">
            {`${keys.indexOf(active) + 1} / ${keys.length}`}{" "}
          </div>
          <div className="next mx-2">
            {keys.indexOf(active) + 1 === keys.length ? (
              <div
                onClick={() => onClickNext(active)}
                className=" mx-10 text-2xl text-slate-300 font-bold"
              >
                {`>`}
              </div>
            ) : (
              <button
                onClick={() => onClickNext(active)}
                className=" mx-10 text-2xl text-slate-500 font-bold"
              >
                {`>`}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* share print and download button shows up here */}

      <div
        className={`sharebutton grid grid-cols-1 grid-row-3 place-content-top col-span-1 h-[20vh] ${
          print === "Print" ? "hidden" : ""
        }`}
      >
        <button
          className="rounded-lg border-2 py-6 px-8 bg-white shadow-lg shadow-gray mb-5 mx-[6%] text-xl text-slate-500 font-semibold grid  grid-cols-3 place-content-center hover:bg-slate-100"
          onClick={handleShare}
        >
          <RiArrowGoForwardLine className="h-5 w-5 m-1 mx-auto" />
          <span className="col-span-1">Share</span>
        </button>
        <button className="rounded-lg border-2 py-6 px-8 bg-white shadow-lg shadow-gray mb-5 mx-[6%] text-xl text-slate-500 font-semibold grid  grid-cols-3 place-content-center hover:bg-slate-100">
          <BsBoxArrowInDown className="h-5 w-5 mx-auto" />
          Download
        </button>
        <button
          className="rounded-lg border-2 py-6 px-8 bg-white shadow-lg shadow-gray mb-5 mx-[6%] text-xl text-slate-500 font-semibold grid  grid-cols-3 place-content-center hover:bg-slate-100"
          onClick={() => handlePrint()}
        >
          <HiOutlinePrinter className="h-5 w-5 m-1 mx-auto" />
          Print
        </button>
      </div>
      {/*modal */}
      <div
        id="overlay"
        class={`fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60 ${
          share === "Share" ? "" : "hidden"
        }`}
      ></div>

      <div
        id="dialog"
        class={`fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] min-w-[300px] bg-white rounded-md px-4 py-6 space-y-5 drop-shadow-lg ${
          share === "Share" ? "" : "hidden"
        }`}
      >
        <div class="flex justify-between">
          <h1 class="text-2xl font-semibold mt-0">Share</h1>
          <div
            id="close"
            class=" text-slate-500 cursor-pointer rounded-md justify-center"
            onClick={handleShareClose}
          >
            <AiOutlineClose size={20} style={{ color: "#b91c1c" }} />
          </div>
        </div>
        <div>
          <div class=" border-2 border-dashed border-gray-300 rounded-lg w-[85%] inline-flex justify-around">
            <div className="py-[4%] px-1 inline-block  rounded-l-lg text-slate-500">
              Link:
            </div>
            <div className="m-1 inline-block overflow-auto w-[80%] text-center py-[2.5%] shadow-inner shadow-gray rounded-r-md">
              {window.location.href}
            </div>
          </div>
          <div
            className="inline-block mx-2 justify-center align-middle w-6"
            onClick={handleCopy}
          >
            <HiOutlineClipboardDocumentCheck size={30} />
          </div>
          {/*modal share buttons */}
          <div className={`mt-10 mx-1 flex justify-between`}>
            <div className="facebook shadow-inner shadow-slate-300 rounded-md p-1 h-10 w-10">
              <BsFacebook size={30} style={{ color: "#0165E1" }} />
            </div>
            <div className="linkedin shadow-inner shadow-slate-300 rounded-md p-1 h-10 w-10">
              <BsLinkedin size={30} style={{ color: "#0077B5" }} />
            </div>
            <div className="whatsapp shadow-inner shadow-slate-300 rounded-md p-1 h-10 w-10">
              <FaWhatsappSquare size={30} style={{ color: "#25D366" }} />
            </div>
            <div className="twitter shadow-inner shadow-slate-300 rounded-md p-1 h-10 w-10">
              <FaTwitterSquare size={30} style={{ color: "#1DA1F2" }} />
            </div>
            <div
              className="email shadow-inner shadow-slate-300 rounded-md p-1 h-10 w-10"
              onClick={handleMailTo}
            >
              <MdEmail size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashCardTerms;
