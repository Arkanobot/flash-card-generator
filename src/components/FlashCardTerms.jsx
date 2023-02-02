import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//react-icons
import { RiArrowGoForwardLine } from "react-icons/ri";
import { BsBoxArrowInDown } from "react-icons/bs";
import { HiOutlinePrinter } from "react-icons/hi";
import { mobileVal } from "../redux/isMobile";
import { useParams } from "react-router-dom";

// const Count = 0;

function FlashCardTerms(props) {
  const { id } = useParams();
  const { cards } = useSelector((state) => state.cards);
  const flashCards = Object.values(cards);

  // const terms = {
  //   term1: {
  //     img: "https://images.unsplash.com/photo-1595790217471-cc501a17e15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80",
  //     def: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae tenetur non, aliquam id quis ad error, consequatur fugiat vitae culpa aspernatur. Error ipsum maiores maxime a dolores incidunt velit nam corporis nulla? Quidem, sapiente, veritatis aliquid velit voluptas asperiores eveniet recusandae, amet culpa blanditiis autem quod fuga voluptatibus voluptatum ducimus impedit hic. Voluptatibus quam molestias saepe iure officia, corrupti maxime illum cupiditate consequatur odio iusto minima repudiandae consectetur aliquid rem, quis eum impedit ab. Nihil molestias qui tempore odit.",
  //   },
  //   term2: {
  //     img: "https://plus.unsplash.com/premium_photo-1671638543170-8a1b232c11b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //     def: "description of the card and the term bla bla bla2",
  //   },
  //   term3: {
  //     img: "https://images.unsplash.com/photo-1580144185736-77ee9168752c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //     def: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae tenetur non, aliquam id quis ad error, consequatur fugiat vitae culpa aspernatur. Error ipsum maiores maxime a dolores incidunt velit nam corporis nulla?",
  //   },
  //   term4: {
  //     img: "https://images.unsplash.com/photo-1590749670993-806265aa558a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     def: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae tenetur non, aliquam id quis ad error, consequatur fugiat vitae culpa aspernatur. Error ipsum maiores maxime a dolores incidunt velit nam corporis nulla? Quidem, sapiente, veritatis aliquid velit voluptas asperiores eveniet recusandae, amet culpa blanditiis autem quod fuga voluptatibus voluptatum ducimus impedit hic.",
  //   },
  // }; // dummy data

  // const [img, setImg] = useState(terms.term1.img);
  // const [def, setDef] = useState(terms.term1.def);
  // const [active, setActive] = useState(Object.keys(terms)[0]);
  const [img, setImg] = useState(); //flashCards[id].terms[0].img
  const [def, setDef] = useState(flashCards[id].terms[0].defination);
  const [active, setActive] = useState(Object.keys(flashCards[id].terms)[0]);

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

  // const handleClick = (name) => {
  //   setActive(name);
  //   setImg(flashCards.terms[name].img);
  //   setDef(terms[name].def);
  // };
  const handleClick = (i) => {
    setActive(i);
    setImg(flashCards[id].terms[i].img);
    setDef(flashCards[id].terms[i].defination);
  };

  const onClickNext = (active) => {
    if (keys.indexOf(active) + 1 < keys.length) {
      const index = keys.indexOf(active);
      const act = keys[index + 1];
      setActive(act);
      setImg(flashCards[id].terms[keys[keys.indexOf(active) + 1]].img);
      setDef(flashCards[id].terms[keys[keys.indexOf(active) + 1]].defination);
      // setImg(terms[keys[keys.indexOf(active) + 1]].img);
      // setDef(terms[keys[keys.indexOf(active) + 1]].def);
    }
  };

  const onClickBack = (active) => {
    if (keys.indexOf(active) + 1 > 1) {
      const index = keys.indexOf(active);
      setActive(keys[index - 1]);
      setImg(flashCards[id].terms[keys[keys.indexOf(active) - 1]].img);
      setDef(flashCards[id].terms[keys[keys.indexOf(active) - 1]].defination);
    }
    //   setImg(terms[keys[keys.indexOf(active) - 1]].img);
    //   setDef(terms[keys[keys.indexOf(active) - 1]].def);
    // }
  };

  // const keys = Object.keys(terms);
  const keys = Object.keys(flashCards[id].terms);
  // console.log(keys);
  // console.log(def);

  return (
    <div
      className={`flashcardDetails grid ${
        isMobile ? "grid-cols-1" : "grid-cols-5 h-[70vh]"
      }  grid-rows-1  mx-[5%]`}
    >
      {/* Term Names show up here clickable */}
      <div
        className={`grid place-content-top ${
          isMobile ? "hidden" : " h-[10vh]"
        }`}
      >
        <div className="termCount col-span-1 rounded-lg border-2 bg-white shadow-lg shadow-gray py-5">
          <span className=" m-10 text-4xl text-slate-500 font-semibold border-b-2 border-slate-400">
            Flashcards
          </span>
          {keys.map((name) => {
            return (
              <div
                onClick={() => handleClick(name)}
                className={`px-14 py-4  font-semibold hover:bg-slate-100 ${
                  active === name ? "text-red-700 text-4xl" : "text-3xl"
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
            isMobile ? "grid-cols-1 mx-2" : "grid-cols-2 mx-12"
          } place-content-center`}
        >
          <div className="img grid place-content-center">
            <img src={img} alt={active} className="h-[80%] w-[80%] m-5" />
          </div>
          <div className="def m-5 p-2 grid place-content-center">{def}</div>
        </div>
        <div className="controlButtons flex place-content-center m-5">
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

      <div className="sharebutton grid grid-cols-1 grid-row-3 place-content-top col-span-1 h-[20vh]">
        <button className="rounded-lg border-2 py-6 px-8 bg-white shadow-lg shadow-gray mb-5 mx-[6%] text-xl text-slate-500 font-semibold grid  grid-cols-3 place-content-center hover:bg-slate-100">
          <RiArrowGoForwardLine className="h-5 w-5 m-1 mx-auto" />
          <span className="col-span-1">Share</span>
        </button>
        <button className="rounded-lg border-2 py-6 px-8 bg-white shadow-lg shadow-gray mb-5 mx-[6%] text-xl text-slate-500 font-semibold grid  grid-cols-3 place-content-center hover:bg-slate-100">
          <BsBoxArrowInDown className="h-5 w-5 mx-auto" />
          Download
        </button>
        <button className="rounded-lg border-2 py-6 px-8 bg-white shadow-lg shadow-gray mb-5 mx-[6%] text-xl text-slate-500 font-semibold grid  grid-cols-3 place-content-center hover:bg-slate-100">
          <HiOutlinePrinter className="h-5 w-5 m-1 mx-auto" />
          Print
        </button>
      </div>
    </div>
  );
}

export default FlashCardTerms;
