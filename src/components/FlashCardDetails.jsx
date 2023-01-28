import React, { useState } from "react";

//react-icons
import { RiArrowGoForwardLine } from "react-icons/ri";
import { BsBoxArrowInDown } from "react-icons/bs";
import { HiOutlinePrinter } from "react-icons/hi";

function FlashCardDetails() {
  const terms = {
    term1: {
      img: "https://images.unsplash.com/photo-1595790217471-cc501a17e15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80",
      def: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae tenetur non, aliquam id quis ad error, consequatur fugiat vitae culpa aspernatur. Error ipsum maiores maxime a dolores incidunt velit nam corporis nulla? Quidem, sapiente, veritatis aliquid velit voluptas asperiores eveniet recusandae, amet culpa blanditiis autem quod fuga voluptatibus voluptatum ducimus impedit hic. Voluptatibus quam molestias saepe iure officia, corrupti maxime illum cupiditate consequatur odio iusto minima repudiandae consectetur aliquid rem, quis eum impedit ab. Nihil molestias qui tempore odit.",
    },
    term2: {
      img: "https://plus.unsplash.com/premium_photo-1671638543170-8a1b232c11b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      def: "description of the card and the term bla bla bla2",
    },
    term3: {
      img: "https://images.unsplash.com/photo-1580144185736-77ee9168752c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      def: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae tenetur non, aliquam id quis ad error, consequatur fugiat vitae culpa aspernatur. Error ipsum maiores maxime a dolores incidunt velit nam corporis nulla?",
    },
    term4: {
      img: "https://images.unsplash.com/photo-1590749670993-806265aa558a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      def: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae tenetur non, aliquam id quis ad error, consequatur fugiat vitae culpa aspernatur. Error ipsum maiores maxime a dolores incidunt velit nam corporis nulla? Quidem, sapiente, veritatis aliquid velit voluptas asperiores eveniet recusandae, amet culpa blanditiis autem quod fuga voluptatibus voluptatum ducimus impedit hic.",
    },
  };

  const [img, setImg] = useState(terms.term1.img);
  const [def, setDef] = useState(terms.term1.def);
  const [active, setActive] = useState(Object.keys(terms)[0]);

  const handleClick = (name) => {
    setActive(name);
    setImg(terms[name].img);
    setDef(terms[name].def);
  };

  const keys = Object.keys(terms);

  return (
    <div className="flashcardDetails grid grid-cols-5 grid-rows-1 h-[85vh] mx-[5%]">
      {/* Term Names show up here clickable */}
      <div className="grid place-content-center">
        <div className="termCount col-span-1 rounded-lg border-2 bg-white shadow-lg shadow-gray py-5">
          <span className=" m-10 text-4xl text-slate-500 font-semibold">
            Flashcards
          </span>
          {keys.map((name) => {
            return (
              <div
                onClick={() => handleClick(name)}
                className={`px-14 py-4  font-semibold ${
                  active === name ? "text-red-700 text-4xl" : "text-3xl"
                } border-b-2`}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
      {/* term image and defination shows up here */}
      <div className="termImg&Defination col-span-3 rounded-lg border-2 py-6 px-8 bg-white shadow-lg shadow-gray my-20 grid grid-cols-2">
        <div className="img grid place-content-center">
          <img src={img} alt={active} className="h-[400px] w-[300px]" />
        </div>
        <div className="def m-5 p-2 grid place-content-center">{def}</div>
      </div>

      {/* share print and download button shows up here */}

      <div className="sharebutton grid grid-cols-1 grid-row-3 place-content-center col-span-1">
        <button className="rounded-lg border-2 py-6 px-8 bg-white shadow-lg shadow-gray m-5 mx-[20%] text-xl text-slate-500 font-semibold grid  grid-cols-3 place-content-center">
          <RiArrowGoForwardLine className="h-5 w-5 m-1 mx-auto" />
          <span className="col-span-1">Share</span>
        </button>
        <button className="rounded-lg border-2 py-6 px-8 bg-white shadow-lg shadow-gray m-5 mx-[20%] text-xl text-slate-500 font-semibold grid  grid-cols-3 place-content-center">
          <BsBoxArrowInDown className="h-5 w-5 mx-auto" />
          Download
        </button>
        <button className="rounded-lg border-2 py-6 px-8 bg-white shadow-lg shadow-gray m-5 mx-[20%] text-xl text-slate-500 font-semibold grid  grid-cols-3 place-content-center">
          <HiOutlinePrinter className="h-5 w-5 m-1 mx-auto" />
          Print
        </button>
      </div>
    </div>
  );
}

export default FlashCardDetails;
