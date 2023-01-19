import { Link } from "react-router-dom";
import click from "../audio/rclick.mp3";
import imageOldGame from "../img_equalgame/joystick.gif";
import bug from "../img_equalgame/bug5.png";
import bugB from "../img_equalgame/bug15.png";
import { BsSuitHeartFill } from "react-icons/bs";

export const Homepage = () => {
  const playClick = () => {
    new Audio(click).play();
  };
  return (
    <div className="bg-black h-screen text-white text-2xl uppercase">
      <div className="flex justify-center">
        <img src={imageOldGame} alt="" className="w-100" />
      </div>

      <h1 className=" text-fuchsia-500 animate-pulse drop-shadow-3xl text-7xl font-BungeeShade pt-10 mb-10">
        Equal Game
      </h1>
      <h4 className=" text-fuchsia-500 text-3xl mb-4">Instructions </h4>
      <div className="flex justify-center">
        <p>You have a bug</p>
        <img src={bug} alt="" className="w-10 ml-2" />
      </div>
      <div className="flex justify-center">
        <p>you have to find the equal</p>
        <img src={bug} alt="" className="w-10 ml-2 mr-2" />
        <p>=</p>
        <img src={bug} alt="" className="w-10 ml-2" />
      </div>
      <div className="flex justify-center">
        <p>It is only two per each</p>
        <img src={bug} alt="" className="w-10 ml-2 mr-2" />
        <p>=&gt;</p>
        <img src={bug} alt="" className="w-10 ml-2" />
        <img src={bug} alt="" className="w-10 ml-2" />
      </div>
      <p>But becareful</p>
      <div className="flex justify-center">
        <p className="mb-10">all bugs are changing every 15 seconds</p>
        <img src={bugB} alt="" className="w-16 ml-2" />
      </div>

      <Link
        onClick={() => playClick()}
        to={"/game"}
        className="px-6 py-4 rounded-lg shadow-lg bg-cust-pink hover:bg-sky-500 ease-in duration-300 col-end-7 col-span-2"
      >
        Start
      </Link>

      <p className="flex justify-center mt-16 lowercase">
        coded with{" "}
        <BsSuitHeartFill className="text-red-500 animate-pulse my-1 mx-2" /> by
        Eliana
      </p>
    </div>
  );
};
