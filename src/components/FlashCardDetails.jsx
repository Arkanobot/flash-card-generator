import React, { useEffect } from "react";
import FlashCardTerms from "./FlashCardTerms";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//react-icons
import { IoMdArrowRoundBack } from "react-icons/io";
import { mobileVal } from "../redux/isMobile";

export default function FlashCardDetails() {
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

  const { cards } = useSelector((state) => state.cards);
  const { id } = useParams();
  const flashCards = Object.values(cards);

  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/");
  };

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
          {flashCards[id].name}
        </div>
        <div
          className={`text-2xl font-semibold m-5 mb-10 ${
            isMobile ? "col-span-1" : "col-span-11 col-start-2"
          }`}
        >
          <span className="text-slate-500">{flashCards[id].desc}</span>
        </div>
      </div>
      <div className="terms">
        <FlashCardTerms dispatch={dispatch} />
      </div>
    </div>
  );
}
