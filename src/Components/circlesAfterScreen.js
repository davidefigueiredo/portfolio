import React from "react";
import ReactAnime from "react-animejs";
import "./styles.css";
const { Anime } = ReactAnime;

export const CirclesAfterScreen = () => {
  let circles = [
    "circle0",
    "circle1",
    "circle2",
    "circle3",
    "circle4",
    "circle5",
    "circle6",
    "circle7",
    "circle8",
    "circle9",
    "circle10",
    "circle11",
    "circle12",
    "circle13",
    "circle14",
    "circle15",
    "circle16",
    "circle17",
    "circle18",
    "circle19",
    "circle20",
    "circle21",
    "circle22",
    "circle23",
    "circle24",
    "circle25",
    "circle26",
    "circle27",
    "circle28",
    "circle29",
  ];

  var maxNumberMove = 30000;
  var maxNumberSize = 50;

  return circles.map((circle, index) => {
    let size = Math.floor(Math.random() * maxNumberSize + 1);
    return (
      <div className="animateScreen">
        <Anime
          initial={[
            {
              duration: 100000,
              easing: "linear",
              loop: true,
              targets: "#" + circle,
              keyframes: [
                {
                  translateX:
                    Math.random() < 0.5
                      ? -Math.floor(Math.random() * maxNumberMove + 1)
                      : Math.floor(Math.random() * maxNumberMove + 1),
                  translateY:
                    Math.random() < 0.5
                      ? -Math.floor(Math.random() * maxNumberMove + 1)
                      : Math.floor(Math.random() * maxNumberMove + 1),
                },
              ],
            },
          ]}
        >
          <div
            className="animateScreen"
            key={index}
            id={circle}
            style={{
              height: size,
              width: size,
              background: "#000000",
              borderRadius: "50%",
            }}
          />
        </Anime>
      </div>
    );
  });
};

export default CirclesAfterScreen;
