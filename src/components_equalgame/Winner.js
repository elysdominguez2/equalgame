import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectScore } from "../store_equals/characters/selectors";
import imageWinner from "../img_equalgame/winner.png";
import "./style.css";

export default function Winner() {
  const points = useSelector(selectScore);
  return (
    <div className="container flex flex-col items-center text-center pl-60">
      <h2 className="font-mono text-5xl text-yellow-400 drop-shadow-3xl my-20 uppercase">
        You are the winner baby! <br /> you have {points} points
      </h2>
      <Link
        to="/"
        className="transition ease-in duration-300 text-fuchsia-500 border-cust-pink border-8 border-solid rounded-2xl py-4 px-6 text-3xl font-bold drop-shadow-3xl contrast-200 brightness-200 hover:text-black hover:bg-cust-pink hover:drop-shadow-4xl"
      >
        Back to home
      </Link>
      <img src={imageWinner} alt="" width="600" className="winner absolute" />
    </div>
  );
}
