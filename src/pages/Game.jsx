import imagebug5 from "../img_equalgame/bug5.png";
import imagebug19 from "../img_equalgame/bug19.png";
import imagebug39 from "../img_equalgame/bug39.png";
import imagebug13 from "../img_equalgame/bug13.png";
import imagebug20 from "../img_equalgame/bug20.png";
import imagebug38 from "../img_equalgame/bug38.png";
import imagebug15 from "../img_equalgame/bug15.png";
import imagebug22 from "../img_equalgame/bug22.png";
import imagebug31 from "../img_equalgame/bug31.png";

import MoveCharacter from "../components_equalgame/MoveCharacter";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCharacters,
  selectScore,
} from "../store_equals/characters/selectors";
import Winner from "../components_equalgame/Winner";

import useSound from "use-sound";
// import winnerSound from "../audio/winner.mp3";
import timeoutSound from "../audio/yummy.mp3";

export default function Game() {
  const characters = useSelector(selectCharacters);
  const points = useSelector(selectScore);
  const image = [
    imagebug5,
    imagebug19,
    imagebug39,
    imagebug13,
    imagebug20,
    imagebug38,
    imagebug15,
    imagebug22,
    imagebug31,
  ];

  let [count, setCount] = useState(0);
  //   let [time, setTime] = useState(0);
  const [playTimeout, { stopPlayTimeout }] = useSound(timeoutSound);

  useEffect(() => {
    if (points !== 5) {
      const timer = setInterval(() => {
        playTimeout();
        setCount((count) => count + 1);

        if (points === 5) {
          stopPlayTimeout();
        }
      }, 15000);
      return () => clearInterval(timer);
    }
  }, [count, points, stopPlayTimeout, playTimeout]);

  //   useEffect(() => {
  //     const ti = setInterval(() => {
  //       setTime((time) => time + 1);
  //     }, 1000);
  //     return () => clearInterval(ti);
  //   }, []);

  const imageToCompare = image[count % image.length];

  //   const [playWinner] = useSound(winnerSound);

  return (
    <div className=" bg-landscape bg-cover max-h-fit bg-no-repeat">
      {points === 5 ? (
        <div>
          <Winner />
          {/* {playWinner()} */}
        </div>
      ) : (
        <div className="flex">
          <div className="flex flex-wrap bg-landscape max-h-fit bg-no-repeat container ml-10 mt-8 justify-center w-5/6">
            {characters.map((c) => (
              <div key={c.id}>
                <MoveCharacter
                  characterImage={c.image}
                  characterName={c.name}
                  imageToCompare={imageToCompare}
                />
              </div>
            ))}
            {characters.map((c) => (
              <div key={c.id}>
                <MoveCharacter
                  characterImage={c.image}
                  characterName={c.name}
                  imageToCompare={imageToCompare}
                />
              </div>
            ))}
          </div>
          <div className="w-1/6">
            <div className="mr-24 mt-24 flex flex-col text-center">
              <img src={imageToCompare} alt="" className="w-56" />

              {/* <h2 className=" text-white  text-2xl my-10">
                Change image:{time}
              </h2> */}
            </div>
            <div>
              <h2 className="mr-24 font-mono text-4xl text-center text-yellow-400 drop-shadow-3xl font-bold">
                {" "}
                SCORE: {points}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
