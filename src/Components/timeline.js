import React from "react";

import Fade from "react-reveal/Fade";
import Jello from "react-reveal/Jello";

import liceu from "./img/liceu.jpg";
import uni from "./img/dei.jpg";
import BotOlympics from "./img/botOlympics.png";
import Ebec from "./img/ebec.png";
import Best from "./img/best.jpg";
import BotOlympicsAward from "./img/botOlympicsAward.jpg";

const Timeline = () => {
  return (
    <div>
      <Jello>
        <h3 className="text-8xl font-bold text-center -translate-y-20 pl-1">
          Education
        </h3>
      </Jello>
      <div class="flex items-center justify-center pb-20">
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-black">
          <div class="flex flex-row-reverse md:contents">
            <div class=" col-start-1 col-end-5 p-4 my-4 ml-auto animate-fade-in-right">
              <Fade left>
                <p
                  style={{ fontWeight: 700, fontSize: 20 }}
                  class="text-xl font-bold"
                >
                  Attended Secondary School in Science and Technology
                </p>
                <h3 class="mb-1">Escola Secundária Poeta António Aleixo</h3>
              </Fade>
              <img
                src={liceu}
                style={{
                  width: 250,
                  height: 200,
                  position: "inherit",
                  borderRadius: 15,
                  marginTop: 10,
                }}
              />
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto">
              <div class="w-10 h-10 rounded-full bg-pink-500 mt-9">
                <h1 className="text-sm text-white pt-2.5 pl-1">2016</h1>
              </div>
              <div class="h-full flex items-center justify-center">
                <div class="h-full w-1 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="w-10 h-10 rounded-full bg-indigo-500 mt-9">
                <h1 className="text-sm text-white pt-2.5 pl-1">2019</h1>
              </div>
            </div>
            <div class=" col-start-6 col-end-10 p-4 my-4 mr-auto">
              <Fade right>
                <p
                  style={{ fontWeight: 700, fontSize: 20 }}
                  class="text-xl mb-1 text-black"
                >
                  Attending Bachelor's Degree in Informatics Engineering
                </p>
                <p class="mb-1">University Coimbra, FCTUC</p>
              </Fade>
              <img
                src={uni}
                style={{
                  width: 250,
                  height: 200,
                  position: "inherit",
                  borderRadius: 15,
                  marginTop: 10,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Jello>
        <h3 className="text-8xl font-bold text-center  pl-1">Experience</h3>
      </Jello>
      <div class="flex items-center justify-center pb-56">
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-black">
          <div class="flex flex-row-reverse md:contents">
            <div class=" col-start-1 col-end-5 p-4 my-4 ml-auto animate-fade-in-right">
              <Fade left>
                <p
                  style={{ fontWeight: 700, fontSize: 20 }}
                  class="text-xl font-bold"
                >
                  Participated in BotOlympics
                </p>
                <h3 class="mb-1">
                  BotOlympics is a hardware/programming competition,where each
                  team has a robot running Arduino. The goal was to extinguish
                  fire from a candle.
                </h3>
              </Fade>
              <img
                src={BotOlympics}
                style={{
                  width: 270,
                  height: 250,
                  position: "inherit",
                  borderRadius: 15,
                  marginTop: 10,
                }}
              />
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto">
              <div class="w-10 h-10 rounded-full bg-pink-500 mt-9">
                <h1 className="text-sm text-white pt-2.5 pl-1">2020</h1>
              </div>
              <div class="h-full flex items-center justify-center">
                <div class="h-full w-1 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="w-10 h-10 rounded-full bg-indigo-500 mt-9">
                <h1 className="text-sm text-white pt-2.5 pl-1">2022</h1>
              </div>
              <div class="h-full flex items-center justify-center">
                <div class="h-full w-1 bg-gradient-to-t from-pink-500 via-purple-500 to-indigo-500 pointer-events-none"></div>
              </div>
            </div>
            <div class=" col-start-6 col-end-10 p-4 my-4 mr-auto">
              <Fade right>
                <p
                  style={{ fontWeight: 700, fontSize: 20 }}
                  class="text-xl mb-1 text-black"
                >
                  Participated in EBEC
                </p>
                <p class="mb-1">
                  EBEC is an event organized by BEST Coimbra. It consists in
                  creating an idea and develop it in 24h. In this edition the
                  theme was “Kitchen and Ecology”. Our idea was converting used
                  oil into liquid soap, with a small machine.
                </p>
              </Fade>
              <img
                src={Ebec}
                style={{
                  width: 350,
                  height: 200,
                  position: "inherit",
                  borderRadius: 15,
                  marginTop: 10,
                }}
              />
            </div>
          </div>
          <div class="flex flex-row-reverse md:contents">
            <div class="col-start-1 col-end-5 p-4 my-4 ml-auto">
              <Fade left>
                <p
                  style={{ fontWeight: 700, fontSize: 20 }}
                  class="text-xl mb-1 text-black"
                >
                  Joined BEST
                </p>
                <p class="leading-tight text-justify text-black">
                  Applied to BEST, an internation organization of engineering
                  students, that organize events like EBEC. Eventually I was
                  accepted and currently located at CR, Corporate Relations
                  Department. I also worked on IT, Informatics and Technology
                  Department on a project called ExpoCareer,
                  <a
                    class="font-bold"
                    target="_blank"
                    href="https://best.deec.uc.pt/expocareer/"
                  >
                    {" "}
                    link{" "}
                  </a>
                </p>
              </Fade>
              <img
                src={Best}
                style={{
                  width: 200,
                  height: 200,
                  position: "inherit",
                  borderRadius: 15,
                  marginTop: 10,
                }}
              />
            </div>
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="w-10 h-10 rounded-full bg-pink-500 mt-9">
                <h1 className="text-sm text-white pt-2.5 pl-1">2021</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
