import { Link } from "react-router-dom";
import click from "../audio/rclick.mp3";
import imageOldGame from "../img_equalgame/joystick.gif";

export const Homepage = () => {
  const playClick = () => {
    new Audio(click).play();
  };
  return (
    <div className="bg-black h-screen">
      <div className="flex justify-center">
        <img src={imageOldGame} alt="" className="w-100" />
      </div>

      <h1 className="text-white p-10">Equal Game</h1>
      <h2 className="text-white m-10">Welcome</h2>
      <Link
        onClick={() => playClick()}
        to={"/game"}
        className="p-4 rounded-lg shadow-lg bg-cust-pink col-end-7 col-span-2"
      >
        Start
      </Link>
    </div>
  );
};
