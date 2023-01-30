import React, { useEffect } from "react";
import FlashCardTerms from "./FlashCardTerms";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//react-icons
import { IoMdArrowRoundBack } from "react-icons/io";
import { mobileVal } from "../redux/isMobile";

function FlashCardDetails() {
  const flash = {
    name: "Name Card",
    img: "https://images.unsplash.com/photo-1595790217471-cc501a17e15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80",
    description:
      "description of the card and the term bla bla blaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaa aaaaaaa aaa",
  };
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/");
  };

  const { isMobile } = useSelector((state) => state.mobile);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 1177;
        if (ismobile !== isMobile) dispatch(mobileVal(ismobile));
      },
      false
    );
  }, [isMobile, dispatch]);

  return (
    <div>
      <div
        className={`termHeader mx-[10%] mt-[1%] grid ${
          isMobile ? "grid-cols-1" : "grid-cols-12"
        } `}
      >
        <div
          className="col-span-1 grid place-content-center"
          onClick={onClickBack}
        >
          {isMobile ? (
            <p className="col-span-1 rounded-lg border-2 px-4 py-2 bg-white shadow-lg shadow-gray text-slate-500">
              Back
            </p>
          ) : (
            <IoMdArrowRoundBack size={30} />
          )}
        </div>
        <div
          className={`termHead text-4xl font-bold m-5 ${
            isMobile ? "col-span-1" : "col-span-11"
          } `}
        >
          {flash.name}
        </div>
        <div
          className={`text-2xl font-semibold m-5 mb-10 ${
            isMobile ? "col-span-1" : "col-span-11 col-start-2"
          }`}
        >
          <span className="text-slate-500">{flash.description}</span>
        </div>
      </div>
      <div className="terms">
        <FlashCardTerms dispatch={dispatch} />
      </div>
    </div>
  );
}

export default FlashCardDetails;
